import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Labuan Dental Clinic (LDC) | Praktik Mandiri Dokter Gigi Kemenkes RI di Labuan, Pandeglang",
  description:
    "Fasilitas Tempat Praktik Mandiri Dokter Gigi resmi Kemenkes RI di Labuan, Pandeglang. Melayani scaling ultrasonik, tambal estetik komposit, perawatan gigi anak ramah (pedodonti), dan konsultasi kesehatan rongga mulut.",
  keywords: [
    "Labuan Dental Clinic",
    "LDC",
    "Dokter Gigi Labuan",
    "drg. Ansali Iklil Raudoh",
    "Klinik Gigi Pandeglang",
    "Scaling Gigi Labuan",
    "Tambal Gigi Estetik",
    "Dokter Gigi Ramah Anak",
    "Klinik Gigi Ciateul Samping Gudang Alfa",
    "Dokter Gigi Carita",
    "Dokter Gigi Menes",
    "Dokter Gigi Pagelaran",
  ],
  authors: [{ name: "Labuan Dental Clinic" }],
  openGraph: {
    title: "Labuan Dental Clinic (LDC) | Praktik Mandiri Dokter Gigi Kemenkes RI",
    description:
      "Pelayanan kesehatan gigi modern, higienis, dan ramah keluarga di pesisir barat Banten. Lokasi strategis di Jl. Nasional III No. 26 Labuan (Samping Gudang Alfa, Ciateul).",
    url: "https://maps.app.goo.gl/pm5W3EuV9yEHUErL7",
    siteName: "Labuan Dental Clinic",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Labuan Dental Clinic (LDC) | Praktik Mandiri Dokter Gigi Resmi",
    description:
      "Perawatan gigi modern, steril, dan bebas cemas bagi keluarga dan anak-anak di Labuan, Pandeglang.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} ${fraunces.variable}`}>
      <body className="bg-[#FBF9F5] text-[#0C2725] font-sans antialiased selection:bg-[#0D9488] selection:text-white">
        {children}
      </body>
    </html>
  );
}
