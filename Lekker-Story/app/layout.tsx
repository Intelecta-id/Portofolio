import type { Metadata } from "next";
import { Bricolage_Grotesque, Public_Sans, Caveat } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lekker Story — Kue Lekker Bukan Kaleng-Kaleng",
  description:
    "Kue lekker crepes tipis renyah dari gerobak ke cafe. Menu Kelas Klasik, Campur, dan Juara. Cabang di Jabodetabek, Jawa Tengah, Jawa Timur, dan Papua.",
  keywords: ["lekker story", "kue lekker", "crepes", "martabak mini", "cafe", "Jabodetabek"],
  openGraph: {
    title: "Lekker Story — Kue Lekker Bukan Kaleng-Kaleng",
    description:
      "Dari gerobak depan SD ke cafe ber-AC. Kue lekker tipis renyah, topping pilihan dari Rp4.000.",
    type: "website",
    locale: "id_ID",
    siteName: "Lekker Story",
    images: [
      {
        url: "https://images.unsplash.com/photo-1568051243858-533a607809a5?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Lekker Story — Kue Lekker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lekker Story — Kue Lekker Bukan Kaleng-Kaleng",
    description: "Dari gerobak depan SD ke cafe ber-AC.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${bricolage.variable} ${publicSans.variable} ${caveat.variable}`} data-scroll-behavior="smooth">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
