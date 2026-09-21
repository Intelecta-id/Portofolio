export default function BukanCumaLekker() {
  return (
    <section className="bg-[#3A2318] bg-grid-notebook-dark py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="font-display font-black text-[#F3EBD9] leading-tight mb-2"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Bukan Cuma Lekker Mini
          </h2>
          <p className="font-body text-[#F3EBD9]/70 text-base max-w-xl">
            Dua karakter, satu cinta. Pilih sesuai selera.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Lekker Mini */}
          <div className="flex flex-col">
            <div
              className="w-full overflow-hidden mb-6"
              style={{ clipPath: "ellipse(50% 100% at 50% 100%)", height: 280 }}
            >
              <img
                src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80"
                alt="Lekker Mini — crepes kecil tipis"
                width={600}
                height={400}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="border-t border-[#E8A93B] pt-5">
              <h3 className="font-display font-bold text-[#E8A93B] text-2xl mb-2">Lekker Mini</h3>
              <p className="font-body text-[#F3EBD9]/80 text-sm leading-relaxed">
                Ukuran palm-size, tipis renyah di seluruh bagian.
                Satu gigitan sudah dapat semua rasa. Cocok untuk ngemil
                sambil ngobrol — satu pasti tidak cukup.
              </p>
            </div>
          </div>

          {/* Lekker KBP */}
          <div className="flex flex-col">
            <div
              className="w-full overflow-hidden mb-6"
              style={{ clipPath: "ellipse(50% 100% at 50% 100%)", height: 280 }}
            >
              <img
                src="https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&q=80"
                alt="Lekker KBP — crepes besar lebih tebal"
                width={600}
                height={400}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="border-t border-[#B4682A] pt-5">
              <h3 className="font-display font-bold text-[#F3EBD9] text-2xl mb-2">
                Lekker KBP
                <span className="font-aksen text-[#E8A93B] text-base ml-2">lebih besar</span>
              </h3>
              <p className="font-body text-[#F3EBD9]/80 text-sm leading-relaxed">
                Lebih besar, sedikit lebih tebal di bagian tengah, tapi pinggirnya
                tetap renyah. Untuk yang tidak mau setengah-setengah.
                Isian lebih merata, satu cukup untuk kenyang ringan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
