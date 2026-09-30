# Kopi 3 Sekawan — Company Profile Web

Website profil terintegrasi untuk **Kopi 3 Sekawan**, kedai kopi lokal (neighborhood coffee shop) yang terletak di Unit RA-03, Retail Area Lantai Dasar Apartemen Brooklyn, Jl. Alam Sutera Boulevard Kav. 22 & 26, Serpong Utara, Tangerang Selatan.

## Techstack
- **Framework**: Next.js 16.3.4 (App Router)
- **UI Library**: React 19 + React DOM 19
- **Bahasa**: TypeScript
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss";`)
- **Ikon**: Lucide Icons (`lucide-react`) — *100% bebas emoji*
- **Tipografi**: Next Font (`Plus Jakarta Sans` & `Syne`)
- **Arsitektur**: Monorepo Workspaces (`npm workspaces` + `Turborepo`)

## Menjalankan Project

Dari root directory monorepo (`c:\laragon\www\Kerjaan`):

```bash
# Menjalankan dev server Kopi 3 Sekawan (Port 3002)
npm run dev:kopi

# Melakukan build production
npm run build:kopi
```

Atau langsung dari dalam folder `Kopi-3-Sekawan`:
```bash
npm run dev
npm run build
```
