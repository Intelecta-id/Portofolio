# LEKKER STORY — Website Company Profile
**Versi:** 1.0.0
**Tanggal:** 07/09/2026
**Status:** `Draft`

---

## Masalah

Lekker Story sudah punya brand yang dikenal luas lewat Instagram (@lekkerstory) dan aplikasi pesan-antar (GoFood, GrabFood, ShopeeFood), dengan puluhan cabang tersebar di Jabodetabek, Jawa Tengah, Jawa Timur, hingga Papua. Namun brand ini belum memiliki *company profile website* resmi — sesuatu yang sudah lazim dimiliki pemain sejenis di industri F&B (misalnya Kopi Kenangan, Starbucks) sebagai titik referensi tunggal yang formal dan mudah diakses siapa pun, tanpa harus menelusuri feed Instagram atau bertanya lewat DM/WhatsApp untuk hal-hal dasar seperti daftar menu, kisaran harga, dan lokasi cabang.

---

## Rencana

Membangun website company profile statis (tanpa backend/database) menggunakan Next.js yang menyajikan seluruh informasi inti brand Lekker Story dalam satu pengalaman scroll yang terstruktur: cerita brand, menu & harga, suasana outlet, daftar cabang, dan cara pemesanan — mengarahkan pengunjung ke kanal pemesanan resmi yang sudah ada (GoFood/GrabFood/ShopeeFood/WhatsApp) tanpa membangun sistem transaksi baru.

---

## Value Prop

Calon pembeli mendapatkan satu tempat resmi dan cepat diakses untuk mengenal Lekker Story secara utuh — menu, harga, suasana cafe, dan lokasi cabang terdekat — tanpa perlu menggali informasi dari berbagai sumber terpisah (Instagram, Google, grup pesan-antar). Bagi Lekker Story, website ini memperkuat kredibilitas brand sebagai pemain F&B yang matang, sejajar dengan brand besar lain yang sudah punya presence resmi di luar media sosial.

---

## Tujuan

- Memberi Lekker Story presence resmi di luar media sosial, setara brand F&B besar lainnya.
- Memudahkan calon pembeli menemukan info menu, harga, dan cabang terdekat dalam satu tempat.
- Mengarahkan pengunjung secara langsung ke kanal pemesanan resmi yang sudah berjalan (GoFood/GrabFood/ShopeeFood/WhatsApp).
- Memperkuat identitas visual brand secara konsisten (lihat `DESIGN.md`) di kanal yang sepenuhnya dikendalikan oleh Lekker Story sendiri (tidak bergantung pada algoritma platform pihak ketiga).

---

## Metrik

*(Belum ditentukan oleh klien pada versi ini — berikut usulan yang disarankan untuk dipertimbangkan, karena situs ini murni company profile tanpa transaksi internal.)*

- Jumlah klik pada tombol pemesanan (WhatsApp/GoFood/GrabFood/ShopeeFood) — proksi minat beli.
- Jumlah interaksi dengan embed peta / bagian pencarian cabang — proksi minat kunjungan fisik.
- Jumlah klik menuju akun Instagram — proksi transfer traffic ke kanal sosial media.
- Waktu muat halaman (Largest Contentful Paint) — target di bawah 2.5 detik pada koneksi rata-rata.
- Bounce rate pada bagian cerita brand ("Dari Gerobak ke Cafe") — indikator seberapa jauh pengunjung mau menelusuri isi halaman.

---

## Scope

**Included:**
- Website satu halaman (single-page scroll) dengan struktur section sesuai `SECTIONS.md`: Papan Nama, Dari Gerobak ke Cafe, menu & harga per kelas (Kelas Klasik/Campur/Juara), perbandingan bentuk produk, suasana outlet, daftar & pencarian cabang, cara pesan, dan kaki halaman.
- Data menu, harga, dan daftar cabang disajikan secara statis (langsung dari kode/berkas data), tanpa panel input dinamis.
- Embed peta (Google Maps) untuk menunjukkan lokasi cabang.
- Tombol pemesanan langsung ke GoFood, GrabFood, ShopeeFood, dan WhatsApp.
- Tautan ke akun media sosial (Instagram dan lainnya).
- Optimasi dasar SEO dan metadata Open Graph, supaya tautan yang dibagikan ke Instagram bio/WhatsApp menampilkan pratinjau yang rapi.
- Tampilan responsif penuh untuk desktop dan mobile, mengikuti identitas visual pada `DESIGN.md`.

**Excluded:**
- Sistem login/akun pengguna dalam bentuk apa pun.
- Sistem pemesanan online mandiri (checkout sendiri di luar GoFood/GrabFood/ShopeeFood).
- Sistem member/poin loyalitas.
- Dukungan multi-bahasa.
- Panel admin/CMS untuk mengubah konten dari dashboard — perubahan konten (menu, harga, cabang) dilakukan langsung lewat kode/berkas data oleh developer.
- Fitur pendaftaran atau informasi program franchise/kemitraan — belum ada informasi resmi bahwa program ini dibuka saat ini; dapat ditambahkan pada versi berikutnya jika brand membukanya.
- Backend, basis data, dan autentikasi dalam bentuk apa pun — sepenuhnya situs statis.

---

## User Persona

**1. Calon Pembeli (Pengunjung Web)**
Orang yang menemukan Lekker Story lewat Instagram, GoFood/GrabFood/ShopeeFood, rekomendasi teman, atau pencarian lokasi terdekat, dan ingin tahu lebih lanjut sebelum memutuskan datang atau memesan: menu apa saja yang tersedia, berapa kisaran harganya, seperti apa suasana outletnya, dan di mana cabang terdekat dari lokasinya.

*(Catatan: saat ini belum ada persona "calon mitra franchise" karena belum ada informasi resmi bahwa program kemitraan sedang dibuka. Persona ini bisa ditambahkan di versi PRD berikutnya bila diperlukan.)*

---

## User Stories & Acceptance Criteria

| User Story | Acceptance Criteria |
|---|---|
| Sebagai calon pembeli, saya ingin melihat semua varian menu beserta harganya, supaya saya tahu apa yang bisa saya beli sebelum ke outlet. | Halaman menu menampilkan seluruh menu dikelompokkan menjadi Kelas Klasik, Kelas Campur, dan Kelas Juara, masing-masing dengan harga yang langsung terlihat. |
| Sebagai calon pembeli, saya ingin tahu cabang terdekat dari lokasi saya, supaya saya bisa langsung datang. | Halaman daftar cabang menampilkan pengelompokan per wilayah (Jabodetabek, Jawa Tengah, Jawa Timur, Papua) beserta embed peta lokasi. |
| Sebagai calon pembeli, saya ingin langsung memesan tanpa harus mencari sendiri link aplikasinya, supaya prosesnya cepat. | Tombol menuju GoFood, GrabFood, ShopeeFood, dan WhatsApp tersedia dan berfungsi di bagian menu dan/atau kaki halaman. |
| Sebagai calon pembeli, saya ingin melihat suasana cafe sebelum datang, supaya saya tahu apakah cocok untuk nongkrong atau mengerjakan tugas. | Bagian suasana outlet menampilkan foto asli beserta keterangan fasilitas (area indoor ber-AC, area outdoor, colokan listrik, jam operasional). |
| Sebagai calon pembeli, saya ingin mengetahui bedanya Lekker Mini dan Lekker KBP, supaya saya bisa memilih sesuai selera. | Bagian perbandingan produk menampilkan kedua bentuk produk dengan deskripsi singkat perbedaannya. |
| Sebagai calon pembeli, saya ingin bisa langsung mengunjungi akun Instagram brand dari web, supaya saya bisa mengikuti promo terbaru. | Tautan akun Instagram (dan media sosial lain jika ada) tersedia dan berfungsi di bagian khusus dan di kaki halaman. |
| Sebagai calon pembeli, saya ingin membuka website ini dengan nyaman dari HP, supaya saya tidak perlu membuka laptop hanya untuk cek menu atau lokasi. | Seluruh section menampilkan tata letak yang responsif dan mudah dibaca pada layar mobile. |

---

## Requirements

### Functional Requirements

| ID | Requirement |
|---|---|
| FR-01 | Sistem harus menampilkan halaman utama ("Papan Nama") berisi identitas brand dan dua pintu masuk utama: menu & harga, serta pencarian cabang |
| FR-02 | Sistem harus menampilkan bagian cerita brand ("Dari Gerobak ke Cafe") |
| FR-03 | Sistem harus menampilkan seluruh menu dikelompokkan menjadi Kelas Klasik, Kelas Campur, dan Kelas Juara beserta harga masing-masing |
| FR-04 | Sistem harus menampilkan perbandingan bentuk produk (Lekker Mini dan Lekker KBP) |
| FR-05 | Sistem harus menampilkan galeri/foto suasana outlet |
| FR-06 | Sistem harus menampilkan daftar cabang yang dapat disaring berdasarkan wilayah |
| FR-07 | Sistem harus menampilkan embed peta lokasi cabang |
| FR-08 | Sistem harus menyediakan tombol pemesanan langsung ke GoFood, GrabFood, dan ShopeeFood |
| FR-09 | Sistem harus menyediakan tombol chat langsung ke WhatsApp |
| FR-10 | Sistem harus menampilkan tautan ke akun media sosial (Instagram dan lainnya) |
| FR-11 | Sistem harus menampilkan potongan konten dari Instagram (kurasi manual atau embed) |
| FR-12 | Sistem harus menampilkan jam operasional umum dan informasi kontak pada kaki halaman |
| FR-13 | Sistem harus menampilkan seluruh halaman secara responsif di desktop maupun mobile |
| FR-14 | Sistem harus menyediakan metadata SEO dan Open Graph (judul, deskripsi, gambar pratinjau) untuk keperluan berbagi tautan di media sosial |

### Non-Functional Requirements

| ID | Requirement |
|---|---|
| NFR-01 | Antarmuka harus mengikuti identitas visual pada `DESIGN.md` (palet warna, tipografi, motif visual) |
| NFR-02 | Struktur dan urutan section halaman harus mengikuti `SECTIONS.md` |
| NFR-03 | Website harus dibangun sebagai situs statis (tanpa backend/database) menggunakan Next.js |
| NFR-04 | Ikon antarmuka menggunakan pustaka `lucide-react` |
| NFR-05 | Waktu muat halaman (Largest Contentful Paint) harus berada di bawah 2.5 detik pada koneksi rata-rata |
| NFR-06 | Antarmuka harus memenuhi standar aksesibilitas dasar (kontras warna cukup, teks alternatif pada gambar, fokus keyboard terlihat) |
| NFR-07 | Kode harus terstruktur berbasis komponen yang dapat digunakan ulang (component-based), mengikuti konvensi Next.js |
| NFR-08 | Gambar harus dioptimasi (lazy load dan kompresi) agar tidak memperlambat waktu muat |
| NFR-09 | Website harus dapat di-deploy dengan mudah ke platform hosting statis seperti Vercel |
| NFR-10 | Sistem tidak menyimpan data pengguna dan tidak memiliki mekanisme login sesuai dengan cakupan situs statis |

---

## Desain UI/UX

Identitas visual dan struktur konten mengacu penuh pada dua dokumen pendamping yang sudah disusun terpisah:

- **`DESIGN.md`** — palet warna, tipografi, prinsip layout, dan motif visual khas Lekker Story (lipatan lekker, stempel absen untuk daftar cabang, coretan tinta merah guru untuk badge favorit, garis buku kotak-kotak sebagai tekstur latar).
- **`SECTIONS.md`** — urutan dan isi tiap section halaman, dari "Papan Nama" hingga "Kaki Halaman", termasuk penamaan section yang spesifik terhadap brand (misalnya "Kelas Klasik, Kelas Campur, Kelas Juara" untuk kelompok menu, bukan label generik "Basic/Mix/Premium").

Tech stack yang direkomendasikan: **Next.js** (App Router, mode static export bila memungkinkan) dengan **Tailwind CSS** untuk styling dan **lucide-react** untuk ikon — mengikuti stack yang sudah familiar dan konsisten dengan proyek portofolio milik developer.

---

## Peran dan Hak Akses

Karena situs ini statis dan tidak memiliki sistem login, hanya ada satu jenis akses:

| Peran | Hak Akses |
|---|---|
| **Pengunjung Web** | Melihat seluruh halaman publik (menu, harga, suasana outlet, daftar cabang, cara pesan), mengklik tombol pemesanan menuju platform pihak ketiga (GoFood/GrabFood/ShopeeFood/WhatsApp), mengklik tautan menuju akun media sosial |

*(Catatan: tidak ada peran Admin pada versi ini karena tidak ada panel pengelolaan konten — perubahan konten dilakukan langsung oleh developer melalui kode/berkas data.)*

---

*Disusun sebagai bagian dari proyek freelance nyata — Product Requirements Document website company profile Lekker Story.*
