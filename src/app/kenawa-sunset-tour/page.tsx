import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Clock, Users, MapPin, Check, X, AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Paket Wisata Pulau Kenawa | Go Whale Shark Sumbawa",
  description: "Paket Wisata Pulau Kenawa, tersedia paket tour sunset dengan pasir putih dan air laut yang jernih. Pengalaman tak terlupakan di surga tersembunyi Sumbawa.",
};

export default function KenawaSunsetTourPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/kenawa/hero.jpg"
            alt="Paket Wisata Pulau Kenawa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Paket Wisata Pulau Kenawa
          </h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Paket Wisata Pulau Kenawa dibawah ini terdiri dari paket tour sunset (berangkat sore pulang malam) dengan destinasi pantai pasir putih, snorkeling, dan menikmati sunset spektakuler yang memukau.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Pulau Kenawa terkenal dengan keindahan pantai pasir putihnya yang lembut dan air laut yang kristal jernih, menjadikannya destinasi ideal untuk bersantai dan menikmati keindahan alam.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Tunggu apalagi, booking paket wisatanya bersama <span className="font-bold text-[#00a6b5]">Go Whale Shark Sumbawa</span>!
            </p>
          </div>
        </div>
      </section>

      {/* Package Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Pilihan Paket Wisata Pulau Kenawa
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Link href="/kenawa-sunset-tour" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-56">
                  <Image
                    src="/images/kenawa/sunset.jpg"
                    alt="Paket Wisata Pulau Kenawa"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#00a6b5] transition-colors">
                    Paket Wisata Pulau Kenawa Sunset Tour
                  </h3>
                  <p className="text-2xl font-bold text-[#00a6b5] mb-2">
                    Mulai IDR 450.000
                  </p>
                  <p className="text-sm text-gray-600">Per Orang</p>
                </div>
              </div>
            </Link>

            <Link href="/kenawa-sunset-tour" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-56">
                  <Image
                    src="/images/kenawa/beach.jpg"
                    alt="Custom Trip Kenawa"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#00a6b5] transition-colors">
                    Custom Trip Pulau Kenawa
                  </h3>
                  <p className="text-2xl font-bold text-[#00a6b5] mb-2">
                    Harga Nego
                  </p>
                  <p className="text-sm text-gray-600">Sesuai Kebutuhan</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Meeting Point Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Meeting Point
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <MapPin size={32} className="text-[#00a6b5] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Sumbawa Besar</h3>
                  <p className="text-gray-600">Titik kumpul utama untuk trip ke Pulau Kenawa</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <MapPin size={32} className="text-[#00a6b5] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Pelabuhan Poto Tano</h3>
                  <p className="text-gray-600">Meeting point alternatif di pelabuhan</p>
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
            Pilihan Paket Tour Sumbawa Lainnya
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-12">
            Selain Pulau Kenawa, berikut berbagai pilihan paket wisata lainnya yang bisa anda nikmati bersama keluarga, kerabat dan sahabat saat berlibur ke Pulau Sumbawa.
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

            <Link href="/moyo-island-adventure" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
                <div className="relative h-48">
                  <Image
                    src="/images/moyo/hero.jpg"
                    alt="Pulau Moyo"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-900 group-hover:text-[#00a6b5]">
                    Paket Wisata Pulau Moyo
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

      {/* About Pulau Kenawa Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Paket Wisata Pulau Kenawa
          </h2>

          <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/kenawa/beach.jpg"
              alt="Pulau Kenawa"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Pulau Kenawa adalah salah satu destinasi wisata tersembunyi di Sumbawa yang menawarkan keindahan alam yang luar biasa. Dengan pantai pasir putihnya yang lembut dan air laut yang kristal jernih, pulau ini menjadi tempat yang sempurna untuk bersantai dan menikmati keindahan alam.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Pulau Kenawa terkenal dengan pemandangan sunset yang spektakuler. Setiap sore, langit di atas pulau ini berubah menjadi kanvas warna-warni yang memukau, menciptakan momen yang sempurna untuk fotografi dan relaksasi.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Selain sunset, pulau ini juga menawarkan aktivitas snorkeling dengan terumbu karang yang masih alami dan beragam biota laut yang menarik. Air lautnya yang jernih memungkinkan Anda untuk melihat keindahan bawah laut dengan jelas.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Tunggu apalagi, segera booking paket tour ke Pulau Kenawa bersama <span className="font-bold text-[#00a6b5]">Go Whale Shark Sumbawa</span> dan dapatkan pengalaman liburan seru yang tak terlupakan!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0a3d52] text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Menyaksikan Sunset di Kenawa?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Hubungi kami untuk informasi lebih lanjut dan booking paket wisata Anda
          </p>
          <a
            href="https://wa.me/6282341331975?text=Halo,%20saya%20ingin%20booking%20Paket%20Wisata%20Pulau%20Kenawa"
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
