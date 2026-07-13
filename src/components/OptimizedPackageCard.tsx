"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BookingModal from "@/components/BookingModal";
import { useLanguage } from "@/contexts/LanguageContext";

interface OptimizedPackageCardProps {
  title: string;
  href: string;
  price?: string;
  imageUrl?: string;
  priority?: boolean;
  lazy?: boolean;
  isLoading?: boolean;
  isBestSeller?: boolean;
}

export function OptimizedPackageCard({ 
  title, 
  href, 
  price, 
  imageUrl, 
  priority = false, 
  lazy = true,
  isLoading = false,
  isBestSeller = false
}: OptimizedPackageCardProps) {
  const { t } = useLanguage();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 relative">
      <Link href={href} className="block">
        <div className="relative w-full aspect-[16/9] bg-gray-100">
          {isBestSeller && (
            <div className="absolute top-3 right-3 z-20">
              <div className="bg-gradient-to-r from-slate-200 via-slate-100 to-slate-300 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-slate-300">
                BEST SELLER
              </div>
            </div>
          )}
          {isLoading ? (
            // Loading skeleton
            <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
          ) : imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              unoptimized={imageUrl.startsWith('http')}
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
      </Link>
      <div className="p-3 text-center">
        <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight whitespace-pre-line">{title}</h3>
        {price && (
          <p className="text-xs text-gray-600 mt-2">{price}</p>
        )}
        <div className="mt-4 space-y-2">
          <Link href={href} className="block">
            <span className="inline-flex w-9/12 sm:w-full items-center justify-center px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-black/20 transition-transform duration-200 hover:-translate-y-0.5">
              {t.moreDetails}
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setIsBookingModalOpen(true)}
            className="inline-flex w-9/12 sm:w-full items-center justify-center px-4 py-1.5 rounded-full bg-[#00a6b5] hover:bg-[#008a97] text-white text-xs sm:text-sm font-semibold shadow-md shadow-black/20 transition-transform duration-200 hover:-translate-y-0.5"
          >
            {t.bookNow}
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
