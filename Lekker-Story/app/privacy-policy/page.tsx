import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, FileText, Utensils, ShoppingBag, PhoneCall } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Kebijakan Privasi (Privacy Policy) | Lekker Story",
  description:
    "Kebijakan privasi dan perlindungan data pelanggan Lekker Story, jajanan kue lekker modern sejak 2014.",
};

export default function PrivacyPolicyPage() {
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
              <ShieldCheck className="w-3.5 h-3.5 text-[#B4682A]" />
              <span>Dokumen Resmi Konsumen</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#241611] tracking-tight">
              Kebijakan Privasi
            </h1>
            <p className="font-body text-base sm:text-lg text-[#241611]/80 leading-relaxed max-w-3xl">
              Komitmen Lekker Story dalam menjaga kerahasiaan informasi pemesanan, data kontak pelanggan, serta privasi transaksi kuliner Anda di seluruh cabang gerobak dan cafe kami.
            </p>
            <p className="font-body text-xs text-[#241611]/60">
              Terakhir diperbarui: Oktober 2026 · Berlaku untuk seluruh gerai dan kanal pemesanan resmi Lekker Story
            </p>
          </div>

          {/* Legal Content Sections */}
          <div className="space-y-8 font-body text-sm sm:text-base text-[#241611]/85 leading-relaxed">
            {/* Section 1 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white/70 border border-[#241611]/10 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3A2318] text-[#E8A93B] flex items-center justify-center shrink-0">
                  <Utensils className="w-5 h-5" />
                </div>
                <h2 className="font-display text-xl font-bold text-[#241611]">
                  1. Komitmen Privasi Jajanan Nusantara
                </h2>
              </div>
              <p>
                Perjalanan Lekker Story dimulai dari gerobak jajanan di depan sekolah dasar pada tahun 2014 hingga kini berkembang ke puluhan cabang gerobak modern dan cafe ber-AC di berbagai kota. Kepercayaan pelanggan adalah aset terbesar kami.
              </p>
              <p>
                Kebijakan Privasi ini dirancang untuk memberikan transparansi penuh tentang bagaimana data Anda dikelola saat berbelanja langsung di gerai maupun ketika berinteraksi melalui platform digital kami.
              </p>
            </section>

            {/* Section 2 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white/70 border border-[#241611]/10 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3A2318] text-[#E8A93B] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="font-display text-xl font-bold text-[#241611]">
                  2. Informasi yang Kami Himpun
                </h2>
              </div>
              <p>
                Informasi yang dikumpulkan terbatas pada keperluan transaksi jual beli kuliner yang lancar:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong className="text-[#241611]">Data Pemesanan WhatsApp Cabang:</strong> Nama pemesan, nomor kontak, rincian varian menu lekker (Kelas Klasik, Campur, atau Juara), serta alamat atau patokan pengantaran.
                </li>
                <li>
                  <strong className="text-[#241611]">Interaksi Media Sosial:</strong> Pesan atau komentar yang Anda sampaikan melalui akun resmi Instagram @lekkerstory terkait ulasan produk atau informasi kemitraan.
                </li>
                <li>
                  <strong className="text-[#241611]">Data Pembayaran Kasir:</strong> Konfirmasi pembayaran non-tunai melalui QRIS atau transfer bank resmi untuk verifikasi transaksi di kasir.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white/70 border border-[#241611]/10 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3A2318] text-[#E8A93B] flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="font-display text-xl font-bold text-[#241611]">
                  3. Pemanfaatan Data dan Perlindungan Tanpa Kompromi
                </h2>
              </div>
              <p>
                Setiap informasi yang Anda berikan hanya digunakan untuk kepentingan operasional:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Memproses antrean adonan panggang agar kue lekker tiba dalam kondisi renyah maksimal.</li>
                <li>Koordinasi pengantaran pesanan dalam jumlah banyak (event, arisan, atau gathering kantor).</li>
                <li>Menindaklanjuti masukan rasa dan pelayanan demi peningkatan mutu sajian di seluruh gerai.</li>
              </ul>
              <div className="p-4 rounded-2xl bg-[#E8A93B]/15 border border-[#E8A93B]/30 text-xs sm:text-sm font-semibold text-[#3A2318]">
                Kami menjamin bahwa Lekker Story tidak pernah memperjualbelikan, menyewakan, atau menyebarkan data kontak pelanggan kepada pihak ketiga untuk kepentingan promosi komersial atau spam telemarketing.
              </div>
            </section>

            {/* Section 4 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white/70 border border-[#241611]/10 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3A2318] text-[#E8A93B] flex items-center justify-center shrink-0">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <h2 className="font-display text-xl font-bold text-[#241611]">
                  4. Pemesanan Melalui Layanan Pesan Antar Online
                </h2>
              </div>
              <p>
                Bagi pelanggan yang memesan menu Lekker Story melalui aplikasi pihak ketiga (GoFood, GrabFood, ShopeeFood):
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Data pribadi seperti alamat pengiriman, nomor telepon, dan metode pembayaran digital dikelola langsung oleh platform aplikasi yang bersangkutan.</li>
                <li>Lekker Story hanya menerima rincian menu dan instruksi khusus terkait pesanan untuk diteruskan ke tim dapur atau gerobak.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white/70 border border-[#241611]/10 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3A2318] text-[#E8A93B] flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <h2 className="font-display text-xl font-bold text-[#241611]">
                  5. Saluran Bantuan dan Pertanyaan Privasi
                </h2>
              </div>
              <p>
                Untuk pertanyaan mengenai privasi data atau bantuan informasi pesanan, Anda dapat menghubungi saluran resmi kami:
              </p>
              <div className="p-5 rounded-2xl bg-white border border-[#241611]/10 space-y-2 text-xs sm:text-sm">
                <p>
                  <strong className="text-[#241611]">Nama Merek:</strong> Lekker Story
                </p>
                <p>
                  <strong className="text-[#241611]">Instagram Resmi:</strong>{" "}
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
                  <strong className="text-[#241611]">WhatsApp Layanan:</strong>{" "}
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
              href="/terms-conditions"
              className="text-xs sm:text-sm font-body font-semibold text-[#B4682A] hover:underline"
            >
              Lihat Syarat & Ketentuan Layanan &rarr;
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
