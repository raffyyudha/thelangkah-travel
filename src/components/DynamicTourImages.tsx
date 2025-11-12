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
          .select('image_url,image_type')
          .eq('tour_name', tourName);

        const imageMap = {
          hero: "",
          gallery1: "",
          gallery2: "",
          gallery3: ""
        } as { [k in keyof typeof images]: string };

        if (!error && data && data.length > 0) {
          (data as TourImage[]).forEach((img) => {
            const imgType = img.image_type as keyof typeof imageMap;
            if (imgType in imageMap) {
              imageMap[imgType] = img.image_url;
            }
          });
        }

        // NO FALLBACK - hanya dari database
        setImages({
          hero: imageMap.hero,
          gallery1: imageMap.gallery1,
          gallery2: imageMap.gallery2,
          gallery3: imageMap.gallery3,
        });
      } catch (error) {
        console.error('Error loading images:', error);
        // Set empty jika error
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
      <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden bg-gray-200">
        {images.hero ? (
          <Image
            src={images.hero}
            alt="Tour Hero Image"
            fill
            className="object-cover"
            priority
            unoptimized={images.hero.startsWith('http')}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-gray-400">No hero image uploaded</p>
          </div>
        )}
      </div>

      {/* Gallery - 3 small images */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="relative h-32 md:h-48 rounded-lg overflow-hidden bg-gray-200">
          {images.gallery1 ? (
            <Image
              src={images.gallery1}
              alt="Gallery Image 1"
              fill
              className="object-cover"
              unoptimized={images.gallery1.startsWith('http')}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-400 text-sm">No image</p>
            </div>
          )}
        </div>
        <div className="relative h-32 md:h-48 rounded-lg overflow-hidden bg-gray-200">
          {images.gallery2 ? (
            <Image
              src={images.gallery2}
              alt="Gallery Image 2"
              fill
              className="object-cover"
              unoptimized={images.gallery2.startsWith('http')}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-400 text-sm">No image</p>
            </div>
          )}
        </div>
        <div className="relative h-32 md:h-48 rounded-lg overflow-hidden bg-gray-200">
          {images.gallery3 ? (
            <Image
              src={images.gallery3}
              alt="Gallery Image 3"
              fill
              className="object-cover"
              unoptimized={images.gallery3.startsWith('http')}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-400 text-sm">No image</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
