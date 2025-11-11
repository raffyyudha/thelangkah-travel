"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export { DynamicPricingTable } from "./DynamicPricingTable";
export { DynamicTourImages } from "./DynamicTourImages";

const PRIVATE_TOUR_PRICES: { count: number; price: string }[] = [
  { count: 1, price: "9,910,000" },
  { count: 2, price: "5,020,000" },
  { count: 3, price: "3,400,000" },
  { count: 4, price: "2,580,000" },
  { count: 5, price: "2,100,000" },
  { count: 6, price: "1,780,000" },
  { count: 7, price: "1,620,000" },
  { count: 8, price: "1,440,000" },
  { count: 9, price: "1,290,000" },
  { count: 10, price: "1,180,000" }
];

interface DropdownSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

interface PrivatePricingTableProps {
  title?: string;
}

export function PrivatePricingTable({ title }: PrivatePricingTableProps) {
  const { language, t } = useLanguage();

  const defaultTitle = language === "en"
    ? "Private Tour Price (Per Person)"
    : "Harga Private Tour (Per Orang)";

  const formatParticipants = (count: number) => {
    if (language === "en") {
      return `${count} ${count === 1 ? "Person" : "People"}`;
    }
    return `${count} Orang`;
  };

  const formatPrice = (price: string) => {
    return `${language === "en" ? "IDR" : "Rp"} ${price}`;
  };

  return (
    <div className="my-8">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
        {title || defaultTitle}
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="py-4 px-6 text-left font-bold text-sm md:text-base">
                {t.tourParticipant}
              </th>
              <th className="py-4 px-6 text-left font-bold text-sm md:text-base">
                {t.tourPerPerson}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {PRIVATE_TOUR_PRICES.map(({ count, price }, index) => (
              <tr
                key={count}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="py-4 px-6 text-gray-900 text-sm md:text-base">
                  {formatParticipants(count)}
                </td>
                <td className="py-4 px-6 text-gray-900 text-sm md:text-base">
                  {formatPrice(price)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-center text-sm text-gray-600 italic">
        {language === "en" ? "Private tour rate (per person)" : "Harga private tour (per orang)"}
      </p>
    </div>
  );
}

export function DropdownSection({ title, children, defaultOpen = false }: DropdownSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <ChevronDown
          className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          {children}
        </div>
      )}
    </div>
  );
}

interface PricingTableProps {
  title?: string;
  data: {
    participants: string;
    openTrip: string;
    fullPrivate: string;
  }[];
}

export function PricingTable({ title, data }: PricingTableProps) {
  const { t } = useLanguage();
  
  return (
    <div className="my-8">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
        {title || t.tourPriceTitle}
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="py-4 px-6 text-left font-bold text-sm md:text-base">
                {t.tourParticipant}
              </th>
              <th className="py-4 px-6 text-left font-bold text-sm md:text-base">
                {t.tourOpenTrip}
              </th>
              <th className="py-4 px-6 text-left font-bold text-sm md:text-base">
                {t.tourFullPrivate}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="py-4 px-6 text-gray-900 text-sm md:text-base">
                  {row.participants}
                </td>
                <td className="py-4 px-6 text-gray-900 text-sm md:text-base">
                  {row.openTrip}
                </td>
                <td className="py-4 px-6 text-gray-900 text-sm md:text-base">
                  {row.fullPrivate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
