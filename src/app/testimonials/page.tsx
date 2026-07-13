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
    text: "Trip ke Pulau Moyo sangat memuaskan! Air terjunnya indah banget dan snorkelingnya juga keren. Tim Go Whale Shark Sumbawa sangat profesional dan ramah. Harga juga reasonable. Worth it banget!",
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
    text: "Sunset di Kenawa Island benar-benar spektakuler! Pemandangannya luar biasa indah. Guide kami sangat helpful dan tahu spot foto terbaik. Terima kasih Go Whale Shark Sumbawa untuk pengalaman yang amazing!",
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
            href="https://wa.me/6282341331975?text=Halo%20Go%20Whale%20Shark%20Sumbawa,%20saya%20ingin%20booking%20trip"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#00a6b5] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            <MessageCircle size={24} />
            {t.testimonialsCTAButton}
          </a>
        </div>
      </section>

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
