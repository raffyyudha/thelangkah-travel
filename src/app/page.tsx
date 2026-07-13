"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// Script removed to prevent auto-injection issues
import { useLanguage } from "@/contexts/LanguageContext";
import { DynamicHomepageHero } from "@/components/DynamicHomepageHero";
import { DynamicPackageCard } from "@/components/DynamicPackageCard";
import { OptimizedTourGrid } from "@/components/OptimizedTourGrid";
import { Footer } from "@/components/Footer";
import TestimonialSlider from "@/components/TestimonialSlider";
import BookingModal from "@/components/BookingModal";

function PackageCard({ image, title, href }: { image: string; title: string; href: string }) {
  return (
    <Link href={href} className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
        <div className="relative h-40 sm:h-40 bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-3 text-center">
          <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">{title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  const { t } = useLanguage();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedTourName, setSelectedTourName] = useState<string | undefined>(undefined);

  // Manually inject Trustindex script to ensure it renders in the correct container


  // Tour configuration for optimized loading
  const tourConfigs = [
    // B
    {
      key: "whale-shark-1day-labuhan-jambu-v2",
      tourName: "whale-shark-1day-labuhan-jambu",
      title: t.tourB,
      href: "/whale-shark-1day-labuhan-jambu",
      price: t.tourBPriceFrom,
      priority: true
    },
    // D
    {
      key: "whale-shark-2d1n-v2",
      tourName: "whale-shark-2d1n",
      title: t.tourD,
      href: "/whale-shark-2d1n",
      price: t.tourDPriceFrom,
      priority: true,
      isBestSeller: true
    },
    // I
    {
      key: "combo-moyo-whale-shark-v2",
      tourName: "combo-moyo-whale-shark",
      title: t.tourI,
      href: "/combo-moyo-whale-shark",
      price: t.tourIPriceFrom,
      priority: false,
      isBestSeller: true
    },
    // K
    {
      key: "trip-4d3n-sumbawa-v2",
      tourName: "trip-4d3n-sumbawa",
      title: t.tourK,
      href: "/trip-4d3n-sumbawa",
      price: t.tourKPriceFrom,
      priority: false
    },
    // C (speedboat) moved to bottom
    {
      key: "whale-shark-speedboat-v2",
      tourName: "whale-shark-speedboat",
      title: t.tourC,
      href: "/whale-shark-speedboat",
      price: t.tourCPriceFrom,
      priority: true
    },
    // Transport Service (no price, contact for details)
    {
      key: "transport-service",
      tourName: "transport-service",
      title: t.transportServiceTitle,
      href: "/transport-service",
      price: t.transportServicePrice,
      priority: false
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section - Exact copy dari The Langkah Travel */}
      <section className="relative h-[520px] md:h-[700px] flex flex-col justify-start">
        <DynamicHomepageHero />

        {/* Dark overlay gradient for water area - desktop only */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% via-black/20 via-50% to-transparent md:via-black/40 md:to-black/70 z-5"></div>

        {/* Hero Content - Title and Text Box */}
        <div className="container mx-auto px-6 relative z-10 max-w-3xl h-full flex flex-col justify-center items-center md:block md:h-auto md:pt-48">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center md:text-left text-white leading-tight drop-shadow-lg mb-4 md:mb-8">
            {t.heroTitle}
          </h1>

          {/* Welcome Text Box - Right below title */}
          <div className="max-w-3xl">
            {/* Mobile: plain text without background box */}
            <p className="text-base sm:text-lg text-white leading-relaxed text-center md:hidden">
              {t.heroDesc}
            </p>

            {/* Desktop: keep glassmorphism text box */}
            <div className="hidden md:block">
              <div className="rounded-2xl p-6 bg-gradient-to-b from-white/35 to-white/15 backdrop-blur-lg ring-1 ring-white/50 shadow-xl">
                <p className="text-base md:text-lg text-white leading-relaxed">
                  {t.heroDesc}
                </p>
              </div>
            </div>

            {/* Hero CTA Button */}
            <div className="mt-10 md:mt-12 flex flex-col gap-3 justify-center items-center md:items-start md:justify-start">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-white text-white font-semibold text-sm sm:text-base uppercase tracking-wide bg-transparent hover:bg-white/10 shadow-lg shadow-black/20 transition-transform duration-200 hover:-translate-y-0.5"
              >
                {t.about}
              </Link>
              <button
                type="button"
                onClick={() => {
                  setSelectedTourName(undefined);
                  setIsBookingModalOpen(true);
                }}
                className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-[#00a6b5] hover:bg-[#008a97] text-white font-semibold text-sm sm:text-base uppercase tracking-wide shadow-lg shadow-black/30 transition-transform duration-200 hover:-translate-y-0.5"
              >
                {t.heroCTAButton}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.whyChooseTitle}
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-[#00a6b5]">
              {t.whyChooseSubtitle}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {/* Feature 1: Local Operator */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-32 h-32 md:w-36 md:h-36 mb-6 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/images/icons/building.webp"
                  alt="Operator Lokal"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {t.whyLocalOperatorTitle}
              </h3>
              <p className="text-gray-700 leading-relaxed max-w-sm">
                {t.whyLocalOperatorDesc}
              </p>
            </div>

            {/* Feature 2: Experienced Guides */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-32 h-32 md:w-36 md:h-36 mb-6 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/images/icons/people.webp"
                  alt="Pemandu Berpengalaman"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {t.whyExperiencedGuidesTitle}
              </h3>
              <p className="text-gray-700 leading-relaxed max-w-sm">
                {t.whyExperiencedGuidesDesc}
              </p>
            </div>

            {/* Feature 3: Free Documentation */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-32 h-32 md:w-36 md:h-36 mb-6 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/images/icons/camera.webp"
                  alt="Dokumentasi Gratis"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {t.whyFreeDocumentationTitle}
              </h3>
              <p className="text-gray-700 leading-relaxed max-w-sm">
                {t.whyFreeDocumentationDesc}
              </p>
            </div>

            {/* Feature 4: Safety First */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-32 h-32 md:w-36 md:h-36 mb-6 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/images/icons/lifejacket.webp"
                  alt="Keamanan Prioritas"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {t.whySafetyPriorityTitle}
              </h3>
              <p className="text-gray-700 leading-relaxed max-w-sm">
                {t.whySafetyPriorityDesc}
              </p>
            </div>

            {/* Feature 5: Transparent Pricing */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-40 h-40 md:w-44 md:h-44 mb-6 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/images/icons/money.webp"
                  alt="Harga Transparan"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {t.whyTransparentPricingTitle}
              </h3>
              <p className="text-gray-700 leading-relaxed max-w-sm">
                {t.whyTransparentPricingDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Packages Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Pilihan Paket Wisata - Exact layout dari The Langkah Travel */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {t.popularPackages}
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              {t.popularDesc}
            </p>
          </div>

          <OptimizedTourGrid tours={tourConfigs} />
        </div>
      </section>


      {/* Google Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <TestimonialSlider />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            {t.faqSectionTitle}
          </h3>

          <div className="space-y-4">
            {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
              <details key={num} className="group bg-white rounded-lg shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                  <span className="text-lg font-medium text-gray-900">
                    {t[`faqQ${num}` as keyof typeof t]}
                  </span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                  <p className="whitespace-pre-line">{t[`faqA${num}` as keyof typeof t]}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        tourName={selectedTourName}
      />

      <Footer />
    </main>
  );
}
