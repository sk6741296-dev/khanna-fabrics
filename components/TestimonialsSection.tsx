import React from "react";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  highlight: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The ethnic collection is truly beautiful, elegant, and so well-crafted. It offers a seamless blend of traditional Indian craftsmanship and modern silhouettes.",
    author: "Sanya Sharma",
    role: "Boutique Patron",
    highlight: "Ethnic & Contemporary Wear",
  },
  {
    quote:
      "A wonderful collection of authentic Lucknowi Chikankari kurtas. The fabric quality is exceptional, and the team takes the time to understand personal styling preferences.",
    author: "Sarika Parmar",
    role: "Regular Client",
    highlight: "Lucknowi Chikankari",
  },
  {
    quote:
      "Delightful shopping experience in Connaught Place. The team was warm and attentive, helping with styling and ensuring the kurti alterations and fit were handled with precision.",
    author: "Priya Singh",
    role: "In-Store Guest",
    highlight: "Personal Styling & Fit",
  },
  {
    quote:
      "My preferred destination for Chikankari kurtis and suit sets. The fabrics are premium and durable, and the convenience of in-house alterations makes every purchase effortless.",
    author: "Aditi Agarwal",
    role: "Repeat Patron",
    highlight: "In-House Alterations",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 py-20 lg:py-28 bg-[#FAF8F5] border-t border-brand-border/60"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            From Our Clients
          </div>
          <h2
            id="testimonials-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-onyx"
          >
            Words from the Boutique
          </h2>
          <div className="h-0.5 w-16 bg-brand-clay/30 mx-auto" aria-hidden="true" />
          <p className="font-sans text-base sm:text-lg text-brand-charcoal/80 leading-relaxed">
            Reflecting the personal relationships, tailored fits, and handcrafted Indian elegance
            experienced by patrons visiting our Connaught Place boutique.
          </p>
        </div>

        {/* Testimonials Grid — 4 Curated Editorial Cards */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-2xl border border-brand-border/80 bg-white p-7 sm:p-9 shadow-luxury-sm hover:shadow-luxury-md hover:border-brand-clay/30 transition-all duration-300"
            >
              <div>
                {/* Header with decorative quote icon & highlight tag */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-alabaster text-brand-clay">
                    <Quote className="h-5 w-5 rotate-180" aria-hidden="true" />
                  </div>
                  <span className="rounded-full bg-brand-alabaster px-3 py-1 font-sans text-xs font-medium text-brand-clay tracking-wide">
                    {item.highlight}
                  </span>
                </div>

                {/* Editorial Quote */}
                <blockquote className="font-serif text-base sm:text-lg text-brand-onyx leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author & Role Footnote */}
              <div className="mt-8 pt-5 border-t border-brand-border/50 flex items-center justify-between">
                <div>
                  <p className="font-sans font-semibold text-sm sm:text-base text-brand-onyx">
                    {item.author}
                  </p>
                  <p className="font-sans text-xs text-brand-muted uppercase tracking-wider">
                    {item.role}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-gold/60" />
                  <span className="font-sans text-[11px] font-medium text-brand-muted tracking-wider uppercase">
                    Connaught Place
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
