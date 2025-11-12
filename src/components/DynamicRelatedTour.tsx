"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/contexts/LanguageContext";

interface DynamicRelatedTourProps {
  tourName: string;
  title: string;
  href: string;
}

export function DynamicRelatedTour({ tourName, title, href }: DynamicRelatedTourProps) {
  const { t } = useLanguage();
  
  // Map tourName to translation key
  const getTourTitle = () => {
    const titleMap: Record<string, string> = {
      "whale-shark-start-sumbawa": t.tourA,
      "whale-shark-1day-labuhan-jambu": t.tourB,
      "whale-shark-speedboat": t.tourC,
      "whale-shark-2d1n": t.tourD,
      "whale-shark-2d1n-poto-tano": t.tourE,
      "whale-shark-2d1n-sekongkang": t.tourF,
      "whale-shark-start-labuhan-jambu": t.tourG,
      "whale-shark-experience": t.tourH,
      "combo-moyo-whale-shark": t.tourI,
      "whale-shark-moyo-kenawa-lombok": t.tourJ,
      "trip-4d3n-sumbawa": t.tourK,
    };
    return titleMap[tourName] || title;
  };
  
  const displayTitle = getTourTitle();
  
  const [heroImage, setHeroImage] = useState<string>("");

  const fetchHeroImage = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from("tour_images")
        .select("image_url")
        .eq("tour_name", tourName)
        .eq("image_type", "hero")
        .maybeSingle();

      if (!error && data && data.image_url) {
        setHeroImage(data.image_url);
      } else {
        setHeroImage("");
      }
    } catch (error) {
      console.error("Error fetching hero image:", error);
      setHeroImage("");
    }
  }, [tourName]);

  useEffect(() => {
    fetchHeroImage();
  }, [fetchHeroImage]);

  return (
    <Link href={href} className="group">
      <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-44">
        {heroImage ? (
          <Image
            src={heroImage}
            alt={displayTitle}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            unoptimized={heroImage.startsWith('http')}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <p className="text-gray-400 text-sm">No image</p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
            {displayTitle}
          </h3>
        </div>
      </div>
    </Link>
  );
}
