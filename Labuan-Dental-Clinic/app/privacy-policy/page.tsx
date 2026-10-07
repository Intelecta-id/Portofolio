import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, FileText, UserCheck, HelpCircle, PhoneCall } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyWhatsApp from "@/components/ui/StickyWhatsApp";
import { clinicData } from "@/data/clinicData";

export const metadata: Metadata = {
  title: "Kebijakan Privasi (Privacy Policy) | Labuan Dental Clinic (LDC)",
  description:
    "Kebijakan privasi dan perlindungan data rekam medis pasien di Labuan Dental Clinic sesuai regulasi Kementerian Kesehatan RI dan UU Perlindungan Data Pribadi.",
};

export default function PrivacyPolicyPage() {
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
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Dokumen Resmi Pasien</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F2A28] tracking-tight">
              Kebijakan Privasi
            </h1>
            <p className="text-base sm:text-lg text-[#243330] leading-relaxed max-w-3xl">
              Komitmen Labuan Dental Clinic (LDC) dalam menjaga kerahasiaan informasi pribadi, data komunikasi reservasi, serta keamanan rekam medis setiap pasien.
            </p>
            <p className="text-xs text-[#243330]">
              Terakhir diperbarui: Oktober 2026 · Berlaku untuk seluruh layanan klinik gigi
            </p>
          </div>

          {/* Legal Content Sections */}
          <div className="space-y-8 text-sm sm:text-base text-[#243330] leading-relaxed">
            {/* Section 1 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E6E1D8] space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EBF2F0] text-[#2D6A5E] flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-[#1F2A28]">
                  1. Landasan Hukum dan Prinsip Kerahasiaan Medis
                </h2>
              </div>
              <p>
                Labuan Dental Clinic beroperasi sebagai Tempat Praktik Mandiri Dokter Gigi yang terdaftar secara resmi di Kementerian Kesehatan Republik Indonesia (Kemenkes RI). Kami mematuhi seluruh peraturan perundang-undangan yang berlaku, termasuk Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP) serta Permenkes mengenai tata kelola dan kerahasiaan Rekam Medis.
              </p>
              <p>
                Kerahasiaan hubungan antara dokter gigi dan pasien adalah prinsip etik kedokteran tertinggi yang kami junjung dalam setiap tahapan konsultasi dan tindakan.
              </p>
            </section>

            {/* Section 2 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E6E1D8] space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EBF2F0] text-[#2D6A5E] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-[#1F2A28]">
                  2. Informasi yang Kami Kumpulkan
                </h2>
              </div>
              <p>
                Informasi yang diperoleh dapat bersumber dari interaksi digital (situs web dan WhatsApp resmi) serta pencatatan klinis langsung di ruang praktik:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong className="text-[#1F2A28]">Data Kontak & Administrasi:</strong> Nama lengkap, nomor telepon atau WhatsApp, serta perkiraan waktu kedatangan untuk keperluan pendaftaran jadwal.
                </li>
                <li>
                  <strong className="text-[#1F2A28]">Informasi Keluhan Awal:</strong> Keterangan keluhan gigi atau preferensi penanganan yang Anda sampaikan secara sukarela saat konsultasi awal melalui WhatsApp.
                </li>
                <li>
                  <strong className="text-[#1F2A28]">Rekam Medis Gigi Fisik:</strong> Riwayat kesehatan sistemik, riwayat alergi obat, bagan gigi (odontogram), diagnosis dokter, dan catatan tindakan medis yang didokumentasikan di klinik.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E6E1D8] space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EBF2F0] text-[#2D6A5E] flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-[#1F2A28]">
                  3. Penggunaan dan Pengolahan Informasi
                </h2>
              </div>
              <p>
                Semua data pribadi dan klinis yang kami himpun hanya dimanfaatkan untuk tujuan pelayanan medis yang sah, antara lain:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Konfirmasi jadwal kedatangan dan koordinasi antrean agar pasien tidak menunggu terlalu lama.</li>
                <li>Penyusunan rencana perawatan gigi yang aman, tepat sasaran, dan mempertimbangkan riwayat kesehatan umum Anda.</li>
                <li>Komunikasi pasca tindakan medis jika diperlukan pemantauan penyembuhan atau kontrol berkala.</li>
              </ul>
              <div className="p-4 rounded-2xl bg-[#EBF2F0] border border-[#D1E3DF] text-xs sm:text-sm font-medium text-[#2D6A5E]">
                Kami menjamin bahwa Labuan Dental Clinic tidak pernah menjual, menyewakan, atau memberikan data pasien kepada pihak ketiga mana pun untuk kepentingan pemasaran atau periklanan komersial.
              </div>
            </section>

            {/* Section 4 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E6E1D8] space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EBF2F0] text-[#2D6A5E] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-[#1F2A28]">
                  4. Penyimpanan dan Keamanan Rekam Medis
                </h2>
              </div>
              <p>
                Dokumen rekam medis pasien disimpan secara aman di bawah pengawasan langsung Dokter Gigi Penanggung Jawab Medis (drg. Ansali Iklil Raudoh). Akses terhadap data pasien dibatasi secara ketat hanya untuk tenaga medis yang berwenang dan bertugas dalam penanganan langsung pasien tersebut.
              </p>
              <p>
                Masa retensi penyimpanan berkas rekam medis dilakukan sesuai dengan jangka waktu yang diwajibkan oleh peraturan perundang-undangan Kementerian Kesehatan RI.
              </p>
            </section>

            {/* Section 5 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E6E1D8] space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EBF2F0] text-[#2D6A5E] flex items-center justify-center shrink-0">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-[#1F2A28]">
                  5. Hak Anda sebagai Pasien
                </h2>
              </div>
              <p>
                Sebagai pemilik data pribadi dan pasien yang dilindungi undang-undang, Anda memiliki hak:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Mengetahui ringkasan isi rekam medis mengenai diagnosis dan tindakan yang telah dilakukan pada diri Anda.</li>
                <li>Memperbarui atau meralat data kontak apabila terdapat kekeliruan atau perubahan nomor telepon.</li>
                <li>Menyampaikan pertanyaan, klarifikasi, atau kekhawatiran terkait pengelolaan privasi data Anda.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E6E1D8] space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EBF2F0] text-[#2D6A5E] flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-[#1F2A28]">
                  6. Kontak dan Pertanyaan Privasi
                </h2>
              </div>
              <p>
                Apabila Anda memiliki pertanyaan, tanggapan, atau memerlukan penjelasan lebih lanjut mengenai Kebijakan Privasi ini, silakan menghubungi kami melalui saluran resmi:
              </p>
              <div className="p-5 rounded-2xl bg-[#FAF8F4] border border-[#E6E1D8] space-y-2 text-xs sm:text-sm">
                <p>
                  <strong className="text-[#1F2A28]">Fasilitas:</strong> {clinicData.name} ({clinicData.shortName})
                </p>
                <p>
                  <strong className="text-[#1F2A28]">Alamat Praktik:</strong> {clinicData.location.address} (Patokan: {clinicData.location.landmark})
                </p>
                <p>
                  <strong className="text-[#1F2A28]">WhatsApp Resmi:</strong>{" "}
                  <a
                    href={clinicData.contact.getWhatsappUrl("Halo Admin Labuan Dental Clinic, saya ingin bertanya perihal kebijakan privasi data pasien.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#2D6A5E] hover:underline"
                  >
                    {clinicData.contact.phoneDisplay}
                  </a>
                </p>
                <p>
                  <strong className="text-[#1F2A28]">Penanggung Jawab Medis:</strong> {clinicData.doctor.name} ({clinicData.doctor.title})
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
              href="/terms-conditions"
              className="text-xs sm:text-sm font-semibold text-[#2D6A5E] hover:underline"
            >
              Lihat Syarat & Ketentuan Layanan &rarr;
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <StickyWhatsApp />
    </>
  );
}
