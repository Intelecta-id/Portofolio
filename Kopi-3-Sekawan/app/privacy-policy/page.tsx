import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, FileText, Coffee, Wifi, PhoneCall } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyWhatsAppButton from "@/components/ui/StickyWhatsAppButton";
import { brandData } from "@/data/brandData";

export const metadata: Metadata = {
  title: "Kebijakan Privasi (Privacy Policy) | Kopi 3 Sekawan Apartemen Brooklyn",
  description:
    "Kebijakan privasi dan perlindungan data pelanggan Kopi 3 Sekawan di Unit RA-03 Retail Area Apartemen Brooklyn, Alam Sutera.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="py-12 md:py-20 bg-oat min-h-screen text-espresso">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-crema hover:text-espresso transition-spring"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Beranda</span>
            </Link>
            <span className="text-xs text-espresso/60 font-medium">
              Unit RA-03 Apartemen Brooklyn
            </span>
          </div>

          {/* Page Header */}
          <div className="space-y-4 border-b border-espresso/10 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream text-xs font-bold text-crema">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Dokumen Resmi Kedai</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-espresso tracking-tight">
              Kebijakan Privasi
            </h1>
            <p className="text-base sm:text-lg text-espresso/80 leading-relaxed max-w-3xl">
              Komitmen Kopi 3 Sekawan dalam melindungi informasi privasi pemesanan, data kontak pelanggan, serta kenyamanan komunikasi setiap pengunjung kedai.
            </p>
            <p className="text-xs text-espresso/60">
              Terakhir diperbarui: Oktober 2026 · Berlaku untuk seluruh layanan kedai dan pemesanan WhatsApp
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 text-sm sm:text-base text-espresso/85 leading-relaxed">
            {/* Section 1 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-cream/50 border border-espresso/10 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-espresso text-oat flex items-center justify-center shrink-0">
                  <Coffee className="w-5 h-5 text-crema" />
                </div>
                <h2 className="font-display text-xl font-bold text-espresso">
                  1. Komitmen Privasi Komunitas Kedai
                </h2>
              </div>
              <p>
                Kopi 3 Sekawan beroperasi sebagai kedai kopi lingkungan independen yang bertempat di lantai dasar Apartemen Brooklyn, Alam Sutera. Kami menghargai rasa percaya yang Anda berikan ketika berkunjung, menikmati seduhan kopi, maupun saat melakukan pemesanan melalui saluran digital kami.
              </p>
              <p>
                Kebijakan ini menjabarkan bagaimana data pribadi dikelola secara bertanggung jawab, transparan, dan semata-mata demi memberikan pengalaman ngopi yang nyaman tanpa kekhawatiran privasi.
              </p>
            </section>

            {/* Section 2 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-cream/50 border border-espresso/10 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-espresso text-oat flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-crema" />
                </div>
                <h2 className="font-display text-xl font-bold text-espresso">
                  2. Informasi yang Kami Kumpulkan
                </h2>
              </div>
              <p>
                Data yang kami peroleh terbatas pada keperluan transaksi dan kenyamanan pelayanan:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong className="text-espresso">Data Pemesanan WhatsApp:</strong> Nama pelanggan, nomor WhatsApp, rincian menu yang dipesan, catatan racikan (level gula/es), serta nomor tower dan unit jika meminta layanan antar di area Apartemen Brooklyn.
                </li>
                <li>
                  <strong className="text-espresso">Umpan Balik & Masukan:</strong> Saran atau kritik yang Anda kirimkan secara sukarela melalui pesan langsung demi penyempurnaan rasa dan pelayanan kami.
                </li>
                <li>
                  <strong className="text-espresso">Data Transaksi Kasir:</strong> Bukti transfer atau konfirmasi QRIS yang diverifikasi saat pembayaran di tempat.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-cream/50 border border-espresso/10 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-espresso text-oat flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5 text-crema" />
                </div>
                <h2 className="font-display text-xl font-bold text-espresso">
                  3. Pemanfaatan Data dan Larangan Penjualan Data
                </h2>
              </div>
              <p>
                Seluruh data kontak dan pesanan Anda hanya dimanfaatkan untuk kepentingan:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Memproses racikan pesanan kopi dan makanan ringan secara akurat sesuai urutan antrean.</li>
                <li>Memfasilitasi pengantaran pesanan ke unit atau lobi gedung apartemen dengan tepat waktu.</li>
                <li>Mengabari pelanggan apabila ada varian biji kopi atau menu musiman tertentu yang sedang habis.</li>
              </ul>
              <div className="p-4 rounded-2xl bg-cream border border-espresso/10 text-xs sm:text-sm font-semibold text-espresso">
                Prinsip Tanpa Kompromi: Kopi 3 Sekawan tidak pernah menjual, menyewakan, atau mendistribusikan daftar nomor kontak maupun data pelanggan kepada agen pemasaran, pengiklan, atau pihak ketiga mana pun.
              </div>
            </section>

            {/* Section 4 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-cream/50 border border-espresso/10 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-espresso text-oat flex items-center justify-center shrink-0">
                  <Wifi className="w-5 h-5 text-crema" />
                </div>
                <h2 className="font-display text-xl font-bold text-espresso">
                  4. Kebijakan Jaringan Wi-Fi Pengunjung
                </h2>
              </div>
              <p>
                Sebagai fasilitas penunjang bagi pelanggan yang bekerja dari cafe (WFC) atau mahasiswa yang mengerjakan tugas, kami menyediakan akses Wi-Fi berkecepatan tinggi:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Kata sandi Wi-Fi dapat diminta secara gratis ke barista di meja bar.</li>
                <li>Kopi 3 Sekawan tidak memantau, merekam, atau menyimpan riwayat penjelajahan internet pribadi, dokumen kerja, maupun konten yang diakses oleh perangkat pengunjung.</li>
                <li>Pengunjung bertanggung jawab menjaga keamanan perangkat masing-masing saat terhubung ke jaringan bersama.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-cream/50 border border-espresso/10 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-espresso text-oat flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5 text-crema" />
                </div>
                <h2 className="font-display text-xl font-bold text-espresso">
                  5. Saluran Komunikasi Resmi
                </h2>
              </div>
              <p>
                Jika Anda memiliki pertanyaan mengenai privasi data atau ingin memperbarui informasi pesanan Anda, silakan hubungi saluran resmi kami:
              </p>
              <div className="p-5 rounded-2xl bg-cream border border-espresso/10 space-y-2 text-xs sm:text-sm">
                <p>
                  <strong className="text-espresso">Nama Usaha:</strong> {brandData.name}
                </p>
                <p>
                  <strong className="text-espresso">Lokasi Fisik:</strong> {brandData.location.address}
                </p>
                <p>
                  <strong className="text-espresso">WhatsApp Resmi:</strong>{" "}
                  <a
                    href={brandData.contact.getWhatsappOrderUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-crema hover:underline"
                  >
                    {brandData.contact.phoneDisplay}
                  </a>
                </p>
                <p>
                  <strong className="text-espresso">Instagram:</strong>{" "}
                  <a
                    href={brandData.location.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-crema hover:underline"
                  >
                    {brandData.location.instagramHandle}
                  </a>
                </p>
              </div>
            </section>
          </div>

          {/* Bottom Navigation */}
          <div className="pt-6 border-t border-espresso/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-espresso text-oat hover:bg-crema transition-spring"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Halaman Utama</span>
            </Link>
            <Link
              href="/terms-conditions"
              className="text-xs sm:text-sm font-semibold text-crema hover:underline"
            >
              Lihat Syarat & Ketentuan Layanan &rarr;
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <StickyWhatsAppButton />
    </>
  );
}
