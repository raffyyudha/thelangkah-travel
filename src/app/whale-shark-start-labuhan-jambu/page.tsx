"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ChevronLeft, ChevronRight, Clock, Check, X } from "lucide-react";
import { useState } from "react";
import { DropdownSection, PricingTable } from "@/components/TourComponents";
import BookingModal from "@/components/BookingModal";

export default function WhaleSharkStartLabuhanJambuPage() {
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
    const message = encodeURIComponent("Halo, saya ingin booking Paket Tour Hiu Paus Sumbawa 2 Hari 1 Malam start & finish Lombok");
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
            Paket Tour Hiu Paus Sumbawa 2 Hari 1 Malam start & finish Lombok
          </h1>

          {/* Featured Image */}
          <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/whale-shark/IMG_2992.JPG"
              alt="Sumbawa Whale Shark Tours"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Image Gallery - 3 small images */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="relative h-32 md:h-48 rounded-lg overflow-hidden">
                <Image
                  src="/images/whale-shark/IMG_2079.JPG"
                  alt="Whale Shark"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 md:h-48 rounded-lg overflow-hidden">
                <Image
                  src="/images/whale-shark/IMG_2082.JPG"
                  alt="Whale Shark Tour"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 md:h-48 rounded-lg overflow-hidden">
                <Image
                  src="/images/whale-shark/IMG_2806.JPG"
                  alt="Swimming with Whale Shark"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Sumbawa Whale Shark Tour 2 Day 1 Night (start / Finish Lombok)
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Providing Sumbawa Whale Shark Tour Lombok, an Unmatched Adventure for Nature Lovers and Divers. Departing from Lombok, you'll be taken to experience the stunning marine beauty of Sumbawa and encounter whale sharks, one of the largest yet gentlest species in the ocean. On this whale shark tour in Sumbawa, you'll get the chance to witness these majestic creatures up close.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Due to high demand tour request from Lombok, we have decided to providing sumbawa whale shark tour lombok tour package starting and ending in Lombok, prioritizing the comfort and safety of our customers.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Sumbawa Whale Shark Tour Lombok - Tour Itinerary</h2>
            
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Day 1</h3>
            <p className="text-gray-700 mb-2"><strong>09:00 AM</strong> – Pick-up by our driver from Lombok (Bangsal Pier/Senggigi/Mataram/Kuta Mandalika, Central Lombok) and depart for Kayangan Port. The drive will take approximately 2.5 to 3 hours, depending on traffic conditions.</p>
            <p className="text-gray-700 mb-2"><strong>12:00 PM</strong> – Arrive at Kayangan Port. The Lombok vehicle will stop here, and you will transfer to the ferry for a 2 to 2.5-hour crossing to Sumbawa Island.</p>
            <p className="text-gray-700 mb-2"><strong>2:30 PM</strong> – Arrive at Pototano Port, Sumbawa Island. You will be picked up by another vehicle and continue the journey to Labuhan Jambu Village, which will take approximately 4 to 5 hours.</p>
            <p className="text-gray-700 mb-2">Optional meal stop in Sumbawa Besar City is available.</p>
            <p className="text-gray-700 mb-2"><strong>7:30 PM</strong> – Arrive at Labuhan Jambu Village. Check in at Alffiah Hotel/Transit Hotel, rest, enjoy the sunset, and have free time to relax.</p>
            <p className="text-gray-700 mb-8">Dinner is available at the hotel (personal expenses).</p>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Day 2</h3>
            <p className="text-gray-700 mb-2"><strong>03:45 AM</strong> – Wake-up call from the tour guide, preparing for pick-up at the hotel.</p>
            <p className="text-gray-700 mb-2"><strong>04:00 AM</strong> – Depart by boat to the whale shark point.</p>
            <p className="text-gray-700 mb-2"><strong>06:00 AM</strong> – Arrive at the Whale Shark Point. Enjoy the sunrise while diving, swimming, or snorkeling with sumbawa whale sharks.</p>
            <p className="text-gray-700 mb-2"><strong>08:00 AM</strong> – Light breakfast served on the boat, including bread, coffee, tea, and fresh fruit.</p>
            <p className="text-gray-700 mb-2"><strong>08:30 AM</strong> – Leave Whale Shark Point and head back to Labuhan Jambu Harbor.</p>
            <p className="text-gray-700 mb-2"><strong>10:00 AM</strong> – Arrive back at the hotel in Labuhan Jambu. Time to clean up, enjoy a hotel breakfast, rest, and check out.</p>
            <p className="text-gray-700 mb-2"><strong>12:30 PM</strong> – Begin the return journey to Pototano Port, which takes approximately 4 to 5 hours.</p>
            <p className="text-gray-700 mb-2"><strong>04:00 PM</strong> – Arrive at Pototano Port and board the ferry back to Lombok.</p>
            <p className="text-gray-700 mb-2"><strong>05:30 PM</strong> – Arrive at Kayangan Port, Lombok, and transfer to another vehicle for a 2-hour drive.</p>
            <p className="text-gray-700 mb-8"><strong>08:00 PM</strong> – Drop-off at your hotel in (Bangsal Pier/Senggigi/Mataram/Kuta Mandalika, Central Lombok), marking the end of the program.</p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Inclusion</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
              <li>1 night Hotel + Breakfast (AC & for 2 person/room)</li>
              <li>Car Transpotation+Driver+fuel (full AC Vehicle) extra car up to 5person (transfer+return Lombok)</li>
              <li>ferry ticket roundway</li>
              <li>Whale Shark Sumbawa Boat Transfer + Return</li>
              <li>Licensed English Speaking & Profesional Tour Guide</li>
              <li>Mineral water during the tour</li>
              <li>Simple breakfast on the boat (bread, nutella, fruit) Coffee, tea (on the boat)</li>
              <li>Snorkling Equipment</li>
              <li>Gopro hero11-12 / sony rx100m6 (the Tour Guide will provide a picture/video as your request)</li>
              <li>Entrance and Conservation fee</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Exclusion</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
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

            <p className="text-gray-700 leading-relaxed mb-8">
              Sumbawa and Lombok are in the same province, natural diversity and beauty are presented in this area, one of which is the Sumbawa whale shark. On your trip to Sumbawa, you will also find many interesting new things, both in terms of culture and views of mountain and sea landscapes that are very varied and very authentic.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Whale Shark Saleh Bay Sumbawa pricing revert to Indonesian Rupiah (IDR)</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Since we cannot control Mother Nature, and due to the sea conditions on the day of the tour, it is possible that the whale shark sighting may not occur. Therefore, we will only refund IDR 1,000,000 from your total payment.</li>
              <li>Please note that lunch is not included in this package. However, we can arrange to take you to a local restaurant before returning you to your accommodation.</li>
            </ul>

            {/* Pricing Table - Custom 2 Column */}
            <div className="my-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Harga Tour (Start & Finish Lombok)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
                  <thead>
                    <tr className="bg-blue-400 text-white">
                      <th className="py-4 px-6 text-center font-bold text-sm md:text-base">
                        PARTICIPANT
                      </th>
                      <th className="py-4 px-6 text-center font-bold text-sm md:text-base">
                        PRICE / PERSON
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="bg-gray-100">
                      <td className="py-4 px-6 text-gray-900 text-sm md:text-base text-center">1</td>
                      <td className="py-4 px-6 text-gray-900 text-sm md:text-base text-center">IDR. 8,890,000. / Person</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-4 px-6 text-gray-900 text-sm md:text-base text-center">2</td>
                      <td className="py-4 px-6 text-gray-900 text-sm md:text-base text-center">IDR. 4,685,000. / Person</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="py-4 px-6 text-gray-900 text-sm md:text-base text-center">3</td>
                      <td className="py-4 px-6 text-gray-900 text-sm md:text-base text-center">IDR. 3,425,000 / Person</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-4 px-6 text-gray-900 text-sm md:text-base text-center">4</td>
                      <td className="py-4 px-6 text-gray-900 text-sm md:text-base text-center">IDR. 2,975,000. / Person</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="py-4 px-6 text-gray-900 text-sm md:text-base text-center">5</td>
                      <td className="py-4 px-6 text-gray-900 text-sm md:text-base text-center">IDR. 2,930,000. / Person</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-4 px-6 text-gray-900 text-sm md:text-base text-center">6</td>
                      <td className="py-4 px-6 text-gray-900 text-sm md:text-base text-center">IDR. 2,650,000. / Person</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="py-4 px-6 text-gray-900 text-sm md:text-base text-center">7</td>
                      <td className="py-4 px-6 text-gray-900 text-sm md:text-base text-center">IDR. 2,295,000. / Person</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-4 px-6 text-gray-900 text-sm md:text-base text-center">8</td>
                      <td className="py-4 px-6 text-gray-900 text-sm md:text-base text-center">IDR. 1,990,000. / Person</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                  <li>Cancellation 1 or 2 day before or on the day of the event: The deposit is non-refundable.</li>
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/whale-shark-start-sumbawa" className="group">
              <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-44">
                <Image
                  src="/images/whale-shark/IMG_2992.JPG"
                  alt="Whale Shark Daily Tour"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-white font-bold text-sm md:text-base">Whale Shark Daily Tour</h3>
                </div>
              </div>
            </Link>
            <Link href="/whale-shark-2d1n" className="group">
              <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-44">
                <Image
                  src="/images/whale-shark/IMG_2079.JPG"
                  alt="Whale Shark 2D1N"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-white font-bold text-sm md:text-base">Whale Shark 2D1N</h3>
                </div>
              </div>
            </Link>
            <Link href="/combo-moyo-whale-shark" className="group">
              <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-44">
                <Image
                  src="/images/moyo/hero.jpg"
                  alt="Combo Moyo + Whale Shark"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-white font-bold text-sm md:text-base">Combo Moyo + Whale Shark 3D2N</h3>
                </div>
              </div>
            </Link>
            <Link href="/trip-4d3n-sumbawa" className="group">
              <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-44">
                <Image
                  src="/images/whale-shark/IMG_2806.JPG"
                  alt="4D3N Sumbawa Tour"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-white font-bold text-sm md:text-base">Sumbawa Tour 4D3N</h3>
                </div>
              </div>
            </Link>
            <Link href="/whale-shark-experience" className="group">
              <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-44">
                <Image
                  src="/images/whale-shark/IMG_2082.JPG"
                  alt="Whale Shark Experience"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-white font-bold text-sm md:text-base">Whale Shark Experience</h3>
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
        tourName="Paket Tour Hiu Paus Sumbawa 2D1N Start & Finish Lombok"
      />
    </main>
  );
}
