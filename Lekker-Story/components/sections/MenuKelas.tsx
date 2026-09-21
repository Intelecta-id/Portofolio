"use client";
import { useState } from "react";
import { menuData } from "@/data/menu";
import MenuCard from "@/components/ui/MenuCard";

export default function MenuKelas() {
  const [active, setActive] = useState("klasik");
  const kelas = menuData.find((k) => k.id === active)!;

  return (
    <section id="menu" className="bg-[#F3EBD9] bg-grid-notebook py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10">
          <h2 className="font-display font-black text-[#3A2318] leading-tight mb-2"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Pilih Kelasmu
          </h2>
          <p className="font-body text-[#241611]/70 text-base max-w-xl">
            Semua harga langsung terlihat. Tidak ada yang disembunyikan.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex gap-2 mb-8 border-b border-[#B4682A]/30 overflow-x-auto pb-0">
          {menuData.map((k) => (
            <button
              key={k.id}
              onClick={() => setActive(k.id)}
              className={`px-4 py-2.5 font-display font-bold text-sm shrink-0 border-b-2 -mb-px transition-colors duration-200 ${
                active === k.id
                  ? "border-[#E8A93B] text-[#3A2318]"
                  : "border-transparent text-[#241611]/50 hover:text-[#241611]/80"
              }`}
            >
              {k.label}
            </button>
          ))}
        </div>

        {/* Active class info */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-display font-bold text-[#3A2318] text-xl">{kelas.label}</span>
          <span
            className="font-aksen text-lg px-3 py-0.5 rounded-sm"
            style={{ color: "#B4682A", border: "1.5px solid #B4682A", background: "rgba(180,104,42,0.06)" }}
          >
            {kelas.priceRange}
          </span>
        </div>

        {/* Grid — notebook table style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#B4682A]/20 border border-[#B4682A]/20 rounded-sm overflow-hidden">
          {kelas.items.map((item) => (
            <MenuCard key={item.name} item={item} />
          ))}
        </div>

        {/* Note */}
        <p className="mt-4 font-body text-[#241611]/50 text-xs">
          * Harga dapat berbeda antar cabang. Tersedia Lekker Mini dan Lekker KBP.
        </p>
      </div>
    </section>
  );
}
