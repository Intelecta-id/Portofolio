import Navbar from "@/components/layout/Navbar";
import PapanNama from "@/components/sections/PapanNama";
import DariGerobak from "@/components/sections/DariGerobak";
import MenuKelas from "@/components/sections/MenuKelas";
import BukanCumaLekker from "@/components/sections/BukanCumaLekker";
import Suasana from "@/components/sections/Suasana";
import CariCabang from "@/components/sections/CariCabang";
import CaraPesan from "@/components/sections/CaraPesan";
import DariInstagram from "@/components/sections/DariInstagram";
import Footer from "@/components/sections/Footer";
import WaveDivider from "@/components/ui/WaveDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Section 1: Hero */}
        <PapanNama />

        {/* Divider: dark -> light */}
        <WaveDivider fromDark={true} />

        {/* Section 2: Brand Story */}
        <DariGerobak />

        {/* Section 3: Menu */}
        <MenuKelas />

        {/* Divider: light -> dark */}
        <WaveDivider fromDark={false} />

        {/* Section 4: Produk */}
        <BukanCumaLekker />

        {/* Section 5: Suasana */}
        <Suasana />

        {/* Divider: dark -> light */}
        <WaveDivider fromDark={true} />

        {/* Section 6: Cabang */}
        <CariCabang />

        {/* Section 7: Cara Pesan */}
        <CaraPesan />

        {/* Divider: dark -> light (from CaraPesan dark bg) */}
        <WaveDivider fromDark={true} />

        {/* Section 9: Instagram */}
        <DariInstagram />
      </main>

      {/* Section 10: Footer */}
      <Footer />
    </>
  );
}
