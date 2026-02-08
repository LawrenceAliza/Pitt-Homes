"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: "#f0fdf4" }}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #bbf7d0 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #86efac 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-32 sm:pb-24">
        {/* Main heading */}
        <div
          className="transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]"
            style={{ color: "#15803d" }}
          >
            Make Pitt
            <br />
            <span style={{ color: "#166534" }}>feel like home.</span>
          </h2>
        </div>

        <div
          className="transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "150ms",
          }}
        >
          <p className="mt-5 text-lg sm:text-xl text-gray-500 max-w-xl leading-relaxed">
            Student-verified housing near Pitt campus.
            <br className="hidden sm:block" />
            Browse listings, connect with Panthers, move in.
          </p>
        </div>

        {/* Search Bar - Zillow style */}
        <div
          className="mt-10 max-w-2xl transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "300ms",
          }}
        >
          <div className="bg-white rounded-2xl p-2 flex items-center gap-2 shadow-xl shadow-green-900/5 border border-gray-100">
            {/* Search icon */}
            <div className="pl-3">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by neighborhood, price, or features..."
              className="flex-1 px-2 py-3 text-gray-900 placeholder-gray-400 focus:outline-none text-base"
            />
            <button
              className="px-7 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-95"
              style={{ backgroundColor: "#16a34a" }}
            >
              Search
            </button>
          </div>

          {/* Quick filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            {["Oakland", "South Oakland", "Shadyside", "Squirrel Hill", "Under $700"].map(
              (tag) => (
                <button
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-xs font-medium border border-emerald-200 text-emerald-700 bg-white hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200"
                >
                  {tag}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}