"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

interface DynamicPackageCardProps {
  tourName: string;
  title: string;
  href: string;
}

export function DynamicPackageCard({ tourName, title, href }: DynamicPackageCardProps) {
  // Hardcoded fallback for new tours
  const defaultImage = tourName === "whale-shark-1day-labuhan-jambu" 
    ? "/images/whale-shark-1day-labuhan-jambu-hero.PNG" 
    : tourName === "whale-shark-speedboat"
    ? "/images/whale-shark-speedboat-hero.jpg"
    : tourName === "whale-shark-2d1n-poto-tano"
    ? "/images/whale-shark-2d1n-poto-tano-hero.PNG"
    : tourName === "whale-shark-2d1n-sekongkang"
    ? "/images/whale-shark-2d1n-sekongkang-hero.PNG"
    : tourName === "whale-shark-moyo-kenawa-lombok"
    ? "/images/whale-shark-moyo-kenawa-lombok-hero.PNG"
    : "/images/hero.jpg";
  
  const [heroImage, setHeroImage] = useState<string>(defaultImage);

  const fetchHeroImage = useCallback(async () => {
    // Use hardcoded image for new tours
    if (tourName === "whale-shark-1day-labuhan-jambu") {
      setHeroImage("/images/whale-shark-1day-labuhan-jambu-hero.PNG");
      return;
    }
    if (tourName === "whale-shark-speedboat") {
      setHeroImage("/images/whale-shark-speedboat-hero.jpg");
      return;
    }
    if (tourName === "whale-shark-2d1n-poto-tano") {
      setHeroImage("/images/whale-shark-2d1n-poto-tano-hero.PNG");
      return;
    }
    if (tourName === "whale-shark-2d1n-sekongkang") {
      setHeroImage("/images/whale-shark-2d1n-sekongkang-hero.PNG");
      return;
    }
    if (tourName === "whale-shark-moyo-kenawa-lombok") {
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
          <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">{title}</h3>
        </div>
      </div>
    </Link>
  );
}
