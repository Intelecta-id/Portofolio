import Link from "next/link";
import { ArrowLeft, FileCheck, Clock, Laptop, Cigarette, Banknote, Calendar, PhoneCall } from "lucide-react";

export const metadata = {
  title: "Syarat & Ketentuan Layanan (Terms & Conditions) | QTimes Cafe Serang",
  description:
    "Syarat dan ketentuan berkunjung, pemesanan delivery, pemanfaatan fasilitas Wi-Fi, dan etika nongkrong di QTimes Cafe Serang.",
};

export default function TermsConditionsPage() {
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
            <FileCheck size={14} />
            <span>Panduan Nongkrong & Layanan</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Syarat & Ketentuan
          </h1>
          <p className="text-base sm:text-lg text-qtimes-muted leading-relaxed max-w-3xl">
            Pedoman pelayanan, etika berkunjung, pemanfaatan fasilitas kerja, serta ketentuan pemesanan hidangan di QTimes Cafe Serang.
          </p>
          <p className="text-xs text-qtimes-muted">
            Terakhir diperbarui: Oktober 2026 · Berlaku untuk seluruh pengunjung dan pelanggan
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-sm sm:text-base text-qtimes-muted leading-relaxed">
          {/* Section 1 */}
          <section className="p-6 sm:p-8 rounded-[24px] bg-qtimes-surface border border-qtimes-border space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-qtimes-primary/20 text-qtimes-primary flex items-center justify-center shrink-0">
                <FileCheck size={20} />
              </div>
              <h2 className="font-heading text-xl font-bold text-white">
                1. Ketentuan Umum & Konsep Cafe
              </h2>
            </div>
            <p>
              QTimes Cafe adalah kafe modern yang berlokasi di Kotabaru, Kota Serang. Kami menghadirkan suasana santai yang fotogenik, hidangan lezat mulai dari steak, rice bowl fusion, artisan dessert, hingga racikan kopi pilihan dan minuman segar.
            </p>
            <p>
              Dengan berkunjung ke kafe atau memesan menu kami, pelanggan dianggap telah memahami dan menyepakati panduan serta ketentuan yang tercantum pada halaman ini.
            </p>
          </section>

          {/* Section 2 */}
          <section className="p-6 sm:p-8 rounded-[24px] bg-qtimes-surface border border-qtimes-border space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-qtimes-primary/20 text-qtimes-primary flex items-center justify-center shrink-0">
                <Clock size={20} />
              </div>
              <h2 className="font-heading text-xl font-bold text-white">
                2. Jam Operasional dan Pemesanan Delivery
              </h2>
            </div>
            <p>
              QTimes Cafe siap menyambut Anda setiap hari:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="text-white">Jam Buka:</strong> Senin sampai Minggu, pukul 09.00 hingga 22.00 WIB.
              </li>
              <li>
                <strong className="text-white">Layanan Dine-in & Takeaway:</strong> Pemesanan langsung dapat dilakukan di meja kasir kafe.
              </li>
              <li>
                <strong className="text-white">Delivery via WhatsApp:</strong> Kami melayani pesanan pesan antar ke area Serang dan sekitarnya melalui kontak WhatsApp resmi kami.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="p-6 sm:p-8 rounded-[24px] bg-qtimes-surface border border-qtimes-border space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-qtimes-primary/20 text-qtimes-primary flex items-center justify-center shrink-0">
                <Laptop size={20} />
              </div>
              <h2 className="font-heading text-xl font-bold text-white">
                3. Pemanfaatan Fasilitas Kerja & Etika Nongkrong
              </h2>
            </div>
            <p>
              Kami mendukung produktivitas pengunjung yang ingin mengerjakan tugas atau bekerja dari kafe (WFC):
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Tersedia fasilitas koneksi Wi-Fi gratis serta stopkontak listrik di berbagai area tempat duduk.</li>
              <li>Demi kenyamanan bersama, pengunjung yang mendengarkan musik, video, atau melakukan panggilan telepon/meeting online diwajibkan menggunakan earphone atau headphone.</li>
              <li>Pengunjung dimohon untuk saling menjaga kebersihan meja dan tidak membawa makanan atau minuman dari luar.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="p-6 sm:p-8 rounded-[24px] bg-qtimes-surface border border-qtimes-border space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-qtimes-primary/20 text-qtimes-primary flex items-center justify-center shrink-0">
                <Cigarette size={20} />
              </div>
              <h2 className="font-heading text-xl font-bold text-white">
                4. Kebijakan Area Merokok
              </h2>
            </div>
            <p>
              Untuk memastikan kenyamanan seluruh pengunjung:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Area indoor ber-AC merupakan kawasan bebas asap rokok dan rokok elektrik (vape).</li>
              <li>Aktivitas merokok dan vaping diperkenankan di area outdoor yang telah disediakan fasilitas asbak.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="p-6 sm:p-8 rounded-[24px] bg-qtimes-surface border border-qtimes-border space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-qtimes-primary/20 text-qtimes-primary flex items-center justify-center shrink-0">
                <Banknote size={20} />
              </div>
              <h2 className="font-heading text-xl font-bold text-white">
                5. Harga Menu dan Metode Pembayaran
              </h2>
            </div>
            <p>
              Seluruh harga hidangan dan minuman yang tercantum pada menu kafe adalah harga netto yang berlaku:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Tidak ada pungutan biaya layanan tersembunyi.</li>
              <li>Kami menerima pembayaran secara tunai serta transaksi non-tunai melalui QRIS (BCA, Mandiri, GoPay, OVO, ShopeePay, Dana, dan aplikasi perbankan lainnya).</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="p-6 sm:p-8 rounded-[24px] bg-qtimes-surface border border-qtimes-border space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-qtimes-primary/20 text-qtimes-primary flex items-center justify-center shrink-0">
                <Calendar size={20} />
              </div>
              <h2 className="font-heading text-xl font-bold text-white">
                6. Reservasi Meja & Acara Khusus
              </h2>
            </div>
            <p>
              QTimes Cafe menyediakan opsi reservasi meja untuk acara perayaan ulang tahun, arisan, maupun pertemuan komunitas. Reservasi kelompok disarankan dilakukan minimal H-2 melalui WhatsApp resmi kami agar tim dapat mempersiapkan tempat dan pelayanan terbaik.
            </p>
          </section>

          {/* Section 7 */}
          <section className="p-6 sm:p-8 rounded-[24px] bg-qtimes-surface border border-qtimes-border space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-qtimes-primary/20 text-qtimes-primary flex items-center justify-center shrink-0">
                <PhoneCall size={20} />
              </div>
              <h2 className="font-heading text-xl font-bold text-white">
                7. Kontak Layanan Pelanggan
              </h2>
            </div>
            <p>
              Untuk informasi pemesanan, ketersediaan meja, atau pertanyaan lainnya:
            </p>
            <div className="p-5 rounded-2xl bg-[#151311] border border-qtimes-border space-y-2 text-xs sm:text-sm">
              <p>
                <strong className="text-white">Brand:</strong> QTimes Cafe Serang
              </p>
              <p>
                <strong className="text-white">Alamat:</strong> Kotabaru, Kota Serang, Banten
              </p>
              <p>
                <strong className="text-white">WhatsApp:</strong>{" "}
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
            href="/privacy-policy"
            target="_self"
            className="text-xs sm:text-sm font-semibold text-qtimes-primary hover:underline"
          >
            Lihat Kebijakan Privasi Pelanggan &rarr;
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
