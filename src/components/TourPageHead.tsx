"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface TourPageHeadProps {
  tourName: string;
  title: string;
  description: string;
}

export function TourPageHead({ tourName, title, description }: TourPageHeadProps) {
  const [heroImage, setHeroImage] = useState<string>("");

  useEffect(() => {
    async function fetchHeroImage() {
      try {
        const { data, error } = await supabase
          .from('tour_images')
          .select('image_url')
          .eq('tour_name', tourName)
          .eq('image_type', 'hero')
          .order('id', { ascending: false })
          .limit(1)
          .maybeSingle();

        if (!error && data?.image_url) {
          setHeroImage(data.image_url);
        }
      } catch (error) {
        console.error('Error fetching hero image for preload:', error);
      }
    }

    fetchHeroImage();
  }, [tourName]);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Preload hero image for faster loading */}
      {heroImage && (
        <link rel="preload" as="image" href={heroImage} />
      )}
      
      {/* Open Graph meta tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {heroImage && <meta property="og:image" content={heroImage} />}
      <meta property="og:type" content="website" />
      
      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {heroImage && <meta name="twitter:image" content={heroImage} />}
    </Head>
  );
}
