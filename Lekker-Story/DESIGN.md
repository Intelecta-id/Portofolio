# DESIGN.md — Lekker Story

## 0. Ide Besar

Lekker bukan makanan baru. Ini jajanan yang dulu dibeli pakai uang recehan di depan gerbang SD, dari gerobak yang mangkal tiap pulang sekolah. Lekker Story tidak "membuang" nostalgia itu — mereka merapikannya: gerobak jadi booth kaca, uang receh jadi harga yang tetap ramah kantong (Rp4.000–16.000), dan tempat mangkal seadanya jadi cafe ber-AC dengan colokan di tiap meja buat mahasiswa ngerjain tugas.

Jadi arah visualnya bukan "cafe kekinian pada umumnya" dan bukan juga "jajanan pinggir jalan apa adanya". Titik tengahnya: **peralatan sekolah lama yang dirawat rapi**. Buku tulis kotak-kotak, kertas minyak pembungkus gorengan, papan nama gerobak yang dicat tangan, tinta merah guru — tapi disusun dengan grid yang rapi dan tipografi yang percaya diri, bukan norak.

Kalau ada satu kalimat untuk brief ke tim: *"Rasanya kayak buka buku tulis SD yang disimpan rapi selama 15 tahun, lalu dibuka lagi sambil ngopi."*

---

## 1. Palet Warna

Hindari default "cream + terracotta + serif" (klise AI) dan hindari juga "dark mode + neon accent". Palet ini diambil dari benda aslinya: adonan lekker yang digoreng di atas wajan datar (garis pinggir renyah kecoklatan), coklat leleh, dan kertas buku tulis lawas.

| Nama | Hex | Peran |
|---|---|---|
| **Wajan Panas** (dark chocolate brown) | `#3A2318` | Background utama section gelap, teks di atas warna terang |
| **Gosong Manis** (burnt caramel) | `#B4682A` | Warna dasar netral kedua, border, ilustrasi lipatan lekker |
| **Kuning Mentega** (butter marigold) | `#E8A93B` | Aksen utama — CTA, highlight harga, garis bawah |
| **Kertas Buku Tulis** (aged notebook cream) | `#F3EBD9` | Background terang, area konten panjang |
| **Tinta Merah Guru** (teacher's red pen) | `#C43A2F` | Aksen sekunder — coretan, badge "favorit", angka harga |
| **Coklat Leleh** (melted chocolate, hampir hitam-coklat) | `#241611` | Teks body di atas background terang |

Aturan pakai:
- Satu halaman = maksimal 1 background gelap (Wajan Panas) + 1 background terang (Kertas Buku Tulis) sebagai dua "ruangan" berbeda, bukan gradasi di antaranya.
- Kuning Mentega dan Tinta Merah Guru tidak pernah dipakai bersamaan dalam satu elemen — pilih satu per momen supaya masing-masing tetap punya bobot.
- Tidak ada abu-abu netral standar (`#111`, `#0B0B0B`, `rgba(0,0,0,.1)` shadow). Kalau butuh "gelap", pakai Coklat Leleh. Kalau butuh shadow, pakai warna coklat transparan (`rgba(58,35,24,.18)`), bukan hitam.

---

## 2. Tipografi

Dua keluarga font, perannya jelas beda — bukan dua serif atau dua sans yang mirip.

**Display / Headline — gaya papan nama gerobak dicat tangan.**
Pilih typeface rounded-bold dengan karakter "hand-painted signboard": contoh arah *Bricolage Grotesque* (versi bold/black) atau *Fredoka* dipakai berat (600–700), *bukan* di-italic-kan atau di-lettering acak — cukup bold, agak gemuk, sudut membulat halus. Judul besar ditulis sentence case biasa, tidak ALL CAPS, karena papan gerobak asli jarang all-caps rapi — biasanya satu warna solid dengan sedikit outline tipis warna kontras (Kuning Mentega outline di atas Wajan Panas, atau sebaliknya).

**Body / UI — buku catatan yang gampang dibaca.**
Humanist sans yang netral dan nyaman dibaca panjang: *Inter* atau *Public Sans*, weight 400–500 untuk paragraf, 600 untuk label kecil. Lebar baris maksimal ~70 karakter.

**Aksen tulisan tangan — dipakai jarang, seperti coretan pulpen merah guru.**
Satu typeface script/marker ringan (contoh *Caveat* atau *Permanent Marker* tipis) khusus untuk anotasi kecil: harga yang dicoret-diganti, kata "favorit murid", catatan kecil di pojok foto. Maksimal 1–2 kemunculan per section — ini bumbu, bukan lauk utama. Jangan dipakai untuk heading atau body.

Skala tipe (base 16px):
```
Display   : 56 / 40 / 30px  (headline halaman, headline section, sub-headline)
Body       : 17px (paragraf), 15px (caption)
Aksen tulisan tangan : 20–24px, hanya untuk 3–6 kata
```

Larangan eksplisit di brief ini:
- Tidak ada label eyebrow tracked-out ALL CAPS di atas setiap heading.
- Tidak ada penomoran "01 / 02 / 03" kecuali memang konten berupa urutan langkah (lihat bagian "Cara Pesan" di SECTIONS.md — itu sah karena memang berurutan).
- Tidak ada "kata — pecahan" dengan em dash, tidak ada meta string "A · B · C".
- Tidak ada tanda panah "→" ditempel di akhir tombol/link.

---

## 3. Layout & Grid

**Prinsip bentuk: lipatan lekker.** Lekker disajikan dilipat satu kali jadi bentuk setengah lingkaran (seperti martabak mini yang dilipat). Bentuk ini jadi motif struktural berulang — bukan sekadar dekorasi — dipakai sebagai:
- Bentuk masking foto produk (bukan kotak, bukan lingkaran penuh — setengah lingkaran dengan satu sisi lurus).
- Pembatas antar-section pada beberapa transisi (bukan garis lurus horizontal biasa, tapi lengkung lipatan, dipakai maksimal 2× per halaman supaya tetap jadi momen, bukan tema berulang tiap section).

**Grid konten:** left-aligned untuk teks panjang (cerita brand, deskripsi), tapi grid produk/menu pakai alignment kolom rapi ala tabel buku tulis kotak-kotak — garis tipis antar kolom seperti garis buku matematika, bukan card dengan shadow seragam.

Wireframe kasar halaman utama:

```
┌──────────────────────────────────────────┐
│  WAJAN PANAS (dark)                       │
│  papan nama + judul besar   [foto lekker  │
│  1 kalimat cerita              dilipat,   │
│                              masking half- │
│                              circle]       │
├──────────────────────────────────────────┤
│  KERTAS BUKU TULIS (terang)               │
│  garis-garis kotak tipis di background    │
│                                            │
│  "Kelas Klasik"  "Kelas Campur" "Kelas    │
│   [grid rasa]     [grid rasa]   Juara"    │
│                                  [grid]    │
├──────────────────────────────────────────┤
│  WAJAN PANAS (dark) — suasana outlet      │
│  foto cafe full-bleed, layout asimetris   │
│  (bukan 3 foto sama besar berjajar)       │
├──────────────────────────────────────────┤
│  KERTAS BUKU TULIS — peta cabang          │
│  daftar kota dg motif "stempel absen"     │
├──────────────────────────────────────────┤
│  footer coklat leleh, tenang, tanpa ramai │
└──────────────────────────────────────────┘
```

Jangan simetris sempurna di setiap section — biarkan foto suasana cafe (yang aslinya asimetris: booth kecil, meja kayu, colokan di sudut) menentukan crop, jangan dipaksa jadi grid 3-kolom rata seperti template SaaS.

---

## 4. Motif & Elemen Visual Khusus

Ini yang bikin halaman ini terasa milik Lekker Story, bukan template kuliner mana pun:

- **Stempel absen** — untuk daftar kota/cabang (Jabodetabek, Semarang, Jatim, Papua), tiap nama kota diberi tekstur seperti cap stempel guru di buku absen: sedikit miring, tinta agak tebal di pinggir, warna Tinta Merah Guru di atas Kertas Buku Tulis.
- **Coretan nilai** — untuk badge "favorit"/rekomendasi di menu premium, pakai gaya coretan pulpen merah melingkari nama menu, bukan badge pill berwarna solid standar.
- **Garis buku kotak-kotak** — dipakai halus (opacity rendah) sebagai tekstur background di area menu, mengingatkan ke kertas latihan matematika SD, bukan grid dekoratif generik.
- **Wajan/garis renyah** — outline tipis bergelombang kecil (meniru pinggiran lekker yang renyah bergerigi halus) dipakai sebagai pembatas antar-kategori menu, bukan garis lurus solid.

Larangan: jangan pakai motif "kaki lima" yang klise (payung tenda garis-garis merah putih, gerobak kartun generik) — brand ini justru menjauh dari itu, mereka upgrade dari situ, bukan merayakannya secara harfiah.

---

## 5. Motion

Satu momen animasi utama saja: saat halaman pertama dimuat, ilustrasi lekker "melipat" dari bentuk terbuka jadi bentuk setengah lingkaran (0.6s, ease-out), sekali saja di hero — bukan tiap section fade-slide-up satu-satu.
Interaksi hover pada grid menu: warna dasar sedikit menghangat (bukan scale-up card + shadow membesar khas SaaS) — cukup transisi warna background dari Kertas Buku Tulis ke sedikit lebih kuning kecoklatan, seperti bagian pinggir lekker yang makin matang.
Hormati `prefers-reduced-motion`: matikan animasi lipatan, sisakan transisi warna hover saja.

---

## 6. Checklist Anti-Slop (khusus brief ini)

- [ ] Tidak ada palet cream `#F4F1EA` + aksen terracotta `#D97757`.
- [ ] Tidak ada background nyaris hitam + satu aksen neon.
- [ ] Tidak ada kartu rounded identik dengan shadow abu-abu seragam di semua section.
- [ ] Tidak ada eyebrow label ALL CAPS, tidak ada "→" di tombol, tidak ada meta string dengan titik tengah "·".
- [ ] Setiap motif visual (stempel, lipatan, garis kotak) punya alasan dari dunia sekolah/lekker itu sendiri — bukan dekorasi acak.
- [ ] Foto suasana cafe (booth kecil, meja kayu, colokan, lantai 2–3, live music) ditampilkan apa adanya/asimetris, tidak dipaksa jadi grid rata seragam.
