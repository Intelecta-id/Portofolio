import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileCheck, Clock, Laptop, Cigarette, Banknote, ShieldAlert, PhoneCall } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyWhatsAppButton from "@/components/ui/StickyWhatsAppButton";
import { brandData } from "@/data/brandData";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan Layanan (Terms & Conditions) | Kopi 3 Sekawan Apartemen Brooklyn",
  description:
    "Syarat dan ketentuan berkunjung, pemesanan pesan antar, pemanfaatan fasilitas kerja WFC, dan etika kedai di Kopi 3 Sekawan Apartemen Brooklyn.",
};

export default function TermsConditionsPage() {
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
              <FileCheck className="w-3.5 h-3.5" />
              <span>Tata Tertib & Panduan Pelanggan</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-espresso tracking-tight">
              Syarat & Ketentuan
            </h1>
            <p className="text-base sm:text-lg text-espresso/80 leading-relaxed max-w-3xl">
              Panduan pelayanan, etika berkunjung, pemanfaatan fasilitas kerja, dan ketentuan pemesanan di kedai kopi lingkungan Kopi 3 Sekawan.
            </p>
            <p className="text-xs text-espresso/60">
              Terakhir diperbarui: Oktober 2026 · Mengikat bagi seluruh pelanggan dan pengunjung
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 text-sm sm:text-base text-espresso/85 leading-relaxed">
            {/* Section 1 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-cream/50 border border-espresso/10 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-espresso text-oat flex items-center justify-center shrink-0">
                  <FileCheck className="w-5 h-5 text-crema" />
                </div>
                <h2 className="font-display text-xl font-bold text-espresso">
                  1. Identitas Kedai dan Lokasi Layanan
                </h2>
              </div>
              <p>
                Kopi 3 Sekawan adalah entitas kedai kopi lingkungan yang beroperasi secara sah di Unit RA-03, Retail Area Lantai Dasar Apartemen Brooklyn, Jl. Alam Sutera Boulevard Kav. 22 & 26, Pakualam, Serpong Utara, Tangerang Selatan.
              </p>
              <p>
                Area ritel lantai dasar Apartemen Brooklyn bersifat terbuka untuk publik luas tanpa memerlukan kartu akses lift hunian. Setiap pengunjung dari luar maupun penghuni apartemen dipersilakan menikmati fasilitas kami secara setara.
              </p>
            </section>

            {/* Section 2 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-cream/50 border border-espresso/10 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-espresso text-oat flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-crema" />
                </div>
                <h2 className="font-display text-xl font-bold text-espresso">
                  2. Jam Operasional dan Pemesanan Pesan Antar
                </h2>
              </div>
              <p>
                Kami melayani pelanggan setiap hari Senin hingga Minggu mulai pukul 07.00 hingga 21.00 WIB:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong className="text-espresso">Dine-in & Takeaway:</strong> Pesanan dapat dilakukan langsung di meja kasir bar kedai.
                </li>
                <li>
                  <strong className="text-espresso">Pesan Antar Apartemen Brooklyn:</strong> Kami menyediakan layanan pesan antar kopi dan kudapan ke lobi maupun unit tower Apartemen Brooklyn melalui pemesanan WhatsApp resmi.
                </li>
                <li>
                  <strong className="text-espresso">Batas Akhir Pesanan:</strong> Pesanan terakhir (last order) dilayani 30 menit sebelum jam tutup kedai (pukul 20.30 WIB).
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-cream/50 border border-espresso/10 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-espresso text-oat flex items-center justify-center shrink-0">
                  <Laptop className="w-5 h-5 text-crema" />
                </div>
                <h2 className="font-display text-xl font-bold text-espresso">
                  3. Pemanfaatan Fasilitas Kerja (WFC) dan Etika Bersama
                </h2>
              </div>
              <p>
                Kopi 3 Sekawan berkomitmen menyediakan ruang rehat yang kondusif bagi pekerja kreatif, profesional, maupun mahasiswa. Demi kenyamanan seluruh tamu:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong className="text-espresso">Wi-Fi & Stopkontak:</strong> Fasilitas stopkontak di sudut meja dan Wi-Fi gratis dapat digunakan secara wajar selama berkunjung.
                </li>
                <li>
                  <strong className="text-espresso">Panggilan & Meeting Virtual:</strong> Pengunjung yang melakukan panggilan telepon atau meeting Zoom wajib menggunakan earphone atau headphone agar tidak mengganggu fokus pengunjung lain di dalam ruangan.
                </li>
                <li>
                  <strong className="text-espresso">Etika Konsumsi:</strong> Pengunjung dimohon untuk tidak membawa makanan atau minuman berat beraroma menyengat dari luar kedai.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-cream/50 border border-espresso/10 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-espresso text-oat flex items-center justify-center shrink-0">
                  <Cigarette className="w-5 h-5 text-crema" />
                </div>
                <h2 className="font-display text-xl font-bold text-espresso">
                  4. Kebijakan Area Merokok
                </h2>
              </div>
              <p>
                Untuk menjaga kualitas udara dan kesehatan seluruh pengunjung:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Area indoor ber-AC adalah zona bebas asap rokok dan rokok elektronik (vape).</li>
                <li>Bagi pengunjung yang ingin merokok atau vaping, silakan menempati meja di area semi-outdoor / teras luar ritel yang telah dilengkapi asbak.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-cream/50 border border-espresso/10 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-espresso text-oat flex items-center justify-center shrink-0">
                  <Banknote className="w-5 h-5 text-crema" />
                </div>
                <h2 className="font-display text-xl font-bold text-espresso">
                  5. Transparansi Menu dan Metode Pembayaran
                </h2>
              </div>
              <p>
                Semua harga menu yang tercantum pada situs web dan buku menu kasir adalah harga netto yang berlaku:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Tidak ada biaya layanan tersembunyi.</li>
                <li>Metode pembayaran yang kami terima meliputi uang tunai serta pembayaran non-tunai melalui QRIS (GoPay, OVO, Dana, ShopeePay, BCA, dan aplikasi perbankan lainnya).</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-cream/50 border border-espresso/10 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-espresso text-oat flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-5 h-5 text-crema" />
                </div>
                <h2 className="font-display text-xl font-bold text-espresso">
                  6. Penegasan Identitas Mandiri Merek
                </h2>
              </div>
              <p>
                Kopi 3 Sekawan yang berlokasi di Unit RA-03 Apartemen Brooklyn adalah entitas independen. Kami tidak terafiliasi dengan entitas kuliner lain yang menyandang nama serupa di direktori pihak ketiga atau kota lain (seperti Warmindo Tiga Sekawan Yogyakarta atau entitas ejaan penuh di luar Alam Sutera). Seluruh resep seduhan, biji kopi, dan kebijakan operasional dikelola secara mandiri.
              </p>
            </section>

            {/* Section 7 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-cream/50 border border-espresso/10 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-espresso text-oat flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5 text-crema" />
                </div>
                <h2 className="font-display text-xl font-bold text-espresso">
                  7. Kontak Bantuan & Layanan Pelanggan
                </h2>
              </div>
              <p>
                Untuk informasi ketersediaan tempat, pesanan dalam jumlah besar, atau pertanyaan lainnya:
              </p>
              <div className="p-5 rounded-2xl bg-cream border border-espresso/10 space-y-2 text-xs sm:text-sm">
                <p>
                  <strong className="text-espresso">Alamat:</strong> {brandData.location.address}
                </p>
                <p>
                  <strong className="text-espresso">WhatsApp Layanan & Pesanan:</strong>{" "}
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
                  <strong className="text-espresso">Instagram Resmi:</strong>{" "}
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
              href="/privacy-policy"
              className="text-xs sm:text-sm font-semibold text-crema hover:underline"
            >
              Lihat Kebijakan Privasi Pelanggan &rarr;
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <StickyWhatsAppButton />
    </>
  );
}
