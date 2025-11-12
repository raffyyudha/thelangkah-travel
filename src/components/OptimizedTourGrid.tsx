"use client";

import { useBulkTourImages } from "@/hooks/useBulkTourImages";
import { OptimizedPackageCard } from "./OptimizedPackageCard";

interface TourConfig {
  key: string;
  tourName: string;
  title: string;
  href: string;
  price?: string;
  priority?: boolean;
}

interface OptimizedTourGridProps {
  tours: TourConfig[];
}

export function OptimizedTourGrid({ tours }: OptimizedTourGridProps) {
  const tourNames = tours.map(tour => tour.tourName);
  const { images, loading, error } = useBulkTourImages(tourNames);

  if (error) {
    console.error('Error loading tour images:', error);
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
      {tours.map((tour) => (
        <OptimizedPackageCard
          key={tour.key}
          title={tour.title}
          href={tour.href}
          price={tour.price}
          imageUrl={images[tour.tourName]}
          priority={tour.priority}
          lazy={!tour.priority}
          isLoading={loading}
        />
      ))}
    </div>
  );
}
