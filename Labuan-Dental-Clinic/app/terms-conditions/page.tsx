import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileCheck, CalendarCheck, Stethoscope, Banknote, AlertCircle, PhoneCall } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyWhatsApp from "@/components/ui/StickyWhatsApp";
import { clinicData } from "@/data/clinicData";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan Layanan (Terms & Conditions) | Labuan Dental Clinic (LDC)",
  description:
    "Syarat dan ketentuan pelayanan praktik dokter gigi, etika reservasi jadwal kunjungan, transparansi tarif medis, dan persetujuan tindakan di Labuan Dental Clinic.",
};

export default function TermsConditionsPage() {
  return (
    <>
      <Navbar />

      <main className="py-12 md:py-20 bg-[#FAF8F4] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Breadcrumb & Navigation */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2D6A5E] hover:text-[#1E4D44] transition-spring"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Beranda</span>
            </Link>
            <span className="text-xs text-[#243330] font-medium">
              Terdaftar Kemenkes RI
            </span>
          </div>

          {/* Page Header */}
          <div className="space-y-4 border-b border-[#E6E1D8] pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2F0] text-xs font-bold text-[#2D6A5E]">
              <FileCheck className="w-3.5 h-3.5" />
              <span>Pedoman Pasien & Klinik</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F2A28] tracking-tight">
              Syarat & Ketentuan
            </h1>
            <p className="text-base sm:text-lg text-[#243330] leading-relaxed max-w-3xl">
              Panduan pelayanan klinis, etika reservasi jadwal, prinsip transparansi tindakan medis, serta hak dan kewajiban bersama di Labuan Dental Clinic.
            </p>
            <p className="text-xs text-[#243330]">
              Terakhir diperbarui: Oktober 2026 · Mengikat bagi seluruh pasien yang berkunjung
            </p>
          </div>

          {/* Terms Content Sections */}
          <div className="space-y-8 text-sm sm:text-base text-[#243330] leading-relaxed">
            {/* Section 1 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E6E1D8] space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EBF2F0] text-[#2D6A5E] flex items-center justify-center shrink-0">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-[#1F2A28]">
                  1. Status Legal Fasilitas dan Praktik Kedokteran Gigi
                </h2>
              </div>
              <p>
                Labuan Dental Clinic (LDC) adalah Tempat Praktik Mandiri Dokter Gigi resmi yang telah mengantongi izin operasional dan terdaftar pada Kementerian Kesehatan Republik Indonesia (Kemenkes RI).
              </p>
              <p>
                Seluruh tindakan medis kuratif, preventif, estetik, dan pedodonti (anak) dilakukan secara bertanggung jawab oleh dokter gigi berlisensi aktif yang memiliki Surat Tanda Registrasi (STR) Konsil Kedokteran Indonesia dan Surat Izin Praktik (SIP) sah dari otoritas kesehatan setempat.
              </p>
            </section>

            {/* Section 2 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E6E1D8] space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EBF2F0] text-[#2D6A5E] flex items-center justify-center shrink-0">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-[#1F2A28]">
                  2. Ketentuan Reservasi dan Kedatangan Pasien
                </h2>
              </div>
              <p>
                Untuk menjaga kualitas layanan, kepatuhan durasi sterilisasi instrumen antar pasien, dan kenyamanan ruang tunggu:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong className="text-[#1F2A28]">Konfirmasi Jadwal Awal:</strong> Pasien sangat disarankan menghubungi WhatsApp resmi klinik sebelum kedatangan guna memastikan ketersediaan slot hari tersebut.
                </li>
                <li>
                  <strong className="text-[#1F2A28]">Ketepatan Waktu:</strong> Pasien diharapkan tiba 10-15 menit sebelum estimasi waktu yang telah disepakati untuk proses administrasi awal dan persiapan.
                </li>
                <li>
                  <strong className="text-[#1F2A28]">Penjadwalan Ulang & Pembatalan:</strong> Apabila berhalangan hadir, pasien dimohon mengabari tim admin melalui WhatsApp selambat-lambatnya 2 jam sebelumnya agar slot dapat dialokasikan bagi pasien lain yang membutuhkan penanganan darurat.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E6E1D8] space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EBF2F0] text-[#2D6A5E] flex items-center justify-center shrink-0">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-[#1F2A28]">
                  3. Persetujuan Tindakan Medis (Informed Consent)
                </h2>
              </div>
              <p>
                Kami memegang teguh hak pasien untuk mendapatkan informasi yang jelas, jujur, dan mudah dipahami sebelum tindakan apa pun dilakukan di dental unit:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Dokter akan memaparkan temuan kondisi gigi, diagnosis, tujuan penanganan, tahapan prosedur medis, serta pilihan material yang tepat.</li>
                <li>Tindakan penanganan hanya akan dimulai setelah pasien atau orang tua/wali (bagi pasien anak) menyatakan persetujuan secara sadar dan sukarela.</li>
                <li>Pasien wajib memberikan informasi riwayat kesehatan umum, penyakit bawaan, kehamilan, atau alergi obat secara jujur demi keselamatan medis pasien sendiri.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E6E1D8] space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EBF2F0] text-[#2D6A5E] flex items-center justify-center shrink-0">
                  <Banknote className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-[#1F2A28]">
                  4. Prinsip Transparansi Biaya dan Pembayaran
                </h2>
              </div>
              <p>
                Salah satu komitmen utama Labuan Dental Clinic adalah transparansi biaya agar pasien tidak merasa cemas atau terbebani oleh kejutan biaya:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Rencana perawatan beserta rincian estimasi biaya akan didiskusikan secara terbuka di awal setelah pemeriksaan rongga mulut selesai.</li>
                <li>Pembayaran diselesaikan setelah prosedur pada hari kunjungan selesai, melalui metode pembayaran tunai maupun transfer non-tunai yang tersedia di meja administrasi.</li>
                <li>Tidak ada biaya tambahan terselubung di luar rencana tindakan yang telah disepakati bersama pasien.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E6E1D8] space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EBF2F0] text-[#2D6A5E] flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-[#1F2A28]">
                  5. Batasan Tanggung Jawab Informasi Digital
                </h2>
              </div>
              <p>
                Informasi, artikel pengenalan layanan, dan panduan kesehatan gigi yang tercantum pada situs web ini disajikan dengan itikad baik untuk tujuan edukasi masyarakat umum:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Materi di situs web tidak dapat dianggap sebagai pengganti diagnosis klinis langsung dari dokter gigi.</li>
                <li>Kebutuhan dan respons tindakan setiap individu pasien dapat bervariasi bergantung pada keparahan kasus dan kondisi biologis jaringan rongga mulut masing-masing.</li>
                <li>Pemeriksaan fisik langsung menggunakan peralatan diagnostik di klinik tetap diperlukan untuk merumuskan rencana tindakan medis definitif.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E6E1D8] space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EBF2F0] text-[#2D6A5E] flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-[#1F2A28]">
                  6. Hukum yang Berlaku dan Hubungi Kami
                </h2>
              </div>
              <p>
                Syarat dan Ketentuan ini diatur serta ditafsirkan sesuai dengan hukum yang berlaku di Negara Kesatuan Republik Indonesia. Jika Anda membutuhkan bantuan, konfirmasi tindakan, atau memiliki pertanyaan seputar ketentuan ini, silakan hubungi tim kami:
              </p>
              <div className="p-5 rounded-2xl bg-[#FAF8F4] border border-[#E6E1D8] space-y-2 text-xs sm:text-sm">
                <p>
                  <strong className="text-[#1F2A28]">Fasilitas Praktik:</strong> {clinicData.name} ({clinicData.shortName})
                </p>
                <p>
                  <strong className="text-[#1F2A28]">Alamat Praktik:</strong> {clinicData.location.address} (Patokan: {clinicData.location.landmark})
                </p>
                <p>
                  <strong className="text-[#1F2A28]">WhatsApp Bantuan & Reservasi:</strong>{" "}
                  <a
                    href={clinicData.contact.getWhatsappUrl("Halo Admin Labuan Dental Clinic, saya ingin bertanya perihal syarat dan ketentuan layanan.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#2D6A5E] hover:underline"
                  >
                    {clinicData.contact.phoneDisplay}
                  </a>
                </p>
              </div>
            </section>
          </div>

          {/* Bottom Back Button */}
          <div className="pt-6 border-t border-[#E6E1D8] flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#2D6A5E] text-white hover:bg-[#1E4D44] transition-spring"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Halaman Utama</span>
            </Link>
            <Link
              href="/privacy-policy"
              className="text-xs sm:text-sm font-semibold text-[#2D6A5E] hover:underline"
            >
              Lihat Kebijakan Privasi Pasien &rarr;
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <StickyWhatsApp />
    </>
  );
}
