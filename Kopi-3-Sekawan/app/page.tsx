import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import WayfindingGuide from "@/components/sections/WayfindingGuide";
import DigitalMenu from "@/components/sections/DigitalMenu";
import WorkFriendlyAmbience from "@/components/sections/WorkFriendlyAmbience";
import OperationalHours from "@/components/sections/OperationalHours";
import Footer from "@/components/layout/Footer";
import StickyWhatsAppButton from "@/components/ui/StickyWhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Section 1: Hero — "Solusi Kopi Praktis Penghuni & Pekerja" */}
        <Hero />

        {/* Section 2: Panduan Rute & Akses Lokasi (Wayfinding Guide, Parking, Maps) */}
        <WayfindingGuide />

        {/* Section 4: Digital Menu & Rekomendasi Unggulan (Tabs, Real Photos, Prices) */}
        <DigitalMenu />

        {/* Section 5: Suasana & Fasilitas Kerja (WFC / Study-Friendly Gallery) */}
        <WorkFriendlyAmbience />

        {/* Section 7: Jam Operasional Terkini (Live Automated Open/Closed Status) */}
        <OperationalHours />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Floating WhatsApp Quick Order Button across all sections */}
      <StickyWhatsAppButton />
    </>
  );
}
