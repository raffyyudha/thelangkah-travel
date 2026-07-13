"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface PriceData {
  participants: string;
  openTrip: string;
  fullPrivate: string;
}

interface DynamicPricingTableProps {
  tourName: string;
  title?: string;
}

export function DynamicPricingTable({ tourName, title = "Harga Tour" }: DynamicPricingTableProps) {
  const [prices, setPrices] = useState<PriceData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPrices() {
      try {
        const { data, error } = await supabase
          .from('tour_prices')
          .select('*')
          .eq('tour_name', tourName);

        if (error) throw error;

        if (data && data.length > 0) {
          const formattedPrices = data.map(price => ({
            participants: price.participants,
            openTrip: price.open_trip_price,
            fullPrivate: price.full_private_price
          }));
          
          // Sort by numeric value of participants
          formattedPrices.sort((a, b) => {
            const numA = parseInt(a.participants) || 0;
            const numB = parseInt(b.participants) || 0;
            return numA - numB;
          });
          
          setPrices(formattedPrices);
        }
      } catch (error) {
        console.error('Error loading prices:', error);
      } finally {
        setLoading(false);
      }
    }

    loadPrices();
  }, [tourName]);

  if (loading) {
    return (
      <div className="my-8 text-center">
        <p className="text-gray-600">Loading prices...</p>
      </div>
    );
  }

  if (prices.length === 0) {
    return (
      <div className="my-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
          {title}
        </h3>
        <p className="text-center text-gray-600">No pricing information available.</p>
      </div>
    );
  }

  // SEMUA TOUR pakai format 2 kolom (PARTICIPANT | PRICE/PERSON)
  // Gunakan fullPrivate untuk semua tour
  return (
    <div className="my-8">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
        {title}
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="py-4 px-6 text-center font-bold text-sm md:text-base">
                PARTICIPANT
              </th>
              <th className="py-4 px-6 text-center font-bold text-sm md:text-base">
                PRICE / PERSON
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {prices.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="py-4 px-6 text-gray-900 text-sm md:text-base text-center">
                  {row.participants}
                </td>
                <td className="py-4 px-6 text-gray-900 text-sm md:text-base text-center">
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
