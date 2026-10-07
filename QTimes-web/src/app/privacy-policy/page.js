import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, FileText, Coffee, Wifi, PhoneCall } from "lucide-react";

export const metadata = {
  title: "Kebijakan Privasi (Privacy Policy) | QTimes Cafe Serang",
  description:
    "Kebijakan privasi dan perlindungan data pelanggan QTimes Cafe Serang di Kotabaru, Kota Serang.",
};

const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-qtimes-bg text-qtimes-text selection:bg-qtimes-primary selection:text-white">
      {/* Top Simple Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-qtimes-surface/90 backdrop-blur-md border-b border-qtimes-border py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" target="_self" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-qtimes-primary group-hover:scale-105 transition-transform duration-300">
              <img src="/images/qtimes.png" alt="QTimes Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-heading font-bold text-xl tracking-wide text-white">QTimes</span>
          </Link>
          <Link
            href="/"
            target="_self"
            className="inline-flex items-center gap-2 text-sm font-semibold text-qtimes-muted hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 md:px-6 pt-32 pb-20 space-y-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            target="_self"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-qtimes-primary hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Kembali ke Halaman Utama</span>
          </Link>
          <span className="text-xs text-qtimes-muted font-medium">
            Kotabaru, Kota Serang
          </span>
        </div>

        {/* Page Header */}
        <div className="space-y-4 border-b border-qtimes-border pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-qtimes-surface border border-qtimes-border text-xs font-bold text-qtimes-primary">
            <ShieldCheck size={14} />
            <span>Dokumen Resmi Pelanggan</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Kebijakan Privasi
          </h1>
          <p className="text-base sm:text-lg text-qtimes-muted leading-relaxed max-w-3xl">
            Komitmen QTimes Cafe Serang dalam menjaga privasi data pelanggan, kerahasiaan pemesanan delivery, serta kenyamanan nongkrong Anda di tempat kami.
          </p>
          <p className="text-xs text-qtimes-muted">
            Terakhir diperbarui: Oktober 2026 · Berlaku untuk seluruh layanan QTimes Cafe
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-sm sm:text-base text-qtimes-muted leading-relaxed">
          {/* Section 1 */}
          <section className="p-6 sm:p-8 rounded-[24px] bg-qtimes-surface border border-qtimes-border space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-qtimes-primary/20 text-qtimes-primary flex items-center justify-center shrink-0">
                <Coffee size={20} />
              </div>
              <h2 className="font-heading text-xl font-bold text-white">
                1. Komitmen Privasi Pelanggan
              </h2>
            </div>
            <p>
              QTimes Cafe Serang hadir sebagai tempat nongkrong yang kasual, trendi, dan nyaman di kawasan Kotabaru, Kota Serang. Kami berkomitmen untuk selalu menghargai dan melindungi setiap informasi pribadi yang Anda percayakan kepada kami, baik saat berkunjung langsung maupun saat berinteraksi melalui kanal pemesanan online.
            </p>
            <p>
              Kebijakan Privasi ini menjelaskan jenis data yang kami kumpulkan, bagaimana data tersebut digunakan, dan langkah yang kami ambil demi menjaga keamanannya.
            </p>
          </section>

          {/* Section 2 */}
          <section className="p-6 sm:p-8 rounded-[24px] bg-qtimes-surface border border-qtimes-border space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-qtimes-primary/20 text-qtimes-primary flex items-center justify-center shrink-0">
                <FileText size={20} />
              </div>
              <h2 className="font-heading text-xl font-bold text-white">
                2. Informasi yang Kami Kumpulkan
              </h2>
            </div>
            <p>
              Informasi yang kami himpun bersifat terbatas dan relevan untuk kelancaran pelayanan:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="text-white">Data Pemesanan WhatsApp Delivery:</strong> Nama pemesan, nomor telepon atau WhatsApp, daftar hidangan atau minuman yang dipesan, serta alamat tujuan pengantaran di area Serang.
              </li>
              <li>
                <strong className="text-white">Data Reservasi Tempat:</strong> Nama pemesan dan jumlah tamu jika Anda melakukan reservasi meja untuk acara perayaan atau pertemuan khusus.
              </li>
              <li>
                <strong className="text-white">Data Pembayaran Kasir:</strong> Konfirmasi transfer atau verifikasi struk QRIS saat penyelesaian pembayaran transaksi.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="p-6 sm:p-8 rounded-[24px] bg-qtimes-surface border border-qtimes-border space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-qtimes-primary/20 text-qtimes-primary flex items-center justify-center shrink-0">
                <Lock size={20} />
              </div>
              <h2 className="font-heading text-xl font-bold text-white">
                3. Pemanfaatan Data dan Perlindungan Tanpa Kompromi
              </h2>
            </div>
            <p>
              Seluruh informasi kontak dan pesanan Anda semata-mata digunakan untuk:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Memproses racikan minuman signature dan hidangan makanan dengan tepat.</li>
              <li>Memastikan kurir pengantaran menemukan alamat pemesan secara akurat dan tepat waktu.</li>
              <li>Menghubungi pemesan apabila terdapat bahan atau menu yang memerlukan konfirmasi penggantian.</li>
            </ul>
            <div className="p-4 rounded-2xl bg-qtimes-primary/10 border border-qtimes-primary/30 text-xs sm:text-sm font-semibold text-qtimes-secondary">
              Prinsip Privasi Kami: QTimes Cafe tidak pernah memperjualbelikan, menyewakan, atau membagikan nomor kontak pelanggan kepada pihak ketiga untuk kepentingan iklan komersial maupun spam.
            </div>
          </section>

          {/* Section 4 */}
          <section className="p-6 sm:p-8 rounded-[24px] bg-qtimes-surface border border-qtimes-border space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-qtimes-primary/20 text-qtimes-primary flex items-center justify-center shrink-0">
                <Wifi size={20} />
              </div>
              <h2 className="font-heading text-xl font-bold text-white">
                4. Fasilitas Wi-Fi Pengunjung
              </h2>
            </div>
            <p>
              QTimes Cafe menyediakan fasilitas koneksi internet Wi-Fi secara gratis untuk kenyamanan bersantai, mengerjakan tugas, atau berdiskusi:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Informasi kata sandi Wi-Fi dapat ditanyakan kepada staf kasir atau barista kami.</li>
              <li>QTimes Cafe tidak memantau, menyimpan, atau merekam data penjelajahan internet, percakapan pribadi, maupun dokumen kerja pengunjung.</li>
              <li>Pengunjung diimbau tetap menjaga keamanan akun dan perangkat masing-masing saat tersambung ke jaringan bersama.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="p-6 sm:p-8 rounded-[24px] bg-qtimes-surface border border-qtimes-border space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-qtimes-primary/20 text-qtimes-primary flex items-center justify-center shrink-0">
                <PhoneCall size={20} />
              </div>
              <h2 className="font-heading text-xl font-bold text-white">
                5. Kontak dan Layanan Pengaduan
              </h2>
            </div>
            <p>
              Untuk pertanyaan, klarifikasi, atau masukan seputar privasi data Anda, silakan hubungi tim kami:
            </p>
            <div className="p-5 rounded-2xl bg-[#151311] border border-qtimes-border space-y-2 text-xs sm:text-sm">
              <p>
                <strong className="text-white">Brand:</strong> QTimes Cafe Serang
              </p>
              <p>
                <strong className="text-white">Lokasi:</strong> Kotabaru, Kota Serang, Banten
              </p>
              <p>
                <strong className="text-white">WhatsApp Resmi:</strong>{" "}
                <a
                  href="https://wa.me/6281188807247"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-qtimes-primary hover:underline"
                >
                  0811-8880-7247
                </a>
              </p>
              <p>
                <strong className="text-white">Instagram:</strong>{" "}
                <a
                  href="https://instagram.com/qtimes.co"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-qtimes-primary hover:underline"
                >
                  @qtimes.co
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Bottom Navigation */}
        <div className="pt-6 border-t border-qtimes-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            target="_self"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-qtimes-primary text-white hover:bg-qtimes-primary-hover transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Kembali ke Halaman Utama</span>
          </Link>
          <Link
            href="/terms-conditions"
            target="_self"
            className="text-xs sm:text-sm font-semibold text-qtimes-primary hover:underline"
          >
            Lihat Syarat & Ketentuan Layanan &rarr;
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 md:px-6 pt-10 border-t border-qtimes-border">
        <div className="text-center pb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm text-qtimes-muted">
          <span>&copy; {new Date().getFullYear()} QTimes Cafe Serang. All rights reserved.</span>
          <span className="hidden sm:inline text-qtimes-muted/40">·</span>
          <span className="text-qtimes-primary font-medium">
            Designed & Developed by <strong className="text-white font-semibold">Intelecta</strong>
          </span>
          <span className="hidden sm:inline text-qtimes-muted/40">·</span>
          <div className="flex items-center gap-2.5">
            <Link
              href="/privacy-policy"
              target="_self"
              className="text-qtimes-muted hover:text-qtimes-primary transition-colors underline-offset-4 hover:underline"
            >
              Kebijakan Privasi
            </Link>
            <span className="text-qtimes-muted/40">·</span>
            <Link
              href="/terms-conditions"
              target="_self"
              className="text-qtimes-muted hover:text-qtimes-primary transition-colors underline-offset-4 hover:underline"
            >
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
