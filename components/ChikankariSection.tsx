import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ChikankariSection() {
  return (
    <section
      id="chikankari"
      className="scroll-mt-20 relative overflow-hidden bg-brand-ivory py-20 sm:py-28 border-b border-brand-border/60"
      aria-label="The Art of Chikankari"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Photography Showcase (img_9 & subtle accent img_8) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Background Frame */}
              <div
                className="absolute -inset-3 sm:-inset-4 rounded-3xl border border-brand-gold/30 bg-brand-alabaster/60 -rotate-1.5 transition-transform duration-500"
                aria-hidden="true"
              />

              {/* Primary Image: Pure White Chikankari Kurti Set (img_9) */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-brand-alabaster shadow-luxury-lg border border-brand-border">
                <Image
                  src="/images/chikankari-white.jpg"
                  alt="Authentic pure white Lucknowi Chikankari kurti set with delicate hand embroidery at Khanna Fabrics"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                />

                {/* Subtle Luxury Gradient Vignette */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brand-onyx/50 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Editorial Photo Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-sans pointer-events-none">
                  <span className="font-serif italic tracking-wide text-xs sm:text-sm text-brand-ivory">
                    Hand-Embroidered Chikankari Kurti Set
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-brand-gold font-medium">
                    Showroom Piece
                  </span>
                </div>
              </div>

              {/* Floating Supporting Detail Inset: Sunny Yellow Chikankari (img_8) */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-44 aspect-[3/4] overflow-hidden rounded-xl border-2 border-white shadow-luxury-lg bg-brand-alabaster z-10 transition-transform duration-300 hover:scale-105">
                <Image
                  src="/images/kurti-yellow.jpg"
                  alt="Sunny yellow handcrafted Chikankari kurti with white thread embroidery"
                  fill
                  sizes="180px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-onyx/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-2 left-2 text-[10px] font-sans font-medium text-white tracking-wider">
                  Floral Motif Detail
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Craft Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Editorial Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-6 sm:w-8 bg-brand-clay" aria-hidden="true" />
              <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-brand-clay">
                Heritage Craftsmanship
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-onyx tracking-tight leading-tight">
              The Art of Chikankari
            </h2>

            {/* Factual Source-Supported Narrative */}
            <p className="mt-5 font-sans text-base sm:text-lg text-brand-charcoal leading-relaxed">
              Discover the quiet elegance of Lucknowi Chikankari through thoughtfully selected kurtis, 
              suits, and Indian wear, brought together in the heart of Connaught Place.
            </p>

            <p className="mt-4 font-sans text-sm sm:text-base text-brand-charcoal/90 leading-relaxed">
              Celebrated for intricate needlework, breathable pure cottons, and fluid georgettes, 
              each design pairs traditional shadow-work motifs with contemporary silhouettes suited 
              for daily comfort and celebratory occasions alike.
            </p>

            {/* Fine Gold Decorative Rule */}
            <div className="my-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-brand-border" />
              <Sparkles className="h-3.5 w-3.5 text-brand-gold shrink-0" aria-hidden="true" />
              <div className="h-px flex-1 bg-brand-border" />
            </div>

            {/* 3 Structured Informational Craft Cards */}
            <div className="space-y-4">
              
              <div className="rounded-xl border border-brand-border/70 bg-white/70 p-4 transition-colors hover:bg-white hover:border-brand-clay/30 shadow-luxury-sm">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-clay">
                  Lucknowi Chikankari
                </span>
                <p className="mt-1 font-sans text-xs sm:text-sm text-brand-charcoal">
                  Authentic needlework on airy georgette, soft mulmul, and breathable cottons featuring classic floral vine and paisley compositions.
                </p>
              </div>

              <div className="rounded-xl border border-brand-border/70 bg-white/70 p-4 transition-colors hover:bg-white hover:border-brand-clay/30 shadow-luxury-sm">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-clay">
                  Indian Wear &amp; Co-Ords
                </span>
                <p className="mt-1 font-sans text-xs sm:text-sm text-brand-charcoal">
                  Curated three-piece ensembles, matching palazzo sets, and coordinated dupattas designed for flattering, effortless wear.
                </p>
              </div>

              <div className="rounded-xl border border-brand-border/70 bg-white/70 p-4 transition-colors hover:bg-white hover:border-brand-clay/30 shadow-luxury-sm">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-clay">
                  Kurtis &amp; Suits
                </span>
                <p className="mt-1 font-sans text-xs sm:text-sm text-brand-charcoal">
                  A rich variety of styles ranging from subtle daytime pastels to richly detailed festive attire, backed by in-house fitting support.
                </p>
              </div>

            </div>

            {/* Navigation CTA */}
            <div className="mt-8">
              <Link
                href="#collections"
                className="group inline-flex items-center gap-2 rounded-full border border-brand-clay/30 bg-white px-6 py-3 font-sans text-xs sm:text-sm font-medium text-brand-clay shadow-luxury-sm transition-all duration-200 hover:border-brand-clay hover:bg-brand-clay hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-clay"
              >
                <span>Explore Chikankari Collections</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
