import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface CollectionItem {
  id: string;
  title: string;
  subtitle: string;
  categoryBadge: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  aspectRatioClass?: string;
  href: string;
  featured?: boolean;
}

interface CollectionCardProps {
  item: CollectionItem;
  className?: string;
}

export default function CollectionCard({ item, className = "" }: CollectionCardProps) {
  return (
    <Link
      href={item.href}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-brand-border/80 bg-white shadow-luxury-sm transition-all duration-300 hover:shadow-luxury-md hover:border-brand-clay/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-clay ${className}`}
      aria-label={`Explore ${item.title} at Khanna Fabrics`}
    >
      {/* Image Container */}
      <div className={`relative w-full overflow-hidden bg-brand-alabaster ${item.aspectRatioClass || "aspect-[3/4]"}`}>
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Delicate Vignette for Category Badge Contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-onyx/40 via-transparent to-black/10 pointer-events-none"
          aria-hidden="true"
        />

        {/* Badge Eyebrow */}
        <div className="absolute top-3.5 left-3.5">
          <span className="inline-block rounded-full bg-white/90 backdrop-blur-md px-3 py-1 font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-brand-clay shadow-sm border border-brand-border/60">
            {item.categoryBadge}
          </span>
        </div>

        {/* Arrow Reveal Accent on Hover */}
        <div className="absolute top-3.5 right-3.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-md text-brand-onyx opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-1 shadow-sm">
          <ArrowUpRight className="h-4 w-4 text-brand-clay" aria-hidden="true" />
        </div>
      </div>

      {/* Editorial Content Container */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 bg-white">
        <div>
          <span className="block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-muted">
            {item.subtitle}
          </span>
          <h3 className="mt-1.5 font-serif text-xl sm:text-2xl font-medium text-brand-onyx group-hover:text-brand-clay transition-colors duration-200">
            {item.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm font-sans text-brand-charcoal leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Subtle Underline Indicator */}
        <div className="mt-4 pt-3 border-t border-brand-border/50 flex items-center justify-between text-xs font-sans font-medium text-brand-clay">
          <span>View In Boutique</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
