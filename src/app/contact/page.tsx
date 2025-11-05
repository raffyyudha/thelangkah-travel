import Image from "next/image";
import { MessageCircle, Phone, Mail, MapPin, Instagram, Clock } from "lucide-react";

export const metadata = {
  title: "Kontak Kami | Adventure Sumbawa Island",
  description: "Hubungi Adventure Sumbawa Island untuk informasi dan booking paket wisata Sumbawa. WhatsApp, Email, dan lokasi kantor kami.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-start">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/destinations/sumbawa.jpg"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 max-w-3xl">
            Hubungi Kami
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            Kami siap membantu merencanakan petualangan Anda di Sumbawa. Hubungi kami melalui WhatsApp, email, atau kunjungi kantor kami di Labuhan Jambu.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold mb-8 text-gray-900">
                Informasi Kontak
              </h2>

              {/* WhatsApp */}
              <a
                href="https://wa.me/6282341331975"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-900">WhatsApp</h3>
                  <p className="text-gray-600 mb-2">Cara tercepat untuk menghubungi kami</p>
                  <p className="text-green-600 font-semibold">+62 823-4133-1975</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+6282341331975"
                className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-900">Telepon</h3>
                  <p className="text-gray-600 mb-2">Hubungi kami langsung</p>
                  <p className="text-blue-600 font-semibold">+62 823-4133-1975</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:adventursumbawisland@gmail.com"
                className="flex items-start gap-4 p-6 bg-purple-50 rounded-2xl hover:bg-purple-100 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-900">Email</h3>
                  <p className="text-gray-600 mb-2">Kirim pertanyaan via email</p>
                  <p className="text-purple-600 font-semibold">adventursumbawisland@gmail.com</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-6 bg-orange-50 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-900">Lokasi</h3>
                  <p className="text-gray-600 mb-2">Kantor operasional kami</p>
                  <p className="text-orange-600 font-semibold">
                    Labuhan Jambu, Kabupaten Sumbawa<br />
                    Nusa Tenggara Barat - 84384
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4 p-6 bg-teal-50 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-900">Jam Operasional</h3>
                  <p className="text-gray-600 mb-2">Kami siap melayani Anda</p>
                  <p className="text-teal-600 font-semibold">
                    Setiap Hari: 07:00 - 20:00 WITA<br />
                    WhatsApp 24/7
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Kirim Pesan
              </h2>
              <p className="text-gray-600 mb-8">
                Isi form di bawah ini dan kami akan segera menghubungi Anda
              </p>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#00a6b5] focus:ring-2 focus:ring-[#00a6b5]/20 outline-none transition-all"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#00a6b5] focus:ring-2 focus:ring-[#00a6b5]/20 outline-none transition-all"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#00a6b5] focus:ring-2 focus:ring-[#00a6b5]/20 outline-none transition-all"
                    placeholder="+62 xxx xxxx xxxx"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Paket Wisata yang Diminati
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#00a6b5] focus:ring-2 focus:ring-[#00a6b5]/20 outline-none transition-all">
                    <option>Pilih paket wisata</option>
                    <option>Whale Shark Experience</option>
                    <option>Private Trip Whale Shark</option>
                    <option>Open Trip Whale Shark</option>
                    <option>Moyo Island Adventure</option>
                    <option>Kenawa Sunset Tour</option>
                    <option>Sumbawa Island Hopping</option>
                    <option>Custom Trip</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#00a6b5] focus:ring-2 focus:ring-[#00a6b5]/20 outline-none transition-all resize-none"
                    placeholder="Ceritakan rencana perjalanan Anda..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00a6b5] hover:bg-[#008c9a] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  Kirim Pesan
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-4">Atau hubungi langsung via WhatsApp</p>
                <a
                  href="https://wa.me/6282341331975?text=Halo%20Adventure%20Sumbawa%20Island,%20saya%20ingin%20booking%20trip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all"
                >
                  <MessageCircle size={20} />
                  Chat via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Points Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Meeting Point & Pickup
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Kami menyediakan layanan pickup dari berbagai lokasi untuk kemudahan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MeetingPointCard
              title="Labuhan Jambu"
              description="Meeting point utama kami"
              icon="🏖️"
            />
            <MeetingPointCard
              title="Pelabuhan Poto Tano"
              description="Pickup dari pelabuhan ferry"
              icon="⛴️"
            />
            <MeetingPointCard
              title="Bandara Sumbawa Besar"
              description="Pickup dari bandara"
              icon="✈️"
            />
            <MeetingPointCard
              title="Kota Sumbawa Besar"
              description="Pickup dari hotel di kota"
              icon="🏨"
            />
            <MeetingPointCard
              title="Pelabuhan Sape"
              description="Pickup dari pelabuhan Sape"
              icon="🚢"
            />
            <MeetingPointCard
              title="Lombok - Sumbawa"
              description="Antar jemput dari Lombok"
              icon="🚗"
            />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
            Lokasi Kami
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126254.89283524!2d117.4!3d-8.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcbf0e0e0e0e0e1%3A0x0!2sLabuhan%20Jambu!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-r from-[#00a6b5] to-[#008c9a] text-white">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Follow Kami di Social Media
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ikuti perjalanan kami dan lihat update terbaru dari petualangan di Sumbawa
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/adventure_sumbawaisland/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-all transform hover:scale-110"
            >
              <Instagram size={32} className="text-[#00a6b5]" />
            </a>
            <a
              href="https://www.instagram.com/go_whaleshark.sumbawa/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-all transform hover:scale-110"
            >
              <Instagram size={32} className="text-[#00a6b5]" />
            </a>
            <a
              href="https://www.tiktok.com/@adventuresumbawaisland"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-all transform hover:scale-110 text-[#00a6b5] font-bold text-2xl"
            >
              ♪
            </a>
          </div>
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

function MeetingPointCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
