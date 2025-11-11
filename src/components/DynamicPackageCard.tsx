"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

interface DynamicPackageCardProps {
  tourName: string;
  title: string;
  href: string;
  price?: string;
}

export function DynamicPackageCard({ tourName, title, href, price }: DynamicPackageCardProps) {
  // Hardcoded fallback for new tours - using thumbnails
  const defaultImage = tourName === "whale-shark-1day-labuhan-jambu" 
    ? "/images/whale-shark-1day-labuhan-jambu.PNG" 
    : tourName === "whale-shark-speedboat"
    ? "/images/whale-shark-speedboat-3.JPG"
    : tourName === "whale-shark-2d1n-poto-tano"
    ? "/images/whale-shark-2d1n-poto-tano.PNG"
    : tourName === "whale-shark-2d1n-sekongkang"
    ? "/images/whale-shark-2d1n-sekongkang.PNG"
    : tourName === "whale-shark-moyo-kenawa-lombok"
    ? "/images/whale-shark-moyo-kenawa-lombok.PNG"
    : tourName === "trip-4d3n-sumbawa"
    ? "/images/whale-shark-moyo-kenawa-lombok-hero.PNG"
    : "/images/hero.jpg";
  
  const [heroImage, setHeroImage] = useState<string>(defaultImage);

  const fetchHeroImage = useCallback(async () => {
    // Use hardcoded thumbnail for new tours
    if (tourName === "whale-shark-1day-labuhan-jambu") {
      setHeroImage("/images/whale-shark-1day-labuhan-jambu.PNG");
      return;
    }
    if (tourName === "whale-shark-speedboat") {
      setHeroImage("/images/whale-shark-speedboat-3.JPG");
      return;
    }
    if (tourName === "whale-shark-2d1n-poto-tano") {
      setHeroImage("/images/whale-shark-2d1n-poto-tano.PNG");
      return;
    }
    if (tourName === "whale-shark-2d1n-sekongkang") {
      setHeroImage("/images/whale-shark-2d1n-sekongkang.PNG");
      return;
    }
    if (tourName === "whale-shark-moyo-kenawa-lombok") {
      setHeroImage("/images/whale-shark-moyo-kenawa-lombok.PNG");
      return;
    }
    if (tourName === "trip-4d3n-sumbawa") {
      setHeroImage("/images/whale-shark-moyo-kenawa-lombok-hero.PNG");
      return;
    }
    
    try {
      const { data, error } = await supabase
        .from("tour_images")
        .select("*")
        .eq("tour_name", tourName)
        .eq("image_type", "hero")
        .single();

      if (error) {
        console.error("Error fetching hero image:", error);
        return;
      }

      if (data && data.image_url) {
        setHeroImage(data.image_url);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }, [tourName]);

  useEffect(() => {
    fetchHeroImage();
  }, [fetchHeroImage]);

  return (
    <Link href={href} className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
        <div className="relative w-full aspect-[16/9] bg-gray-100">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-3 text-center">
          <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight whitespace-pre-line">{title}</h3>
          {price && (
            <p className="text-xs text-gray-600 mt-2">{price}</p>
          )}
          <div className="inline-block mt-3">
            <p className="text-sm font-bold text-orange-500 bg-orange-50 px-4 py-1.5 rounded">More details</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
