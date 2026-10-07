import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileCheck, Clock, Flame, Banknote, MapPin, PhoneCall } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan Layanan (Terms & Conditions) | Lekker Story",
  description:
    "Syarat dan ketentuan pembelian, standar penyajian kue lekker renyah, jam operasional cabang, dan etika transaksi di Lekker Story.",
};

export default function TermsConditionsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F3EBD9] text-[#241611] pt-24 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-body font-bold text-[#B4682A] hover:text-[#241611] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Beranda</span>
            </Link>
            <span className="text-xs font-body text-[#241611]/60 font-medium">
              Kue Lekker Sejak 2014
            </span>
          </div>

          {/* Page Header */}
          <div className="space-y-4 border-b border-[#241611]/10 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8A93B]/20 text-xs font-body font-bold text-[#3A2318]">
              <FileCheck className="w-3.5 h-3.5 text-[#B4682A]" />
              <span>Pedoman Layanan Pelanggan</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#241611] tracking-tight">
              Syarat & Ketentuan
            </h1>
            <p className="font-body text-base sm:text-lg text-[#241611]/80 leading-relaxed max-w-3xl">
              Panduan pelayanan pemesanan, standar penyajian lekker renyah, kebijakan operasional cabang, serta etika transaksi di Lekker Story.
            </p>
            <p className="font-body text-xs text-[#241611]/60">
              Terakhir diperbarui: Oktober 2026 · Berlaku untuk seluruh pelanggan di seluruh cabang
            </p>
          </div>

          {/* Terms Content Sections */}
          <div className="space-y-8 font-body text-sm sm:text-base text-[#241611]/85 leading-relaxed">
            {/* Section 1 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white/70 border border-[#241611]/10 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3A2318] text-[#E8A93B] flex items-center justify-center shrink-0">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h2 className="font-display text-xl font-bold text-[#241611]">
                  1. Ketentuan Umum & Profil Sajian
                </h2>
              </div>
              <p>
                Lekker Story adalah brand kuliner kue lekker Indonesia yang menghadirkan crepes tipis renyah dengan resep adonan istimewa dan aneka topping berkualitas. Kami melayani pelanggan melalui format gerobak modern di lokasi strategis hingga cafe ber-AC yang nyaman.
              </p>
              <p>
                Dengan membeli produk atau memesan melalui layanan kami, pelanggan dianggap telah membaca, memahami, dan menyetujui syarat serta ketentuan yang berlaku.
              </p>
            </section>

            {/* Section 2 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white/70 border border-[#241611]/10 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3A2318] text-[#E8A93B] flex items-center justify-center shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <h2 className="font-display text-xl font-bold text-[#241611]">
                  2. Standar Panggang Segar dan Karakteristik Lekker
                </h2>
              </div>
              <p>
                Kue lekker kami dipanggang dadakan satu per satu di atas wajan putar panas untuk memastikan sensasi renyah yang sempurna:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong className="text-[#241611]">Saran Waktu Santap:</strong> Kue lekker memiliki tekstur tipis krispi yang paling nikmat disantap langsung sesaat setelah matang di gerai.
                </li>
                <li>
                  <strong className="text-[#241611]">Kondisi Pesan Antar / Takeaway:</strong> Uap panas di dalam kemasan tertutup selama proses pengiriman dapat memengaruhi tingkat kerenyahan. Pelanggan dapat menghangatkan kembali lekker dengan teflon tanpa minyak selama beberapa detik untuk mengembalikan kerenyahannya.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white/70 border border-[#241611]/10 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3A2318] text-[#E8A93B] flex items-center justify-center shrink-0">
                  <Banknote className="w-5 h-5" />
                </div>
                <h2 className="font-display text-xl font-bold text-[#241611]">
                  3. Transparansi Harga Menu dan Pembayaran
                </h2>
              </div>
              <p>
                Kami menyajikan menu dengan harga yang jelas dan transparan:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Harga menu mulai dari Rp4.000 untuk varian Kelas Klasik hingga varian premium Kelas Juara.</li>
                <li>Pembayaran di kasir cabang menerima uang tunai serta pembayaran non-tunai melalui QRIS.</li>
                <li>Harga menu pada aplikasi pihak ketiga (GoFood, GrabFood, ShopeeFood) dapat mengalami penyesuaian sesuai kebijakan komisi dan biaya promosi dari masing-masing aplikator.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white/70 border border-[#241611]/10 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3A2318] text-[#E8A93B] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <h2 className="font-display text-xl font-bold text-[#241611]">
                  4. Jam Operasional dan Variasi Cabang
                </h2>
              </div>
              <p>
                Secara umum, gerai Lekker Story beroperasi setiap hari dari pukul 10.00 hingga 22.00 WIB.
              </p>
              <p>
                Mengingat lokasi cabang kami tersebar di berbagai pusat perbelanjaan (mall), ruko mandiri, dan area kuliner di wilayah Jabodetabek, Jawa Tengah, Jawa Timur, hingga Papua, jam buka dapat menyesuaikan regulasi pengelola gedung setempat. Pelanggan dapat memeriksa info spesifik cabang atau menghubungi kontak cabang terdekat sebelum berkunjung.
              </p>
            </section>

            {/* Section 5 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white/70 border border-[#241611]/10 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3A2318] text-[#E8A93B] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <h2 className="font-display text-xl font-bold text-[#241611]">
                  5. Pesanan Khusus Acara (Catering & Event)
                </h2>
              </div>
              <p>
                Lekker Story menerima pesanan kue lekker dalam partai besar untuk acara ulang tahun, pernikahan, arisan, maupun gathering instansi. Pemesanan event disarankan dilakukan minimal H-3 melalui WhatsApp resmi agar tim dapat menyiapkan adonan dan staf panggangan secara maksimal.
              </p>
            </section>

            {/* Section 6 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white/70 border border-[#241611]/10 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3A2318] text-[#E8A93B] flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <h2 className="font-display text-xl font-bold text-[#241611]">
                  6. Kontak Layanan Pelanggan
                </h2>
              </div>
              <p>
                Untuk saran, pertanyaan perihal pesanan, atau informasi seputar kemitraan resmi Lekker Story, silakan menghubungi:
              </p>
              <div className="p-5 rounded-2xl bg-white border border-[#241611]/10 space-y-2 text-xs sm:text-sm">
                <p>
                  <strong className="text-[#241611]">Brand:</strong> Lekker Story
                </p>
                <p>
                  <strong className="text-[#241611]">Instagram:</strong>{" "}
                  <a
                    href="https://www.instagram.com/lekkerstory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#B4682A] hover:underline"
                  >
                    @lekkerstory
                  </a>
                </p>
                <p>
                  <strong className="text-[#241611]">WhatsApp Resmi:</strong>{" "}
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#B4682A] hover:underline"
                  >
                    0812-3456-7890
                  </a>
                </p>
              </div>
            </section>
          </div>

          {/* Bottom Navigation */}
          <div className="pt-6 border-t border-[#241611]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-body font-bold bg-[#3A2318] text-[#F3EBD9] hover:bg-[#E8A93B] hover:text-[#3A2318] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Halaman Utama</span>
            </Link>
            <Link
              href="/privacy-policy"
              className="text-xs sm:text-sm font-body font-semibold text-[#B4682A] hover:underline"
            >
              Lihat Kebijakan Privasi Konsumen &rarr;
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
