"use client";

import { useState } from "react";
import Link from "next/link";

const PHONE = "832-221-3688";
const PHONE_HREF = "tel:8322213688";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="flex flex-col leading-none">
              <span className="text-white font-black text-xl lg:text-2xl tracking-tight">
                AC <span className="text-brand-red">Super</span>Center
              </span>
              <span className="text-gray-400 text-xs font-medium tracking-widest uppercase">
                acsupercenter.com
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/#pricing" className="text-gray-300 hover:text-white font-medium transition-colors">
              Pricing
            </Link>
            <Link href="/#how-it-works" className="text-gray-300 hover:text-white font-medium transition-colors">
              How It Works
            </Link>
            <Link href="/#trane-systems" className="text-gray-300 hover:text-white font-medium transition-colors">
              Trane Systems
            </Link>
            <Link href="/#service-areas" className="text-gray-300 hover:text-white font-medium transition-colors">
              Service Areas
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {PHONE}
            </a>
          </div>

          {/* Mobile: phone icon + hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-1.5 bg-brand-red text-white font-bold px-3 py-2 rounded-lg text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-navy-800 border-t border-navy-700 px-4 py-4">
          <nav className="flex flex-col gap-4">
            <Link href="/#pricing" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white font-medium py-2 border-b border-navy-700">
              Pricing
            </Link>
            <Link href="/#how-it-works" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white font-medium py-2 border-b border-navy-700">
              How It Works
            </Link>
            <Link href="/#trane-systems" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white font-medium py-2 border-b border-navy-700">
              Trane Systems
            </Link>
            <Link href="/#service-areas" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white font-medium py-2 border-b border-navy-700">
              Service Areas
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white font-medium py-2">
              Contact
            </Link>
          </nav>
          <a
            href={PHONE_HREF}
            className="mt-4 flex items-center justify-center gap-2 bg-brand-red text-white font-bold px-4 py-3 rounded-lg w-full text-center"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call {PHONE}
          </a>
        </div>
      )}
    </header>
  );
}
