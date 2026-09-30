export interface MenuItem {
  id: string;
  name: string;
  category: "signature" | "manual-brew" | "non-coffee" | "bites";
  categoryLabel: string;
  price: string;
  rawPrice: number;
  description: string;
  image: string;
  badge?: "Best Seller" | "Barista's Pick";
}

export interface WfcFacility {
  title: string;
  description: string;
  icon: string;
}

export const brandData = {
  name: "Kopi 3 Sekawan",
  category: "Kedai Kopi Lokal (Neighborhood Coffee Shop)",
  tagline: "Ngopi Tanpa Repot di Bawah Menara Brooklyn",
  subtitle:
    "Hadir di Lantai Dasar Apartemen Brooklyn. Seduhan segar setiap hari untuk teman kerja, kuliah, dan santai.",

  location: {
    unit: "Unit RA-03 (Retail Area Lantai Dasar)",
    building: "Apartemen Brooklyn",
    address:
      "Unit RA-03, Retail Area Apartemen Brooklyn, Jl. Alam Sutera Boulevard No. Kav. 22 & 26, Pakualam, Kec. Serpong Utara, Tangerang Selatan, Banten 15320",
    corridor: "Koridor Alam Sutera Boulevard",
    city: "Tangerang Selatan, Banten",
    googleMapsUrl: "https://maps.app.goo.gl/CRWBdvhCKRdqDyYN9",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2737677840134!2d106.6508216!3d-6.2275936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbf7fef01e97%3A0xb35a0fecce5da51e!2sBrooklyn%20Apartment%20Alam%20Sutera!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid",
    instagramHandle: "@kopi3sekawan",
    instagramUrl: "https://www.instagram.com/kopi3sekawan/",
  },

  // Dummy WhatsApp configuration with prefilled template
  contact: {
    phoneDisplay: "0812-3456-7890 (Sementara)",
    whatsappNumber: "6281234567890",
    getWhatsappOrderUrl: (customItem?: string) => {
      const baseText = customItem
        ? `Halo Kopi 3 Sekawan, saya ingin pesan antar ke Unit/Lobi [Tower Brooklyn: ... / Unit: ...] dengan pesanan: ${customItem}`
        : "Halo Kopi 3 Sekawan, saya ingin pesan antar ke Unit/Lobi [Tower Brooklyn: ... / Unit: ...] dengan pesanan: ";
      return `https://wa.me/6281234567890?text=${encodeURIComponent(baseText)}`;
    },
  },

  // Operational Hours (Senin - Minggu)
  operationalHours: {
    openHour: 7, // 07:00
    closeHour: 21, // 21:00
    timezone: "Asia/Jakarta",
    scheduleText: "07.00 – 21.00 WIB",
    days: [
      { day: "Senin", hours: "07.00 – 21.00 WIB" },
      { day: "Selasa", hours: "07.00 – 21.00 WIB" },
      { day: "Rabu", hours: "07.00 – 21.00 WIB" },
      { day: "Kamis", hours: "07.00 – 21.00 WIB" },
      { day: "Jumat", hours: "07.00 – 21.00 WIB" },
      { day: "Sabtu", hours: "07.00 – 21.00 WIB" },
      { day: "Minggu", hours: "07.00 – 21.00 WIB" },
    ],
  },

  // Wayfinding & Parking
  wayfinding: {
    image: "/images/wayfinding-lobby.jpg",
    steps: [
      {
        num: "01",
        title: "Tiba di Gerbang Apartemen Brooklyn",
        instruction:
          "Masuk dari Jalan Alam Sutera Boulevard Kav. 22 & 26. Posisi gedung langsung terlihat dengan dua menara kembar modern.",
        icon: "Compass",
      },
      {
        num: "02",
        title: "Akses Drop-Off Lobi Utara / Area Parkir",
        instruction:
          "Gunakan akses drop-off lobi utara atau arahkan kendaraan ke fasilitas parkir resmi tamu/pengunjung apartemen.",
        icon: "Car",
      },
      {
        num: "03",
        title: "Melangkah ke Retail Area Lantai Dasar",
        instruction:
          "Masuk melalui lobi ritel lantai dasar, belok kanan ke koridor area komersial (terbuka untuk publik tanpa kartu akses lift).",
        icon: "Footprints",
      },
      {
        num: "04",
        title: "Temukan Unit RA-03",
        instruction:
          "Kopi 3 Sekawan siap menyambut Anda di Unit RA-03 dengan aroma seduhan kopi segar dan suasana nyaman.",
        icon: "Sparkles",
      },
    ],
    parkingInfo: {
      motor: "Area parkir motor khusus pengunjung tersedia di basement apartemen dengan tarif per jam standar gedung.",
      mobil: "Parkir mobil pengunjung tersedia di area outdoor depan ritel serta gedung parkir apartemen yang aman dengan security 24 jam.",
    },
  },

  // Digital Menu with real photos
  menuCategories: [
    { id: "signature", label: "Signature Coffee" },
    { id: "manual-brew", label: "Manual Brew" },
    { id: "non-coffee", label: "Non-Coffee & Refreshers" },
    { id: "bites", label: "Light Bites / Toast" },
  ],

  menuItems: [
    {
      id: "sig-1",
      name: "Es Kopi Susu 3 Sekawan",
      category: "signature",
      categoryLabel: "Signature Coffee",
      price: "Rp 22.000",
      rawPrice: 22000,
      description:
        "Racikan espresso house blend mantap, susu segar gurih, dan gula aren murni dengan aftertaste caramel yang creamy.",
      image: "/images/menu-es-kopi-susu.jpg",
      badge: "Best Seller",
    },
    {
      id: "sig-2",
      name: "Butterscotch Cream Latte",
      category: "signature",
      categoryLabel: "Signature Coffee",
      price: "Rp 28.000",
      rawPrice: 28000,
      description:
        "Paduan espresso halus dengan sirup butterscotch wangi dan foam susu lembut bertabur butter crumble renyah.",
      image: "/images/menu-butterscotch.jpg",
      badge: "Barista's Pick",
    },
    {
      id: "brew-1",
      name: "V60 Single Origin Nusantara",
      category: "manual-brew",
      categoryLabel: "Manual Brew",
      price: "Rp 25.000",
      rawPrice: 25000,
      description:
        "Seduhan manual pour-over dengan biji kopi pilihan nusantara. Menghasilkan karakter rasa bersih, aroma floral, dan fruity.",
      image: "/images/menu-manual-brew.jpg",
      badge: "Barista's Pick",
    },
    {
      id: "brew-2",
      name: "Iced Cold Drip Americano",
      category: "manual-brew",
      categoryLabel: "Manual Brew",
      price: "Rp 20.000",
      rawPrice: 20000,
      description:
        "Ekstraksi espresso dingin yang segar dan pekat tanpa rasa pahit berlebih, pilihan tepat untuk booster fokus kerja.",
      image: "/images/menu-americano.jpg",
      badge: "Best Seller",
    },
    {
      id: "non-1",
      name: "Artisan Iced Matcha Latte",
      category: "non-coffee",
      categoryLabel: "Non-Coffee & Refreshers",
      price: "Rp 26.000",
      rawPrice: 26000,
      description:
        "Bubuk matcha premium Jepang dengan cita rasa umami kental berpadu susu segar creamy yang menenangkan.",
      image: "/images/menu-matcha.jpg",
      badge: "Best Seller",
    },
    {
      id: "non-2",
      name: "Deep Cocoa Chocolate",
      category: "non-coffee",
      categoryLabel: "Non-Coffee & Refreshers",
      price: "Rp 24.000",
      rawPrice: 24000,
      description:
        "Cokelat hitam pekat dengan tekstur kental manis seimbang, favorit bagi yang ingin menikmati minuman manis hangat atau dingin.",
      image: "/images/menu-chocolate.jpg",
    },
    {
      id: "bite-1",
      name: "Traditional Kaya Butter Toast",
      category: "bites",
      categoryLabel: "Light Bites / Toast",
      price: "Rp 18.000",
      rawPrice: 18000,
      description:
        "Roti panggang renyah dengan olesan selai srikaya wangi pandan dan potongan mentega dingin lumer di mulut.",
      image: "/images/menu-toast.jpg",
      badge: "Best Seller",
    },
    {
      id: "bite-2",
      name: "Flaky Golden Butter Croissant",
      category: "bites",
      categoryLabel: "Light Bites / Toast",
      price: "Rp 22.000",
      rawPrice: 22000,
      description:
        "Pastry croissant renyah berlapis dengan aroma butter Prancis yang harum, dihangatkan sebelum disajikan.",
      image: "/images/menu-croissant.jpg",
      badge: "Barista's Pick",
    },
  ] as MenuItem[],

  // WFC Ambience & Study Friendly
  wfcFacilities: [
    {
      title: "Wi-Fi Cepat & Stabil",
      description: "Koneksi internet tanpa lag untuk meeting Zoom, upload file tugas, dan streaming kerja.",
      icon: "Wifi",
    },
    {
      title: "Colokan Listrik di Tiap Sudut",
      description: "Tersedia stopkontak yang mudah dijangkau di dekat meja agar baterai laptop tetap aman.",
      icon: "Zap",
    },
    {
      title: "AC Dingin & Ruang Tenang",
      description: "Suhu ruangan sejuk dengan ambient musik santai yang tidak bising, cocok untuk deep work.",
      icon: "Wind",
    },
    {
      title: "Area Outdoor / Semi-Outdoor",
      description: "Pilihan tempat duduk terbuka bagi yang ingin ngopi santai sambil merokok tanpa mengganggu area kerja indoor.",
      icon: "Cigarette",
    },
  ],

  wfcGallery: [
    {
      title: "Meja Kerja Nyaman & Produktif",
      description: "Tata letak meja yang luas dengan pencahayaan hangat untuk kenyamanan mengetik berjam-jam.",
      image: "/images/wfc-laptop-table.jpg",
    },
    {
      title: "Sudut Rehat & Diskusi Santai",
      description: "Tempat duduk rileks untuk santai sejenak bersama teman atau berdiskusi proyek kampus.",
      image: "/images/wfc-seating-corner.jpg",
    },
    {
      title: "Area Teras Luar Ritel",
      description: "Udara segar koridor ritel Brooklyn dengan tanaman hijau yang menyegarkan pandangan.",
      image: "/images/wfc-outdoor-terrace.jpg",
    },
  ],

  // Identity Clarifications
  identityClarifications: [
    {
      title: "Bukan 'Kopi Tiga Sekawan' Foodierate",
      description:
        "Terdapat entitas dengan ejaan kata penuh 'Tiga' yang terdaftar di direktori kuliner pihak ketiga. Entitas tersebut beroperasi di lokasi terpisah di luar koridor Apartemen Brooklyn.",
    },
    {
      title: "Bukan Jaringan F&B Lain",
      description:
        "Berbeda dari merek kuliner lain yang menyandang nama 'Sekawan' (seperti Warmindo Tiga Sekawan Yogyakarta). Seluruh data dan resep adalah entitas independen Kopi 3 Sekawan Alam Sutera.",
    },
    {
      title: "Transparansi Informasi",
      description:
        "Website profil ini secara disiplin menyajikan fakta terverifikasi dan tidak mengadopsi data fiktif maupun nomor kontak dari bisnis pihak ketiga manapun.",
    },
  ],
};
