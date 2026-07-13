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
              Tunggu apalagi, segera booking paket tour ke Pulau Moyo bersama <span className="font-bold text-[#00a6b5]">Go Whale Shark Sumbawa</span> dan dapatkan pengalaman liburan seru yang tak terlupakan!
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

      <Footer />
    </main>
  );
}
