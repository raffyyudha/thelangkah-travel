import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Clock, Users, MapPin, Check, X, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Paket Wisata Pulau Kenawa | Adventure Sumbawa Island",
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
              Tunggu apalagi, booking paket wisatanya bersama <span className="font-bold text-[#00a6b5]">Adventure Sumbawa Island</span>!
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
              Tunggu apalagi, segera booking paket tour ke Pulau Kenawa bersama <span className="font-bold text-[#00a6b5]">Adventure Sumbawa Island</span> dan dapatkan pengalaman liburan seru yang tak terlupakan!
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
    </main>
  );
}
