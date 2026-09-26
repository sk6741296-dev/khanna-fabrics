import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="#home"
      className={`group flex items-center gap-3 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-clay/50 rounded-sm ${className}`}
      aria-label="Khanna Fabrics - Home"
    >
      {/* Textile / Chikankari Rosette Mark */}
      <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-brand-clay text-brand-ivory shadow-sm transition-transform duration-300 group-hover:scale-105 border border-brand-gold/40">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-current text-brand-ivory"
          aria-hidden="true"
        >
          {/* Stylized needle & delicate floral cross */}
          <path
            d="M12 2C12.5 5 14 6.5 17 7C14 7.5 12.5 9 12 12C11.5 9 10 7.5 7 7C10 6.5 11.5 5 12 2Z"
            fill="#FAF8F5"
          />
          <path
            d="M12 12C12.5 15 14 16.5 17 17C14 17.5 12.5 19 12 22C11.5 19 10 17.5 7 17C10 16.5 11.5 15 12 12Z"
            fill="#FAF8F5"
            opacity="0.8"
          />
          <circle cx="12" cy="12" r="1.8" fill="#C59B27" />
        </svg>
      </div>

      {/* Brand Typographic Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="font-serif text-lg sm:text-xl lg:text-2xl font-bold uppercase tracking-[0.16em] sm:tracking-[0.18em] text-brand-onyx">
          Khanna Fabrics
        </span>
        <span className="mt-1 font-sans text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.24em] sm:tracking-[0.28em] text-brand-muted">
          Connaught Place • New Delhi
        </span>
      </div>
    </Link>
  );
}
