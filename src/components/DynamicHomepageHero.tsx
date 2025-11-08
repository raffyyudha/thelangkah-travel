"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

interface HomepageImage {
  id: string;
  image_url: string;
  section: string;
}

export function DynamicHomepageHero() {
  const [heroImage, setHeroImage] = useState<string>("/images/hero.jpg"); // default fallback

  useEffect(() => {
    fetchHeroImage();
  }, []);

  const fetchHeroImage = async () => {
    try {
      const { data, error } = await supabase
        .from("homepage_images")
        .select("*")
        .eq("section", "hero")
        .maybeSingle();

      if (error) {
        console.log("No hero image in database yet, using fallback");
        return;
      }

      if (data && data.image_url) {
        setHeroImage(data.image_url);
      }
    } catch (error) {
      console.log("Error fetching hero image, using fallback");
    }
  };

  return (
    <div className="absolute inset-0 z-0">
      <Image
        src={heroImage}
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
