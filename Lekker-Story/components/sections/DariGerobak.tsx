export default function DariGerobak() {
  return (
    <section id="cerita" className="bg-[#F3EBD9] bg-grid-notebook py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: story */}
          <div>
            <h2 className="font-display font-black text-[#3A2318] mb-6 leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
              Dari Gerobak<br />ke Cafe
            </h2>

            <div className="space-y-4 font-body text-[#241611] text-base leading-relaxed max-w-prose">
              <p>
                Dulu: gerobak kayu di pinggir jalan, tepung + margarin + telur,
                beli pakai uang receh kembalian jajan. Lekker dimakan langsung,
                sambil berdiri, bungkus koran.
              </p>
              <p>
                Sekarang: booth kaca dengan lampu hangat, menu ditulis rapi di
                papan, kursi kayu dengan colokan di bawah meja, dan WiFi yang
                lumayan kencang. Suasana cafe, harga kaki lima.
              </p>
              <p>
                Yang tidak berubah? Adonan tipis yang renyah di pinggir, lembut
                di tengah. Dan harga yang masih bisa dijangkau uang jajan
                mahasiswa.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#B4682A]/30" />
              <span className="font-aksen text-[#B4682A] text-lg">20+ cabang, satu rasa</span>
              <div className="h-px flex-1 bg-[#B4682A]/30" />
            </div>
          </div>

          {/* Right: visual timeline */}
          <div className="space-y-0">
            {[
              {
                era: "2014",
                label: "Gerobak pertama",
                desc: "Satu gerobak, satu wajan, satu mimpi.",
                dark: false,
              },
              {
                era: "2018",
                label: "Booth permanen",
                desc: "Pindah ke booth kaca. Higienis, tetap terjangkau.",
                dark: true,
              },
              {
                era: "2022",
                label: "Cafe ber-AC",
                desc: "Indoor, outdoor, colokan di tiap meja. Naik kelas.",
                dark: false,
              },
              {
                era: "Kini",
                label: "20+ kota",
                desc: "Jabodetabek, Jateng, Jatim, Papua.",
                dark: true,
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex gap-4 p-4 border-b border-[#B4682A]/20 ${
                  item.dark ? "bg-[#3A2318]/5" : ""
                }`}
              >
                <div className="font-display font-bold text-[#E8A93B] text-xl w-14 shrink-0 pt-0.5">
                  {item.era}
                </div>
                <div>
                  <div className="font-body font-semibold text-[#3A2318] text-sm">{item.label}</div>
                  <div className="font-body text-[#241611]/70 text-sm mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
