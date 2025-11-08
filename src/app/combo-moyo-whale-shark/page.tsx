"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ChevronLeft, ChevronRight, Clock, Users, MapPin, Check, X } from "lucide-react";
import { DropdownSection, PricingTable, DynamicTourImages } from "@/components/TourComponents";
import BookingModal from "@/components/BookingModal";
import { useLanguage } from "@/contexts/LanguageContext";
import { tour3Translations } from "@/translations/tour3";

export default function ComboMoyoWhaleSharkPage() {
  const { language } = useLanguage();
  const t = language === 'id' ? tour3Translations.id : tour3Translations.en;
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
    const message = encodeURIComponent("Halo, saya ingin booking Sumbawa Tour 3 Days 2 Nights Moyo Island & Whale Shark");
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
            Sumbawa Tour 3 Days 2 Nights
          </h1>

          {/* Featured Image - Dynamic from Database */}
          <DynamicTourImages tourName="combo-moyo-whale-shark" />

          {/* Content */}
          <div className="prose prose-lg max-w-none">

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Sumbawa Tour PackagesMoyo Island & Whale Shark in Sumbawa Experience #type A
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Sumbawa Tour 3 Days 2 Nights after arrival go to visit Moyo Island, also known as Mojo Island, is a pristine destination located just north of Sumbawa in West Nusa Tenggara. Easily accessible from Sumbawa City, this island is a must-visit for snorkeling and diving lovers. Among the many breathtaking spots are Takat Segele, Labuan Aji Reef, Sanglo Reef, Tanjung Pasir, and Angel Reef. Each location showcases the stunning underwater beauty of the area's diverse marine flora and fauna.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              On the eastern side of Moyo Island lies Saleh Bay, which, thanks to its geographical positioning, provides a safe haven from the open ocean. This makes it an ideal spot to observe the majestic whale sharks that are often found here. Moyo National Park's protected waters offer a unique opportunity to experience marine life up close.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Intrigued? Embark on a Sumbawa tour with us and explore this natural wonder!
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Sumbawa Tour Itinerary</h2>
            
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Exploring Moyo Island and Surroundings</h3>
            <p className="text-gray-700 mb-2"><strong>10:30 AM</strong> – Arrival at Sumbawa Airport (SWQ). Our team will pick you up at the meeting point.</p>
            <p className="text-gray-700 mb-2"><strong>11:00 AM</strong> – Embark on a 45-minute speedboat ride to Moyo Island.</p>
            <p className="text-gray-700 mb-2"><strong>11:45 AM</strong> – Arrive at Moyo Island.</p>
            <p className="text-gray-700 mb-2"><strong>12:00 PM</strong> – Enjoy lunch at a beachfront restaurant with stunning ocean views.</p>
            <p className="text-gray-700 mb-2"><strong>1:30 PM</strong> – After lunch, get ready for a soft adventure. Hop on an ojek (motorbike taxi) for a ride to the beautiful Mata Jitu Waterfalls.</p>
            <p className="text-gray-700 mb-2"><strong>2:00 PM</strong> – Experience the serene atmosphere of the forest and swim in the turquoise pool beneath the waterfalls.</p>
            <p className="text-gray-700 mb-2"><strong>3:30 PM</strong> – Return to Labuan Aji Village and continue to Takat Sagele for a snorkeling adventure. You'll also visit Poto Jarum Beach, a secluded spot with white sands and vibrant coral reefs, perfect for relaxation.</p>
            <p className="text-gray-700 mb-2"><strong>5:30 PM</strong> – After snorkeling and swimming, head back to the main island.</p>
            <p className="text-gray-700 mb-8"><strong>6:00 PM</strong> – Arrive at Samawa Seaside Resort for check-in and free time to unwind. Dinner Available at the hotel restaurant, where you can enjoy local and international cuisine.</p>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Whale Shark Saleh Bay Excursion</h3>
            <h4 className="text-lg font-bold text-gray-900 mb-3">2nd Day</h4>
            <p className="text-gray-700 mb-2"><strong>2.00 AM</strong> – Early pick-up from Samawa Seaside Resort and depart for Labu Jambu Village (approximately 2-hour drive).</p>
            <p className="text-gray-700 mb-2"><strong>4:00 AM</strong> – Arrive at Labu Jambu Harbour. Board the boat, get comfortable with pillows, blankets, and mattresses, and prepare for an exciting whale shark encounter.</p>
            <p className="text-gray-700 mb-2"><strong>5:30 AM</strong> – Reach the whale shark spotting location. Our crew will attract whale sharks by feeding them baby fish, keeping them near the surface for a closer view from the boat.</p>
            <p className="text-gray-700 mb-2"><strong>6:00 AM</strong> – Dive into the unforgettable experience of swimming, snorkeling, and diving with whale sharks. Witness these gentle giants up close in their natural habitat.</p>
            <p className="text-gray-700 mb-2">Light breakfast will be served on board, including bread, coffee, tea, and fresh fruit.</p>
            <p className="text-gray-700 mb-2"><strong>9:00 AM</strong> – Depart from the whale shark spots. (Departure time is flexible based on when you're done swimming).</p>
            <p className="text-gray-700 mb-2"><strong>11:00 AM</strong> – Arrive back at Labu Jambu Harbour and continue your journey back to Samawa Seaside Resort.</p>
            <p className="text-gray-700 mb-2"><strong>12:00 PM</strong> – Optional stop for lunch at a floating seafood restaurant, featuring fresh local dishes.</p>
            <p className="text-gray-700 mb-8"><strong>2:30 PM</strong> – Return to Samawa Seaside Resort for check-in and free time to relax by the pool or enjoy the seaside views. Dinner Available at the resort's restaurant or at a local venue in central Sumbawa.</p>

            <h4 className="text-lg font-bold text-gray-900 mb-3">3rd Day</h4>
            <p className="text-gray-700 mb-8"><strong>07.30 – 09.00 AM</strong> – After breakfast Pick up at the Hotel and transfer out to Sumbawa Airport (SWQ). End of Service</p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Inclusion</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
              <li>2 night Hotel + Breakfast (AC & for 2 person/room)</li>
              <li>Car Transpotation+Driver+fuel (full AC Vehicle)</li>
              <li>boat transfer & return</li>
              <li>taxy bike (ojeg) fee</li>
              <li>Licensed English Speaking Guide</li>
              <li>Mineral water during the tour</li>
              <li>Simple light breakfast on the boat (bread, nutella, fruit)</li>
              <li>Coffee, tea / hot chocolate (on the boat)</li>
              <li>Snorkling Equipment</li>
              <li>Profesional Tour Guide</li>
              <li>Gopro hero11-12 / sony rx100m6 (the Tour Guide will provide a picture/video as your request)</li>
              <li>Entrance and Conservation fee</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Exclusion</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
              <li>flight Ticket</li>
              <li>Meal Beverages L&D</li>
              <li>Personal Needed</li>
              <li>local crew/tour guide tips</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What to bring during the Tour (optional)</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
              <li>Jackets</li>
              <li>Head lamp or flashlight</li>
              <li>Sun Protection</li>
              <li>Sunglasses with UV Protection</li>
            </ul>

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
                <a href="https://g.co/kgs/aGf4PBm" className="hover:underline" target="_blank" rel="noopener noreferrer">
                  Sumbawa Adventour Costumer Reviews (click here):
                </a>
              </h3>
              
              <div className="relative max-w-3xl mx-auto mb-8">
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

                <div className="flex justify-center gap-2 mt-6">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentReview ? "bg-gray-900 w-6" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 text-base">
                Google rating score: <strong>5.0</strong> of 5, based on <strong>68 reviews</strong>
              </p>
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
            {/* Tour 1 */}
            <Link href="/whale-shark-start-sumbawa" className="group">
              <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-44">
                <Image
                  src="/images/whale-shark/IMG_2992.JPG"
                  alt="Tour Hiu Paus Teluk Saleh Sumbawa Harian Start Finish Kota Sumbawa Besar"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    Tour Hiu Paus Teluk Saleh Sumbawa Harian Start Finish Kota Sumbawa Besar
                  </h3>
                </div>
              </div>
            </Link>

            {/* Tour 2 */}
            <Link href="/whale-shark-2d1n" className="group">
              <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-44">
                <Image
                  src="/images/whale-shark/IMG_2079.JPG"
                  alt="Tour Wisata Hiu Paus Sumbawa 2 Hari 1 Malam start & finish Sumbawa Besar"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    Tour Wisata Hiu Paus Sumbawa 2 Hari 1 Malam start & finish Sumbawa Besar
                  </h3>
                </div>
              </div>
            </Link>

            {/* Tour 4 */}
            <Link href="/whale-shark-start-labuhan-jambu" className="group">
              <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-44">
                <Image
                  src="/images/whale-shark/IMG_2082.JPG"
                  alt="Paket Tour Hiu Paus Sumbawa 2 Hari 1 Malam start & finish Lombok"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    Paket Tour Hiu Paus Sumbawa 2 Hari 1 Malam start & finish Lombok
                  </h3>
                </div>
              </div>
            </Link>

            {/* Tour 5 */}
            <Link href="/trip-4d3n-sumbawa" className="group">
              <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-44">
                <Image
                  src="/images/islandjawa.jpg"
                  alt="Paket Tour Sumbawa 4 Hari 3 Malam Wisata Pulau Moyo, Pulau Kenawa & Hiu Paus"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    Paket Tour Sumbawa 4 Hari 3 Malam Wisata Pulau Moyo, Pulau Kenawa & Hiu Paus
                  </h3>
                </div>
              </div>
            </Link>

            {/* Tour 6 */}
            <Link href="/whale-shark-experience" className="group">
              <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-44">
                <Image
                  src="/images/whale-shark/IMG_2806.JPG"
                  alt="Sumbawa Whale Shark Tour 2 Days 1 Night (scuba diving tour)"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    Sumbawa Whale Shark Tour 2 Days 1 Night (scuba diving tour)
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        tourName="Sumbawa Tour 3D2N Moyo Island & Whale Shark"
      />
    </main>
  );
}
