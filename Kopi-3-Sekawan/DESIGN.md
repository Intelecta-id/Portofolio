# DESIGN.md — Kopi 3 Sekawan

## 1. Filosofi & Konsep Visual
"Vertical sanctuary meets neighborhood coffee warmth."
Sebagai kedai kopi di lantai dasar apartemen Brooklyn (bukan ruko pinggir jalan terbuka), konsep desain menggabungkan struktur geometris modern apartemen vertikal dengan kehangatan seduhan espresso dan ruang rehat yang akrab.

## 2. Palet Warna (60-30-10 + Disruptive Accent)
- **60% Dominan**: Warm Oat & Cream (`#F7F3ED` / `#EFE8DE`) pada light surface dan Dark Espresso (`#1A1412`) pada dark card.
- **30% Sekunder**: Deep Walnut & Roasted Coffee (`#281E18` & `#3E2C22`).
- **10% Aksen**: Amber Crema (`#D97724` / `#BF6318`).
- **Aksen Disruptif Kontekstual**: Courtyard Sage Green (`#15803D`) — melambangkan elemen teras taman & ketenangan di tengah beton kota.

## 3. Tipografi
- **Headline / Display**: Syne (geometric, bold, architectural feel).
- **Body & UI**: Plus Jakarta Sans (humanist, legible, contemporary standard).

## 4. Standar Aksesibilitas & Micro-interactions
- Kepatuhan WCAG 2.1 AA rasio kontras >= 4.5:1.
- Transisi custom spring: `cubic-bezier(0.16, 1, 0.3, 1)`.
- Fallback wajib `@media (prefers-reduced-motion: reduce)`.
- **Ketentuan Ikon**: 100% menggunakan Lucide Icons, tanpa emoji di seluruh antarmuka.
