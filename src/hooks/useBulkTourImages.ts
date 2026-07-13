import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface TourImage {
  tour_name: string;
  image_url: string;
  image_type: string;
}

interface TourImageMap {
  [tourName: string]: string; // tour_name -> hero_image_url
}

export function useBulkTourImages(tourNames: string[]) {
  const [images, setImages] = useState<TourImageMap>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAllImages() {
      try {
        setLoading(true);
        console.log('🔍 Bulk fetching images for tours:', tourNames);

        // Single query to get all images for all tours
        const { data, error } = await supabase
          .from('tour_images')
          .select('tour_name,image_url,image_type')
          .in('tour_name', tourNames)
          .in('image_type', ['hero', 'card'])
          .order('id', { ascending: false });

        if (error) {
          throw error;
        }

        // Process the data to create a map of tour_name -> best_image_url
        const imageMap: TourImageMap = {};
        
        // Group by tour_name
        const groupedData: { [key: string]: TourImage[] } = {};
        data?.forEach((item) => {
          if (!groupedData[item.tour_name]) {
            groupedData[item.tour_name] = [];
          }
          groupedData[item.tour_name].push(item);
        });

        // For each tour, prioritize hero over card
        Object.entries(groupedData).forEach(([tourName, tourImages]) => {
          const hero = tourImages.find(img => img.image_type === 'hero');
          const card = tourImages.find(img => img.image_type === 'card');
          const chosen = hero?.image_url || card?.image_url || '';
          
          if (chosen) {
            imageMap[tourName] = chosen;
            console.log(`✅ Bulk loaded ${hero ? 'hero' : 'card'} for ${tourName}`);
          }
        });

        // Fallback for transport-service if no image found in DB
        if (tourNames.includes('transport-service') && !imageMap['transport-service']) {
          imageMap['transport-service'] = '/images/transport-1.webp';
        }

        setImages(imageMap);
        setError(null);
      } catch (err) {
        console.error('Error bulk fetching tour images:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    if (tourNames.length > 0) {
      fetchAllImages();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tourNames.join(',')]); // Use join to create a stable string primitive for dependency

  return { images, loading, error };
}
