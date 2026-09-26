import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Khanna Fabrics | Women's Fashion & Lucknowi Chikankari | Connaught Place, New Delhi",
  description:
    "Premier women's clothing boutique in Connaught Place, New Delhi. Featuring handcrafted Lucknowi Chikankari kurtis, luxury unstitched fabric sets, and bespoke ethnic wear. Inner Circle, D Block, Connaught Place.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="min-h-screen bg-[#FAF8F5] text-[#1C1917] font-sans antialiased selection:bg-[#B35446] selection:text-white">
        {children}
      </body>
    </html>
  );
}
