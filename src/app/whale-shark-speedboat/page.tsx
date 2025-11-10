"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { DropdownSection, PricingTable, DynamicTourImages } from "@/components/TourComponents";
import BookingModal from "@/components/BookingModal";
import { DynamicRelatedTour } from "@/components/DynamicRelatedTour";
import { useLanguage } from "@/contexts/LanguageContext";
import { tour8Translations } from "@/translations/tour8";

export default function WhaleSharkSpeedboatPage() {
  const { language } = useLanguage();
  const t = language === 'id' ? tour8Translations.id : tour8Translations.en;
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
    const message = encodeURIComponent("Halo, saya ingin booking Whale Shark Sumbawa Daily Trip");
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
            Trip 1 Hari Hiu Paus (Menggunakan Speed Boat)
          </h1>

          {/* Featured Image - Dynamic from Database */}
          <DynamicTourImages tourName="whale-shark-speedboat" />

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t.title}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              {t.subtitle}
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              {t.description1}
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              {t.description2}
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t.programTitle}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>{t.itinerary.time1}</strong> : {t.itinerary.desc1}
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>{t.itinerary.time2}</strong> : {t.itinerary.desc2}
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>{t.itinerary.time3}</strong> : {t.itinerary.desc3}
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>{t.itinerary.time4}</strong> : {t.itinerary.desc4}
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>{t.itinerary.time5}</strong> : {t.itinerary.desc5}
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>{t.itinerary.time6}</strong> : {t.itinerary.desc6}
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>{t.itinerary.time7}</strong> : {t.itinerary.desc7}
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>{t.itinerary.time8}</strong> : {t.itinerary.desc8}
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              <strong>{t.itinerary.time9}</strong> : {t.itinerary.desc9}
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t.inclusionsTitle}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
              {t.inclusions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>

          <h4 className="text-xl font-bold mb-4 text-gray-900">{t.exclusionsTitle}</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
            {t.exclusions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h4 className="text-xl font-bold mb-4 text-gray-900">{t.whatToBringTitle}</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
            {t.whatToBring.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">{t.pricingTitle}</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            {t.pricingNotes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>

            {/* Pricing Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
                <thead>
                  <tr className="bg-green-600 text-white">
                    <th className="py-4 px-6 text-left font-bold text-sm md:text-base">Peserta</th>
                    <th className="py-4 px-6 text-left font-bold text-sm md:text-base">Harga Per Orang</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="bg-gray-50"><td className="py-4 px-6 text-gray-900 text-sm md:text-base">1 Orang</td><td className="py-4 px-6 text-gray-900 text-sm md:text-base">Rp 9,910,000</td></tr>
                  <tr className="bg-white"><td className="py-4 px-6 text-gray-900 text-sm md:text-base">2 Orang</td><td className="py-4 px-6 text-gray-900 text-sm md:text-base">Rp 5,020,000</td></tr>
                  <tr className="bg-gray-50"><td className="py-4 px-6 text-gray-900 text-sm md:text-base">3 Orang</td><td className="py-4 px-6 text-gray-900 text-sm md:text-base">Rp 3,400,000</td></tr>
                  <tr className="bg-white"><td className="py-4 px-6 text-gray-900 text-sm md:text-base">4 Orang</td><td className="py-4 px-6 text-gray-900 text-sm md:text-base">Rp 2,580,000</td></tr>
                  <tr className="bg-gray-50"><td className="py-4 px-6 text-gray-900 text-sm md:text-base">5 Orang</td><td className="py-4 px-6 text-gray-900 text-sm md:text-base">Rp 2,100,000</td></tr>
                  <tr className="bg-white"><td className="py-4 px-6 text-gray-900 text-sm md:text-base">6 Orang</td><td className="py-4 px-6 text-gray-900 text-sm md:text-base">Rp 1,780,000</td></tr>
                  <tr className="bg-gray-50"><td className="py-4 px-6 text-gray-900 text-sm md:text-base">7 Orang</td><td className="py-4 px-6 text-gray-900 text-sm md:text-base">Rp 1,620,000</td></tr>
                  <tr className="bg-white"><td className="py-4 px-6 text-gray-900 text-sm md:text-base">8 Orang</td><td className="py-4 px-6 text-gray-900 text-sm md:text-base">Rp 1,440,000</td></tr>
                  <tr className="bg-gray-50"><td className="py-4 px-6 text-gray-900 text-sm md:text-base">9 Orang</td><td className="py-4 px-6 text-gray-900 text-sm md:text-base">Rp 1,290,000</td></tr>
                  <tr className="bg-white"><td className="py-4 px-6 text-gray-900 text-sm md:text-base">10 Orang</td><td className="py-4 px-6 text-gray-900 text-sm md:text-base">Rp 1,180,000</td></tr>
                </tbody>
              </table>
            </div>

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
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                
                <button
                  onClick={nextReview}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>

                {/* Review Card */}
                <div className="bg-gray-50 rounded-lg p-8 shadow-md">
                  <div className="flex items-center justify-center mb-4">
                    <div className="relative w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold text-2xl">
                      {reviews[currentReview].initial}
                      <div className="absolute bottom-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <p className="font-bold text-gray-900 text-lg mb-1">{reviews[currentReview].name}</p>
                  <p className="text-sm text-gray-500 mb-4">{reviews[currentReview].time}</p>
                  
                  <div className="flex justify-center mb-4">
                    <span className="text-yellow-400 text-2xl">
                      {"★".repeat(reviews[currentReview].rating)}
                    </span>
                    {reviews[currentReview].verified && (
                      <svg className="w-5 h-5 text-blue-500 ml-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    )}
                  </div>
                  
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    {reviews[currentReview].text}
                  </p>
                  
                  <button className="text-gray-600 text-sm hover:underline">
                    Read more
                  </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentReview ? "bg-gray-900 w-6" : "bg-gray-300"
                      }`}
                      aria-label={`Go to review ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 text-base">
                Google rating score: <strong>5.0</strong> of 5, based on <strong>68 reviews</strong>
              </p>
              
              <div className="mt-4 inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-300">
                <span className="text-sm text-gray-700">Verified by Trustindex</span>
                <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>

            {/* Dropdown Sections */}
            <div className="my-12">
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
              tourName="whale-shark-experience"
              title="Sumbawa Whale Shark Tour 2 Days 1 Night (scuba diving tour)"
              href="/whale-shark-experience"
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
        tourName="Trip 1 Hari Hiu Paus (Menggunakan Speed Boat)"
      />
    </main>
  );
}
