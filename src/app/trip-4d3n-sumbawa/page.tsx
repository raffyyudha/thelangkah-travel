"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Clock, Users, MapPin, Calendar } from "lucide-react";

export default function Trip4D3NSumbawaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Trip 4D3N Sumbawa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            Trip 4D3N Sumbawa
          </h1>
          <p className="text-white text-lg md:text-xl">
            Paket lengkap 4 Hari 3 Malam menjelajahi Sumbawa
          </p>
        </div>
      </section>

      {/* Package Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-gradient-to-br from-[#00a6b5] to-[#0a3d52] rounded-2xl p-8 text-white mb-12">
            <h2 className="text-3xl font-bold mb-6">Paket 4 Hari 3 Malam</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6" />
                <div>
                  <p className="text-sm opacity-90">Durasi</p>
                  <p className="font-bold">4 Hari 3 Malam</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6" />
                <div>
                  <p className="text-sm opacity-90">Min. Peserta</p>
                  <p className="font-bold">2 Orang</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6" />
                <div>
                  <p className="text-sm opacity-90">Destinasi</p>
                  <p className="font-bold">Multiple Islands</p>
                </div>
              </div>
            </div>
          </div>

          {/* Itinerary */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Itinerary</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-[#00a6b5] pl-6">
                <h4 className="font-bold text-lg mb-2">Hari 1: Whale Shark Experience</h4>
                <p className="text-gray-700">Snorkeling dengan hiu paus di Teluk Saleh, Labuhan Jambu</p>
              </div>
              <div className="border-l-4 border-[#00a6b5] pl-6">
                <h4 className="font-bold text-lg mb-2">Hari 2: Moyo Island Adventure</h4>
                <p className="text-gray-700">Eksplorasi Pulau Moyo, air terjun, dan snorkeling</p>
              </div>
              <div className="border-l-4 border-[#00a6b5] pl-6">
                <h4 className="font-bold text-lg mb-2">Hari 3: Kenawa & Island Hopping</h4>
                <p className="text-gray-700">Sunset di Kenawa dan island hopping ke pulau-pulau sekitar</p>
              </div>
              <div className="border-l-4 border-[#00a6b5] pl-6">
                <h4 className="font-bold text-lg mb-2">Hari 4: Free Program & Departure</h4>
                <p className="text-gray-700">Waktu bebas dan persiapan keberangkatan</p>
              </div>
            </div>
          </div>

          {/* Included */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Yang Termasuk</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-gray-700">Akomodasi 3 malam</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-gray-700">Semua transportasi boat</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-gray-700">Makan selama trip</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-gray-700">Guide profesional</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-gray-700">Peralatan snorkeling</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-gray-700">Dokumentasi</p>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <p className="text-gray-600 mb-2">Harga mulai dari</p>
            <p className="text-4xl font-bold text-[#00a6b5] mb-6">IDR 5.500.000</p>
            <p className="text-gray-600 mb-6">Per Orang (Min. 2 pax)</p>
            <a
              href="https://wa.me/6282341331975?text=Halo,%20saya%20ingin%20booking%20Trip%204D3N%20Sumbawa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
            >
              <MessageCircle size={24} />
              Book via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a3d52] text-white py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-16 h-16">
                  <Image src="/images/logo.png" alt="Logo" fill className="object-contain" />
                </div>
                <h3 className="text-xl font-bold">ADVENTURE SUMBAWA ISLAND</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Adventure Sumbawa Island lahir pada tahun 2022 karena sebuah pemikiran yang dilandasi dengan keahlian dan keinginan untuk memberikan pelayanan terbaik bagi customer Adventure Sumbawa Island.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Hubungi Kami</h4>
              <div className="space-y-3">
                <a href="https://wa.me/6282341331975" className="flex items-center gap-3 text-gray-300 hover:text-white">
                  <MessageCircle size={20} />
                  <span>+62 823-4133-1975</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
