"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

interface OptimizedRelatedTourProps {
  tourName: string;
  title: string;
  href: string;
  imageUrl?: string;
  isLoading?: boolean;
  lazy?: boolean;
}

export function OptimizedRelatedTour({ 
  tourName, 
  title, 
  href, 
  imageUrl, 
  isLoading = false,
  lazy = true 
}: OptimizedRelatedTourProps) {
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

  return (
    <Link href={href} className="group">
      <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-44">
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
            alt={displayTitle}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            unoptimized={imageUrl.startsWith('http')}
            loading={lazy ? "lazy" : "eager"}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
