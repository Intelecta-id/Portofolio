import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import AboutClinic from "@/components/sections/AboutClinic";
import ClinicalServices from "@/components/sections/ClinicalServices";
import DoctorProfile from "@/components/sections/DoctorProfile";
import FacilityGallery from "@/components/sections/FacilityGallery";
import LocationWayfinding from "@/components/sections/LocationWayfinding";
import Footer from "@/components/layout/Footer";
import StickyWhatsApp from "@/components/ui/StickyWhatsApp";

export default function Home() {
  return (
    <>
      {/* Header & Navigasi */}
      <Navbar />

      <main id="konten-utama">
        {/* Section 1: Beranda / Hero */}
        <Hero />

        {/* Section 2: Tentang Klinik */}
        <AboutClinic />

        {/* Section 3: Layanan & Estimasi Tarif */}
        <ClinicalServices />

        {/* Section 4: Profil Dokter Penanggung Jawab */}
        <DoctorProfile />

        {/* Section 5: Fasilitas & Standar Kebersihan */}
        <FacilityGallery />

        {/* Section 6: Lokasi, Jam Praktik & Peta */}
        <LocationWayfinding />
      </main>

      {/* Footer Navigasi & Branding */}
      <Footer />

      {/* Tombol Mengambang WhatsApp Resmi */}
      <StickyWhatsApp />
    </>
  );
}
