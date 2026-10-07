# DESIGN.md — Labuan Dental Clinic (Company Profile Website)

> Sumber kebenaran desain untuk proyek ini. Antigravity WAJIB mengikuti dokumen ini. Kalau ada hal yang tidak jelas/ambigu/bertentangan dengan brief, TANYA dulu — jangan ambil keputusan sendiri (sesuai standing rule proyek).

---

## 1. Project Overview

| | |
|---|---|
| **Klien** | Klinik Dokter Gigi Labuan (IG: [@labuandentalclinic](https://www.instagram.com/labuandentalclinic)) |
| **Lokasi** | Ciateul, Labuan, Pandeglang, Banten (samping Gudang Alfa) |
| **Kontak** | WhatsApp only — 0831-2355-5554 |
| **Skala** | Klinik lokal (bukan chain/korporat) |
| **Tipe situs** | Company profile (single clinic, bukan multi-cabang) |
| **CTA utama** | Chat WhatsApp (booking/konsultasi), bukan sistem booking online formal |
| **Audiens** | Warga lokal Labuan–Pandeglang yang menemukan klinik lewat Instagram/Google/rekomendasi |

---

## 2. Competitive Analysis (Referensi)

| Referensi | Observasi | Diambil? |
|---|---|---|
| **FDC Dental Clinic** (fdcdentalclinic.co.id) | Chain nasional besar, korporat, banyak cabang | Skala tidak relevan — klinik kita 1 lokasi, jangan tiru kesan "korporat besar" |
| **Indo Dental Center** (indodentalcenter.com) | Positioning "family dental center", berdiri 2001, 2 cabang Jakarta, kesan klinis-profesional | Ambil: struktur info spesialisasi & trust signal (pengalaman, teknologi) |
| **Fre DentalCare** (fredentalcare.com) | IA bersih & modern: Beranda → Tentang → Layanan(+harga) → Dokter → Fasilitas → Lokasi. CTA WhatsApp jelas. Foto fasilitas asli, bukan stok foto generik | Ambil: struktur IA ini jadi basis sitemap kita + pola CTA WA |

**Keputusan arah desain:** *Clinical-warmth* — bukan korporat-dingin (seperti chain besar), bukan juga medical-blue generik. Karena ini klinik lokal yang WA-only, situsnya harus terasa **personal & approachable** tapi tetap **kredibel secara medis**. Hindari niru skala/kesan "cabang di mana-mana" yang tidak sesuai realita klinik.

---

## 3. Design Principles

1. **Trust over trend** — elemen kepercayaan (jam praktik jelas, alamat presisi, foto klinik asli) lebih penting daripada efek visual mewah.
2. **WhatsApp-first** — setiap CTA utama mengarah ke WA, bukan form kontak formal.
3. **Local, not corporate** — tone visual hangat, bukan korporat kaku ala chain nasional.
4. **Mobile-first, bukan opsional** — mayoritas traffic diprediksi dari link bio Instagram → HP.
5. **Anti-slop, tetap medis-kredibel** — distinctive secara tipografi/warna, tapi tidak mengorbankan kesan bersih & steril yang wajib ada di situs medis.

---

## 4. Information Architecture (Sitemap)

```
/                   → Beranda (hero, ringkasan layanan, CTA WA, preview lokasi)
/tentang            → Tentang klinik (profil, visi singkat, kenapa pilih kami)
/layanan            → Daftar layanan + rentang harga (ambil pola dari Fre DentalCare)
/dokter             → Profil dokter gigi (nama, pengalaman, foto)
/fasilitas          → Galeri foto ruang tunggu & ruang perawatan (foto asli, bukan stok)
/lokasi             → Alamat, peta, jam praktik, tombol WA
```

Untuk versi awal/MVP: boleh digabung jadi **1 halaman scroll** (one-page company profile) dengan section mengikuti urutan di atas — umum untuk klinik skala kecil yang baru punya situs pertama kali.

---

## 5. Tipografi

- **Heading:** font distinctive dengan kesan hangat-profesional — hindari Inter/Roboto default. Rekomendasi: font dari Fontshare (mis. *Clash Display* atau *General Sans*) — lebih personal dari font korporat kaku.
- **Body:** font sans-serif legible untuk teks medis/informasi (mis. *Satoshi* atau *Inter* — kalau Inter dipakai, pastikan weight/spacing dikustom biar tidak terasa default).
- **Skala:** generate dari [type-scale.com], base 16px, ratio 1.25 (Major Third) — cukup kontras tanpa berlebihan untuk konten informasi medis.
- Setup: `npm install @fontsource-variable/[nama-font]`

---

## 6. Warna

**Larangan:** biru-putih generik ala chain dental korporat (itu yang bikin semua situs dental terlihat sama).

**Arah palet:** *Clinical-warmth* — dasar netral bersih + 1 warna hangat sebagai aksen kepercayaan, bukan biru medis default.

```css
--color-primary: #2D6A5E;      /* sage/teal gelap — bersih tapi tidak dingin seperti biru medis generik */
--color-accent: #E8A84C;       /* warna hangat (amber/terracotta) — aksen CTA WhatsApp, kesan ramah */
--color-neutral-bg: #FAF8F4;   /* off-white hangat, bukan putih steril */
--color-neutral-text: #1F2A28;
--color-surface: #FFFFFF;
```

*(Hex di atas starting point — validasi final pakai Realtime Colors & cek kontras APCA sebelum dikunci.)*

- Rasio pemakaian: 60% neutral-bg/surface, 30% primary, 10% accent (khusus CTA WhatsApp/tombol penting).
- Setup: `npm install @radix-ui/colors colorjs.io`
- **Wajib:** semua kombinasi teks/background lolos APCA sebelum ship.

---

## 7. Spacing, Radius, Shadow

- Sumber token: [Open Props](https://open-props.style) — `npm install open-props`
- Radius: lebih membulat dari korporat kaku (mis. `--radius-3` ke atas untuk card) — mendukung kesan "ramah", bukan tajam-klinis.
- Shadow: soft, jangan heavy drop-shadow bergaya glassmorphism AI-generated.

---

## 8. Styling System

- **Komponen dasar:** Radix UI Primitives (`@radix-ui/react-*`) — styling custom sesuai token di atas.
- **Variant system:** class-variance-authority (cva) — `npm install class-variance-authority`
- **Styling approach:** Panda CSS (`npm install -D @pandacss/dev`) untuk token type-safe.
- Jangan pakai styling default shadcn/ui mentah — restyle total sesuai palet & radius section 6–7.

---

## 9. Komponen Utama (Inventory)

| Komponen | Catatan |
|---|---|
| Hero section | Foto klinik (asli atau stok sementara — pastikan benar-benar tampil, bukan placeholder), headline + CTA WA |
| Service card | Nama layanan + rentang harga, ikon sederhana (bukan generic medical icon clipart) |
| Doctor card | Foto, nama, pengalaman singkat |
| Facility gallery | Grid foto ruang tunggu/perawatan (asli atau stok sementara, wajib tampil di halaman) |
| Location block | Peta embed + alamat + jam praktik + tombol WA sticky |
| Sticky WA button | Floating action button, selalu terlihat di mobile (CTA utama) |

---

## 10. Motion

- Micro-interaction ringan: hover card, tap feedback tombol WA — pakai **Motion** (`npm install motion`), `type: "spring"`.
- Scroll reveal section (fade+slide tipis) — pakai **GSAP** (`npm install gsap`) bila diperlukan, jangan berlebihan (konten medis = hindari animasi yang terasa "ramai"/norak).
- Smooth scroll: **Lenis** (`npm install lenis`), opsional untuk one-page layout.
- Semua motion wajib fallback `prefers-reduced-motion`.

---

## 11. Aksesibilitas

- WCAG 2.1 AA minimum, validasi APCA (section 6).
- Testing otomatis: `npm install -D @axe-core/react`
- Teks jam praktik, alamat, nomor WA harus bisa di-copy & screen-reader-friendly (ini situs medis, aksesibilitas bukan opsional).

---

## 12. Icon

- Library: Lucide (`npm install lucide-react`) — hindari clipart gigi/stetoskop generik bergaya klinik AI-slop.

---

## 13. Tech Stack Rekomendasi

- Framework: Next.js (SEO penting untuk klinik lokal — pencarian "dokter gigi Labuan Pandeglang")
- Styling: Tailwind + Panda CSS token (section 8)
- Hosting: Vercel (gratis, cukup untuk company profile)

---

## 14. Checklist Sebelum Ship

- [ ] Tidak ada biru-putih generik ala chain dental korporat
- [ ] CTA WhatsApp selalu terlihat (sticky di mobile)
- [ ] Gambar/foto (asli klinik atau stok sementara) benar-benar tampil & ter-render di website — bukan broken image/placeholder kosong
- [ ] Alamat & jam praktik akurat dan mudah ditemukan
- [ ] Lolos APCA & 0 violation axe-core
- [ ] Motion punya `prefers-reduced-motion` fallback
- [ ] Mobile-first — dites dari ukuran 375px terlebih dahulu

---

*Dokumen ini jadi basis untuk PRD.md/cetak biru di tahap berikutnya — tunggu instruksi lanjutan.*
