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
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
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
                  <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
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
                  <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
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
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
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

      {/* Footer */}
      <footer className="bg-[#0a3d52] text-white py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
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
                Adventure Sumbawa Island lahir pada tahun 2022 karena sebuah pemikiran yang dilandasi dengan keahlian dan keinginan untuk memberikan pelayanan terbaik bagi customer Adventure Sumbawa Island.
              </p>

              {/* Review Badge */}
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
                    <span className="font-semibold">150+ ulasan</span>
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
      <Footer />
    </main>
  );
}
