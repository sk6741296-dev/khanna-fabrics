import React from "react";
import Image from "next/image";

interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  category: string;
  className: string;
  aspectRatio: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: "/images/storefront.jpg",
    alt: "Exterior facade and storefront of Khanna Fabrics boutique in Connaught Place D Block",
    title: "The Connaught Place Facade",
    category: "Storefront & Colonnade",
    className: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2",
    aspectRatio: "aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3]",
  },
  {
    src: "/images/cp-interior-arch.jpg",
    alt: "Historic colonial architecture arches framing ethnic suits and silk mannequins",
    title: "Heritage Colonial Arches",
    category: "Boutique Architecture",
    className: "col-span-1 md:col-span-1 lg:col-span-1",
    aspectRatio: "aspect-[4/3]",
  },
  {
    src: "/images/tote-bag.jpg",
    alt: "Signature branded Khanna Fabrics boutique cotton tote bag and gold logo",
    title: "Signature Presentation",
    category: "Boutique Detail",
    className: "col-span-1 md:col-span-1 lg:col-span-1",
    aspectRatio: "aspect-[4/3]",
  },
  {
    src: "/images/dupattas-stoles.jpg",
    alt: "Rich display of colorful handloom dupattas, stoles, and festive textile weaves",
    title: "Handloom Dupattas & Stoles",
    category: "Textile Weaves",
    className: "col-span-1 md:col-span-1 lg:col-span-1",
    aspectRatio: "aspect-[4/3]",
  },
  {
    src: "/images/showroom-stairs.jpg",
    alt: "Boutique staircase leading to the upper-floor Chikankari and bridal salon",
    title: "Upper Salon Ascent",
    category: "Two-Floor Boutique",
    className: "col-span-1 md:col-span-1 lg:col-span-1",
    aspectRatio: "aspect-[4/3]",
  },
  {
    src: "/images/store-counter.jpg",
    alt: "Attentive in-store customer consultation counter and fabric selection area",
    title: "Client Consultation & Care",
    category: "In-Store Hospitality",
    className: "col-span-1 md:col-span-2 lg:col-span-2",
    aspectRatio: "aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/7]",
  },
  {
    src: "/images/cp-exterior.jpg",
    alt: "Iconic Connaught Place Inner Circle colonnade and Radial Road 5 architecture",
    title: "Inner Circle Setting",
    category: "D Block Landmark",
    className: "col-span-1 md:col-span-1 lg:col-span-1",
    aspectRatio: "aspect-[4/3]",
  },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 py-20 lg:py-28 bg-white border-t border-brand-border/60"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-clay/20 bg-brand-clay/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-brand-clay">
            Connaught Place Salon
          </div>
          <h2
            id="gallery-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-onyx"
          >
            Atmosphere &amp; Architecture
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold/40 mx-auto" aria-hidden="true" />
          <p className="font-sans text-base sm:text-lg text-brand-charcoal/80 leading-relaxed">
            A visual walk through our two-floor boutique in D Block, Connaught Place—where
            historic colonial arches meet timeless Indian craftsmanship and attentive hospitality.
          </p>
        </div>

        {/* Asymmetric Responsive Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-2xl border border-brand-border/70 bg-brand-alabaster shadow-luxury-sm hover:shadow-luxury-lg transition-all duration-300 ${item.className}`}
            >
              <div className={`relative w-full h-full min-h-[260px] ${item.aspectRatio}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Gradient & Hover Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-onyx/80 via-brand-onyx/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Bottom Caption */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col justify-end text-white">
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold">
                    {item.category}
                  </span>
                  <h3 className="mt-1 font-serif text-lg sm:text-xl font-medium text-white tracking-wide">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
