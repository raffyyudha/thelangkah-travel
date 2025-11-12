"use client";

import Image from "next/image";
import Link from "next/link";

interface OptimizedPackageCardProps {
  title: string;
  href: string;
  price?: string;
  imageUrl?: string;
  priority?: boolean;
  lazy?: boolean;
  isLoading?: boolean;
}

export function OptimizedPackageCard({ 
  title, 
  href, 
  price, 
  imageUrl, 
  priority = false, 
  lazy = true,
  isLoading = false 
}: OptimizedPackageCardProps) {
  return (
    <Link href={href} className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
        <div className="relative w-full aspect-[16/9] bg-gray-100">
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
