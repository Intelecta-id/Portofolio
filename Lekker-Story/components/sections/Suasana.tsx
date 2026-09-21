export default function Suasana() {
  const facilities = [
    "Indoor ber-AC",
    "Area outdoor tersedia",
    "Colokan listrik di tiap meja",
    "Lantai 2 - 3 di beberapa cabang",
    "Kadang ada live music",
    "Buka 10.00 - 22.00 WIB",
  ];

  return (
    <section id="suasana" className="bg-[#3A2318] py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="font-display font-black text-[#F3EBD9] leading-tight mb-2"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Bukan Cuma<br />Buat Jajan Bentar
          </h2>
          <p className="font-body text-[#F3EBD9]/70 text-base max-w-xl">
            Cabang-cabang kami punya karakter cafe yang kuat. Kamu boleh betah.
          </p>
        </div>

        {/* Asymmetric photo layout */}
        <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[420px] md:h-[500px] mb-10">
          {/* Main photo - 2/3 width */}
          <div className="col-span-2 row-span-2 overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=80"
              alt="Suasana cafe Lekker Story - indoor ber-AC dengan meja kayu"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Top right */}
          <div className="overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=500&q=80"
              alt="Area duduk outdoor Lekker Story"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Bottom right */}
          <div className="overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=500&q=80"
              alt="Colokan listrik tersedia di tiap meja"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Facilities - inline text list, not icon grid */}
        <div className="border-t border-[#F3EBD9]/10 pt-8">
          <p className="font-body text-[#F3EBD9]/60 text-xs uppercase tracking-widest mb-4">Fasilitas tersedia</p>
          <div className="flex flex-wrap gap-3">
            {facilities.map((f) => (
              <span
                key={f}
                className="font-body text-sm text-[#F3EBD9]/90 border border-[#F3EBD9]/20 px-3 py-1.5 rounded-sm"
              >
                {f}
              </span>
            ))}
          </div>
          <p className="font-aksen text-[#E8A93B] text-base mt-6">
            * Jam buka bisa berbeda antar cabang, cek Instagram kami
          </p>
        </div>
      </div>
    </section>
  );
}
