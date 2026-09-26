import React from "react";
import Image from "next/image";
import { MapPin, Phone, Clock, ExternalLink, Navigation, Building2 } from "lucide-react";

export default function VisitSection() {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Khanna%20Fabrics&query_place_id=ChIJbRSnczf9DDkRNf5PJplwMsM";

  return (
    <section
      id="visit"
      className="scroll-mt-24 py-20 lg:py-28 bg-[#FAF8F5] border-t border-brand-border/60"
      aria-labelledby="visit-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-clay/30 bg-brand-clay/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-brand-clay">
            Plan Your Visit
          </div>
          <h2
            id="visit-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-onyx"
          >
            Visit Our Connaught Place Boutique
          </h2>
          <div className="h-0.5 w-16 bg-brand-clay/30 mx-auto" aria-hidden="true" />
          <p className="font-sans text-base sm:text-lg text-brand-charcoal/80 leading-relaxed">
            Conveniently situated in the historic Inner Circle of Connaught Place. Step into our
            two-floor showroom for curated Chikankari, festive ensembles, and bespoke fitting care.
          </p>
        </div>

        {/* Split Layout: Contact & Landmark Info + Authentic Boutique Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Details, Hours & Direct Action Links (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8 rounded-3xl border border-brand-border/80 bg-white p-7 sm:p-10 shadow-luxury-sm">
            <div className="space-y-6">
              {/* Category & Boutique Badge */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                <Building2 className="h-4 w-4" aria-hidden="true" />
                <span>Women&apos;s Clothing Boutique • D Block</span>
              </div>

              {/* Exact Verified Address */}
              <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-brand-ivory border border-brand-border/60">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-clay shadow-luxury-xs">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="space-y-1">
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    Exact Address
                  </p>
                  <p className="font-serif text-base sm:text-lg font-medium text-brand-onyx leading-snug">
                    Khanna Fabrics
                  </p>
                  <p className="font-sans text-sm text-brand-charcoal/90 leading-relaxed">
                    Inner Circle, D-6&amp;16/1, Radial Rd 5, Connaught Place, New Delhi, Delhi 110001, India
                  </p>
                  <p className="text-xs text-brand-clay font-medium pt-1">
                    Landmark: D Block, Radial Road 5 (Near Rajiv Chowk Metro Station)
                  </p>
                </div>
              </div>

              {/* Boutique Hours & Telephone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Hours Card */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-brand-ivory border border-brand-border/60">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-gold shadow-luxury-xs">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-semibold uppercase tracking-wider text-brand-muted">
                      Boutique Hours
                    </p>
                    <p className="font-sans font-medium text-sm text-brand-onyx mt-0.5">
                      Monday &ndash; Sunday
                    </p>
                    <p className="font-sans text-sm font-semibold text-brand-charcoal">
                      11:00 AM &ndash; 9:00 PM
                    </p>
                  </div>
                </div>

                {/* Direct Phone Card */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-brand-ivory border border-brand-border/60">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-clay shadow-luxury-xs">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-semibold uppercase tracking-wider text-brand-muted">
                      Direct Telephone
                    </p>
                    <a
                      href="tel:+911123411929"
                      className="font-sans font-semibold text-sm sm:text-base text-brand-clay hover:text-brand-clayHover underline-offset-4 hover:underline transition-colors block mt-0.5"
                    >
                      +91 11 2341 1929
                    </a>
                    <p className="font-sans text-xs text-brand-muted">
                      In-Store Client Inquiries
                    </p>
                  </div>
                </div>
              </div>

              {/* Transit & Arrival Guidance */}
              <div className="rounded-2xl bg-brand-alabaster/70 p-4 sm:p-5 border border-brand-border/50 text-xs sm:text-sm text-brand-charcoal/80 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-brand-onyx">
                  <Navigation className="h-4 w-4 text-brand-clay" aria-hidden="true" />
                  <span>How to Reach Us</span>
                </div>
                <ul className="space-y-1.5 list-disc list-inside text-brand-charcoal/80 pl-1">
                  <li>
                    <strong className="font-medium text-brand-onyx">Metro:</strong> Rajiv Chowk Metro Station (Gate 5 or Gate 6) is a brief 2-minute stroll to D Block Inner Circle.
                  </li>
                  <li>
                    <strong className="font-medium text-brand-onyx">Colonnade Access:</strong> Enter via Radial Road 5 into D Block Inner Circle.
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Buttons: Phone & Google Maps */}
            <div className="pt-4 border-t border-brand-border/50 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="tel:+911123411929"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-clay px-6 py-3.5 font-sans text-sm font-semibold text-white shadow-luxury-sm hover:bg-brand-clayHover transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-clay focus-visible:ring-offset-2"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>Call +91 11 2341 1929</span>
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-charcoal/20 bg-white px-6 py-3.5 font-sans text-sm font-semibold text-brand-charcoal shadow-luxury-xs hover:border-brand-clay hover:text-brand-clay hover:bg-brand-alabaster/60 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-clay focus-visible:ring-offset-2"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Authentic Boutique Atmosphere Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl overflow-hidden border border-brand-border/80 bg-white shadow-luxury-sm">
            <div className="relative h-64 sm:h-80 lg:h-96 w-full">
              <Image
                src="/images/hero-experience.jpg"
                alt="Spacious interior and heritage ambiance of Khanna Fabrics boutique in Connaught Place"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-onyx/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold">
                  Connaught Place Boutique
                </span>
                <p className="font-serif text-lg font-medium text-white">
                  Two-Floor Showroom &amp; Alteration Atelier
                </p>
              </div>
            </div>

            <div className="p-6 bg-brand-alabaster/50 space-y-3">
              <div className="flex items-center justify-between text-xs text-brand-charcoal">
                <span className="font-semibold text-brand-onyx">Ground Level</span>
                <span>Ready-to-Wear Kurtis &amp; Chikankari</span>
              </div>
              <div className="h-px bg-brand-border/50" />
              <div className="flex items-center justify-between text-xs text-brand-charcoal">
                <span className="font-semibold text-brand-onyx">First Floor Salon</span>
                <span>Bridal Sets, Unstitched Fabrics &amp; Fitting</span>
              </div>
              <div className="h-px bg-brand-border/50" />
              <div className="flex items-center justify-between text-xs text-brand-charcoal">
                <span className="font-semibold text-brand-onyx">On-Site Atelier</span>
                <span>Precision Alterations &amp; Custom Sizing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
