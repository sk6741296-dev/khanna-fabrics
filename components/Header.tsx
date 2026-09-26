"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu } from "lucide-react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "Collections", href: "#collections" },
  { name: "Chikankari", href: "#chikankari" },
  { name: "Experience", href: "#experience" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Gallery", href: "#gallery" },
  { name: "Visit Us", href: "#visit" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-luxury-sm border-b border-brand-border/70 py-3.5"
            : "bg-[#FAF8F5] border-b border-brand-border/40 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Brand Logo & Wordmark */}
            <div className="flex shrink-0 items-center">
              <Logo isScrolled={isScrolled} />
            </div>

            {/* Center: Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2"
              aria-label="Main Navigation"
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-full px-3.5 py-1.5 font-sans text-sm font-medium text-brand-charcoal transition-colors hover:text-brand-clay hover:bg-brand-alabaster/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-clay/50"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right: ONLY ONE Action — Phone Contact */}
            <div className="hidden sm:flex items-center">
              <a
                href="tel:+911123411929"
                className="group flex items-center gap-2 rounded-full border border-brand-clay/30 bg-white/80 px-4 py-2 font-sans text-xs sm:text-sm font-medium text-brand-clay shadow-luxury-sm transition-all duration-200 hover:border-brand-clay hover:bg-brand-clay hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-clay focus-visible:ring-offset-2"
                aria-label="Call Khanna Fabrics at +91 11 2341 1929"
              >
                <Phone className="h-3.5 w-3.5 transition-transform group-hover:rotate-12" aria-hidden="true" />
                <span className="font-semibold tracking-wide">Call +91 11 2341 1929</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-charcoal hover:bg-brand-alabaster hover:text-brand-onyx transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-clay"
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
      />
    </>
  );
}
