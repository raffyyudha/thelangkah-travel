"use client";

import Image from "next/image";
import { Star, MessageCircle, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Footer } from "@/components/Footer";
import { googleReviews } from "@/data/googleReviews";

// Convert Google Reviews to testimonials format
const testimonials = [
  ...googleReviews.map(review => ({
    id: review.id,
    name: review.name,
    location: "Google Maps Reviewer",
    rating: review.rating,
    date: review.date,
    platform: "Google Maps",
    image: "/images/whale-shark/IMG_2992.JPG",
    text: review.text,
  })),
  {
    id: 100,
    name: "Budi Santoso",
    location: "Jakarta, Indonesia",
    rating: 5,
    date: "September 2024",
    platform: "Instagram",
    image: "/images/hero.jpg",
    text: "Pengalaman yang tak terlupakan! Guide sangat ramah dan membantu. Mereka sangat mengerti tentang hiu paus dan lokasi terbaik. Sangat recommended untuk yang ingin explore Sumbawa. Pasti akan kembali lagi!",
  },
  {
    id: 101,
    name: "Emma Wilson",
    location: "United Kingdom",
    rating: 5,
    date: "Agustus 2024",
    platform: "TripAdvisor",
    image: "/images/hero.jpg",
    text: "Best tour operator in Sumbawa! Everything was well organized from pickup to drop off. The whale shark encounter was breathtaking. The team's passion for conservation is evident in everything they do.",
  },
  {
    id: 102,
    name: "Rizky Pratama",
    location: "Surabaya, Indonesia",
    rating: 5,
    date: "Agustus 2024",
    platform: "Google Maps",
    image: "/images/hero.jpg",
    text: "Trip ke Pulau Moyo sangat memuaskan! Air terjunnya indah banget dan snorkelingnya juga keren. Tim Adventure Sumbawa Island sangat profesional dan ramah. Harga juga reasonable. Worth it banget!",
  },
  {
    id: 103,
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    date: "Juli 2024",
    platform: "Instagram",
    image: "/images/hero.jpg",
    text: "Incredible adventure! Swimming with whale sharks was a dream come true. The guides were experienced and made sure everyone had a great time. The boat was comfortable and the lunch was delicious. 10/10!",
  },
  {
    id: 104,
    name: "Dewi Lestari",
    location: "Bali, Indonesia",
    rating: 5,
    date: "Juli 2024",
    platform: "Google Maps",
    image: "/images/hero.jpg",
    text: "Sunset di Kenawa Island benar-benar spektakuler! Pemandangannya luar biasa indah. Guide kami sangat helpful dan tahu spot foto terbaik. Terima kasih Adventure Sumbawa Island untuk pengalaman yang amazing!",
  },
  {
    id: 105,
    name: "James Anderson",
    location: "USA",
    rating: 5,
    date: "Juni 2024",
    platform: "TripAdvisor",
    image: "/images/hero.jpg",
    text: "Outstanding service from start to finish! The team went above and beyond to ensure we had an unforgettable experience. The whale sharks were magnificent and the crew's knowledge about them was impressive.",
  },
  {
    id: 106,
    name: "Siti Nurhaliza",
    location: "Bandung, Indonesia",
    rating: 5,
    date: "Juni 2024",
    platform: "Instagram",
    image: "/images/hero.jpg",
    text: "Island hopping tour nya seru banget! Kita explore beberapa pulau dalam sehari. Semuanya terorganisir dengan baik. Guide nya friendly dan helpful. Definitely will come back with more friends!",
  },
  {
    id: 107,
    name: "David Martinez",
    location: "Spain",
    rating: 5,
    date: "Mei 2024",
    platform: "Google Maps",
    image: "/images/hero.jpg",
    text: "What an amazing experience! The whale shark encounter was the highlight of our Indonesia trip. The team was professional, friendly, and very safety-conscious. Great value for money!",
  },
];

export default function TestimonialsPage() {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-start">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Testimonials"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 max-w-3xl">
            {t.testimonialsTitle}
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            {t.testimonialsDesc}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold text-[#00a6b5] mb-2">500+</div>
              <div className="text-gray-600 font-medium">{t.testimonialsHappyCustomers}</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-[#00a6b5] mb-2">4.9</div>
              <div className="text-gray-600 font-medium">{t.testimonialsAverageRating}</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-[#00a6b5] mb-2">100%</div>
              <div className="text-gray-600 font-medium">{t.testimonialsSatisfactionRate}</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-[#00a6b5] mb-2">1000+</div>
              <div className="text-gray-600 font-medium">{t.testimonialsSuccessfulTrips}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00a6b5] to-[#008c9a] text-white">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.testimonialsCTATitle}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t.testimonialsCTADesc}
          </p>
          <a
            href="https://wa.me/6282341331975?text=Halo%20Adventure%20Sumbawa%20Island,%20saya%20ingin%20booking%20trip"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#00a6b5] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            <MessageCircle size={24} />
            {t.testimonialsCTAButton}
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
                {t.footerDesc}
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
                    <span className="font-semibold">150+ {t.footerReviews}</span>
                    <span className="ml-2 text-gray-300">Google</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">Hubungi Kami</h3>

              <div className="space-y-4">
                {/* WhatsApp */}
                <a href="https://wa.me/6282341331975" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">WhatsApp</p>
                    <p className="text-sm">+62 823-4133-1975</p>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:adventursumbawisland@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Email</p>
                    <p className="text-sm">adventursumbawisland@gmail.com</p>
                  </div>
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/adventure_sumbawaisland/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Instagram</p>
                    <p className="text-sm">@adventure_sumbawaisland</p>
                    <p className="text-xs text-gray-400">@go_whaleshark.sumbawa</p>
                  </div>
                </a>

                {/* TikTok */}
                <a href="https://www.tiktok.com/@adventuresumbawaisland" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">TikTok</p>
                    <p className="text-sm">@adventuresumbawaisland</p>
                  </div>
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

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Rating */}
      <div className="flex items-center gap-1 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 text-sm md:text-base mb-4 italic leading-relaxed">
        "{testimonial.text}"
      </p>

      {/* Customer Info */}
      <div className="flex items-center gap-2 md:gap-3 pt-3 border-t border-gray-100">
        <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-gray-900 text-xs md:text-sm truncate">{testimonial.name}</p>
          <p className="text-xs text-gray-500 truncate">{testimonial.location}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-xs text-gray-400 hidden md:block">{testimonial.platform}</p>
          <p className="text-xs text-gray-400">{testimonial.date}</p>
        </div>
      </div>
    </div>
  );
}
