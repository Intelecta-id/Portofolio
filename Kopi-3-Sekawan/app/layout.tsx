import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kopi 3 Sekawan — Kedai Kopi Apartemen Brooklyn Alam Sutera",
  description:
    "Kedai kopi lingkungan (neighborhood coffee shop) di Unit RA-03 Retail Area Apartemen Brooklyn, Jl. Alam Sutera Boulevard. Melayani penghuni, mahasiswa BINUS, dan profesional perkantoran.",
  keywords: [
    "Kopi 3 Sekawan",
    "Apartemen Brooklyn",
    "Alam Sutera",
    "Coffee Shop Alam Sutera",
    "Serpong Utara",
    "Kedai Kopi Tangerang Selatan",
    "Unit RA-03",
  ],
  authors: [{ name: "Kopi 3 Sekawan" }],
  openGraph: {
    title: "Kopi 3 Sekawan — Kedai Kopi Apartemen Brooklyn Alam Sutera",
    description:
      "Oasis kedai kopi lingkungan di lantai dasar Apartemen Brooklyn. Ruang jeda nyaman di koridor Alam Sutera.",
    url: "https://maps.app.goo.gl/CRWBdvhCKRdqDyYN9",
    siteName: "Kopi 3 Sekawan",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kopi 3 Sekawan — Kedai Kopi Apartemen Brooklyn Alam Sutera",
    description: "Kedai kopi lingkungan di Unit RA-03 Retail Area Apartemen Brooklyn.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} ${syne.variable}`}>
      <body className="bg-oat text-espresso font-body antialiased selection:bg-crema selection:text-white">
        {children}
      </body>
    </html>
  );
}
