import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-start">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 max-w-3xl">
            Explore Sumbawa's Best With Us
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mb-8">
            Snorkeling with Whale Shark Sumbawa
          </p>
          <a
            href="https://wa.me/6282341331975?text=Halo%20Adventure%20Sumbawa%20Island,%20saya%20ingin%20booking%20trip"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
          >
            <MessageCircle size={24} />
            Book via WhatsApp
          </a>
        </div>
      </section>

      {/* Pilihan Paket Wisata Di Lombok */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold mb-4">
                Paket Wisata Populer
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Jelajahi keindahan Sumbawa dengan paket wisata pilihan kami. Dari snorkeling dengan hiu paus hingga eksplorasi pulau-pulau eksotis.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <PackageCard
                image="/images/hero.jpg"
                title="Whale Shark Experience - Labuhan Jambu"
                href="/whale-shark-experience"
              />
              <PackageCard
                image="/images/hero.jpg"
                title="Moyo Island Adventure"
                href="/moyo-island-adventure"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PackageCard
              image="/images/hero.jpg"
              title="Kenawa Sunset Tour"
              href="/kenawa-sunset-tour"
            />
            <PackageCard
              image="/images/hero.jpg"
              title="Private Trip Whale Shark"
              href="/private-trip-whale-shark"
            />
            <PackageCard
              image="/images/hero.jpg"
              title="Open Trip Whale Shark"
              href="/open-trip-whale-shark"
            />
            <PackageCard
              image="/images/hero.jpg"
              title="Sumbawa Island Hopping"
              href="/sumbawa-island-hopping"
            />
          </div>
        </div>
      </section>

      {/* Pilihan Paket Wisata Di Sumbawa */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold mb-4">
                Tentang Kami
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Adventure Sumbawa Island adalah operator wisata lokal yang berpengalaman di Sumbawa. Kami spesialis dalam pengalaman snorkeling dengan hiu paus di Teluk Saleh, Labuhan Jambu, serta eksplorasi pulau-pulau eksotis di sekitar Sumbawa.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <PackageCard
                image="/images/hero.jpg"
                title="Local Expert - Tim Lokal Berpengalaman"
                href="/about"
              />
              <PackageCard
                image="/images/hero.jpg"
                title="Safety First - Keselamatan Prioritas"
                href="/about"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <PackageCard
              image="/images/hero.jpg"
              title="Eco-Conscious - Ramah Lingkungan"
              href="/about"
            />
            <PackageCard
              image="/images/hero.jpg"
              title="Professional Service"
              href="/about"
            />
          </div>
        </div>
      </section>

      {/* Pilihan Paket Trekking Gunung */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold mb-4">
                Meeting Point & Pickup
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Kami menyediakan layanan pickup dari berbagai lokasi untuk kemudahan perjalanan Anda ke Labuhan Jambu, Sumbawa.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <PackageCard
                image="/images/hero.jpg"
                title="Pickup dari Pelabuhan Poto Tano"
                href="/contact"
              />
              <PackageCard
                image="/images/hero.jpg"
                title="Pickup dari Bandara/Kota Sumbawa Besar"
                href="/contact"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pilihan Paket Open Trip */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold mb-4">
                Galeri & Testimoni
              </h2>
              <p className="text-gray-700 mb-2">
                <span className="italic">(Pengalaman Pelanggan Kami)</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                Lihat momen-momen indah dari trip kami dan baca testimoni dari pelanggan yang puas dengan layanan Adventure Sumbawa Island.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <PackageCard
                image="/images/hero.jpg"
                title="Galeri Foto & Video"
                href="/gallery"
              />
              <PackageCard
                image="/images/hero.jpg"
                title="Testimoni Pelanggan"
                href="/testimonials"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-[#003d4a] text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-6">Adventure Sumbawa Island</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Operator wisata lokal terpercaya di Sumbawa, spesialis snorkeling dengan hiu paus dan eksplorasi pulau-pulau eksotis. Kami berkomitmen memberikan pengalaman wisata yang aman, berkesan, dan ramah lingkungan.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MessageCircle size={20} />
                    <a href="https://wa.me/6282341331975" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      +62 823-4133-1975
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <a href="mailto:adventursumbawisland@gmail.com" className="hover:text-white transition-colors">
                      adventursumbawisland@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Lokasi & Meeting Point</h3>

              <div className="mb-6">
                <h4 className="font-bold mb-2">Kantor Operasional</h4>
                <p className="text-gray-300">
                  Labuhan Jambu, Kabupaten Sumbawa, Nusa Tenggara Barat - 84384
                </p>
              </div>

              <div className="mb-8">
                <h4 className="font-bold mb-3">Pickup Tersedia Dari:</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Pelabuhan Poto Tano</li>
                  <li>• Bandara/Kota Sumbawa Besar</li>
                  <li>• Pelabuhan Sape</li>
                  <li>• Lombok ke Sumbawa</li>
                  <li>• Labuhan Jambu</li>
                </ul>
              </div>

              <div className="flex gap-4">
                <SocialIcon href="https://www.instagram.com/adventure_sumbawaisland/" icon="instagram" />
                <SocialIcon href="https://www.instagram.com/go_whaleshark.sumbawa/" icon="instagram" />
                <SocialIcon href="https://www.tiktok.com/@adventuresumbawaisland" icon="tiktok" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-gray-400 py-6">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">© 2025 Adventure Sumbawa Island</p>
            <div className="flex gap-4 text-sm">
              <Link href="/about" className="hover:text-white transition-colors">
                Tentang Kami
              </Link>
              <span>|</span>
              <Link href="/tours" className="hover:text-white transition-colors">
                Paket Wisata
              </Link>
              <span>|</span>
              <Link href="/gallery" className="hover:text-white transition-colors">
                Galeri
              </Link>
              <span>|</span>
              <Link href="/contact" className="hover:text-white transition-colors">
                Kontak
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function PackageCard({ image, title, href }: { image: string; title: string; href: string }) {
  return (
    <Link href={href} className="group">
      <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="relative h-64">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white font-bold text-lg">{title}</h3>
        </div>
      </div>
    </Link>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: string }) {
  const iconMap = {
    tiktok: "♪",
    facebook: <Facebook size={20} />,
    twitter: <Twitter size={20} />,
    instagram: <Instagram size={20} />,
    youtube: <Youtube size={20} />,
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors text-[#003d4a]"
    >
      {iconMap[icon as keyof typeof iconMap] || icon[0].toUpperCase()}
    </a>
  );
}
