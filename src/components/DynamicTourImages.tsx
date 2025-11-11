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
      // Hardcoded images for new tours
      if (tourName === "whale-shark-1day-labuhan-jambu") {
        setImages({
          hero: "/images/whale-shark-1day-labuhan-jambu.PNG",
          gallery1: "/images/whale-shark-1day-labuhan-jambu-1.PNG",
          gallery2: "/images/whale-shark-1day-labuhan-jambu-2.PNG",
          gallery3: "/images/whale-shark-1day-labuhan-jambu-3.PNG"
        });
        setLoading(false);
        return;
      }
      if (tourName === "whale-shark-speedboat") {
        setImages({
          hero: "/images/whale-shark-speedboat-hero.jpg",
          gallery1: "/images/whale-shark-speedboat-1.jpg",
          gallery2: "/images/whale-shark-speedboat-2.jpg",
          gallery3: "/images/whale-shark-speedboat-3.JPG"
        });
        setLoading(false);
        return;
      }
      if (tourName === "whale-shark-2d1n-poto-tano") {
        setImages({
          hero: "/images/whale-shark-2d1n-poto-tano-3.JPG",
          gallery1: "/images/whale-shark-2d1n-poto-tano-1.PNG",
          gallery2: "/images/whale-shark-2d1n-poto-tano-2.PNG",
          gallery3: "/images/whale-shark-2d1n-poto-tano-3.JPG"
        });
        setLoading(false);
        return;
      }
      if (tourName === "whale-shark-2d1n-sekongkang") {
        setImages({
          hero: "/images/whale-shark-2d1n-sekongkang.PNG",
          gallery1: "/images/whale-shark-2d1n-sekongkang-1.PNG",
          gallery2: "/images/whale-shark-2d1n-sekongkang-2.PNG",
          gallery3: "/images/whale-shark-2d1n-sekongkang-3.PNG"
        });
        setLoading(false);
        return;
      }
      if (tourName === "whale-shark-moyo-kenawa-lombok") {
        setImages({
          hero: "/images/whale-shark-moyo-kenawa-lombok.PNG",
          gallery1: "/images/whale-shark-moyo-kenawa-lombok-1.PNG",
          gallery2: "/images/whale-shark-moyo-kenawa-lombok-2.PNG",
          gallery3: "/images/whale-shark-moyo-kenawa-lombok-3.PNG"
        });
        setLoading(false);
        return;
      }
      if (tourName === "trip-4d3n-sumbawa") {
        setImages({
          hero: "/images/whale-shark-moyo-kenawa-lombok-hero.PNG",
          gallery1: "/images/whale-shark-moyo-kenawa-lombok-hero.PNG",
          gallery2: "/images/whale-shark-moyo-kenawa-lombok-1.PNG",
          gallery3: "/images/whale-shark-moyo-kenawa-lombok-2.PNG"
        });
        setLoading(false);
        return;
      }
      
      try {
        const { data, error } = await supabase
          .from('tour_images')
          .select('*')
          .eq('tour_name', tourName);

        if (error) throw error;

        if (data && data.length > 0) {
          const imageMap = {
            hero: "",
            gallery1: "",
            gallery2: "",
            gallery3: ""
          };

          data.forEach((img: TourImage) => {
            const imgType = img.image_type as keyof typeof imageMap;
            if (imgType in imageMap) {
              imageMap[imgType] = img.image_url;
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
