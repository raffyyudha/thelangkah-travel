import Image from "next/image";
import Link from "next/link";

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

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Exact copy dari The Langkah Travel */}
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
          <p className="text-white text-lg md:text-xl max-w-2xl">
            Adventure Sumbawa Island merupakan operator wisata lokal terbaik yang menyediakan paket wisata ke Sumbawa, khususnya snorkeling dengan hiu paus di Labuhan Jambu
          </p>
        </div>
      </section>

      {/* Pilihan Paket Wisata - Exact layout dari The Langkah Travel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold mb-4">
                Paket Wisata Populer
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Paket wisata Sumbawa bersama Adventure Sumbawa Island dengan destinasi terlengkap dan pilihan paket wisata yang beragam. Dari snorkeling dengan hiu paus hingga eksplorasi pulau-pulau eksotis.
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

      {/* Section 2 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold mb-4">
                Tentang Kami
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Adventure Sumbawa Island adalah operator wisata lokal yang berpengalaman di Sumbawa. Kami spesialis dalam pengalaman snorkeling dengan hiu paus di Teluk Saleh, Labuhan Jambu.
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

      {/* Section 3 */}
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

      {/* Section 4 */}
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

      {/* Company Info Section - Exact copy dari The Langkah Travel */}
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
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
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
                <a href="https://www.instagram.com/adventure_sumbawaisland/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors text-[#003d4a]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://www.instagram.com/go_whaleshark.sumbawa/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors text-[#003d4a]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://www.tiktok.com/@adventuresumbawaisland" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors text-[#003d4a] font-bold text-xl">
                  ♪
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Exact copy dari The Langkah Travel */}
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
