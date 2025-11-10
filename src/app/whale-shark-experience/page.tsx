"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { DropdownSection, PricingTable, DynamicTourImages } from "@/components/TourComponents";
import BookingModal from "@/components/BookingModal";
import { DynamicRelatedTour } from "@/components/DynamicRelatedTour";
import { useLanguage } from "@/contexts/LanguageContext";
import { tour6Translations } from "@/translations/tour6";

export default function WhaleSharkExperiencePage() {
  const { language } = useLanguage();
  const t = language === 'id' ? tour6Translations.id : tour6Translations.en;
  const { t: commonT } = useLanguage();
  
  const [currentReview, setCurrentReview] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const reviews = [
    {
      name: "Davinia Stimson",
      time: "6 months ago",
      rating: 5,
      text: "Wir waren drei Tage mit dem Team unterwegs und es war vom Anfang bis zum Schluss ein wunderbares Erlebnis - sowohl organisatorisch als auch menschlich!",
      initial: "D",
      verified: true
    },
    {
      name: "Grant Turck",
      time: "5 months ago",
      rating: 5,
      text: "Swimming with whale sharks has always been a dream—but thanks to Sumbawa Adventour, that dream became a reality beyond anything I could've imagined!",
      initial: "G",
      verified: true
    },
    {
      name: "Holly Atkinson",
      time: "4 months ago",
      rating: 5,
      text: "This was the experience of a lifetime and a huge reason for this was the company's (and specifically our tour guide Dan's) flexibility, knowledge and all-round brilliance.",
      initial: "H",
      verified: true
    },
    {
      name: "rizqika aprilia",
      time: "11 months ago",
      rating: 5,
      text: "An Unforgettable Sumbawa adventour, My trip to Sumbawa was a journey of discovery and wonder. It began in Teluk Saleh, where I swam with gentle whale sharks—a surreal and humbling experience.",
      initial: "R",
      verified: true
    },
    {
      name: "sofia akmal",
      time: "8 months ago",
      rating: 5,
      text: "Perfect Trip to Sumbawa! with this guys & company. Just got back from an awesome family trip to Sumbawa, and it was all thanks to Sumbawa Travel Agent!",
      initial: "S",
      verified: true
    }
  ];

  const handleBooking = () => {
    const message = encodeURIComponent("Halo, saya ingin booking Whale Shark Sumbawa Tour");
    window.open(`https://wa.me/6282341331975?text=${message}`, "_blank");
  };

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <main className="min-h-screen bg-white">
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sumbawa Whale Shark Tours
          </h1>

          {/* Featured Image - Dynamic from Database */}
          <DynamicTourImages tourName="whale-shark-experience" />

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Sumbawa Adventour specializes in offering unique experiences with sumbawa whale sharks in Saleh Bay
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              The presence of whalesharks sumbawa in Saleh Bay has been observed for many years. Their natural appearance in this bay is largely due to the regular activities of local fishermen from Sumbawa Island, who work & fishing in the area year-round.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Sumbawa Adventour!, we specialize in offering Sumbawa Whale Shark Tours in the Saleh Bay area. Here, you'll have the unique opportunity to encounter the world's largest fish – the whale shark. These gentle giants are harmless and easily identifiable by their distinct patterns. Moreover, they are commonly found in the warm tropical waters of Sumbawa, particularly in Saleh Bay, near Mount <a href="https://en.wikipedia.org/wiki/Mount_Tambora" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Tambora</a>, and southeast of Moyo Island.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Dive into the stunning underwater world, with its crystal-clear waters and unforgettable experiences, with all our experienced team ensures your safety and enjoyment.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8 font-semibold">
              Book your spot Now for an unforgettable whale shark snorkeling adventure in Sumbawa's aquatic paradise!
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Sumbawa Whale Sharks Tour Base on Pick Up Location
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Sumbawa Whale Shark Daily Tour start & finish Sumbawa Besar
            </h3>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Whale Shark Sumbawa 2 Days 1 Night Tour start & finish Sumbawa Besar
            </h3>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Sumbawa Whale Shark & Moyo Island Tour 3 Days 2 Night
            </h3>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Whale Shark Sumbawa & Moyo Island Tour 1 Day Fast Boat
            </h3>

            <h3 className="text-xl font-bold text-gray-900 mb-8">
              Whale Shark in Sumbawa, Moyo Island & Kenawa Island - 4 Days 3 Nights
            </h3>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Whale Shark Saleh Bay Sumbawa pricing revert to Indonesian Rupiah (IDR)</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Since we cannot control Mother Nature, and due to the sea conditions on the day of the tour, it is possible that the whale shark sighting may not occur. Therefore, we will only refund IDR 1,000,000 from your total payment.</li>
              <li>Please note that lunch is not included in this package. However, we can arrange to take you to a local restaurant before returning you to your accommodation in Sumbawa Besar City.</li>
            </ul>

            {/* Pricing Table */}
            <PricingTable
              title="Harga Tour"
              data={[
                {
                  participants: "2-10",
                  openTrip: "IDR. 1,450,000/orang",
                  fullPrivate: "IDR. 2,500,000/orang"
                }
              ]}
            />

            <div className="text-center mb-8">
              <p className="text-gray-900 text-lg font-bold mb-6">Intrested with this Program Tour book Here:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={handleBooking}
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all"
                >
                  <MessageCircle size={20} />
                  Chat On WhatsApp
                </button>
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-blue-900 hover:bg-blue-950 text-white px-10 py-3 rounded-full font-semibold transition-all"
                >
                  Book Now
                </button>
              </div>
            </div>

            {/* Customer Reviews Slider */}
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                <a href="https://maps.app.goo.gl/rjMm7EoFXzLLF4XU7" className="hover:underline" target="_blank" rel="noopener noreferrer">
                  Sumbawa Whale Shark Costumer Reviews (click here):
                </a>
              </h3>
              
              {/* Review Slider */}
              <div className="relative max-w-3xl mx-auto mb-8">
                {/* Navigation Buttons */}
                <button
                  onClick={prevReview}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <button
                  onClick={nextReview}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>

                {/* Review Card */}
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {reviews[currentReview].initial}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-gray-900">{reviews[currentReview].name}</h4>
                        {reviews[currentReview].verified && (
                          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex text-yellow-400">
                          {[...Array(reviews[currentReview].rating)].map((_, i) => (
                            <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{reviews[currentReview].time}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-left leading-relaxed">{reviews[currentReview].text}</p>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentReview ? 'bg-blue-600 w-8' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to review ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Dropdown Sections */}
            <DropdownSection title="Syarat & Ketentuan">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Whale Shark Sumbawa Tour package is PRIVATE and will not be shared with other</li>
                <li>Children 5 years old and under at the same time of tour are free of charge</li>
                <li>All minors must be accompanied by parents/guardians at all time.</li>
                <li>Payment of a 40% deposit is required to secure a package reservation</li>
                <li>Flexible tour dates are available upon request</li>
                <li>Once you decide to book the trip please provide us with details of your feet For snorkeling and swimming fins</li>
                <li>The remaining payment can be transferred/cash when you meet our guide</li>
              </ul>
            </DropdownSection>

            <DropdownSection title="Pembatalan & Penjadwalan ulang">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Cancellation up to 3 days before the event: a 25% cancellation fee will apply, based on the total booking price.</li>
                <li>Cancellation 3 day before or on the day of the event: The deposit is non-refundable, but you will get the opportunity to do the tour any other day as scheduled with no extra charge</li>
                <li>No-show on the day of the event: Regardless of prior cancellation, the payment is non-refundable.</li>
                <li>Force majeure (e.g., bad weather, natural disasters, war): The guide reserves the right to cancel or modify the schedule/itinerary for the safety of participants and crew. Any changes or cancellations due to force majeure are non-refundable</li>
              </ul>
            </DropdownSection>

            <DropdownSection title="Hiu Paus / Whale Shark Tour FAQ'S">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>These sumbawa whale shark roam the ocean in search of food all the year in sumbawa saleh bay, they gather around floating fishing platforms. These platforms use strong lights that attract plankton and fish – the perfect breakfast for whale sharks!</li>
                <li>forbidden to touch heir skin is covered in a sensitive mucus membrane that should not be touched, can harm the whale shark and disrupt their natural behavior</li>
                <li>We provide all the equipment you need (snorkel, mask and fins), but feel free to bring your own. We also suggest bringing ear plugs to reduce of the loud sound of the local boat's engine that will be used to go to the Whale Shark point</li>
                <li>As much we cannot control Mother Nature. Sea conditions on the day may impact water visibility or other factors beyond our control. Therefore, we cannot offer any guarantees or refunds regarding sightings.</li>
                <li>However, we maintain strong coordination with the all the local & Crews to ensure you visit the Whale Shark Sumbawa Congregation Point at the best possible time.Thank you for your understanding as we strive to provide the best experience in harmony with nature.</li>
              </ul>
            </DropdownSection>
          </div>
        </div>
      </article>

      {/* Pilihan Paket Tour Sumbawa Lainnya */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Pilihan Paket Tour Sumbawa Lainnya
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-12">
            Pulau Moyo terletak di Kabupaten Sumbawa, Provinsi Nusa Tenggara Barat. Selain Pulau Moyo, berikut berbagai pilihan paket wisata lainnya yang bisa anda nikmati bersama keluarga, kerabat dan sahabat saat berlibur ke Pulau Sumbawa.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <DynamicRelatedTour
              tourName="whale-shark-start-sumbawa"
              title="Tour Hiu Paus Teluk Saleh Sumbawa Harian Start Finish Kota Sumbawa Besar"
              href="/whale-shark-start-sumbawa"
            />
            <DynamicRelatedTour
              tourName="whale-shark-1day-labuhan-jambu"
              title="Trip 1 Hari Hiu Paus (Start & Finish Labuhan Jambu)"
              href="/whale-shark-1day-labuhan-jambu"
            />
            <DynamicRelatedTour
              tourName="whale-shark-speedboat"
              title="Trip 1 Hari Hiu Paus (Menggunakan Speed Boat)"
              href="/whale-shark-speedboat"
            />
            <DynamicRelatedTour
              tourName="whale-shark-2d1n"
              title="Tour Wisata Hiu Paus Sumbawa 2 Hari 1 Malam start & finish Sumbawa Besar"
              href="/whale-shark-2d1n"
            />
            <DynamicRelatedTour
              tourName="whale-shark-2d1n-poto-tano"
              title="2D1N Trip Hiu Paus (Start & Finish Area Poto Tano)"
              href="/whale-shark-2d1n-poto-tano"
            />
            <DynamicRelatedTour
              tourName="whale-shark-2d1n-sekongkang"
              title="2D1N Trip Hiu Paus (Start & Finish Area Sekongkang)"
              href="/whale-shark-2d1n-sekongkang"
            />
            <DynamicRelatedTour
              tourName="whale-shark-start-labuhan-jambu"
              title="Paket Tour Hiu Paus Sumbawa 2 Hari 1 Malam start & finish Lombok"
              href="/whale-shark-start-labuhan-jambu"
            />
            <DynamicRelatedTour
              tourName="combo-moyo-whale-shark"
              title="Paket Tour Sumbawa 3 Hari 2 Malam Pulau Moyo - Hiu Paus Teluk Saleh"
              href="/combo-moyo-whale-shark"
            />
            <DynamicRelatedTour
              tourName="whale-shark-moyo-kenawa-lombok"
              title="3D2N Trip Hiu Paus - Pulau Moyo - Kenawa (Start & Finish Area Lombok)"
              href="/whale-shark-moyo-kenawa-lombok"
            />
            <DynamicRelatedTour
              tourName="trip-4d3n-sumbawa"
              title="Paket Tour Sumbawa 4 Hari 3 Malam Wisata Pulau Moyo, Pulau Kenawa & Hiu Paus"
              href="/trip-4d3n-sumbawa"
            />
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        tourName="Whale Shark Sumbawa Tour"
      />
    </main>
  );
}
