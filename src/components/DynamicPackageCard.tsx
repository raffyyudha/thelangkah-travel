"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

interface DynamicPackageCardProps {
  tourName: string;
  title: string;
  href: string;
}

export function DynamicPackageCard({ tourName, title, href }: DynamicPackageCardProps) {
  const [heroImage, setHeroImage] = useState<string>("/images/hero.jpg"); // fallback

  useEffect(() => {
    fetchHeroImage();
  }, [tourName]);

  const fetchHeroImage = async () => {
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
  };

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
