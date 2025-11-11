"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { DynamicHomepageHero } from "@/components/DynamicHomepageHero";
import { DynamicPackageCard } from "@/components/DynamicPackageCard";

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
          <div className="text-center flex flex-col items-center justify-center min-h-[100px] md:min-h-[150px] py-8 md:py-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {t.heroTitle}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              {t.welcomeDesc}
            </p>
          </div>

          {/* Pilihan Paket Wisata - Exact layout dari The Langkah Travel */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
              {t.popularPackages}
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
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

      {/* Footer - The Langkah Travel Exact Style */}
      <footer className="bg-[#0a3d52] text-white py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Logo, Description, Reviews */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/logo.png"
                    alt="Adventure Sumbawa Island"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover scale-150"
                    style={{ 
                      filter: 'brightness(0.7) saturate(1.2)',
                      objectPosition: 'center 45%'
                    }}
                  />
                </div>
                <span className="text-xl font-bold uppercase">Adventure Sumbawa Island</span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                {t.footerDesc}
              </p>

              {/* Review Badges */}
              <div className="space-y-4">
                <div className="border-2 border-white rounded-lg p-4 inline-block">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold">EXCELLENT</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">150+ {t.footerReviews}</span>
                    <span className="ml-2 text-gray-300">Google</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">Hubungi Kami</h3>

              <div className="space-y-4">
                {/* WhatsApp */}
                <a href="https://wa.me/6282341331975" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">WhatsApp</p>
                    <p className="text-sm">+62 823-4133-1975</p>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:adventursumbawisland@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Email</p>
                    <p className="text-sm">adventursumbawisland@gmail.com</p>
                  </div>
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/adventure_sumbawaisland/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Instagram</p>
                    <p className="text-sm">@adventure_sumbawaisland</p>
                    <p className="text-xs text-gray-400">@go_whaleshark.sumbawa</p>
                  </div>
                </a>

                {/* TikTok */}
                <a href="https://www.tiktok.com/@adventuresumbawaisland" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">TikTok</p>
                    <p className="text-sm">@adventuresumbawaisland</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
