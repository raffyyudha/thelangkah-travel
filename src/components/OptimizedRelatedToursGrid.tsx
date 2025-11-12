"use client";

import { useBulkRelatedTours } from "@/hooks/useBulkRelatedTours";
import { OptimizedRelatedTour } from "./OptimizedRelatedTour";

interface RelatedTourConfig {
  tourName: string;
  title: string;
  href: string;
}

interface OptimizedRelatedToursGridProps {
  tours: RelatedTourConfig[];
  currentTourName?: string; // To exclude current tour from related tours
}

export function OptimizedRelatedToursGrid({ tours, currentTourName }: OptimizedRelatedToursGridProps) {
  // Filter out current tour from related tours
  const filteredTours = tours.filter(tour => tour.tourName !== currentTourName);
  const tourNames = filteredTours.map(tour => tour.tourName);
  const { images, loading, error } = useBulkRelatedTours(tourNames);

  if (error) {
    console.error('Error loading related tour images:', error);
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {filteredTours.map((tour) => (
        <OptimizedRelatedTour
          key={tour.tourName}
          tourName={tour.tourName}
          title={tour.title}
          href={tour.href}
          imageUrl={images[tour.tourName]}
          isLoading={loading}
          lazy={true}
        />
      ))}
    </div>
  );
}
