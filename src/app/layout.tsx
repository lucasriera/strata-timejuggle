import type { Metadata } from "next";
import { Inter, Libre_Franklin } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Strata PMS — TimeJuggle 2.0",
  description: "Project Management System — Strata Analytics",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${libreFranklin.variable} h-full`}>
      <body className="h-full antialiased">{children}</body>
    </html>
  );
}
