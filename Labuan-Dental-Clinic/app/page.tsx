import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import SignalBar from "@/components/sections/SignalBar";
import EditorialPrinciples from "@/components/sections/EditorialPrinciples";
import PhotoMosaic from "@/components/sections/PhotoMosaic";
import ClinicalServices from "@/components/sections/ClinicalServices";
import DoctorProfile from "@/components/sections/DoctorProfile";
import LocationWayfinding from "@/components/sections/LocationWayfinding";
import InteractiveBooking from "@/components/sections/InteractiveBooking";
import PreVisitFaq from "@/components/sections/PreVisitFaq";
import Footer from "@/components/layout/Footer";
import StickyWhatsApp from "@/components/ui/StickyWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="konten-utama">
        {/* Section 1: Hero Editorial Minimalis */}
        <Hero />

        {/* Section 2: Signal Bar (3 Pilar Informasi) */}
        <SignalBar />

        {/* Section 3: Prinsip Persiapan Kunjungan Terarah (01-02-03) */}
        <EditorialPrinciples />

        {/* Section 4: Galeri Suasana Ruang Bento Mosaic Asli */}
        <PhotoMosaic />

        {/* Section 5: Layanan Klinik dengan Foto Asli & Transparansi Biaya */}
        <ClinicalServices />

        {/* Section 6: Profil Dokter Penanggung Jawab Medis */}
        <DoctorProfile />

        {/* Section 7: Panduan Rute, Patokan Ciateul & Peta Lokasi */}
        <LocationWayfinding />

        {/* Section 8: Reservasi Cepat & Kalkulator Kontrol Rutin */}
        <InteractiveBooking />

        {/* Section 9: Tanya Jawab Pra-Kunjungan (FAQ Ringkas) */}
        <PreVisitFaq />
      </main>

      <Footer />

      <StickyWhatsApp />
    </>
  );
}
