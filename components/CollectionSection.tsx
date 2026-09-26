import React from "react";
import CollectionCard, { CollectionItem } from "./CollectionCard";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const COLLECTIONS_DATA: CollectionItem[] = [
  {
    id: "chikankari",
    title: "Lucknowi Chikankari",
    subtitle: "Heritage Hand Embroidery",
    categoryBadge: "Signature Craft",
    description:
      "Delicate shadow work, floral motifs, and timeless craftsmanship on pure mulmul, breathable cotton, and airy georgette.",
    imageSrc: "/images/chikankari-white.jpg",
    imageAlt: "Intricate pure white Lucknowi Chikankari kurti set displayed in Khanna Fabrics Connaught Place showroom",
    aspectRatioClass: "aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4]",
    href: "#chikankari",
    featured: true,
  },
  {
    id: "kurtis",
    title: "Handcrafted Kurtis",
    subtitle: "Vibrant Daily & Festive Wear",
    categoryBadge: "Boutique Favorites",
    description:
      "Vibrant sunshine yellow, pastels, and indigo kurtas with refined threadwork, comfortable drape, and flattering cuts.",
    imageSrc: "/images/kurti-yellow.jpg",
    imageAlt: "Customer wearing handcrafted yellow Chikankari kurti with white floral embroidery inside Khanna Fabrics",
    aspectRatioClass: "aspect-[3/4] sm:aspect-[4/5]",
    href: "#experience",
  },
  {
    id: "anarkalis",
    title: "Artisanal Silhouettes",
    subtitle: "Anarkalis & Flowing Fits",
    categoryBadge: "Festive Elegance",
    description:
      "Graceful rose-pink flared Anarkalis and occasion ensembles featuring intricate floral threadwork and detailed hemlines.",
    imageSrc: "/images/anarkali-pink.jpg",
    imageAlt: "Pastel rose pink hand-embroidered Anarkali kurti showing delicate floral motifs and sleeve craftsmanship",
    aspectRatioClass: "aspect-[3/4] sm:aspect-[4/5]",
    href: "#experience",
  },
  {
    id: "fabric-sets",
    title: "Unstitched Fabric Sets",
    subtitle: "Salwar Kameez & 3-Piece Sets",
    categoryBadge: "Fabric Atelier",
    description:
      "Extensive collections of unstitched salwar kameez materials, Jaipuri prints, and rich fabrics ready for custom tailoring.",
    imageSrc: "/images/fabrics-suits.jpg",
    imageAlt: "Shelves packed with thousands of unstitched fabric sets and salwar suit materials at Khanna Fabrics",
    aspectRatioClass: "aspect-[16/10] sm:aspect-[16/9]",
    href: "#visit",
  },
  {
    id: "pastel-spectrum",
    title: "Pastel Spectrum & Dupattas",
    subtitle: "Curated Hues & Coordinates",
    categoryBadge: "Curated Colors",
    description:
      "A rainbow palette of mint, peach, lavender, sky, and ivory tones across coordinated stoles, dupattas, and plazos.",
    imageSrc: "/images/chikankari-rainbow.jpg",
    imageAlt: "Rainbow rows of hanging Lucknowi Chikankari kurtas in pastel shades at Khanna Fabrics CP showroom",
    aspectRatioClass: "aspect-[16/10] sm:aspect-[16/9]",
    href: "#visit",
  },
];

export default function CollectionSection() {
  const featuredItem = COLLECTIONS_DATA[0];
  const verticalItems = COLLECTIONS_DATA.slice(1, 3);
  const wideItems = COLLECTIONS_DATA.slice(3, 5);

  return (
    <section
      id="collections"
      className="scroll-mt-20 bg-brand-alabaster/40 py-16 sm:py-24 border-b border-brand-border/60"
      aria-label="Khanna Fabrics Signature Collections"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Editorial Introduction */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-3.5 w-3.5 text-brand-gold" aria-hidden="true" />
            <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-brand-clay">
              The Collection
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-onyx tracking-tight leading-tight">
            Crafted for Every Expression
          </h2>

          <p className="mt-4 font-sans text-base text-brand-charcoal leading-relaxed">
            Explore a considered selection of Indian wear, Chikankari craftsmanship, 
            refined fabrics, and distinctive pieces from the <strong className="font-semibold text-brand-onyx">Khanna Fabrics</strong> collection.
          </p>
        </div>

        {/* Lookbook Layout: Asymmetric Assembled Grid */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* Top Asymmetric Row: Featured Large Card + 2 Supporting Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            
            {/* Featured Left Card: Lucknowi Chikankari */}
            <div className="lg:col-span-6 flex flex-col">
              <CollectionCard item={featuredItem} className="h-full" />
            </div>

            {/* Right Supporting Stack: Handcrafted Kurtis & Artisanal Silhouettes */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {verticalItems.map((item) => (
                <CollectionCard key={item.id} item={item} className="h-full" />
              ))}
            </div>

          </div>

          {/* Bottom Row: 2 Panoramic Cards (Unstitched Fabrics & Pastel Spectrum) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {wideItems.map((item) => (
              <CollectionCard key={item.id} item={item} />
            ))}
          </div>

        </div>

        {/* Section Footnote / In-Store Exploration Cue */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 sm:p-8 rounded-2xl bg-white border border-brand-border/80 shadow-luxury-sm">
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-lg sm:text-xl font-medium text-brand-onyx">
              Looking for Bespoke Fitting or Alteration?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-brand-muted font-sans">
              Our Connaught Place boutique provides in-house alterations and personalized styling assistance.
            </p>
          </div>

          <Link
            href="#visit"
            className="group shrink-0 inline-flex items-center gap-2 rounded-full border border-brand-clay/30 bg-brand-alabaster px-5 py-2.5 font-sans text-xs sm:text-sm font-medium text-brand-clay transition-all duration-200 hover:border-brand-clay hover:bg-brand-clay hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-clay"
          >
            <span>Visit the Boutique</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  );
}
