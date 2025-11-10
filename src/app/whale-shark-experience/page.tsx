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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t.title}</h1>

          {/* Featured Image - Dynamic from Database */}
          <DynamicTourImages tourName="whale-shark-experience" />

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">{t.intro1}</p>

            <p className="text-gray-700 leading-relaxed mb-4">{t.intro2}</p>

            <p className="text-gray-700 leading-relaxed mb-4">{t.intro3}</p>

            <p className="text-gray-700 leading-relaxed mb-4">{t.intro4}</p>

            <p className="text-gray-700 leading-relaxed mb-8 font-semibold">{t.ctaLead}</p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{t.locationBaseTitle}</h2>

            {t.locationOptions && (
              <div className="space-y-2 mb-8">
                {t.locationOptions.map((opt: string, idx: number) => (
                  <h3 key={idx} className="text-xl font-bold text-gray-900">{opt}</h3>
                ))}
              </div>
            )}

            {t.inclusions?.length > 0 && (
              <>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t.inclusionsTitle}</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                  {t.inclusions.map((item: string, index: number) => (
                    <li key={`inc-${index}`}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {t.exclusions?.length > 0 && (
              <>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t.exclusionsTitle}</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                  {t.exclusions.map((item: string, index: number) => (
                    <li key={`exc-${index}`}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">{commonT.priceDetailTitle}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              {t.pricingNotes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>

            {/* Pricing Table */}
            <PricingTable
              title={t.pricingTitle}
              data={[
                {
                  participants: "2-10",
                  openTrip: `${language === 'en' ? 'IDR. 1,450,000/Person' : 'IDR. 1,450,000/orang'}`,
                  fullPrivate: `${language === 'en' ? 'IDR. 2,500,000/Person' : 'IDR. 2,500,000/orang'}`
                }
              ]}
            />

            <div className="text-center mb-8">
              <p className="text-gray-900 text-lg font-bold mb-6">{commonT.interestedBookHere}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={handleBooking}
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all"
                >
                  <MessageCircle size={20} />
                  {commonT.tourChatWhatsApp}
                </button>
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-blue-900 hover:bg-blue-950 text-white px-10 py-3 rounded-full font-semibold transition-all"
                >
                  {commonT.bookNow}
                </button>
              </div>
            </div>

            {/* Customer Reviews Slider */}
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                <a href="https://maps.app.goo.gl/rjMm7EoFXzLLF4XU7" className="hover:underline" target="_blank" rel="noopener noreferrer">
                  {commonT.customerReviews}
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
            <DropdownSection title={commonT.tourTermsConditions}>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>{commonT.termsItem1}</li>
                <li>{commonT.termsItem2}</li>
                <li>{commonT.termsItem3}</li>
                <li>{commonT.termsItem4}</li>
                <li>{commonT.termsItem5}</li>
                <li>{commonT.termsItem6}</li>
                <li>{commonT.termsItem7}</li>
              </ul>
            </DropdownSection>

            <DropdownSection title={commonT.tourCancellationPolicy}>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>{commonT.cancelItem1}</li>
                <li>{commonT.cancelItem2}</li>
                <li>{commonT.cancelItem3}</li>
                <li>{commonT.cancelItem4}</li>
              </ul>
            </DropdownSection>

            <DropdownSection title={commonT.tourFAQTitle}>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>{commonT.faqItem1}</li>
                <li>{commonT.faqItem2}</li>
                <li>{commonT.faqItem3}</li>
                <li>{commonT.faqItem4}</li>
                <li>{commonT.faqItem5}</li>
              </ul>
            </DropdownSection>
          </div>
        </div>
      </article>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {commonT.tourRecommendedTours}
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-12">
            {commonT.relatedToursDesc}
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
