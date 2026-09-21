import { Instagram, MessageCircle, ShoppingBag } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="kontak" className="bg-[#241611] text-[#F3EBD9]">
      {/* Wave top */}
      <div className="overflow-hidden leading-none">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: 48, display: "block", width: "100%" }}>
          <path d="M0 24 C180 4 360 44 540 24 C720 4 900 44 1080 24 C1260 4 1380 38 1440 24 L1440 0 L0 0 Z" fill="#F3EBD9" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-3">
              <img src="/logo.png" alt="Lekker Story Logo" className="h-8 w-auto grayscale brightness-200" />
              <p className="font-display font-black text-[#E8A93B] text-2xl">Lekker Story</p>
            </div>
            <p className="font-body text-[#F3EBD9]/60 text-sm leading-relaxed max-w-xs">
              Kue lekker bukan kaleng-kaleng. Dari gerobak pinggir SD sampai cafe ber-AC,
              sejak 2014.
            </p>
          </div>

          {/* Jam operasional */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-[#F3EBD9]/40 mb-4">Jam Operasional</h3>
            <p className="font-body text-[#F3EBD9] text-sm leading-relaxed">
              Senin - Minggu<br />
              <span className="text-[#E8A93B] font-semibold">10.00 - 22.00 WIB</span>
            </p>
            <p className="font-body text-[#F3EBD9]/50 text-xs mt-2">
              * Jam buka dapat berbeda antar cabang. Hubungi cabang untuk konfirmasi.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-[#F3EBD9]/40 mb-4">Hubungi Kami</h3>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/lekkerstory"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 font-body text-sm text-[#F3EBD9]/70 hover:text-[#E8A93B] transition-colors duration-200"
              >
                <Instagram size={16} />
                @lekkerstory
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 font-body text-sm text-[#F3EBD9]/70 hover:text-[#E8A93B] transition-colors duration-200"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <div className="flex items-center gap-2.5 font-body text-sm text-[#F3EBD9]/70">
                <ShoppingBag size={16} />
                <span>GoFood &middot; GrabFood &middot; ShopeeFood</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-[#F3EBD9]/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-[#F3EBD9]/30 text-xs">
            &copy; {year} Lekker Story. Semua hak dilindungi.
          </p>
          <nav className="flex gap-4">
            {[
              { href: "#menu", label: "Menu" },
              { href: "#cabang", label: "Cabang" },
              { href: "#cara-pesan", label: "Pesan" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="font-body text-[#F3EBD9]/40 text-xs hover:text-[#F3EBD9]/70 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
