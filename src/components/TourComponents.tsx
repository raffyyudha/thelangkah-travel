"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export { DynamicPricingTable } from "./DynamicPricingTable";

interface DropdownSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
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

export function PricingTable({ title = "Harga Tour", data }: PricingTableProps) {
  return (
    <div className="my-8">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
        {title}
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="py-4 px-6 text-left font-bold text-sm md:text-base">
                PESERTA
              </th>
              <th className="py-4 px-6 text-left font-bold text-sm md:text-base">
                OPEN TRIP
              </th>
              <th className="py-4 px-6 text-left font-bold text-sm md:text-base">
                FULL PRIVAT
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
