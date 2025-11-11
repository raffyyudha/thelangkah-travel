"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { Footer } from "@/components/Footer";
import { moyoIslandTranslations } from "@/translations/moyoIsland";
import { MessageCircle, Clock, Users, MapPin, Check, X } from "lucide-react";

export default function Page() {
  const { language } = useLanguage();
  const t = language === 'id' ? moyoIslandTranslations.id : moyoIslandTranslations.en;
  const { t: commonT } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/moyo/hero.jpg"
            alt="Paket Wisata Pulau Moyo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            One Day Trip Pulau Moyo Sumbawa
          </h1>
          <p className="text-white text-xl md:text-2xl font-semibold">
            Mulai dari Rp 1.260.000 per orang
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-gray-700 text-lg leading-relaxed">
              One Day Trip Pulau Moyo bagi anda yang hanya memiliki waktu terbatas namun ingin mengunjungi ketenangan dan keindahan Pulau Moyo serta Air Terjun Mata Jitu.
            </p>
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Itinerary Perjalanan Sehari ke Pulau Moyo
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#00a6b5]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#00a6b5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">08.00 - Penjemputan</h3>
                  <p className="text-gray-700">Kami akan menjemput Anda dari akomodasi Anda di Sumbawa Besar atau Bandara Sumbawa dan mengantar Anda ke dermaga feri.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#00a6b5]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#00a6b5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">08.30 - Keberangkatan</h3>
                  <p className="text-gray-700">Setelah tiba di dermaga, naik speed boat ke Pulau Moyo.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#00a6b5]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#00a6b5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">09.00 - Pantai Poto Jarum</h3>
                  <p className="text-gray-700">Tiba di Pantai Poto Jarum dan bersantai di pantai sambil mengagumi panorama.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#00a6b5]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#00a6b5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">10.30 - Takat Sagele</h3>
                  <p className="text-gray-700">Tiba di Takat Sagele, sebuah pulau kecil di tengah laut yang muncul saat air surut.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#00a6b5]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#00a6b5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">10.45 - Snorkeling</h3>
                  <p className="text-gray-700">Tiba di Takat Sagele dan pergi snorkeling untuk menikmati pemandangan bawah laut.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#00a6b5]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#00a6b5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">12.00 - Menuju Desa Labuan Aji</h3>
                  <p className="text-gray-700">Berangkat menuju Desa Labuan Aji.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#00a6b5]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#00a6b5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">12.30 - Makan Siang</h3>
                  <p className="text-gray-700">Tiba di Desa Labuan Aji dan makan siang.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#00a6b5]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#00a6b5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">14.00 - Perjalanan ke Air Terjun</h3>
                  <p className="text-gray-700">Naik becak motor ke Air Terjun Mata Jitu.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#00a6b5]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#00a6b5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">14.30 - Air Terjun Mata Jitu</h3>
                  <p className="text-gray-700">Mengunjungi Air Terjun Mata Jitu dan nikmati keindahan alamnya.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#00a6b5]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#00a6b5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">16.30 - Kembali</h3>
                  <p className="text-gray-700">Kembali ke Desa Labuan Aji, bilas, dan persiapkan sebelum kembali.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Harga Trip Sehari ke Pulau Moyo
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-[#00a6b5] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Peserta</th>
                  <th className="px-6 py-4 text-right font-bold">Harga</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">1 Orang</td>
                  <td className="px-6 py-4 text-right font-semibold text-gray-900">Rp 4.470.000/Orang</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">2 Orang</td>
                  <td className="px-6 py-4 text-right font-semibold text-gray-900">Rp 2.480.000/Orang</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">3 Orang</td>
                  <td className="px-6 py-4 text-right font-semibold text-gray-900">Rp 1.820.000/Orang</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">4 Orang</td>
                  <td className="px-6 py-4 text-right font-semibold text-gray-900">Rp 1.490.000/Orang</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">5 Orang</td>
                  <td className="px-6 py-4 text-right font-semibold text-gray-900">Rp 1.300.000/Orang</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">6 Orang</td>
                  <td className="px-6 py-4 text-right font-semibold text-gray-900">Rp 1.170.000/Orang</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">7 Orang</td>
                  <td className="px-6 py-4 text-right font-semibold text-gray-900">Rp 1.160.000/Orang</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">8 Orang</td>
                  <td className="px-6 py-4 text-right font-semibold text-gray-900">Rp 1.450.000/Orang</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">9 Orang</td>
                  <td className="px-6 py-4 text-right font-semibold text-gray-900">Rp 1.340.000/Orang</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50">
                  <td className="px-6 py-4 text-gray-900 font-bold">10 Orang</td>
                  <td className="px-6 py-4 text-right font-bold text-[#00a6b5]">Rp 1.260.000/Orang</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-center text-gray-600 mt-6 italic">
            * Untuk lebih dari 10 peserta per grup, silakan hubungi kami!
          </p>
        </div>
      </section>

      {/* Included Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Layanan Termasuk
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
              <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Transportasi AC antar-jemput hotel/bandara</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
              <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Perahu pribadi ke Pulau Moyo</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
              <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Makan siang di Desa Labuan Aji dengan menu tradisional</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
              <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Antar-jemput sepeda motor ke Air Terjun Mata Jitu</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
              <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Peralatan snorkeling</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
              <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Biaya masuk ke area wisata</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
              <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Air mineral selama program</p>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
            <div className="flex items-start gap-4">
              <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Tidak Termasuk</h3>
                <p className="text-gray-700">Makan malam dan persyaratan pribadi lainnya</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Point Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Meeting Point
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <MapPin size={32} className="text-[#00a6b5] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Sumbawa Besar</h3>
                  <p className="text-gray-600">Titik kumpul untuk trip ke Pulau Moyo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sumbawa Tour Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            {commonT.tourRecommendedTours}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-12">
            Pulau Moyo terletak di Kabupaten Sumbawa, Provinsi Nusa Tenggara Barat. 
            Selain Pulau Moyo, berikut berbagai pilihan paket wisata lainnya yang bisa anda nikmati bersama keluarga, kerabat dan sahabat saat berlibur ke Pulau Sumbawa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link href="/whale-shark-experience" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
                <div className="relative h-48">
                  <Image
                    src="/images/whale-shark/IMG_2992.JPG"
                    alt="Whale Shark"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-900 group-hover:text-[#00a6b5]">
                    Paket Wisata Hiu Paus Teluk Saleh, Sumbawa
                  </h3>
                </div>
              </div>
            </Link>

            <Link href="/kenawa-sunset-tour" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
                <div className="relative h-48">
                  <Image
                    src="/images/kenawa/beach.jpg"
                    alt="Kenawa"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-900 group-hover:text-[#00a6b5]">
                    Paket Tour Pulau Kenawa
                  </h3>
                </div>
              </div>
            </Link>

            <Link href="/combo-moyo-whale-shark" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
                <div className="relative h-48">
                  <Image
                    src="/images/whale-shark/IMG_2805.JPG"
                    alt="Combo Tour"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-900 group-hover:text-[#00a6b5]">
                    Paket Tour Moyo + Hiu Paus
                  </h3>
                </div>
              </div>
            </Link>

            <Link href="/combo-ultimate-sumbawa" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
                <div className="relative h-48">
                  <Image
                    src="/images/destinations/sumbawa.jpg"
                    alt="Ultimate Sumbawa"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-900 group-hover:text-[#00a6b5]">
                    Paket Trekking Gunung Tambora
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Pulau Moyo Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Tentang Pulau Moyo
          </h2>
          
          <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/moyo/waterfall.jpg"
              alt="Air Terjun Mata Jitu Pulau Moyo"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Pulau Moyo memiliki luas wilayah sekitar 35.000 hektar yang didominasi oleh hutan dan perbukitan dan dikelilingi oleh pantai-pantai cantik di sepanjang garis pantainya.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Terdapat dua desa di Pulau Moyo yaitu Desa Labuan Aji dan Desa Sebotok, namun yang menjadi favorit wisatawan karena adanya destinasi wisata utama di Pulau Moyo terletak di Desa Labuan Aji.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Pulau Moyo dapat ditempuh dengan dua alternatif transportasi dari Pulau Sumbawa yaitu menggunakan slow boat dengan jarak tempuh 2 jam, atau menggunakan fast boat yang hanya menghabiskan waktu 45 menit.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Tunggu apalagi, segera booking paket tour ke Pulau Moyo bersama <span className="font-bold text-[#00a6b5]">Adventure Sumbawa Island</span> dan dapatkan pengalaman liburan seru yang tak terlupakan!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0a3d52] text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Menjelajahi Pulau Moyo?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Hubungi kami untuk informasi lebih lanjut dan booking One Day Trip Pulau Moyo Anda
          </p>
          <a
            href="https://wa.me/6282341331975?text=Halo,%20saya%20ingin%20booking%20One%20Day%20Trip%20Pulau%20Moyo"
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

                <div className="border-2 border-white rounded-lg p-4 inline-block">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold">EXCELLENT</span>
                    <div className="flex text-green-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <circle cx="10" cy="10" r="8"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">85+ ulasan</span>
                    <span className="ml-2 text-gray-300">Tripadvisor</span>
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
      <Footer />
    </main>
  );
}
