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
  const [heroImage, setHeroImage] = useState<string>("");

  const fetchHeroImage = useCallback(async () => {
    try {
      console.log(`🔍 Fetching homepage image for: ${tourName}`);
      
      // Try to get the latest card image; if not available, fallback to latest hero
      const { data, error } = await supabase
        .from("tour_images")
        .select("image_url,image_type")
        .eq("tour_name", tourName)
        .in("image_type", ["card", "hero"])
        .order("id", { ascending: false });

      if (!error && data && data.length > 0) {
        const card = data.find((d: any) => d.image_type === "card");
        const hero = data.find((d: any) => d.image_type === "hero");
        const chosen = card?.image_url || hero?.image_url || "";
        if (chosen) {
          console.log(`✅ Using ${(card ? "card" : "hero")} for ${tourName}: ${chosen}`);
          setHeroImage(chosen);
          return;
        }
      }

      console.log(`❌ No image found for ${tourName}`);
      setHeroImage("");
    } catch (error) {
      console.error(`Error fetching homepage image for ${tourName}:`, error);
      setHeroImage("");
    }
  }, [tourName]);

  useEffect(() => {
    fetchHeroImage();
  }, [fetchHeroImage]);

  return (
    <Link href={href} className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
        <div className="relative w-full aspect-[16/9] bg-gray-100">
          {heroImage ? (
            <Image
              src={heroImage}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              unoptimized={heroImage.startsWith('http')}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-400 text-sm">No image</p>
            </div>
          )}
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
