import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface RelatedTourImage {
  tour_name: string;
  image_url: string;
}

interface RelatedTourImageMap {
  [tourName: string]: string; // tour_name -> hero_image_url
}

export function useBulkRelatedTours(tourNames: string[]) {
  const [images, setImages] = useState<RelatedTourImageMap>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRelatedTourImages() {
      try {
        setLoading(true);
        console.log('🔍 Bulk fetching related tour images:', tourNames);

        // Single query to get all hero images for related tours
        const { data, error } = await supabase
          .from('tour_images')
          .select('tour_name,image_url')
          .in('tour_name', tourNames)
          .eq('image_type', 'hero')
          .order('id', { ascending: false });

        if (error) {
          throw error;
        }

        // Create a map of tour_name -> hero_image_url
        const imageMap: RelatedTourImageMap = {};
        
        // Group by tour_name and take the first (newest) hero image
        const processedTours = new Set<string>();
        data?.forEach((item) => {
          if (!processedTours.has(item.tour_name)) {
            imageMap[item.tour_name] = item.image_url;
            processedTours.add(item.tour_name);
            console.log(`✅ Bulk loaded hero for related tour: ${item.tour_name}`);
          }
        });

        // Set fallback for transport-service if no image found in DB
        if (tourNames.includes('transport-service') && !imageMap['transport-service']) {
             imageMap['transport-service'] = '/images/transport-1.webp';
        }

        setImages(imageMap);
        setError(null);
      } catch (err) {
        console.error('Error bulk fetching related tour images:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    if (tourNames.length > 0) {
      fetchRelatedTourImages();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tourNames.join(',')]); // Use join to create a stable string primitive for dependency

  return { images, loading, error };
}
