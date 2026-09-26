"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Phone, X, MapPin, Clock } from "lucide-react";
import Logo from "./Logo";

interface NavItem {
  name: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export default function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-onyx/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 flex w-full max-w-sm flex-col bg-brand-ivory shadow-2xl border-l border-brand-border/60 transition-transform duration-300 ease-out">
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-border/60">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-charcoal hover:bg-brand-alabaster hover:text-brand-onyx transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-clay"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
          <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-muted">
            Menu Navigation
          </p>
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="group flex items-center justify-between rounded-lg px-3 py-3.5 text-base font-serif font-medium text-brand-charcoal transition-all hover:bg-white hover:text-brand-clay hover:pl-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-clay/50"
              >
                <span>{item.name}</span>
                <span className="text-xs text-brand-border group-hover:text-brand-clay transition-colors">
                  →
                </span>
              </Link>
            ))}
          </nav>

          {/* Quick Store Info */}
          <div className="mt-8 rounded-xl bg-white p-4 border border-brand-border/60 space-y-3">
            <div className="flex items-start gap-2.5 text-xs text-brand-charcoal">
              <MapPin className="h-4 w-4 shrink-0 text-brand-clay mt-0.5" />
              <span>Inner Circle, D-6&amp;16/1, Radial Rd 5, Connaught Place, New Delhi</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-brand-charcoal">
              <Clock className="h-4 w-4 shrink-0 text-brand-gold" />
              <span>Open Daily: 11:00 AM – 9:00 PM</span>
            </div>
          </div>
        </div>

        {/* Drawer Footer with Single Phone Action */}
        <div className="border-t border-brand-border/60 p-6 bg-brand-alabaster/60 space-y-3">
          <a
            href="tel:+911123411929"
            className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-brand-clay px-5 py-3.5 text-sm font-sans font-medium text-white shadow-sm transition-all hover:bg-brand-clayHover focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-clay focus-visible:ring-offset-2"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>Call +91 11 2341 1929</span>
          </a>
          <p className="text-center text-[11px] text-brand-muted">
            Direct In-Store Assistance • Connaught Place
          </p>
        </div>
      </div>
    </div>
  );
}
