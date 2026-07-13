"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import BookingModal from "@/components/BookingModal";
import { Footer } from "@/components/Footer";
import { OptimizedRelatedToursGrid } from "@/components/OptimizedRelatedToursGrid";
import { DropdownSection, PaymentMethodsSection, OptimizedTourImages } from "@/components/TourComponents";
import { supabase } from "@/lib/supabase";

interface TransportRoute {
  route: string;
  price: string;
  capacity: string;
  includes: string;
}

export default function TransportServicePage() {
  const { language, t: commonT } = useLanguage();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [fetchedRoutes, setFetchedRoutes] = useState<TransportRoute[]>([]);

  useEffect(() => {
    async function fetchPrices() {
      try {
        const { data, error } = await supabase
          .from('tour_prices')
          .select('*')
          .eq('tour_name', 'transport-service')
          .order('created_at', { ascending: true });

        if (!error && data && data.length > 0) {
          const mappedRoutes = data.map(item => ({
            route: item.participants,
            price: item.full_private_price,
            capacity: item.open_trip_price || "1–5 orang",
            includes: "Driver, BBM"
          }));
          setFetchedRoutes(mappedRoutes);
        }
      } catch (err) {
        console.error("Error fetching transport prices:", err);
      }
    }
    fetchPrices();
  }, []);

  // Related tours configuration (only 6 active tours)
  const relatedTours = [
    {
      tourName: "whale-shark-1day-labuhan-jambu",
      title: commonT.tourB,
      href: "/whale-shark-1day-labuhan-jambu"
    },
    {
      tourName: "whale-shark-2d1n",
      title: commonT.tourD,
      href: "/whale-shark-2d1n"
    },
    {
      tourName: "combo-moyo-whale-shark",
      title: commonT.tourI,
      href: "/combo-moyo-whale-shark"
    },
    {
      tourName: "trip-4d3n-sumbawa",
      title: commonT.tourK,
      href: "/trip-4d3n-sumbawa"
    },
    {
      tourName: "whale-shark-speedboat",
      title: commonT.tourC,
      href: "/whale-shark-speedboat"
    }
  ];

  const defaultRoutes = [
    {
      route: "Bandara atau Hotel Sumbawa → Labuhan Jambu",
      price: "Rp 600.000",
      capacity: "1–5 orang",
      includes: "Driver, BBM",
    },
    {
      route: "Pelabuhan Poto Tano → Labuhan Jambu",
      price: "Rp 1.200.000",
      capacity: "1–5 orang",
      includes: "Driver, BBM",
    },
    {
      route: "Pelabuhan Sape → Labuhan Jambu",
      price: "Rp 1.500.000",
      capacity: "1–5 orang",
      includes: "Driver, BBM",
    },
    {
      route: "Hotel Maluk → Labuhan Jambu",
      price: "Rp 1.700.000",
      capacity: "1–5 orang",
      includes: "Driver, BBM",
    },
  ];

  const defaultRoutesEn = [
    {
      route: "Airport or Sumbawa Hotel → Labuhan Jambu",
      price: "Rp 600.000",
      capacity: "1–5 guests",
      includes: "Driver, fuel",
    },
    {
      route: "Poto Tano Port → Labuhan Jambu",
      price: "Rp 1.200.000",
      capacity: "1–5 guests",
      includes: "Driver, fuel",
    },
    {
      route: "Sape Port → Labuhan Jambu",
      price: "Rp 1.500.000",
      capacity: "1–5 guests",
      includes: "Driver, fuel",
    },
    {
      route: "Maluk Hotel → Labuhan Jambu",
      price: "Rp 1.700.000",
      capacity: "1–5 guests",
      includes: "Driver, fuel",
    },
  ];

  const activeRoutesId = fetchedRoutes.length > 0 ? fetchedRoutes : defaultRoutes;
  const activeRoutesEn = fetchedRoutes.length > 0 ? fetchedRoutes.map(r => ({
    ...r,
    capacity: r.capacity.replace("orang", "guests"),
    includes: "Driver, fuel"
  })) : defaultRoutesEn;

  const l = language === "id"
    ? {
        title: "Layanan Transportasi Antar Jemput",
        intro1:
          "Kami menyediakan layanan transportasi antar jemput yang nyaman, aman, dan tepat waktu untuk semua tamu yang berwisata ke Sumbawa.",
        intro2:
          "Layanan ini mencakup penjemputan dari bandara, hotel, pelabuhan, menuju destinasi wisata seperti Labuhan Jambu, Pulau Moyo, Pulau Kenawa maupun lokasi aktivitas hiu paus.",
        intro3:
          "Dengan armada kendaraan terawat dan tim driver berpengalaman, kami memastikan perjalanan Anda menjadi lebih mudah tanpa harus mencari transportasi sendiri.",
        includesTitle: "Termasuk dalam layanan:",
        includes: [
          "Penjemputan tepat waktu dari lokasi yang Anda tentukan",
          "Kendaraan nyaman & bersih (AC)",
          "Driver ramah & profesional",
          "5 set kursi penumpang & bagasi",
          "Layanan private (tidak digabung dengan tamu lain)",
        ],
        excludesTitle: "Tidak termasuk dalam layanan:",
        excludes: ["Kebutuhan pribadi"],
        notesTitle: "Catatan:",
        notes: [
          "Harga satu arah",
          "Harga per grup",
          "Lebih dari 5 orang menggunakan 2 mobil",
        ],
        routesTitle: "Rute / Tujuan & Harga (Private)",
        routeHeaders: ["Rute / Tujuan", "Harga", "Kapasitas", "Termasuk"],
        routes: activeRoutesId,
        chatLabel: commonT.tourChatWhatsApp,
        bookLabel: commonT.tourBookNow,
      }
    : {
        title: "Private Transport Service (Pick-up & Drop-off)",
        intro1:
          "We provide safe, comfortable, and on-time private transport services for guests traveling around Sumbawa.",
        intro2:
          "This service covers pick-up from the airport, hotels, and ports to main destinations such as Labuhan Jambu, Moyo Island, Kenawa Island, and whale shark activity locations.",
        intro3:
          "With well-maintained vehicles and experienced local drivers, your journey becomes easier without worrying about finding transport on your own.",
        includesTitle: "Service includes:",
        includes: [
          "On-time pick-up from your chosen location",
          "Comfortable & clean AC vehicle",
          "Friendly & professional driver",
          "Up to 5 passenger seats plus luggage",
          "Private service (no sharing with other guests)",
        ],
        excludesTitle: "Service excludes:",
        excludes: ["Personal expenses"],
        notesTitle: "Notes:",
        notes: [
          "One-way price",
          "Price per group",
          "More than 5 guests will use 2 cars",
        ],
        routesTitle: "Routes & Prices (Private)",
        routeHeaders: ["Route", "Price", "Capacity", "Includes"],
        routes: activeRoutesEn,
        chatLabel: commonT.tourChatWhatsApp,
        bookLabel: commonT.tourBookNow,
      };

  const handleChatWhatsApp = () => {
    const prefix =
      language === "id"
        ? "Halo, saya ingin bertanya tentang Layanan Transportasi Antar Jemput"
        : "Hi, I would like to ask about the Private Transport Service";
    const message = encodeURIComponent(prefix);
    window.open(`https://wa.me/6282341331975?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-white">
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Hero/Featured Image - Dynamic from Database */}
          <OptimizedTourImages tourName="transport-service" />

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {l.title}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">{l.intro1}</p>
            <p className="text-gray-700 leading-relaxed mb-4">{l.intro2}</p>
            <p className="text-gray-700 leading-relaxed mb-8">{l.intro3}</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center sm:justify-start">
            <button
              type="button"
              onClick={handleChatWhatsApp}
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all"
            >
              <MessageCircle size={20} />
              {l.chatLabel}
            </button>
            <button
              type="button"
              onClick={() => setIsBookingModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-blue-900 hover:bg-blue-950 text-white font-semibold text-sm sm:text-base uppercase tracking-wide shadow-md shadow-black/20 transition-transform duration-200 hover:-translate-y-0.5"
            >
              {l.bookLabel}
            </button>
          </div>

          {/* Includes */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{l.includesTitle}</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {l.includes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Excludes */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{l.excludesTitle}</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {l.excludes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Notes */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{l.notesTitle}</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {l.notes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Routes Table */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center md:text-left">{l.routesTitle}</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
                <thead>
                  <tr className="bg-green-600 text-white">
                    {l.routeHeaders.map((header, index) => (
                      <th
                        key={index}
                        className="py-4 px-6 text-left font-bold text-sm md:text-base whitespace-nowrap"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {l.routes.map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="py-4 px-6 text-gray-900 text-sm md:text-base whitespace-pre-line">
                        {row.route}
                      </td>
                      <td className="py-4 px-6 text-gray-900 text-sm md:text-base font-semibold">
                        {row.price}
                      </td>
                      <td className="py-4 px-6 text-gray-700 text-sm md:text-base">
                        {row.capacity}
                      </td>
                      <td className="py-4 px-6 text-gray-700 text-sm md:text-base">
                        {row.includes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Dropdown Sections */}
          <div className="my-12">
            <PaymentMethodsSection />

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

      {/* Related Tours Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
            {language === "id" ? "Paket Wisata Lainnya" : "Other Tour Packages"}
          </h2>
          <OptimizedRelatedToursGrid tours={relatedTours} />
        </div>
      </section>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        tourName={l.title}
      />

      <Footer />
    </main>
  );
}
