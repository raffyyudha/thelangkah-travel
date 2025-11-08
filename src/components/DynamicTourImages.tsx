"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

interface TourImage {
  image_url: string;
  image_type: string;
}

interface DynamicTourImagesProps {
  tourName: string;
}

export function DynamicTourImages({ tourName }: DynamicTourImagesProps) {
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

  useEffect(() => {
    async function loadImages() {
      try {
        const { data, error } = await supabase
          .from('tour_images')
          .select('*')
          .eq('tour_name', tourName);

        if (error) throw error;

        if (data && data.length > 0) {
          const imageMap: any = {
            hero: "",
            gallery1: "",
            gallery2: "",
            gallery3: ""
          };

          data.forEach((img: TourImage) => {
            if (img.image_type in imageMap) {
              imageMap[img.image_type] = img.image_url;
            }
          });

          setImages(imageMap);
        }
      } catch (error) {
        console.error('Error loading images:', error);
      } finally {
        setLoading(false);
      }
    }

    loadImages();
  }, [tourName]);

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="relative w-full h-64 md:h-96 bg-gray-200 animate-pulse rounded-lg" />
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="relative h-32 md:h-48 bg-gray-200 animate-pulse rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero/Featured Image */}
      {images.hero && (
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={images.hero}
            alt="Tour Hero Image"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Gallery - 3 small images */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {images.gallery1 && (
          <div className="relative h-32 md:h-48 rounded-lg overflow-hidden">
            <Image
              src={images.gallery1}
              alt="Gallery Image 1"
              fill
              className="object-cover"
            />
          </div>
        )}
        {images.gallery2 && (
          <div className="relative h-32 md:h-48 rounded-lg overflow-hidden">
            <Image
              src={images.gallery2}
              alt="Gallery Image 2"
              fill
              className="object-cover"
            />
          </div>
        )}
        {images.gallery3 && (
          <div className="relative h-32 md:h-48 rounded-lg overflow-hidden">
            <Image
              src={images.gallery3}
              alt="Gallery Image 3"
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
    </>
  );
}
