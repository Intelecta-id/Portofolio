import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import CredentialsLegal from "@/components/sections/CredentialsLegal";
import DoctorProfile from "@/components/sections/DoctorProfile";
import ClinicalServices from "@/components/sections/ClinicalServices";
import InteractiveBooking from "@/components/sections/InteractiveBooking";
import LocationWayfinding from "@/components/sections/LocationWayfinding";
import PatientReviews from "@/components/sections/PatientReviews";
import PreVisitFaq from "@/components/sections/PreVisitFaq";
import Footer from "@/components/layout/Footer";
import StickyWhatsApp from "@/components/ui/StickyWhatsApp";

export default function Home() {
  return (
    <>
      {/* Top Navigation */}
      <Navbar />

      <main>
        {/* Section 1: Hero — Kepercayaan & Pelayanan Medis Gigi Modern */}
        <Hero />

        {/* Section 2: Legalitas & Kredensial Resmi Kemenkes RI */}
        <CredentialsLegal />

        {/* Section 3: Profil Dokter Penanggung Jawab (drg. Ansali Iklil Raudoh) */}
        <DoctorProfile />

        {/* Section 4: Matriks Layanan Medis Klinis (Terkonfirmasi Aktif vs Perlu Konfirmasi) */}
        <ClinicalServices />

        {/* Section 5: Web App Intelecta: Cek Jadwal, Draf Reservasi & Kalkulator Recall Scaling 6 Bulan */}
        <InteractiveBooking />

        {/* Section 6: Panduan Rute & Akses Lokasi (Ciateul, Samping Gudang Alfa) */}
        <LocationWayfinding />

        {/* Section 7: Reputasi Publik & Ulasan Pasien (Rating 5.0 dari 152 Pasien) */}
        <PatientReviews />

        {/* Section 8: FAQ & Tanya Jawab Pra-Kunjungan Pasien */}
        <PreVisitFaq />
      </main>

      {/* Footer dengan Intelecta Branding & Navigasi */}
      <Footer />

      {/* Floating Sticky WhatsApp Quick Order & Consultation Button */}
      <StickyWhatsApp />
    </>
  );
}
