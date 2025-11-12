"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

interface TourImage {
  image_url: string;
  image_type: string;
}

interface OptimizedTourImagesProps {
  tourName: string;
}

export function OptimizedTourImages({ tourName }: OptimizedTourImagesProps) {
  const [images, setImages] = useState<{
    hero: string;
    gallery1: string;
    gallery2: string;
    gallery3: string;
  }>({
    hero: "",
    gallery1: "",
    gallery2: "",
    gallery3: ""
  });
  const [loading, setLoading] = useState(true);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    async function loadImages() {
      try {
        console.log(`🔍 Loading optimized images for tour: ${tourName}`);
        
        const { data, error } = await supabase
          .from('tour_images')
          .select('image_url,image_type')
          .eq('tour_name', tourName)
          .in('image_type', ['hero', 'gallery1', 'gallery2', 'gallery3'])
          .order('id', { ascending: false });

        const imageMap = {
          hero: "",
          gallery1: "",
          gallery2: "",
          gallery3: ""
        } as { [k in keyof typeof images]: string };

        if (!error && data && data.length > 0) {
          (data as TourImage[]).forEach((img) => {
            const imgType = img.image_type as keyof typeof imageMap;
            // Pick the newest entry per image_type (because ordered desc)
            if ((imgType in imageMap) && !imageMap[imgType]) {
              imageMap[imgType] = img.image_url;
            }
          });
        }

        setImages({
          hero: imageMap.hero,
          gallery1: imageMap.gallery1,
          gallery2: imageMap.gallery2,
          gallery3: imageMap.gallery3,
        });
        
        console.log(`✅ Loaded ${Object.values(imageMap).filter(Boolean).length} images for ${tourName}`);
      } catch (error) {
        console.error('Error loading tour images:', error);
        setImages({
          hero: "",
          gallery1: "",
          gallery2: "",
          gallery3: ""
        });
      } finally {
        setLoading(false);
      }
    }

    loadImages();
  }, [tourName]);

  if (loading) {
    return (
      <div className="space-y-8">
        {/* Hero skeleton */}
        <div className="relative w-full h-64 md:h-96 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-lg">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
        {/* Gallery skeleton */}
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="relative h-32 md:h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero/Featured Image - Priority Loading */}
      <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden bg-gray-200">
        {images.hero ? (
          <Image
            src={images.hero}
            alt="Tour Hero Image"
            fill
            className="object-cover transition-opacity duration-300"
            priority={true}
            loading="eager"
            unoptimized={images.hero.startsWith('http')}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            onLoad={() => setHeroLoaded(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-gray-400">No hero image uploaded</p>
          </div>
        )}
      </div>

      {/* Gallery - 3 small images with Lazy Loading */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {(['gallery1', 'gallery2', 'gallery3'] as const).map((galleryKey, index) => (
          <div key={galleryKey} className="relative h-32 md:h-48 rounded-lg overflow-hidden bg-gray-200">
            {images[galleryKey] ? (
              <Image
                src={images[galleryKey]}
                alt={`Gallery Image ${index + 1}`}
                fill
                className="object-cover transition-opacity duration-300"
                loading="lazy"
                unoptimized={images[galleryKey].startsWith('http')}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-400 text-sm">No image</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
