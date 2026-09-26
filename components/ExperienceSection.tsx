import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Scissors, Sparkles, Store, Users, MapPin } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 relative overflow-hidden bg-brand-alabaster/50 py-20 sm:py-28 border-b border-brand-border/60"
      aria-label="In-Store Experience and Alteration Atelier"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <Store className="h-4 w-4 text-brand-clay" aria-hidden="true" />
            <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-brand-clay">
              Connaught Place Boutique
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-onyx tracking-tight leading-tight">
            The Khanna Fabrics Experience
          </h2>

          <p className="mt-4 font-sans text-base sm:text-lg text-brand-charcoal leading-relaxed">
            Step into our spacious Connaught Place showroom, where heritage colonial high ceilings 
            meet an extensive curation of Indian textiles, personalized styling guidance, and dedicated fitting care.
          </p>
        </div>

        {/* Asymmetrical Multi-Image & Narrative Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Visual Storytelling Grid (img_59 and img_32) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Primary Showroom Ambiance (img_59) */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl bg-brand-alabaster shadow-luxury-md border border-brand-border">
              <Image
                src="/images/hero-experience.jpg"
                alt="Shoppers exploring ethnic wear and Chikankari collections inside the spacious Khanna Fabrics Connaught Place showroom"
                fill
                sizes="(max-width: 1024px) 100vw, 650px"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-brand-onyx/60 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-sans pointer-events-none">
                <span className="font-serif italic text-xs sm:text-sm text-brand-ivory">
                  High-Ceiling Heritage Showroom
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-brand-gold font-medium">
                  Two-Floor Boutique
                </span>
              </div>
            </div>

            {/* Supporting Two-Column Photo Pair (img_32 & img_21) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Staff Hospitality (img_32) */}
              <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-brand-alabaster shadow-luxury-sm border border-brand-border">
                <Image
                  src="/images/staff-hospitality.jpg"
                  alt="Attentive staff members assisting and styling a customer in a lavender Chikankari kurti at Khanna Fabrics"
                  fill
                  sizes="(max-width: 640px) 100vw, 320px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-onyx/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-xs font-serif italic text-white">
                  Attentive Personal Assistance
                </span>
              </div>

              {/* Try Room & Fitting Section (img_21) */}
              <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-brand-alabaster shadow-luxury-sm border border-brand-border">
                <Image
                  src="/images/try-room.jpg"
                  alt="Fitting area and dedicated try room for alteration and personalized adjustment at Khanna Fabrics"
                  fill
                  sizes="(max-width: 640px) 100vw, 320px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-onyx/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-xs font-serif italic text-white">
                  Fitting Rooms &amp; Fabric Racks
                </span>
              </div>

            </div>

          </div>

          {/* Right Column: In-House Alteration Atelier & Experience Highlights */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Highlight Card: In-House Alteration Atelier */}
            <div className="relative overflow-hidden rounded-2xl border border-brand-clay/30 bg-white p-6 sm:p-8 shadow-luxury-md">
              <div className="absolute top-0 right-0 h-28 w-28 bg-brand-clay/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-2.5 text-brand-clay mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-clay/10 text-brand-clay">
                  <Scissors className="h-4 w-4" aria-hidden="true" />
                </div>
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em]">
                  Alteration Atelier
                </span>
              </div>

              <h3 className="font-serif text-2xl font-medium text-brand-onyx">
                In-House Alterations &amp; Fitting Support
              </h3>

              <p className="mt-3 font-sans text-sm text-brand-charcoal leading-relaxed">
                Personal fitting support and in-house alterations help bring selected pieces 
                closer to the way you want them to fit.
              </p>

              <p className="mt-2.5 font-sans text-xs sm:text-sm text-brand-muted leading-relaxed">
                Shoppers frequently appreciate the convenience of on-the-spot adjustments, 
                ensuring your kurtis, suits, and coordinates leave the store tailored to your preference.
              </p>

              <div className="mt-5 pt-4 border-t border-brand-border/60 flex items-center gap-2 text-xs font-medium text-brand-charcoal">
                <Sparkles className="h-3.5 w-3.5 text-brand-gold shrink-0" aria-hidden="true" />
                <span>Fitting guidance available with all ready-to-wear kurtis and suits</span>
              </div>
            </div>

            {/* Experience Pillar 2: Attentive Assistance */}
            <div className="rounded-2xl border border-brand-border/80 bg-white/80 p-6 shadow-luxury-sm space-y-3">
              <div className="flex items-center gap-2.5 text-brand-charcoal">
                <Users className="h-5 w-5 text-brand-clay" aria-hidden="true" />
                <h3 className="font-serif text-lg font-medium text-brand-onyx">
                  Attentive Personal Assistance
                </h3>
              </div>
              <p className="font-sans text-xs sm:text-sm text-brand-charcoal leading-relaxed">
                Customers frequently mention the warm, patient assistance they receive while exploring colors, 
                comparing fabric weaves, and choosing pieces that best complement their individual style.
              </p>
            </div>

            {/* Experience Pillar 3: Heritage Connaught Place Location */}
            <div className="rounded-2xl border border-brand-border/80 bg-white/80 p-6 shadow-luxury-sm space-y-3">
              <div className="flex items-center gap-2.5 text-brand-charcoal">
                <MapPin className="h-5 w-5 text-brand-clay" aria-hidden="true" />
                <h3 className="font-serif text-lg font-medium text-brand-onyx">
                  Historic Connaught Place Setting
                </h3>
              </div>
              <p className="font-sans text-xs sm:text-sm text-brand-charcoal leading-relaxed">
                Located in Inner Circle, D Block, Khanna Fabrics offers a serene boutique environment 
                spread across two floors in one of New Delhi&apos;s most cherished heritage shopping arcades.
              </p>
            </div>

            {/* Navigation Action */}
            <div className="pt-2">
              <Link
                href="#visit"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-clay px-6 py-3 font-sans text-xs sm:text-sm font-medium text-white shadow-luxury-sm transition-all duration-200 hover:bg-brand-clayHover hover:shadow-luxury-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-clay focus-visible:ring-offset-2"
              >
                <span>Plan Your Visit to Connaught Place</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
