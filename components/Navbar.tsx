"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {["Find a Home", "List Your Place", "Help"].map((item) => (
              <button
                key={item}
                className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 
                  hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-200"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1
              className="text-2xl font-black tracking-tight"
              style={{ color: "#16a34a" }}
            >
              roomy
            </h1>
          </div>

          {/* Right: Auth buttons */}
          <div className="flex items-center gap-2">
            <button className="hidden sm:block px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-100 transition-all duration-200">
              Login
            </button>
            <button
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
              style={{ backgroundColor: "#16a34a" }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-1 shadow-lg">
          {["Find a Home", "List Your Place", "Help", "Login"].map((item) => (
            <button
              key={item}
              className="block w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
