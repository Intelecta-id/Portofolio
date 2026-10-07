import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "QTimes Cafe Serang - Your Cozy Escape",
  description: "QTimes Cafe Serang. Tempat nongkrong kasual, trendi, dan fotogenik di Kotabaru, Kota Serang. Nikmati hidangan lezat dan minuman signature kami.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <body className={`${outfit.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
