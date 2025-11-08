"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ChevronLeft, ChevronRight, Check, X, AlertCircle, Clock, Users } from "lucide-react";
import { useState } from "react";
import { DropdownSection, PricingTable } from "@/components/TourComponents";
import BookingModal from "@/components/BookingModal";

export default function WhaleSharkExperiencePage() {
  const [currentReview, setCurrentReview] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const reviews = [
    {
      name: "Davinia Stimson",
      time: "6 months ago",
      rating: 5,
      text: "Wir waren drei Tage mit dem Team unterwegs und es war vom Anfang bis zum Schluss ein wunderbares Erlebnis - sowohl organisatorisch als auch menschlich!",
      initial: "D",
      verified: true
    },
    {
      name: "Grant Turck",
      time: "5 months ago",
      rating: 5,
      text: "Swimming with whale sharks has always been a dream—but thanks to Sumbawa Adventour, that dream became a reality beyond anything I could've imagined!",
      initial: "G",
      verified: true
    },
    {
      name: "Holly Atkinson",
      time: "4 months ago",
      rating: 5,
      text: "This was the experience of a lifetime and a huge reason for this was the company's (and specifically our tour guide Dan's) flexibility, knowledge and all-round brilliance.",
      initial: "H",
      verified: true
    },
    {
      name: "rizqika aprilia",
      time: "11 months ago",
      rating: 5,
      text: "An Unforgettable Sumbawa adventour, My trip to Sumbawa was a journey of discovery and wonder. It began in Teluk Saleh, where I swam with gentle whale sharks—a surreal and humbling experience.",
      initial: "R",
      verified: true
    },
    {
      name: "sofia akmal",
      time: "8 months ago",
      rating: 5,
      text: "Perfect Trip to Sumbawa! with this guys & company. Just got back from an awesome family trip to Sumbawa, and it was all thanks to Sumbawa Travel Agent!",
      initial: "S",
      verified: true
    }
  ];

  const handleBooking = () => {
    const message = encodeURIComponent("Halo, saya ingin booking Whale Shark Sumbawa Tour");
    window.open(`https://wa.me/6282341331975?text=${message}`, "_blank");
  };

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
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

      {/* Package Selection Section - Meeting Point */}
      <section className="py-16 bg-gradient-to-br from-[#00a6b5]/10 to-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Pilih Meeting Point Paket Trip Whale Shark
          </h2>
          <p className="text-center text-gray-700 text-lg mb-12">
            Pilih paket sesuai dengan lokasi keberangkatan Anda
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Trip Whale Shark Start Sumbawa */}
            <Link href="/whale-shark-start-sumbawa" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-56">
                  <Image
                    src="/images/whale-shark/IMG_2992.JPG"
                    alt="Trip Whale Shark Start Sumbawa"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#00a6b5] transition-colors">
                    Trip Whale Shark Start Sumbawa
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Penjemputan dari hotel di Sumbawa Besar
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#00a6b5] font-bold">Lihat Detail →</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Trip Whale Shark Start Labuhan Jambu */}
            <Link href="/whale-shark-start-labuhan-jambu" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-56">
                  <Image
                    src="/images/whale-shark/IMG_2805.JPG"
                    alt="Trip Whale Shark Start Labuhan Jambu"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#00a6b5] transition-colors">
                    Trip Whale Shark Start Labuhan Jambu
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Meeting point di Pelabuhan Labuhan Jambu
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Mulai IDR 350.000</span>
                    <span className="text-[#00a6b5] font-bold">Lihat Detail →</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Trip Whale Shark 2D 1N */}
            <Link href="/whale-shark-2d1n" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-56">
                  <Image
                    src="/images/whale-shark/IMG_2079.JPG"
                    alt="Trip Whale Shark 2D 1N"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#00a6b5] transition-colors">
                    Trip Whale Shark 2D 1N
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Paket menginap dengan pengalaman lebih lengkap
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#00a6b5] font-bold">Lihat Detail →</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Pricing Table */}
          <PricingTable
            title="Harga Tour"
            data={[
              {
                participants: "2-10",
                openTrip: "IDR. 1,450,000/orang",
                fullPrivate: "IDR. 2,500,000/orang"
              }
            ]}
          />

          {/* Additional Info */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Butuh Paket Custom?</h3>
            <p className="text-gray-700 mb-6">
              Kami juga menyediakan paket custom sesuai kebutuhan Anda. Hubungi kami untuk informasi lebih lanjut.
            </p>
            <a
              href="https://wa.me/6282341331975?text=Halo,%20saya%20ingin%20bertanya%20tentang%20paket%20custom%20whale%20shark"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold transition-all"
            >
              <MessageCircle size={20} />
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Mengapa Memilih Adventure Sumbawa Island?
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00a6b5] flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Operator Lokal Terpercaya</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Kami adalah operator lokal yang berpengalaman dan memahami kondisi perairan Teluk Saleh dengan baik.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00a6b5] flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Peralatan Lengkap & Berkualitas</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Semua peralatan snorkeling dan keselamatan kami dalam kondisi prima dan terawat dengan baik.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00a6b5] flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Dokumentasi Profesional</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Kami menyediakan dokumentasi underwater menggunakan GoPro untuk mengabadikan momen berharga Anda.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00a6b5] flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Harga Transparan</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Tidak ada biaya tersembunyi. Semua harga sudah termasuk yang tercantum dalam paket.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Trip Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Paket Private Trip Hiu Paus Sumbawa
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

      {/* Dropdown Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <DropdownSection title="Syarat & Ketentuan">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Whale Shark Sumbawa Tour package is PRIVATE and will not be shared with other</li>
              <li>Children 5 years old and under at the same time of tour are free of charge</li>
              <li>All minors must be accompanied by parents/guardians at all time.</li>
              <li>Payment of a 40% deposit is required to secure a package reservation</li>
              <li>Flexible tour dates are available upon request</li>
              <li>Once you decide to book the trip please provide us with details of your feet For snorkeling and swimming fins</li>
              <li>The remaining payment can be transferred/cash when you meet our guide</li>
            </ul>
          </DropdownSection>

          <DropdownSection title="Pembatalan & Penjadwalan ulang">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Cancellation up to 3 days before the event: a 25% cancellation fee will apply, based on the total booking price.</li>
              <li>Cancellation 3 day before or on the day of the event: The deposit is non-refundable, but you will get the opportunity to do the tour any other day as scheduled with no extra charge</li>
              <li>No-show on the day of the event: Regardless of prior cancellation, the payment is non-refundable.</li>
              <li>Force majeure (e.g., bad weather, natural disasters, war): The guide reserves the right to cancel or modify the schedule/itinerary for the safety of participants and crew. Any changes or cancellations due to force majeure are non-refundable</li>
            </ul>
          </DropdownSection>

          <DropdownSection title="Hiu Paus / Whale Shark Tour FAQ'S">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>These sumbawa whale shark roam the ocean in search of food all the year in sumbawa saleh bay, they gather around floating fishing platforms. These platforms use strong lights that attract plankton and fish – the perfect breakfast for whale sharks!</li>
              <li>forbidden to touch heir skin is covered in a sensitive mucus membrane that should not be touched, can harm the whale shark and disrupt their natural behavior</li>
              <li>We provide all the equipment you need (snorkel, mask and fins), but feel free to bring your own. We also suggest bringing ear plugs to reduce of the loud sound of the local boat's engine that will be used to go to the Whale Shark point</li>
              <li>As much we cannot control Mother Nature. Sea conditions on the day may impact water visibility or other factors beyond our control. Therefore, we cannot offer any guarantees or refunds regarding sightings.</li>
              <li>However, we maintain strong coordination with the all the local & Crews to ensure you visit the Whale Shark Sumbawa Congregation Point at the best possible time.Thank you for your understanding as we strive to provide the best experience in harmony with nature.</li>
            </ul>
          </DropdownSection>

          {/* Explore More */}
          <h4 className="text-xl font-bold text-gray-900 mb-4 mt-12">Explore More</h4>
          <div className="space-y-2 mb-12">
            <p className="text-gray-700">
              <a href="/sumbawa-tour-packages" className="text-blue-600 hover:underline">Whale Shark Sumbawa Saleh Bay Tour Packages</a>
            </p>
            <p className="text-gray-700">
              <a href="/combo-moyo-whale-shark" className="text-blue-600 hover:underline">Moyo Island & Whale Shark Sumbawa 3 Days 2 Nights</a>
            </p>
            <p className="text-gray-700">
              <a href="/whale-shark-2d1n" className="text-blue-600 hover:underline">Whale shark Sumbawa 2 Days 1 Night Tour</a>
            </p>
            <p className="text-gray-700">
              <a href="/whale-shark-liveaboard" className="text-blue-600 hover:underline">Sumbawa Whale Shark Tour Liveaboard 2 Days 1 Night</a>
            </p>
            <p className="text-gray-700">
              <a href="/trip-4d3n-sumbawa" className="text-blue-600 hover:underline">Whale Shark Saleh Bay, Moyo Island & kenawa Island - 4 Days 3 Nights</a>
            </p>
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

      {/* Pilihan Paket Tour Sumbawa Lainnya - Before Footer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Pilihan Paket Tour Sumbawa Lainnya
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-12">
            Pulau Moyo terletak di Kabupaten Sumbawa, Provinsi Nusa Tenggara Barat. Selain Pulau Moyo, berikut berbagai pilihan paket wisata lainnya yang bisa anda nikmati bersama keluarga, kerabat dan sahabat saat berlibur ke Pulau Sumbawa.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Tour Hiu Paus Teluk Saleh Sumbawa Harian Start Finish Kota Sumbawa Besar */}
            <Link href="/whale-shark-start-sumbawa" className="group">
              <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-44">
                <Image
                  src="/images/whale-shark/IMG_2992.JPG"
                  alt="Tour Hiu Paus Teluk Saleh Sumbawa Harian Start Finish Kota Sumbawa Besar"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    Tour Hiu Paus Teluk Saleh Sumbawa Harian Start Finish Kota Sumbawa Besar
                  </h3>
                </div>
              </div>
            </Link>

            {/* Tour Wisata Hiu Paus Sumbawa 2 Hari 1 Malam start & finish Sumbawa Besar */}
            <Link href="/whale-shark-2d1n" className="group">
              <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-44">
                <Image
                  src="/images/whale-shark/IMG_2079.JPG"
                  alt="Tour Wisata Hiu Paus Sumbawa 2 Hari 1 Malam start & finish Sumbawa Besar"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    Tour Wisata Hiu Paus Sumbawa 2 Hari 1 Malam start & finish Sumbawa Besar
                  </h3>
                </div>
              </div>
            </Link>

            {/* Paket Tour Sumbawa 3 Hari 2 Malam Pulau Moyo - Hiu Paus Teluk Saleh */}
            <Link href="/combo-moyo-whale-shark" className="group">
              <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-44">
                <Image
                  src="/images/moyo/hero.jpg"
                  alt="Paket Tour Sumbawa 3 Hari 2 Malam Pulau Moyo - Hiu Paus Teluk Saleh"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    Paket Tour Sumbawa 3 Hari 2 Malam Pulau Moyo - Hiu Paus Teluk Saleh
                  </h3>
                </div>
              </div>
            </Link>

            {/* Paket Tour Hiu Paus Sumbawa 2 Hari 1 Malam start & finish Lombok */}
            <Link href="/whale-shark-start-labuhan-jambu" className="group">
              <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-44">
                <Image
                  src="/images/whale-shark/IMG_2082.JPG"
                  alt="Paket Tour Hiu Paus Sumbawa 2 Hari 1 Malam start & finish Lombok"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    Paket Tour Hiu Paus Sumbawa 2 Hari 1 Malam start & finish Lombok
                  </h3>
                </div>
              </div>
            </Link>

            {/* Paket Tour Sumbawa 4 Hari 3 Malam Wisata Pulau Moyo, Pulau Kenawa & Hiu Paus */}
            <Link href="/trip-4d3n-sumbawa" className="group">
              <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-44">
                <Image
                  src="/images/islandjawa.jpg"
                  alt="Paket Tour Sumbawa 4 Hari 3 Malam Wisata Pulau Moyo, Pulau Kenawa & Hiu Paus"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    Paket Tour Sumbawa 4 Hari 3 Malam Wisata Pulau Moyo, Pulau Kenawa & Hiu Paus
                  </h3>
                </div>
              </div>
            </Link>

            {/* Sumbawa Whale Shark Tour 2 Days 1 Night (scuba diving tour) */}
            <Link href="/whale-shark-experience" className="group">
              <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-44">
                <Image
                  src="/images/whale-shark/IMG_2806.JPG"
                  alt="Sumbawa Whale Shark Tour 2 Days 1 Night (scuba diving tour)"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    Sumbawa Whale Shark Tour 2 Days 1 Night (scuba diving tour)
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
