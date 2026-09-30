import React from "react";
import { Wifi, Zap, Wind, Cigarette, Laptop, Sparkles, CheckCircle2 } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { brandData } from "@/data/brandData";

export default function WorkFriendlyAmbience() {
  const iconMap: Record<string, React.ElementType> = {
    Wifi,
    Zap,
    Wind,
    Cigarette,
  };

  return (
    <section id="suasana" className="py-20 lg:py-28 bg-oat border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <Badge variant="outline" icon={Laptop} className="mb-3">
            WFC & Study-Friendly Spot
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso leading-tight">
            Suasana Nyaman untuk Buka Laptop & Rehat Santai
          </h2>
          <p className="mt-4 text-base sm:text-lg text-espresso/75 leading-relaxed">
            Dirancang dengan tata ruang yang fungsional bagi mahasiswa BINUS, pekerja kantor koridor Alam
            Sutera, serta penghuni apartemen yang butuh suasana baru di luar kamar.
          </p>
        </div>

        {/* 4 Facilities Feature Cards (Icon + Context) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {brandData.wfcFacilities.map((fac, idx) => {
            const Icon = iconMap[fac.icon] || Zap;
            return (
              <div
                key={idx}
                className="bg-cream/70 rounded-3xl p-6 border border-espresso/10 flex flex-col justify-between transition-spring hover:bg-cream hover:shadow-elevation"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-espresso text-oat flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-crema" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-espresso leading-snug">
                    {fac.title}
                  </h3>
                  <p className="mt-2 text-xs text-espresso/70 leading-relaxed">
                    {fac.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Photo Gallery: 3 Real Photos of Work Desks & Atmosphere */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brandData.wfcGallery.map((item, idx) => (
            <div
              key={idx}
              className="group bg-cream/80 text-espresso rounded-3xl overflow-hidden border border-espresso/15 shadow-sm flex flex-col justify-between transition-spring hover:shadow-elevation"
            >
              <div className="relative h-60 w-full overflow-hidden bg-oat">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-spring group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-crema block mb-1">
                  Sudut Kedai RA-03
                </span>
                <h3 className="text-lg font-bold text-espresso leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-espresso/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
