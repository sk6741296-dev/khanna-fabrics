"use client";

import React from "react";

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/911123411929";

  return (
    <aside aria-label="WhatsApp Contact Widget">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Khanna Fabrics on WhatsApp"
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 rounded-full bg-[#25D366] text-white px-4 py-3 sm:px-4.5 sm:py-3.5 shadow-luxury-md hover:shadow-luxury-lg hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 focus-visible:ring-offset-2"
      >
        {/* Authentic WhatsApp SVG Icon */}
        <svg
          className="h-6 w-6 fill-current shrink-0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.59 20.16 9.16 19.77 7.91 19.03L7.61 18.85L4.5 19.67L5.33 16.63L5.13 16.32C4.32 15.02 3.89 13.5 3.89 11.92C3.89 7.42 7.55 3.76 12.05 3.76C14.23 3.76 16.27 4.61 17.81 6.15C19.35 7.69 20.2 9.73 20.2 11.91C20.2 16.42 16.54 20.16 12.05 20.16ZM16.53 14.39C16.28 14.27 15.07 13.67 14.85 13.59C14.62 13.51 14.46 13.47 14.3 13.71C14.13 13.96 13.67 14.5 13.52 14.66C13.38 14.83 13.24 14.85 12.99 14.73C12.74 14.61 11.95 14.35 11.01 13.51C10.27 12.85 9.78 12.04 9.63 11.79C9.49 11.55 9.61 11.41 9.74 11.29C9.85 11.18 9.98 11 10.11 10.85C10.23 10.7 10.27 10.58 10.35 10.42C10.43 10.25 10.39 10.11 10.33 9.99C10.27 9.87 9.78 8.67 9.58 8.18C9.38 7.7 9.18 7.76 9.03 7.76C8.89 7.75 8.72 7.75 8.56 7.75C8.4 7.75 8.13 7.81 7.9 8.06C7.67 8.31 7.03 8.91 7.03 10.13C7.03 11.35 7.92 12.53 8.04 12.69C8.16 12.85 9.79 15.36 12.28 16.44C12.87 16.7 13.33 16.85 13.69 16.97C14.29 17.16 14.83 17.13 15.26 17.07C15.74 17 16.74 16.47 16.95 15.88C17.15 15.28 17.15 14.77 17.09 14.66C17.03 14.56 16.88 14.5 16.63 14.39H16.53Z" />
        </svg>

        {/* Text Label on larger screens */}
        <span className="hidden sm:inline font-sans text-xs sm:text-sm font-semibold tracking-wide">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
