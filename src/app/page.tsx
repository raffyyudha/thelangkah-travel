"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { DynamicHomepageHero } from "@/components/DynamicHomepageHero";
import { DynamicPackageCard } from "@/components/DynamicPackageCard";
import { Footer } from "@/components/Footer";

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
  
  return (
    <main className="min-h-screen">
      {/* Hero Section - Exact copy dari The Langkah Travel */}
      <section className="relative h-[600px] md:h-[700px] flex flex-col justify-start">
        <DynamicHomepageHero />
        
        {/* Dark overlay gradient for water area - desktop only */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% via-black/20 via-50% to-transparent md:via-black/40 md:to-black/70 z-5"></div>
        
        {/* Hero Content - Title and Text Box */}
        <div className="container mx-auto px-6 pt-28 md:pt-48 relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg mb-4 md:mb-8">
            {t.heroTitle}
          </h1>
          
          {/* Welcome Text Box - Right below title */}
          <div className="max-w-3xl">
            <div className="rounded-2xl p-5 md:p-6 bg-gradient-to-b from-white/35 to-white/15 backdrop-blur-lg ring-1 ring-white/50 shadow-xl">
              <p className="text-sm md:text-base text-white leading-relaxed">
                {t.heroDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome & Popular Packages Section */}
      <section className="bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Welcome Section */}
          <div className="py-8 md:py-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">
              {t.welcomeTitle}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl text-center">
              {t.welcomeDesc}
            </p>
          </div>

          {/* Pilihan Paket Wisata - Exact layout dari The Langkah Travel */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
              {t.popularPackages}
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-3xl mx-auto">
              {t.popularDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
            <DynamicPackageCard
              tourName="whale-shark-start-sumbawa"
              title={t.tourA}
              href="/whale-shark-start-sumbawa"
              price={t.tourAPriceFrom}
            />
            <DynamicPackageCard
              tourName="whale-shark-1day-labuhan-jambu"
              title={t.tourB}
              href="/whale-shark-1day-labuhan-jambu"
              price={t.tourBPriceFrom}
            />
            <DynamicPackageCard
              tourName="whale-shark-speedboat"
              title={t.tourC}
              href="/whale-shark-speedboat"
              price={t.tourCPriceFrom}
            />
            <DynamicPackageCard
              tourName="whale-shark-2d1n"
              title={t.tourD}
              href="/whale-shark-2d1n"
              price={t.tourDPriceFrom}
            />
            <DynamicPackageCard
              tourName="whale-shark-2d1n-poto-tano"
              title={t.tourE}
              href="/whale-shark-2d1n-poto-tano"
              price={t.tourEPriceFrom}
            />
            <DynamicPackageCard
              tourName="whale-shark-2d1n-sekongkang"
              title={t.tourF}
              href="/whale-shark-2d1n-sekongkang"
              price={t.tourFPriceFrom}
            />
            <DynamicPackageCard
              tourName="whale-shark-start-labuhan-jambu"
              title={t.tourG}
              href="/whale-shark-start-labuhan-jambu"
              price={t.tourGPriceFrom}
            />
            <DynamicPackageCard
              tourName="whale-shark-experience"
              title={t.tourH}
              href="/whale-shark-experience"
              price={t.tourHPriceFrom}
            />
            <DynamicPackageCard
              tourName="combo-moyo-whale-shark"
              title={t.tourI}
              href="/combo-moyo-whale-shark"
              price={t.tourIPriceFrom}
            />
            <DynamicPackageCard
              tourName="whale-shark-moyo-kenawa-lombok"
              title={t.tourJ}
              href="/whale-shark-moyo-kenawa-lombok"
              price={t.tourJPriceFrom}
            />
            <DynamicPackageCard
              tourName="trip-4d3n-sumbawa"
              title={t.tourK}
              href="/trip-4d3n-sumbawa"
              price={t.tourKPriceFrom}
            />
          </div>
        </div>
      </section>

      {/* Why Travel With Us Section - InsideAsiaTours Style */}
      <section className="py-8 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            {t.whyTravelTitle}
          </h2>
          
          <div className="space-y-12">
            {/* Reason 1 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{t.localExpertise}</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {t.localExpertiseDesc}
                </p>
              </div>
            </div>

            {/* Reason 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-400 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{t.supportedWay}</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {t.supportedWayDesc}
                </p>
              </div>
            </div>

            {/* Reason 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{t.safetyFirst}</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {t.safetyFirstDesc}
                </p>
              </div>
            </div>

            {/* Reason 4 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-400 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{t.responsibleTravel}</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {t.responsibleTravelDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Bali.com Style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            {t.faqTitle}
          </h2>
          <p className="text-gray-700 text-base mb-10 leading-relaxed">
            {t.faqSubtitle}
          </p>

          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            {t.faqSectionTitle}
          </h3>

          <div className="space-y-4">
            <details className="group bg-white rounded-lg shadow-sm">
              <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                <span className="text-lg font-medium text-gray-900">{t.faqVisa}</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                <p>{t.faqVisaAnswer}</p>
              </div>
            </details>

            <details className="group bg-white rounded-lg shadow-sm">
              <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                <span className="text-lg font-medium text-gray-900">{t.faqRequirements}</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                <p>{t.faqRequirementsAnswer}</p>
              </div>
            </details>

            <details className="group bg-white rounded-lg shadow-sm">
              <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                <span className="text-lg font-medium text-gray-900">{t.faqBestTime}</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                <p>{t.faqBestTimeAnswer}</p>
              </div>
            </details>

            <details className="group bg-white rounded-lg shadow-sm">
              <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                <span className="text-lg font-medium text-gray-900">{t.faqHowToGet}</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                <p className="whitespace-pre-line">{t.faqHowToGetAnswer}</p>
              </div>
            </details>

            <details className="group bg-white rounded-lg shadow-sm">
              <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                <span className="text-lg font-medium text-gray-900">{t.faqWhatToBring}</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                <p>{t.faqWhatToBringAnswer}</p>
              </div>
            </details>

            <details className="group bg-white rounded-lg shadow-sm">
              <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                <span className="text-lg font-medium text-gray-900">{t.faqSafety}</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                <p>{t.faqSafetyAnswer}</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
