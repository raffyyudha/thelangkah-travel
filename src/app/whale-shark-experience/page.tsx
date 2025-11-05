"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Clock, Users, MapPin, Check, X, AlertCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function WhaleSharkExperiencePage() {
  const [privateIndex, setPrivateIndex] = useState(0);
  const [otherToursIndex, setOtherToursIndex] = useState(0);

  const privatePackages = [
    {
      image: "/images/whale-shark/IMG_2079.JPG",
      title: "Private Trip - 1-3 People",
      price: "1,200,000 - 3,300,000",
      alt: "Private Trip Small Group"
    },
    {
      image: "/images/whale-shark/IMG_2082.JPG",
      title: "Private Trip - 4-6 People",
      price: "800,000 - 1,000,000",
      alt: "Private Trip Medium Group"
    },
    {
      image: "/images/whale-shark/IMG_2806.JPG",
      title: "Private Trip - 7-10 People",
      price: "480,000 - 700,000",
      alt: "Private Trip Large Group"
    }
  ];

  const otherTours = [
    {
      image: "/images/moyo/hero.jpg",
      title: "Paket Wisata Pulau Moyo",
      link: "/moyo-island-adventure",
      alt: "Pulau Moyo"
    },
    {
      image: "/images/kenawa/hero.jpg",
      title: "Paket Tour Pulau Kenawa",
      link: "/kenawa-sunset-tour",
      alt: "Kenawa"
    },
    {
      image: "/images/whale-shark/IMG_2805.JPG",
      title: "Paket Tour Moyo + Hiu Paus",
      link: "/combo-moyo-whale-shark",
      alt: "Combo Tour"
    },
    {
      image: "/images/destinations/sumbawa.jpg",
      title: "Paket Trekking Gunung Tambora",
      link: "/combo-ultimate-sumbawa",
      alt: "Ultimate Sumbawa"
    }
  ];

  const nextPrivate = () => {
    setPrivateIndex((prev) => (prev + 1) % privatePackages.length);
  };

  const prevPrivate = () => {
    setPrivateIndex((prev) => (prev - 1 + privatePackages.length) % privatePackages.length);
  };

  const nextOtherTours = () => {
    setOtherToursIndex((prev) => (prev + 1) % otherTours.length);
  };

  const prevOtherTours = () => {
    setOtherToursIndex((prev) => (prev - 1 + otherTours.length) % otherTours.length);
  };
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/whale-shark/IMG_2992.JPG"
            alt="Paket Wisata Hiu Paus Teluk Saleh"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Paket Wisata Hiu Paus Teluk Saleh, Sumbawa
          </h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-gray-700 text-xl leading-relaxed mb-6">
              <strong>Whale shark tour packages take you on an unforgettable experience to meet the gentle giants of the sea.</strong>
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Selamat datang di <span className="font-bold text-[#00a6b5]">Adventure Sumbawa Island</span>! Bersiaplah untuk petualangan snorkeling seru bersama hiu paus di perairan eksklusif Sumbawa. Nikmati keindahan bawah laut yang memukau, air jernih, dan momen tak terlupakan bersama tim ahli kami yang siap memandu Anda.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Pesan sekarang untuk pengalaman snorkeling dengan hiu paus yang penuh kesan di Surga Bawah Laut Sumbawa!
            </p>
          </div>
        </div>
      </section>

      {/* Package Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            1. Paket Join Trip Hiu Paus Sumbawa
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-12">
            Nikmati pengalaman seru melihat hiu paus di perairan Sumbawa dengan bergabung dalam paket join trip! Paket ini cocok untuk traveler solo, pasangan, atau kelompok kecil yang ingin berbagi pengalaman dengan peserta lain.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-16">
            <Link href="/whale-shark-experience" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-40 md:h-56">
                  <Image
                    src="/images/whale-shark/IMG_2992.JPG"
                    alt="Join Trip Hiu Paus"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 md:p-6">
                  <h3 className="text-sm md:text-xl font-bold mb-2 md:mb-3 text-gray-900 group-hover:text-[#00a6b5] transition-colors">
                    Join Trip Hiu Paus Sumbawa Start Labuhan Jambu
                  </h3>
                  <p className="text-lg md:text-2xl font-bold text-[#00a6b5] mb-1 md:mb-2">
                    Mulai IDR 350.000
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">Per Orang</p>
                </div>
              </div>
            </Link>

            <Link href="/whale-shark-experience" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-40 md:h-56">
                  <Image
                    src="/images/whale-shark/IMG_2805.JPG"
                    alt="Join Trip dari Lombok"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 md:p-6">
                  <h3 className="text-sm md:text-xl font-bold mb-2 md:mb-3 text-gray-900 group-hover:text-[#00a6b5] transition-colors">
                    Join Trip Hiu Paus Sumbawa Start Lombok
                  </h3>
                  <p className="text-lg md:text-2xl font-bold text-[#00a6b5] mb-1 md:mb-2">
                    Mulai IDR 750.000
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">Per Orang</p>
                </div>
              </div>
            </Link>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            2. Paket Private 1 Hari Hiu Paus Sumbawa
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-12">
            Paket private untuk keluarga atau kelompok yang ingin pengalaman lebih eksklusif dan fleksibel.
          </p>

          {/* Carousel for mobile, grid for desktop */}
          <div className="relative">
            {/* Mobile Carousel */}
            <div className="md:hidden relative px-4">
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${privateIndex * 100}%)` }}
                >
                  {privatePackages.map((pkg, idx) => (
                    <div key={idx} className="w-full flex-shrink-0 px-2">
                      <Link href="/whale-shark-experience" className="group block">
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                          <div className="relative h-48">
                            <Image
                              src={pkg.image}
                              alt={pkg.alt}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="text-base font-bold mb-2 text-gray-900">
                              {pkg.title}
                            </h3>
                            <p className="text-lg font-bold text-[#00a6b5] mb-1">
                              Mulai {pkg.price}
                            </p>
                            <p className="text-sm text-gray-600">Per Orang</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevPrivate}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white z-10"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextPrivate}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white z-10"
              >
                <ChevronRight size={20} />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {privatePackages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPrivateIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === privateIndex ? 'bg-[#00a6b5] w-6' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-3 gap-6">
              {privatePackages.map((pkg, idx) => (
                <Link key={idx} href="/whale-shark-experience" className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48">
                      <Image
                        src={pkg.image}
                        alt={pkg.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-[#00a6b5] transition-colors">
                        {pkg.title}
                      </h3>
                      <p className="text-xl font-bold text-[#00a6b5] mb-2">
                        Mulai {pkg.price}
                      </p>
                      <p className="text-sm text-gray-600">Per Orang</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Sumbawa Tour Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Pilihan Paket Tour Sumbawa Lainnya
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-12">
            Selain wisata hiu paus, berikut berbagai pilihan paket wisata lainnya yang bisa anda nikmati bersama keluarga, kerabat dan sahabat saat berlibur ke Pulau Sumbawa.
          </p>

          {/* Carousel for mobile, grid for desktop */}
          <div className="relative">
            {/* Mobile Carousel */}
            <div className="md:hidden relative px-4">
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${otherToursIndex * 100}%)` }}
                >
                  {otherTours.map((tour, idx) => (
                    <div key={idx} className="w-full flex-shrink-0 px-2">
                      <Link href={tour.link} className="group block">
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                          <div className="relative h-48">
                            <Image
                              src={tour.image}
                              alt={tour.alt}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-4 text-center">
                            <h3 className="font-bold text-gray-900">
                              {tour.title}
                            </h3>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevOtherTours}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white z-10"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextOtherTours}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white z-10"
              >
                <ChevronRight size={20} />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {otherTours.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setOtherToursIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === otherToursIndex ? 'bg-[#00a6b5] w-6' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-4 gap-6">
              {otherTours.map((tour, idx) => (
                <Link key={idx} href={tour.link} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
                    <div className="relative h-48">
                      <Image
                        src={tour.image}
                        alt={tour.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-bold text-gray-900 group-hover:text-[#00a6b5]">
                        {tour.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Details Section */}
      <section className="py-16 bg-gradient-to-br from-[#00a6b5]/10 to-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">✨ PRIVATE TRIP PRICING</h2>
          <p className="text-center text-gray-600 mb-12">The price above is the price per person</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            <div className="bg-white rounded-lg p-4 shadow-md text-center">
              <p className="text-sm text-gray-600 mb-2">1 person</p>
              <p className="text-xl font-bold text-[#00a6b5]">3,300,000</p>
              <p className="text-xs text-gray-500">IDR</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md text-center">
              <p className="text-sm text-gray-600 mb-2">2 people</p>
              <p className="text-xl font-bold text-[#00a6b5]">1,700,000</p>
              <p className="text-xs text-gray-500">IDR</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md text-center">
              <p className="text-sm text-gray-600 mb-2">3 people</p>
              <p className="text-xl font-bold text-[#00a6b5]">1,200,000</p>
              <p className="text-xs text-gray-500">IDR</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md text-center">
              <p className="text-sm text-gray-600 mb-2">4 people</p>
              <p className="text-xl font-bold text-[#00a6b5]">1,000,000</p>
              <p className="text-xs text-gray-500">IDR</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md text-center">
              <p className="text-sm text-gray-600 mb-2">5 people</p>
              <p className="text-xl font-bold text-[#00a6b5]">900,000</p>
              <p className="text-xs text-gray-500">IDR</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md text-center">
              <p className="text-sm text-gray-600 mb-2">6 people</p>
              <p className="text-xl font-bold text-[#00a6b5]">800,000</p>
              <p className="text-xs text-gray-500">IDR</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md text-center">
              <p className="text-sm text-gray-600 mb-2">7 people</p>
              <p className="text-xl font-bold text-[#00a6b5]">700,000</p>
              <p className="text-xs text-gray-500">IDR</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md text-center">
              <p className="text-sm text-gray-600 mb-2">8 people</p>
              <p className="text-xl font-bold text-[#00a6b5]">600,000</p>
              <p className="text-xs text-gray-500">IDR</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md text-center">
              <p className="text-sm text-gray-600 mb-2">9 people</p>
              <p className="text-xl font-bold text-[#00a6b5]">500,000</p>
              <p className="text-xs text-gray-500">IDR</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md text-center">
              <p className="text-sm text-gray-600 mb-2">10 people</p>
              <p className="text-xl font-bold text-[#00a6b5]">480,000</p>
              <p className="text-xs text-gray-500">IDR</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">✨ NOTE</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Available every day</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>We offer a Private Trip package for couple and family</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-[#00a6b5] flex-shrink-0 mt-0.5" />
                <span>Labuhan Jambu meeting point starts at 04:30 AM - finishes at 11:00 AM</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>All depends on weather conditions</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 md:p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-red-700">✨ IMPORTANT RULES</h3>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span><strong>It is forbidden to touch whale sharks</strong> because whale shark skin is sensitive and protected by conservation</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Keep a minimum distance of 2 meters when swimming</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Follow the directions of local guides for safety and conservation</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4 text-green-700">✨ INCLUDE</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Boat trip</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Fresh fruit</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Coffee & tea</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Bread & Chocolate</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Mineral water</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Towel & blanket</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>English tour guide</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Village entrance fee</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Conservation platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>GoPro camera 11/12</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Underwater photo & Video</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Snorkeling equipment (mask, snorkel, fins)</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-700">✨ NOT INCLUDED</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span>Airfare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span>Hotel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span>Lunch/Dinner</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span>Personal Needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span>Tips for local crew & driver</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">✨ WHAT TO BRING (optional)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Jacket</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Sunscreen/UV cream</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Sunglasses/UV protection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">✨ ITINERARY</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-[#00a6b5] pl-4">
                <p className="font-bold text-lg">⏰ FIRST DAY</p>
                <p className="text-gray-700">Arrival to Sumbawa or Labuhan Jambu hotel<br/><span className="text-sm text-gray-600">(Labuhan Jambu hotel is close to the pier)</span></p>
              </div>
              <div className="border-l-4 border-[#00a6b5] pl-4">
                <p className="font-bold text-lg">⏰ SECOND DAY</p>
                <ul className="space-y-2 text-gray-700 mt-2">
                  <li><strong>4:00 AM</strong> - Wake up and get ready</li>
                  <li><strong>4:20 AM</strong> - Guide picks up at hotel</li>
                  <li><strong>4:30 AM</strong> - Depart for whale shark location</li>
                  <li><strong>6:00 AM</strong> - Arrive at whale shark location</li>
                  <li><strong>6:10 AM</strong> - Enjoy breakfast</li>
                  <li><strong>6:20 AM</strong> - Swimming activity with whale sharks 🐋</li>
                  <li><strong>9:30 AM</strong> - Return to pier</li>
                  <li><strong>11:00 AM</strong> - Arrive at the pier</li>
                  <li><strong>11:10 AM</strong> - Guide will take you to the hotel</li>
                  <li><strong>11:20 AM</strong> - Guide will send video documentation</li>
                  <li className="font-bold text-[#00a6b5]">✨ Trip completed</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-[#00a6b5] to-[#0a3d52] rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">✨ ADDITIONAL SERVICES</h3>
            <p className="text-lg mb-4">We can help arrange:</p>
            <div className="flex justify-center gap-8 text-lg">
              <div>🏨 Hotel</div>
              <div>🚗 Transfer car</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Whale Shark Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Sekilas Tentang Hiu Paus di Kawasan Teluk Saleh, Sumbawa
          </h2>
          
          <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/whale-shark/IMG_2992.JPG"
              alt="Hiu Paus Teluk Saleh"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">1. Keunikan Teluk Saleh</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Teluk Saleh di Sumbawa, Nusa Tenggara Barat, adalah salah satu destinasi terbaik untuk melihat dan berenang bersama hiu paus (Rhincodon typus). Berbeda dengan tempat lain yang bersifat musiman, hiu paus dapat ditemui di sini sepanjang tahun karena tertarik dengan ikan kecil dan plankton di sekitar bagan—alat tangkap ikan tradisional yang digunakan nelayan setempat.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">2. Daya Tarik Lain di Teluk Saleh</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Selain hiu paus, Teluk Saleh menawarkan keindahan alam yang luar biasa. Tebing-tebing curam, hutan bakau yang masih alami, serta pantai berpasir putih menjadikannya destinasi ideal bagi pecinta alam.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Wisatawan juga dapat mengunjungi Pulau Moyo dan Pulau Satonda. Pulau Moyo terkenal dengan air terjunnya yang eksotis serta spot snorkeling dan diving kelas dunia. Sementara itu, Pulau Satonda memiliki danau kawah yang unik serta terumbu karang yang memukau.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">3. Kemunculan Hiu Paus di Teluk Saleh, Sumbawa</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Hiu paus sering terlihat di perairan Teluk Saleh, sebuah kawasan laut yang sangat luas. Karena luasnya wilayah ini, hampir mustahil untuk mencari hiu paus dengan berkeliling menggunakan perahu.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Satu-satunya cara untuk melihat hiu paus adalah dengan mengunjungi bagan pada waktu yang tepat. Hiu paus biasanya muncul sekitar pukul 06.00 pagi, saat para nelayan di bagan mengangkat jaring yang telah dipasang semalaman.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Ketika jaring diangkat, ikan-ikan kecil dan plankton yang menjadi makanan utama hiu paus ikut terbawa ke permukaan. Inilah alasan mengapa hiu paus muncul di sekitar bagan pada waktu tersebut.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0a3d52] text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Berenang Bersama Hiu Paus?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Hubungi kami untuk informasi lebih lanjut dan booking paket wisata Anda
          </p>
          <a
            href="https://wa.me/6282341331975?text=Halo,%20saya%20ingin%20booking%20Paket%20Wisata%20Hiu%20Paus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
          >
            <MessageCircle size={24} />
            Book via WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
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
                Adventure Sumbawa Island lahir pada tahun 2022 karena sebuah pemikiran yang dilandasi dengan keahlian dan keinginan untuk memberikan pelayanan terbaik bagi customer Adventure Sumbawa Island.
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
                    <span className="font-semibold">150+ ulasan</span>
                    <span className="ml-2 text-gray-300">Google</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Locations & Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-6">Adventure Sumbawa Island</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold mb-2">Sumbawa</h4>
                  <p className="text-gray-300 text-sm">
                    Labuhan Jambu, Kabupaten Sumbawa, NTB - 84384
                  </p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Lombok</h4>
                  <p className="text-gray-300 text-sm">
                    Senggigi, Lombok Barat, NTB - 83355
                  </p>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-3 mt-8">
                <a href="https://www.tiktok.com/@adventuresumbawaisland" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors text-[#0a3d52]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/adventuresumbawaisland" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors text-[#0a3d52]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/adventuresumbawa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors text-[#0a3d52]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/adventure_sumbawaisland/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors text-[#0a3d52]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@adventuresumbawaisland" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors text-[#0a3d52]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
