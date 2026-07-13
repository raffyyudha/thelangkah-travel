"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Clock, Users, MapPin, Anchor } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Footer } from "@/components/Footer";

export default function SumbawaIslandHoppingPage() {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/kenawa/hero.jpg"
            alt="Sumbawa Island Hopping"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            {t.islandHoppingTitle}
          </h1>
          <p className="text-white text-lg md:text-xl">
            {t.islandHoppingSubtitle}
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {t.islandHoppingIntroTitle}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              {t.islandHoppingIntroDesc1}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t.islandHoppingIntroDesc2}
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            {t.islandHoppingDestinationsTitle}
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/images/kenawa/hero.jpg"
                  alt="Pulau Kenawa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{t.islandHoppingKenawa}</h3>
                <p className="text-gray-600 text-sm">{t.islandHoppingKenawaDesc}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/images/moyo/beach.jpg"
                  alt="Pulau Moyo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{t.islandHoppingMoyo}</h3>
                <p className="text-gray-600 text-sm">{t.islandHoppingMoyoDesc}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/images/destinations/sumbawa.jpg"
                  alt="Pulau Satonda"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{t.islandHoppingSatonda}</h3>
                <p className="text-gray-600 text-sm">{t.islandHoppingSatondaDesc}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/images/kenawa/beach.jpg"
                  alt="Pulau Lainnya"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{t.islandHoppingHidden}</h3>
                <p className="text-gray-600 text-sm">{t.islandHoppingHiddenDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            {t.islandHoppingPackagesTitle}
          </h2>

          <div className="grid grid-cols-2 gap-4 md:gap-8">
            {/* 1 Day Package */}
            <div className="bg-white border-2 border-gray-200 rounded-lg md:rounded-2xl overflow-hidden hover:border-[#00a6b5] transition-all duration-300 hover:shadow-xl">
              <div className="relative h-40 md:h-64">
                <Image
                  src="/images/kenawa/sunset.jpg"
                  alt="1 Day Island Hopping"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-[#00a6b5] text-white px-2 py-1 md:px-4 md:py-2 rounded-full font-bold text-xs md:text-base">
                  1 {t.islandHopping1Day.split(' ')[2]}
                </div>
              </div>
              <div className="p-3 md:p-6">
                <h3 className="text-base md:text-2xl font-bold mb-2 md:mb-4 text-gray-900">
                  {t.islandHopping1Day}
                </h3>
                <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  <div className="flex items-center gap-2 md:gap-3 text-gray-700 text-xs md:text-base">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-[#00a6b5]" />
                    <span>{t.islandHopping1DayTime}</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 text-gray-700 text-xs md:text-base">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#00a6b5]" />
                    <span>{t.islandHopping1DayIslands}</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 text-gray-700 text-xs md:text-base">
                    <Users className="w-4 h-4 md:w-5 md:h-5 text-[#00a6b5]" />
                    <span>{t.islandHopping1DayMinPax}</span>
                  </div>
                </div>
                <div className="mb-3 md:mb-6">
                  <p className="text-lg md:text-3xl font-bold text-[#00a6b5] mb-1 md:mb-2">
                    {t.islandHopping1DayPrice}
                  </p>
                  <p className="text-gray-600 text-xs md:text-base">{t.islandHoppingPerPerson}</p>
                </div>
                <a
                  href="https://wa.me/6282341331975?text=Halo,%20saya%20ingin%20booking%20Island%20Hopping%201%20Hari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 hover:bg-green-600 text-white text-center px-3 py-2 md:px-6 md:py-3 rounded-lg font-bold text-xs md:text-base transition-all"
                >
                  {t.islandHoppingBookButton}
                </a>
              </div>
            </div>

            {/* 2 Days Package */}
            <div className="bg-white border-2 border-[#00a6b5] rounded-lg md:rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 relative">
              <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-yellow-400 text-gray-900 px-2 py-1 md:px-4 md:py-2 rounded-full font-bold text-xs md:text-base z-10">
                {t.islandHoppingPopular}
              </div>
              <div className="relative h-40 md:h-64">
                <Image
                  src="/images/moyo/waterfall.jpg"
                  alt="2 Days Island Hopping"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-[#00a6b5] text-white px-2 py-1 md:px-4 md:py-2 rounded-full font-bold text-xs md:text-base">
                  {t.islandHopping2D1NTime}
                </div>
              </div>
              <div className="p-3 md:p-6">
                <h3 className="text-base md:text-2xl font-bold mb-2 md:mb-4 text-gray-900">
                  {t.islandHopping2D1N}
                </h3>
                <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  <div className="flex items-center gap-2 md:gap-3 text-gray-700 text-xs md:text-base">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-[#00a6b5]" />
                    <span>{t.islandHopping2D1NTime}</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 text-gray-700 text-xs md:text-base">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#00a6b5]" />
                    <span>{t.islandHopping2D1NIslands}</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 text-gray-700 text-xs md:text-base">
                    <Users className="w-4 h-4 md:w-5 md:h-5 text-[#00a6b5]" />
                    <span>{t.islandHopping2D1NMinPax}</span>
                  </div>
                </div>
                <div className="mb-3 md:mb-6">
                  <p className="text-lg md:text-3xl font-bold text-[#00a6b5] mb-1 md:mb-2">
                    {t.islandHopping2D1NPrice}
                  </p>
                  <p className="text-gray-600 text-xs md:text-base">{t.islandHoppingPerPerson}</p>
                </div>
                <a
                  href="https://wa.me/6282341331975?text=Halo,%20saya%20ingin%20booking%20Island%20Hopping%202D1N"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 hover:bg-green-600 text-white text-center px-3 py-2 md:px-6 md:py-3 rounded-lg font-bold text-xs md:text-base transition-all"
                >
                  {t.islandHoppingBookButton}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            {t.islandHoppingFacilitiesTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#00a6b5] flex items-center justify-center flex-shrink-0">
                <Anchor className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{t.islandHoppingBoat}</h3>
                <p className="text-gray-600">{t.islandHoppingBoatDesc}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#00a6b5] flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{t.islandHoppingGuide}</h3>
                <p className="text-gray-600">{t.islandHoppingGuideDesc}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#00a6b5] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{t.islandHoppingSnorkeling}</h3>
                <p className="text-gray-600">{t.islandHoppingSnorkelingDesc}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#00a6b5] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{t.islandHoppingMeals}</h3>
                <p className="text-gray-600">{t.islandHoppingMealsDesc}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#00a6b5] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{t.islandHoppingDocumentation}</h3>
                <p className="text-gray-600">{t.islandHoppingDocumentationDesc}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#00a6b5] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{t.islandHoppingInsurance}</h3>
                <p className="text-gray-600">{t.islandHoppingInsuranceDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0a3d52] text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.islandHoppingCTATitle}
          </h2>
          <p className="text-lg mb-8 opacity-90">
            {t.islandHoppingCTADesc}
          </p>
          <a
            href="https://wa.me/6282341331975?text=Halo,%20saya%20ingin%20informasi%20tentang%20Island%20Hopping%20Sumbawa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
          >
            <MessageCircle size={24} />
            {t.islandHoppingCTAButton}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
