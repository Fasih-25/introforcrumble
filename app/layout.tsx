import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted so builds never depend on reaching Google Fonts.
const fraunces = localFont({
  src: "./fonts/fraunces.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-fraunces",
});

const caveat = localFont({
  src: "./fonts/caveat.woff2",
  weight: "400 700",
  display: "swap",
  variable: "--font-caveat",
});

const dmSans = localFont({
  src: "./fonts/dm-sans.woff2",
  weight: "100 1000",
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Fasih x Crumble | A cookie-sized intro",
  description:
    "Muhammad Fasih Rana, full-stack JavaScript developer, would love to bake something with Crumble.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFF4E2",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${caveat.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
