import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import Logo from "./Logo";

const FOOTER_NAV = [
  { name: "Home", href: "#home" },
  { name: "Collections", href: "#collections" },
  { name: "Chikankari", href: "#chikankari" },
  { name: "Experience", href: "#experience" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Gallery", href: "#gallery" },
  { name: "Visit Us", href: "#visit" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-onyx text-white/90 border-t border-brand-border/20 pt-16 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center">
              <Logo />
            </div>
            <p className="font-serif text-base sm:text-lg text-white/80 max-w-sm leading-relaxed">
              Indian wear, Chikankari and refined fabrics in the heart of Connaught Place.
            </p>
            <p className="font-sans text-xs text-white/50 max-w-sm leading-relaxed">
              Celebrating delicate Lucknowi needlework, bespoke tailoring, and heritage retail hospitality across two curated showroom levels in New Delhi.
            </p>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Navigation
            </p>
            <nav className="flex flex-col space-y-2.5" aria-label="Footer Navigation">
              {FOOTER_NAV.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-sans text-sm text-white/70 hover:text-brand-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Boutique Contact & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Connaught Place Boutique
            </p>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="h-4 w-4 shrink-0 text-brand-gold mt-1" aria-hidden="true" />
                <div className="space-y-0.5">
                  <p className="font-medium text-white">D Block, Connaught Place</p>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Inner Circle, D-6&amp;16/1, Radial Rd 5, New Delhi 110001
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-white/80">
                <Phone className="h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                <a
                  href="tel:+911123411929"
                  className="font-medium text-white hover:text-brand-gold transition-colors"
                >
                  +91 11 2341 1929
                </a>
              </div>

              <div className="flex items-center gap-3 text-white/80">
                <Clock className="h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                <span>Open Daily: 11:00 AM &ndash; 9:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; 2026 Khanna Fabrics. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Women&apos;s Clothing Boutique &bull; Connaught Place, New Delhi
          </p>
        </div>
      </div>
    </footer>
  );
}
