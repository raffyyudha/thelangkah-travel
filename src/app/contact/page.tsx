import Image from "next/image";
import { MessageCircle, Phone, Mail, MapPin, Instagram, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Kontak Kami | Go Whale Shark Sumbawa",
  description: "Hubungi Go Whale Shark Sumbawa untuk informasi dan booking paket wisata Sumbawa. WhatsApp, Email, dan lokasi kantor kami.",
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
                  href="https://wa.me/6282341331975?text=Halo%20Go%20Whale%20Shark%20Sumbawa,%20saya%20ingin%20booking%20trip"
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

      <Footer />
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
