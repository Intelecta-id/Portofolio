"use client";

import React, { useState } from "react";
import { Coffee, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { brandData, MenuItem } from "@/data/brandData";

export default function DigitalMenu() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Semua Menu" },
    ...brandData.menuCategories,
  ];

  const filteredItems =
    activeCategory === "all"
      ? brandData.menuItems
      : brandData.menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-cream/40 border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <Badge variant="outline" icon={Coffee} className="mb-3">
              Digital Menu & Rekomendasi
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso leading-tight">
              Pilihan Seduhan & Kudapan Hari Ini
            </h2>
            <p className="mt-4 text-base sm:text-lg text-espresso/75 leading-relaxed">
              Dibuat segar setiap hari dengan bahan berkualitas. Harga transparan tanpa biaya tersembunyi,
              siap dinikmati di tempat atau diantar ke lobi/unit.
            </p>
          </div>

          <Badge variant="outline" icon={CheckCircle2}>
            Bisa Dipesan via WhatsApp
          </Badge>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-spring shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-crema ${
                  isActive
                    ? "bg-espresso text-oat shadow-md"
                    : "bg-oat text-espresso/70 hover:text-espresso hover:bg-cream border border-espresso/10"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Grid with Real Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredItems.map((item: MenuItem) => (
            <div
              key={item.id}
              className="bg-oat rounded-3xl overflow-hidden border border-espresso/10 shadow-sm flex flex-col justify-between transition-spring hover:shadow-elevation hover:border-crema/40 group"
            >
              <div>
                {/* Product Photo */}
                <div className="relative h-48 w-full overflow-hidden bg-cream">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover img-zoom"
                    loading="lazy"
                  />
                  {item.badge && (
                    <div className="absolute top-3 left-3">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold shadow-md backdrop-blur-md ${
                          item.badge === "Best Seller"
                            ? "bg-crema text-white"
                            : "bg-espresso/90 text-oat border border-white/20"
                        }`}
                      >
                        <Sparkles className="w-3 h-3" aria-hidden="true" />
                        {item.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-crema block">
                    {item.categoryLabel}
                  </span>
                  <h3 className="text-lg font-bold text-espresso mt-1 leading-snug group-hover:text-crema transition-spring">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs text-espresso/70 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Price & Order Action */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-espresso/10 flex items-center justify-between">
                  <span className="text-base font-bold text-espresso">
                    {item.price}
                  </span>
                  <a
                    href={brandData.contact.getWhatsappOrderUrl(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-crema/10 text-crema hover:bg-crema hover:text-white transition-spring"
                    title={`Pesan ${item.name} via WhatsApp`}
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Pesan</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Order Callout */}
        <div className="bg-oat rounded-2xl p-6 sm:p-7 border border-espresso/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="text-base font-bold text-espresso">Ingin Pesan Menu Khusus atau Jumlah Banyak?</h3>
            <p className="text-xs sm:text-sm text-espresso/70 mt-1 max-w-2xl leading-relaxed">
              Hubungi barista kami via WhatsApp untuk pesanan meeting kantor, belajar kelompok, atau
              kebutuhan acara di Apartemen Brooklyn.
            </p>
          </div>

          <Button
            href={brandData.contact.getWhatsappOrderUrl("Pesanan Kopi Khusus / Jumlah Banyak")}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="md"
            icon={WhatsAppIcon}
            className="shrink-0"
          >
            Chat WhatsApp Barista
          </Button>
        </div>
      </div>
    </section>
  );
}
