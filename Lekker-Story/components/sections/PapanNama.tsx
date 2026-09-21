export default function PapanNama() {
  return (
    <section
      id="papan-nama"
      className="relative min-h-screen bg-[#3A2318] bg-grid-notebook-dark overflow-hidden flex items-center"
    >
      {/* Decorative circle blur */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
        style={{ background: "#E8A93B", filter: "blur(80px)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-28 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Left: Text */}
          <div className="animate-fade-up">
            {/* Brand mark - small, honest */}
            <div className="mb-6">
              <span
                className="inline-block font-aksen text-[#E8A93B] text-lg"
                style={{ transform: "rotate(-1deg)", display: "inline-block" }}
              >
                sejak gerobak
              </span>
            </div>

            <h1 className="font-display font-black text-[#F3EBD9] leading-[0.95] mb-6"
              style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}>
              Lekker<br />
              <span style={{ color: "#E8A93B" }}>Story</span>
            </h1>

            <p className="font-body text-[#F3EBD9]/80 text-base md:text-lg max-w-md mb-10 leading-relaxed">
              Dulu gerobak di depan gerbang SD, sekarang booth kaca ber-AC dengan colokan di tiap meja.
              Yang tidak berubah: lekker Rp4.000 yang bikin kamu mau balik lagi.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#menu"
                className="inline-flex items-center justify-center px-6 py-3 rounded font-body font-semibold text-[#3A2318] bg-[#E8A93B] hover:bg-[#d4963a] transition-colors duration-200 text-sm"
              >
                Lihat Menu &amp; Harga
              </a>
              <a
                href="#cabang"
                className="inline-flex items-center justify-center px-6 py-3 rounded font-body font-semibold text-[#F3EBD9] border border-[#F3EBD9]/40 hover:border-[#F3EBD9]/80 transition-colors duration-200 text-sm"
              >
                Cari Cabang Terdekat
              </a>
            </div>
          </div>

          {/* Right: Lekker image stack */}
          <div className="flex justify-center md:justify-end mt-12 md:mt-0">
            <div className="relative w-72 h-80 md:w-80 md:h-[26rem] lg:w-96 lg:h-[30rem] group cursor-pointer animate-fade-up" style={{ animationDelay: "0.2s" }}>
              
              {/* Back Photo */}
              <div className="absolute top-4 left-0 w-[80%] h-[80%] rounded-sm border-[6px] border-[#F3EBD9] bg-[#F3EBD9] shadow-[0_8px_30px_rgb(0,0,0,0.4)] transform -rotate-6 transition-all duration-500 ease-out group-hover:-rotate-12 group-hover:-translate-x-4">
                <div className="w-full h-full overflow-hidden rounded-sm bg-[#3A2318]">
                  <img
                    src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80"
                    alt="Lekker stack"
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Front Photo */}
              <div className="absolute bottom-0 right-0 w-[85%] h-[85%] rounded-sm border-[8px] border-[#F3EBD9] bg-[#F3EBD9] shadow-[0_20px_50px_rgb(0,0,0,0.6)] transform rotate-3 transition-all duration-500 ease-out group-hover:rotate-6 group-hover:translate-x-2 group-hover:-translate-y-2">
                <div className="w-full h-full overflow-hidden rounded-sm bg-[#3A2318]">
                  <img
                    src="https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&q=80"
                    alt="Kue lekker crepes manis renyah"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                </div>
                {/* Accent tape/sticker */}
                <div className="absolute -top-5 -right-5 md:-right-8 bg-[#C43A2F] text-[#F3EBD9] font-aksen text-xl md:text-2xl px-4 py-1.5 transform rotate-12 shadow-lg border border-[#F3EBD9]/20 transition-transform duration-500 ease-out group-hover:rotate-12 group-hover:scale-110">
                  Kriuk & Manis!
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Bottom stat strip */}
        <div className="mt-16 md:mt-20 grid grid-cols-3 gap-4 border-t border-[#F3EBD9]/10 pt-8 max-w-lg">
          {[
            { num: "20+", label: "Cabang aktif" },
            { num: "Rp4rb", label: "Mulai dari" },
            { num: "2014", label: "Berdiri sejak" },
          ].map((s) => (
            <div key={s.num}>
              <div className="font-display font-bold text-[#E8A93B] text-2xl">{s.num}</div>
              <div className="font-body text-[#F3EBD9]/60 text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
