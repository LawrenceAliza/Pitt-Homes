"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import ListingGrid from "../components/listinggrid";
import { listings } from "../lib/data/listings";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ListingGrid listings={listings} />

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2026 Roomy · Made for Pitt students
          </p>
          <div className="flex gap-6">
            {["About", "Privacy", "Terms", "Contact"].map((link) => (
              <button
                key={link}
                className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
