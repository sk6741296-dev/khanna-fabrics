import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CollectionSection from "@/components/CollectionSection";
import ChikankariSection from "@/components/ChikankariSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import VisitSection from "@/components/VisitSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-ivory text-brand-onyx">
      {/* Global Header & Navigation Layer */}
      <Header />

      <main className="flex-1">
        {/* Editorial Hero Section */}
        <Hero />

        {/* Signature Collections Section */}
        <CollectionSection />

        {/* Chikankari Craft Section */}
        <ChikankariSection />

        {/* In-Store Experience & Alteration Atelier */}
        <ExperienceSection />

        {/* Curated Customer Testimonials Section */}
        <TestimonialsSection />

        {/* Visual Boutique Gallery Section */}
        <GallerySection />

        {/* Visit Us & Contact Section */}
        <VisitSection />
      </main>

      {/* Luxury Minimal Footer */}
      <Footer />

      {/* Dedicated Floating WhatsApp Contact Button */}
      <FloatingWhatsApp />
    </div>
  );
}
