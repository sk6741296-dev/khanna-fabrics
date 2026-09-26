import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-brand-ivory border-b border-brand-border/60"
      aria-label="Khanna Fabrics Hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Typography & Brand Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            {/* Editorial Eyebrow */}
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <span className="h-px w-6 sm:w-8 bg-brand-clay/60" aria-hidden="true" />
              <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-brand-clay">
                Connaught Place • New Delhi
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-brand-onyx leading-[1.12]">
              Timeless Indian Elegance
            </h1>

            {/* Supporting Editorial Statement */}
            <p className="mt-4 sm:mt-6 font-sans text-base sm:text-lg text-brand-charcoal leading-relaxed max-w-xl">
              Lucknowi Chikankari, refined fabrics, and distinctive Indian wear 
              curated at <strong className="font-semibold text-brand-onyx">Khanna Fabrics</strong>.
            </p>

            {/* Subtle Location & Craft Accent Tag */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-brand-muted">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-alabaster px-3 py-1 border border-brand-border/80">
                <Compass className="h-3.5 w-3.5 text-brand-clay" aria-hidden="true" />
                <span className="font-medium text-brand-charcoal">Inner Circle • D Block</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-alabaster px-3 py-1 border border-brand-border/80">
                <Sparkles className="h-3.5 w-3.5 text-brand-gold" aria-hidden="true" />
                <span className="font-medium text-brand-charcoal">Lucknowi Craft &amp; Fabric Sets</span>
              </div>
            </div>

            {/* Tasteful Fashion CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="#collections"
                className="group inline-flex items-center gap-2.5 rounded-full bg-brand-clay px-6 sm:px-7 py-3 sm:py-3.5 font-sans text-sm font-medium text-white shadow-luxury-sm transition-all duration-300 hover:bg-brand-clayHover hover:shadow-luxury-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-clay focus-visible:ring-offset-2"
              >
                <span>Explore Collections</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>

              <Link
                href="#visit"
                className="group inline-flex items-center gap-2 rounded-full border border-brand-charcoal/20 bg-white/90 px-6 sm:px-7 py-3 sm:py-3.5 font-sans text-sm font-medium text-brand-onyx shadow-luxury-sm transition-all duration-300 hover:border-brand-onyx hover:bg-brand-alabaster focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-clay/50"
              >
                <span>Visit the Boutique</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Authentic Showroom Photography Showcase (img_55) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              
              {/* Decorative Subtle Frame Offset */}
              <div
                className="absolute -inset-2.5 sm:-inset-3 rounded-2xl border border-brand-gold/30 bg-brand-alabaster/40 -rotate-1 sm:-rotate-1.5 transition-transform duration-500"
                aria-hidden="true"
              />

              {/* Main Editorial Image Container */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/12] w-full overflow-hidden rounded-2xl shadow-luxury-lg bg-brand-alabaster border border-brand-border">
                <Image
                  src="/images/hero-showroom.jpg"
                  alt="Khanna Fabrics boutique showroom in Connaught Place showcasing pastel Chikankari kurtas and fine Indian fabrics"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                {/* Subtle Luxury Gradient Overlay (bottom only for caption elegance) */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brand-onyx/60 via-brand-onyx/10 to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Editorial Caption Badge */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 sm:right-4 flex items-center justify-between text-white/95 text-xs font-sans pointer-events-none">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" aria-hidden="true" />
                    <span className="font-serif italic tracking-wide text-xs sm:text-sm">
                      The Connaught Place Showroom
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-brand-ivory/80 font-medium">
                    D Block • CP
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
