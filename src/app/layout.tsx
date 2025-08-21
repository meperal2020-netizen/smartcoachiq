import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


export const metadata = {
  metadataBase: new URL("https://smartcoachiq.com"), // cambia a la temporal de Vercel hasta apuntar el dominio
  title: "SmartCoachIQ — Gestión inteligente de equipos de fútbol",
  description:
    "Plataforma impulsada por IA para entrenadores, jugadores y staff. Entrenamientos, calendario, desarrollo físico, fisiológico y médico en un único lugar.",
  keywords: [
    "fútbol", "IA", "gestión deportiva", "entrenamientos", "calendario",
    "wellness", "staff técnico", "SmartCoachIQ"
  ],
  authors: [{ name: "SmartCoachIQ" }],
  creator: "SmartCoachIQ",
  publisher: "SmartCoachIQ",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://smartcoachiq.com",
    siteName: "SmartCoachIQ",
    title: "SmartCoachIQ — Gestión inteligente de equipos de fútbol",
    description:
      "La plataforma inteligente que transforma la gestión de equipos de fútbol.",
    images: [
      { url: "/images/main/og-image.png", width: 1200, height: 630, alt: "SmartCoachIQ" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartCoachIQ — Coming Soon",
    description:
      "Gestión deportiva inteligente para entrenadores, jugadores y staff.",
    images: ["/images/main/og-image.png"],
    creator: "@smartcoachiq", // si luego tienes usuario
  },
};



