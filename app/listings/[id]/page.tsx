"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { listings, quickMessages } from "../../../lib/data/listings";
import Navbar from "../../../components/Navbar";
import Link from "next/link";

export default function ListingDetail() {
  const params = useParams();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [visible, setVisible] = useState(false);

  const listing = listings.find((l) => l.id === Number(params.id));

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  if (!listing) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Listing not found
          </h1>
          <Link
            href="/"
            className="mt-4 inline-block text-emerald-600 hover:underline"
          >
            ← Back to listings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Back button */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-2">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors py-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to search
        </button>
      </div>

      {/* ============ IMAGE GRID (Zillow style) ============ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl overflow-hidden">
          {/* Desktop: grid layout */}
          <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2 h-[420px]">
            {/* Main large image */}
            <div
              className="col-span-2 row-span-2 relative cursor-pointer overflow-hidden"
              onClick={() => setShowAllPhotos(true)}
            >
              <img
                src={listing.images[0]}
                alt="Main"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Side images */}
            {listing.images.slice(1, 5).map((img, i) => (
              <div
                key={i}
                className="relative cursor-pointer overflow-hidden"
                onClick={() => setShowAllPhotos(true)}
              >
                <img
                  src={img}
                  alt={`Photo ${i + 2}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {i === listing.images.length - 2 && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      See all {listing.images.length} photos
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: single image with dots */}
          <div className="md:hidden relative h-72">
            <img
              src={listing.images[selectedImage]}
              alt="Property"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {listing.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === selectedImage ? "bg-white w-4" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============ FULLSCREEN PHOTO MODAL ============ */}
      {showAllPhotos && (
        <div className="fixed inset-0 z-[100] bg-black/95 overflow-y-auto">
          <div className="sticky top-0 z-10 flex justify-between items-center p-4 bg-black/80 backdrop-blur-sm">
            <span className="text-white text-sm">
              {listing.images.length} photos
            </span>
            <button
              onClick={() => setShowAllPhotos(false)}
              className="text-white hover:text-gray-300 p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="max-w-4xl mx-auto px-4 pb-12 space-y-3">
            {listing.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Photo ${i + 1}`}
                className="w-full rounded-lg"
              />
            ))}
          </div>
        </div>
      )}

      {/* ============ MAIN CONTENT ============ */}
      <div
        className="max-w-6xl mx-auto px-4 sm:px-6 py-8 transition-all duration-500"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT COLUMN (2/3) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Price & Quick Info */}
            <div>
              <div className="flex items-baseline gap-3 flex-wrap">
                <h1 className="text-4xl font-black text-gray-900">
                  ${listing.price}
                  <span className="text-lg font-normal text-gray-400">
                    /mo
                  </span>
                </h1>
                <span className="text-sm text-gray-400">·</span>
                <span className="text-gray-600 font-medium">
                  {listing.beds} bd
                </span>
                <span className="text-sm text-gray-400">·</span>
                <span className="text-gray-600 font-medium">
                  {listing.baths} ba
                </span>
              </div>
              <p className="mt-1 text-gray-500">
                📍 {listing.location} · {listing.distance}
              </p>
              <div className="mt-2 inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                Available {listing.availableDate}
              </div>
            </div>

            {/* House Details Grid */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                What you need to know
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  {
                    icon: "🐾",
                    label: "Pets",
                    value: listing.petFriendly ? "Pet-friendly" : "No pets",
                  },
                  {
                    icon: "🛋️",
                    label: "Furnished",
                    value: listing.furnished ? "Yes" : "Unfurnished",
                  },
                  { icon: "👕", label: "Laundry", value: listing.laundry },
                  { icon: "🅿️", label: "Parking", value: listing.parking },
                  { icon: "📝", label: "Lease", value: listing.leaseLength },
                  {
                    icon: "💡",
                    label: "Utilities",
                    value: listing.utilities,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-gray-50 rounded-xl p-3.5 border border-gray-100"
                  >
                    <div className="text-lg mb-1">{item.icon}</div>
                    <p className="text-xs text-gray-400 font-medium">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-gray-800 mt-0.5">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                About this place
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {listing.description}
              </p>
            </div>

            {/* ============ ROOMMATES SECTION ============ */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-1">
                Meet your roommate{listing.roommates.length > 1 ? "s" : ""}
              </h2>
              <p className="text-sm text-gray-400 mb-5">
                {listing.roommates.length} person
                {listing.roommates.length > 1 ? "s" : ""} currently living here
              </p>

              <div className="space-y-5">
                {listing.roommates.map((rm, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-2xl p-5 sm:p-6 border border-gray-100"
                  >
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <img
                        src={rm.avatar}
                        alt={rm.name}
                        className="w-16 h-16 rounded-full object-cover flex-shrink-0 border-2 border-white shadow-md"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <h3 className="text-base font-bold text-gray-900">
                            {rm.name}
                          </h3>
                          <span className="text-xs text-gray-400">
                            {rm.age} · {rm.year} · {rm.major}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                          {rm.bio}
                        </p>
                        {/* Traits */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {rm.traits.map((trait) => (
                            <span
                              key={trait}
                              className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100"
                            >
                              {trait}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ============ RIGHT COLUMN — CONTACT CARD (1/3) ============ */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl border border-gray-200 shadow-lg shadow-gray-100/50 p-6 space-y-5">
              {/* Owner preview */}
              <div className="flex items-center gap-3">
                <img
                  src={listing.roommates[0].avatar}
                  alt={listing.owner}
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-100"
                />
                <div>
                  <p className="font-bold text-gray-900">{listing.owner}</p>
                  <p className="text-xs text-gray-400">
                    {listing.ownerYear} · {listing.ownerMajor}
                  </p>
                </div>
              </div>

              {/* Quick Messages (Facebook Marketplace style) */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Quick Messages
                </p>
                <div className="space-y-2">
                  {quickMessages.map((msg, i) => (
                    <Link key={i} href="/messages">
                      <button className="w-full text-left px-4 py-2.5 rounded-xl text-sm text-gray-700 bg-gray-50 border border-gray-100 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-all duration-200">
                        &ldquo;{msg}&rdquo;
                      </button>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100" />

              {/* Custom message */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Or write your own
                </p>
                <textarea
                  placeholder="Hi! I'm interested in this room..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl text-sm text-gray-700 bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-300 resize-none transition-all"
                />
                <Link href="/messages">
                  <button
                    className="w-full mt-3 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-95"
                    style={{ backgroundColor: "#16a34a" }}
                  >
                    Send Message
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-gray-400">
            © 2026 Roomy · Made for Pitt students
          </p>
        </div>
      </footer>
    </div>
  );
}