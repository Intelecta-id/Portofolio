import { ShoppingBag, Store } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const platforms = [
  {
    step: "1",
    label: "Datang langsung",
    desc: "Temukan cabang terdekat di daftar kami, datang langsung ke outlet.",
    icon: Store,
    href: "#cabang",
    cta: "Cari cabang",
    bg: "#3A2318",
    fg: "#F3EBD9",
  },
  {
    step: "2",
    label: "Pesan via aplikasi",
    desc: "Lekker Story tersedia di GoFood, GrabFood, dan ShopeeFood.",
    icon: ShoppingBag,
    platforms: [
      { name: "GoFood", url: "https://gofood.co.id", color: "#E82529" },
      { name: "GrabFood", url: "https://food.grab.com", color: "#00B14F" },
      { name: "ShopeeFood", url: "https://food.shopee.co.id", color: "#EE4D2D" },
    ],
    bg: "#E8A93B",
    fg: "#241611",
  },
  {
    step: "3",
    label: "Chat WhatsApp",
    desc: "Tanya menu, cari cabang terdekat, atau pesan langsung via WA.",
    icon: WhatsAppIcon,
    href: "https://wa.me/6281234567890",
    cta: "Chat sekarang",
    bg: "#F3EBD9",
    fg: "#3A2318",
  },
];

export default function CaraPesan() {
  return (
    <section id="cara-pesan" className="bg-[#241611] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="font-display font-black text-[#F3EBD9] leading-tight mb-2"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Cara Pesan
          </h2>
          <p className="font-body text-[#F3EBD9]/60 text-base">
            Tiga pilihan, semuanya mudah.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {platforms.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.step}
                className="rounded-sm p-6 flex flex-col gap-4"
                style={{ background: p.bg, color: p.fg }}
              >
                <div className="flex items-start justify-between">
                  <span
                    className="font-display font-black text-4xl opacity-20 leading-none"
                  >
                    {p.step}
                  </span>
                  <Icon size={22} className="opacity-60 mt-1" />
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl mb-1">{p.label}</h3>
                  <p className="font-body text-sm leading-relaxed opacity-75">{p.desc}</p>
                </div>

                {p.platforms ? (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {p.platforms.map((pl) => (
                      <a
                        key={pl.name}
                        href={pl.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-sm text-xs font-body font-semibold text-white transition-opacity hover:opacity-80"
                        style={{ background: pl.color }}
                      >
                        {pl.name}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    href={p.href}
                    target={p.href?.startsWith("http") ? "_blank" : undefined}
                    rel={p.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="mt-auto inline-flex items-center gap-2 font-body font-semibold text-sm underline underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {p.cta}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
