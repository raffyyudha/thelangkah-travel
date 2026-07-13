"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import BookingModal from "@/components/BookingModal";

interface DynamicPackageCardProps {
  tourName: string;
  title: string;
  href: string;
  price?: string;
  priority?: boolean; // For above-the-fold images
  lazy?: boolean; // For lazy loading
}

interface TourImage {
  image_url: string;
  image_type: string;
}

export function DynamicPackageCard({ tourName, title, href, price, priority = false, lazy = true }: DynamicPackageCardProps) {
  const [heroImage, setHeroImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const fetchHeroImage = useCallback(async () => {
    try {
      console.log(`🔍 Fetching homepage image for: ${tourName}`);
      
      // Try to get the hero image first; if not available, fallback to card image
      const { data, error } = await supabase
        .from("tour_images")
        .select("image_url,image_type")
        .eq("tour_name", tourName)
        .in("image_type", ["card", "hero"])
        .order("id", { ascending: false });

      if (!error && data && data.length > 0) {
        const hero = data.find((d: TourImage) => d.image_type === "hero");
        const card = data.find((d: TourImage) => d.image_type === "card");
        const chosen = hero?.image_url || card?.image_url || "";
        if (chosen) {
          console.log(`✅ Using ${(hero ? "hero" : "card")} for ${tourName}: ${chosen}`);
          setHeroImage(chosen);
          setIsLoading(false);
          return;
        }
      }

      console.log(`❌ No image found for ${tourName}`);
      setHeroImage("");
      setIsLoading(false);
    } catch (error) {
      console.error(`Error fetching homepage image for ${tourName}:`, error);
      setHeroImage("");
      setIsLoading(false);
    }
  }, [tourName]);

  useEffect(() => {
    fetchHeroImage();
  }, [fetchHeroImage]);

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative w-full aspect-[16/9] bg-gray-100">
        {isLoading ? (
          // Loading skeleton
          <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        ) : heroImage ? (
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            unoptimized={heroImage.startsWith('http')}
            priority={priority}
            loading={lazy ? "lazy" : "eager"}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
        <div className="mt-4 space-y-2">
          <Link href={href} className="block">
            <span className="inline-flex w-9/12 sm:w-full items-center justify-center px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-black/20 transition-transform duration-200 hover:-translate-y-0.5">
              More details
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setIsBookingModalOpen(true)}
            className="inline-flex w-9/12 sm:w-full items-center justify-center px-4 py-1.5 rounded-full bg-[#00a6b5] hover:bg-[#008a97] text-white text-xs sm:text-sm font-semibold shadow-md shadow-black/20 transition-transform duration-200 hover:-translate-y-0.5"
          >
            PESAN SEKARANG
          </button>
        </div>
      </div>
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        tourName={title}
      />
    </div>
  );
}
