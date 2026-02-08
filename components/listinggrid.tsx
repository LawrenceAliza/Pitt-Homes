"use client";

import { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

interface Listing {
  id: number;
  images: string[];
  price: number;
  beds: number;
  baths: number;
  location: string;
  distance: string;
  owner: string;
  ownerYear: string;
  ownerMajor: string;
}

interface ListingGridProps {
  listings: Listing[];
}

export default function ListingGrid({ listings }: ListingGridProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section header */}
      <div className="flex items-baseline justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">
            Available near campus
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            {listings.length} places · updated today
          </p>
        </div>
        <button className="hidden sm:block text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors">
          View all →
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {listings.map((listing, i) => (
          <div
            key={listing.id}
            className="transition-all duration-500 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: `${i * 80}ms`,
            }}
          >
            <ListingCard listing={listing} />
          </div>
        ))}
      </div>
    </div>
  );
}
