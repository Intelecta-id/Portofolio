"use client";
import { useState } from "react";
import { cabangData } from "@/data/cabang";
import { MapPin, ExternalLink } from "lucide-react";

export default function CariCabang() {
  const [activeWilayah, setActiveWilayah] = useState("jabodetabek");
  const wilayah = cabangData.find((w) => w.id === activeWilayah)!;

  return (
    <section id="cabang" className="bg-[#F3EBD9] bg-grid-notebook py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="font-display font-black text-[#3A2318] leading-tight mb-2"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Cari Cabang
          </h2>
          <p className="font-body text-[#241611]/70 text-base max-w-xl">
            Tersebar dari Jabodetabek sampai Papua. Selalu ada yang dekat.
          </p>
        </div>

        {/* Wilayah tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {cabangData.map((w) => (
            <button
              key={w.id}
              onClick={() => setActiveWilayah(w.id)}
              className={`px-4 py-2 font-body font-semibold text-sm rounded-sm border transition-colors duration-200 ${
                activeWilayah === w.id
                  ? "bg-[#3A2318] text-[#F3EBD9] border-[#3A2318]"
                  : "bg-transparent text-[#3A2318] border-[#B4682A]/40 hover:border-[#3A2318]"
              }`}
            >
              {w.label}
            </button>
          ))}
        </div>

        {/* Cabang list with stempel motif */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {wilayah.cabang.map((c, i) => (
            <div key={c.nama} className="flex flex-col gap-2">
              {c.mapsUrl ? (
                <a
                  href={c.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stempel animate-stempel-in flex items-center gap-1.5 group"
                  style={{ animationDelay: `${i * 0.06}s`, textDecoration: "none" }}
                  aria-label={`Lihat lokasi cabang ${c.nama} di Google Maps`}
                >
                  <MapPin size={11} className="shrink-0 opacity-70" />
                  <span>{c.nama}</span>
                  <ExternalLink size={9} className="opacity-40 group-hover:opacity-80 transition-opacity" />
                </a>
              ) : (
                <span
                  className="stempel animate-stempel-in"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <MapPin size={11} className="inline mr-1 opacity-70" />
                  {c.nama}
                </span>
              )}
              {c.alamat && (
                <span className="font-body text-xs text-[#241611]/50 pl-1">{c.alamat}</span>
              )}
            </div>
          ))}
        </div>

        {/* CTA to Instagram for full list */}
        <div className="mt-12 p-5 border border-[#B4682A]/30 rounded-sm bg-[#3A2318]/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-body text-[#241611] text-sm max-w-md">
            Data cabang terus berkembang. Untuk daftar terlengkap dan info jam buka terkini,
            cek Instagram kami.
          </p>
          <a
            href="https://www.instagram.com/lekkerstory"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 font-body font-semibold text-sm bg-[#3A2318] text-[#F3EBD9] rounded-sm hover:bg-[#241611] transition-colors duration-200"
          >
            @lekkerstory
          </a>
        </div>
      </div>
    </section>
  );
}
