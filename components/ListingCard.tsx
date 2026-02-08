"use client";

import { useState } from "react";
import Link from "next/link";
import { listings } from "../lib/data/listings";

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

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [liked, setLiked] = useState(false);

  // Get the roommate avatar from the full listings data
  const fullListing = listings.find((l) => l.id === listing.id);
  const ownerAvatar = fullListing?.roommates?.[0]?.avatar;

  return (
    <Link href={`/listings/${listing.id}`}>
      <div
        className="group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image container */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
          <img
            src={listing.images[0]}
            alt="Property"
            className="w-full h-full object-cover transition-transform duration-500 ease-out"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

          {/* Heart button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setLiked(!liked);
            }}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:bg-white hover:scale-110 active:scale-90"
          >
            <svg
              className="w-5 h-5 transition-colors duration-200"
              fill={liked ? "#ef4444" : "none"}
              stroke={liked ? "#ef4444" : "#374151"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>

          {/* Location tag */}
          <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700">
            📍 {listing.location}
          </div>
        </div>

        {/* Content */}
        <div className="mt-3 px-1">
          <div className="flex items-baseline justify-between">
            <h3 className="text-xl font-bold text-gray-900">
              ${listing.price}
              <span className="text-sm font-normal text-gray-400">/mo</span>
            </h3>
            <span className="text-xs text-gray-400">{listing.distance}</span>
          </div>

          <p className="text-sm text-gray-500 mt-1">
            {listing.beds} bed · {listing.baths} bath
          </p>

          {/* Owner row with photo */}
          <div className="flex items-center gap-2.5 mt-3">
            {ownerAvatar ? (
              <img
                src={ownerAvatar}
                alt={listing.owner}
                className="w-8 h-8 rounded-full object-cover flex-shrink-0 border border-gray-200"
              />
            ) : (
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ backgroundColor: "#16a34a" }}
              >
                {listing.owner
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            )}
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-800 truncate">
                {listing.owner}
              </p>
              <p className="text-xs text-gray-400">
                {listing.ownerYear} · {listing.ownerMajor}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
