import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import SignalBar from "@/components/sections/SignalBar";
import EditorialPrinciples from "@/components/sections/EditorialPrinciples";
import PhotoMosaic from "@/components/sections/PhotoMosaic";
import ClinicalServices from "@/components/sections/ClinicalServices";
import DoctorProfile from "@/components/sections/DoctorProfile";
import InteractiveBooking from "@/components/sections/InteractiveBooking";
import LocationWayfinding from "@/components/sections/LocationWayfinding";
import PatientReviews from "@/components/sections/PatientReviews";
import PreVisitFaq from "@/components/sections/PreVisitFaq";
import Footer from "@/components/layout/Footer";
import StickyWhatsApp from "@/components/ui/StickyWhatsApp";

export default function Home() {
  return (
    <>
      {/* Header Navigasi */}
      <Navbar />

      <main id="konten-utama">
        {/* Section 1: Hero Editorial (Fre DentalCare structure) */}
        <Hero />

        {/* Section 2: Signal Bar (3 Pilar Informasi Cepat) */}
        <SignalBar />

        {/* Section 3: Prinsip Persiapan Kunjungan Terarah (01-02-03) */}
        <EditorialPrinciples />

        {/* Section 4: Galeri Suasana Ruang Bento Mosaic */}
        <PhotoMosaic />

        {/* Section 5: Informasi Layanan Klinis & Transparansi Estimasi Tarif */}
        <ClinicalServices />

        {/* Section 6: Profil Dokter Penanggung Jawab Medis (drg. Ansali Iklil Raudoh) */}
        <DoctorProfile />

        {/* Section 7: Sistem Reservasi, Cek Jadwal & Kalkulator Scaling 6 Bulan */}
        <InteractiveBooking />

        {/* Section 8: Panduan Akses Rute Ciateul Samping Gudang Alfa & Peta Maps */}
        <LocationWayfinding />

        {/* Section 9: Reputasi Publik & Ulasan Pasien Terverifikasi (Rating 5.0) */}
        <PatientReviews />

        {/* Section 10: Tanya Jawab Pra-Kunjungan (FAQ) */}
        <PreVisitFaq />
      </main>

      {/* Footer Navigasi & Branding Intelecta */}
      <Footer />

      {/* Tombol Mengambang WhatsApp Cepat */}
      <StickyWhatsApp />
    </>
  );
}
