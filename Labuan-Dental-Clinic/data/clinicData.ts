export interface ClinicalServiceItem {
  id: string;
  name: string;
  category: "pencegahan" | "kuratif" | "pedodonti" | "konsultasi" | "lanjutan";
  categoryLabel: string;
  status: "Terkonfirmasi Aktif" | "Perlu Konfirmasi";
  statusType: "active" | "confirmation";
  summary: string;
  description: string;
  features: string[];
  recommendedInterval?: string;
  image: string;
}

export interface DoctorProfile {
  name: string;
  title: string;
  role: string;
  licenseStatus: string;
  regulator: string;
  clinicalBackground: string;
  philosophy: string;
  specialties: string[];
  image: string;
}

export const clinicData = {
  name: "Labuan Dental Clinic",
  shortName: "LDC",
  tagline: "Pelayanan Kesehatan Gigi Modern, Nyaman & Ramah Keluarga di Pesisir Barat Banten",
  subtitle:
    "Fasilitas Tempat Praktik Mandiri Dokter Gigi resmi Kemenkes RI di Labuan, Pandeglang. Mengedepankan higienitas medis, kenyamanan tanpa rasa takut, dan transparansi jadwal.",

  legal: {
    classification: "Tempat Praktik Mandiri Dokter Gigi",
    regulator: "Kementerian Kesehatan Republik Indonesia (Kemenkes RI)",
    verifiedStatus: "Terdaftar Resmi Basis Data Faskes Kemenkes RI",
    districtHealthOffice: "Dinas Kesehatan Kabupaten Pandeglang",
  },

  doctor: {
    name: "drg. Ansali Iklil Raudoh",
    title: "Dokter Gigi Praktik / Penanggung Jawab Medis",
    role: "Dentist in Charge",
    licenseStatus: "Surat Izin Praktik (SIP) Terdaftar Aktif",
    regulator: "Kemenkes RI & Persatuan Dokter Gigi Indonesia (PDGI)",
    clinicalBackground:
      "Berpengalaman memberikan tindakan promotif, preventif, dan kuratif gigi modern. Pernah memiliki riwayat pengabdian praktik di Klinik Fafasa23 Cilegon dan kini mendedikasikan layanan profesional berstandar tinggi untuk masyarakat Labuan dan sekitarnya.",
    philosophy:
      "Perawatan gigi tidak boleh menakutkan. Kami mengutamakan pendekatan personal yang hangat dan empatik, terutama bagi anak-anak dan pasien pemula agar tercipta kebiasaan merawat gigi yang sehat sepanjang usia.",
    specialties: [
      "Pembersihan Karang Gigi (Scaling Ultrasonik)",
      "Tambal Gigi Estetik (Restorasi Komposit Kompatibel Warna Alami)",
      "Pedodonti (Penanganan Gigi Anak Ramah & Edukatif)",
      "Pemeriksaan Rongga Mulut & Konsultasi Rencana Tindakan",
    ],
    image: "/images/doctor-portrait.jpg",
  } as DoctorProfile,

  location: {
    address:
      "Jl. Nasional III No. 26, Labuan, Kec. Labuan, Kabupaten Pandeglang, Banten 42264",
    landmark: "Ciateul, Labuan, Pandeglang (Tepat di samping Gudang Alfa)",
    altAddress: "Terindeks juga sebagai Jl. Jenderal Ahmad Yani No. 26",
    corridor: "Jalur Poros Utama Transportasi Antar-Kecamatan",
    city: "Pandeglang, Banten",
    googleMapsUrl: "https://maps.app.goo.gl/pm5W3EuV9yEHUErL7",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.717145781358!2d105.829141!3d-6.376884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e423528b1731671%3A0xe5a3eb17c603a116!2sLabuan%20Dental%20Clinic!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid",
    instagramHandle: "@labuandentalclinic",
    instagramUrl: "https://www.instagram.com/labuandentalclinic",
    facebookUrl:
      "https://www.facebook.com/p/Labuan-Dental-Clinic-61573683392778/?locale=id_ID",
    serviceAreas: [
      "Kecamatan Labuan (Pusat)",
      "Kecamatan Carita (Pesisir Utara)",
      "Kecamatan Pagelaran (Wilayah Selatan)",
      "Kecamatan Menes (Pusat Edukasi)",
      "Kecamatan Panimbang (Pintu Masuk Tanjung Lesung)",
    ],
  },

  contact: {
    whatsappNumber: "6283123555554",
    phoneDisplay: "0831-2355-5554",
    getWhatsappUrl: (message?: string) => {
      const base =
        message ||
        "Halo Labuan Dental Clinic (LDC), saya ingin konsultasi dan reservasi jadwal pemeriksaan gigi.";
      return `https://wa.me/6283123555554?text=${encodeURIComponent(base)}`;
    },
  },

  reputation: {
    rating: "5.0",
    maxRating: "5",
    totalReviews: 152,
    badgeText: "Rating Sempurna 5.0 dari 152 Pasien",
    keyHighlights: [
      {
        stat: "5.0 / 5.0",
        label: "Skor Ulasan Publik",
        desc: "Berdasarkan 152 ulasan pasien terverifikasi di direktori publik.",
      },
      {
        stat: "100%",
        label: "Sterilisasi Medis",
        desc: "Alat dibersihkan melalui autoklaf tekanan tinggi sesuai SOP Kemenkes.",
      },
      {
        stat: "5 Wilayah",
        label: "Rujukan Terpercaya",
        desc: "Menjangkau Labuan, Carita, Menes, Pagelaran hingga Panimbang.",
      },
      {
        stat: "Ramah Anak",
        label: "Bebas Cemas (No Dental Anxiety)",
        desc: "Metode komunikasi bersahabat agar anak merasa tenang saat diperiksa.",
      },
    ],
  },

  operationalSchedule: {
    note: "Jadwal Praktik Fleksibel & Wajib Reservasi: Jam praktik dokter dapat mengalami penyesuaian operasional harian. Seluruh pasien dianjurkan mengonfirmasi ketersediaan slot melalui WhatsApp sebelum kedatangan.",
    scheduleEstimate: [
      { day: "Senin", hours: "15.00 – 20.30 WIB", status: "Sore / Malam" },
      { day: "Selasa", hours: "11.00 – 17.00 WIB", status: "Siang / Sore" },
      { day: "Rabu", hours: "10.00 – 20.00 WIB", status: "Pagi – Malam" },
      { day: "Kamis", hours: "09.00 – 12.00 WIB", status: "Pagi Saja" },
      { day: "Jumat", hours: "Tutup / Khusus Janji Terkonfirmasi", status: "Libur Operasional" },
      { day: "Sabtu & Minggu", hours: "Sesuai Konfirmasi WhatsApp", status: "Jadwal Khusus" },
    ],
  },

  services: [
    {
      id: "scaling",
      name: "Scaling & Pembersihan Karang Gigi",
      category: "pencegahan",
      categoryLabel: "Pencegahan & Higienitas",
      status: "Terkonfirmasi Aktif",
      statusType: "active",
      summary:
        "Pembersihan plak mengeras, karang gigi subgingiva, dan noda makanan menggunakan alat ultrasonik modern tanpa merusak enamel.",
      description:
        "Karang gigi yang dibiarkan dapat memicu radang gusi (gingivitis), bau mulut kronis, hingga penurunan tulang rahang. Disarankan rutin tiap 6 bulan sekali.",
      features: [
        "Teknologi ultrasonic tip getar mikro yang minim ngilu",
        "Pembersihan stain noda teh, kopi, dan rokok",
        "Polishing halus untuk permukaan gigi bersih berkilau",
        "Edukasi teknik menyikat gigi yang tepat",
      ],
      recommendedInterval: "Setiap 6 Bulan Sekali",
      image: "/images/service-scaling.jpg",
    },
    {
      id: "tambal-komposit",
      name: "Tambal Gigi Estetik (Restorasi Komposit)",
      category: "kuratif",
      categoryLabel: "Perawatan Kuratif Dasar",
      status: "Terkonfirmasi Aktif",
      statusType: "active",
      summary:
        "Restorasi gigi berlubang menggunakan bahan resin komposit sewarna gigi asli yang kuat, tahan lama, dan rapi secara estetika.",
      description:
        "Menghentikan kerusakan karies gigi sebelum mencapai saraf, mengembalikan bentuk anatomis gigi, dan mengembalikan fungsi kunyah secara sempurna.",
      features: [
        "Bahan komposit nano-hybrid sewarna enamel asli",
        "Penyinaran light-cure cepat dan langsung mengeras",
        "Penyesuaian oklusi agar tidak mengganjal saat mengunyah",
        "Pencegahan karies sekunder yang menyeluruh",
      ],
      recommendedInterval: "Segera saat gigi mulai berlubang / ngilu",
      image: "/images/service-tambal.jpg",
    },
    {
      id: "pedodonti-anak",
      name: "Perawatan Gigi Anak (Pedodonti Bersahabat)",
      category: "pedodonti",
      categoryLabel: "Perawatan Gigi Anak",
      status: "Terkonfirmasi Aktif",
      statusType: "active",
      summary:
        "Pendekatan psikologis ramah anak untuk adaptasi ke dokter gigi sejak dini, penambalan gigi susu, dan aplikasi pencegahan karies.",
      description:
        "Kunjungan pertama anak dirancang menyenangkan dan tanpa trauma (*positive dental experience*), sehingga anak tidak takut dokter gigi seumur hidup.",
      features: [
        "Metode 'Tell-Show-Do' komunikatif yang menenangkan",
        "Penanganan gigi berlubang pada gigi susu",
        "Pencegahan kerusakan gigi botol susu (early childhood caries)",
        "Edukasi pencegahan gusi berdarah untuk orang tua",
      ],
      recommendedInterval: "Mulai usia 1 tahun atau gigi pertama tumbuh",
      image: "/images/service-pedodonti.jpg",
    },
    {
      id: "konsultasi-oral",
      name: "Konsultasi & Pemeriksaan Rongga Mulut",
      category: "konsultasi",
      categoryLabel: "Pemeriksaan Menyeluruh",
      status: "Terkonfirmasi Aktif",
      statusType: "active",
      summary:
        "Pemeriksaan teliti seluruh susunan gigi geligi, gusi, lidah, dan jaringan lunak mulut untuk deteksi dini masalah kesehatan gigi.",
      description:
        "Konsultasikan keluhan gigi berlubang, gigi goyang, nyeri rahang, atau rencana perbaikan estetika gigi Anda bersama dokter gigi berlisensi.",
      features: [
        "Pemeriksaan visual mendalam seluruh kuadran mulut",
        "Deteksi dini karies tersembunyi antar sela gigi",
        "Penyusunan rencana tindakan medis yang terstruktur & transparan",
        "Rujukan tindakan bila diperlukan pemeriksaan rontgen lanjut",
      ],
      recommendedInterval: "Pemeriksaan Rutin Setiap 6 Bulan",
      image: "/images/service-konsultasi.jpg",
    },
    {
      id: "ortodonti-behel",
      name: "Pemasangan Kawat Gigi (Ortodonti / Behel)",
      category: "lanjutan",
      categoryLabel: "Estetika & Tindakan Lanjutan",
      status: "Perlu Konfirmasi",
      statusType: "confirmation",
      summary:
        "Koreksi susunan gigi berjejal, renggang, atau kelainan gigitan untuk meningkatkan fungsi mastikasi dan estetika senyum.",
      description:
        "Ketersediaan pemasangan behel, pemilihan jenis bracket (metal/keramik), dan jadwal kontrol wajib dikonfirmasikan terlebih dahulu ke WhatsApp klinik.",
      features: [
        "Analisis sefalometri & model cetak studi",
        "Opsi bracket estetika sesuai kebutuhan klinis",
        "Jadwal kontrol berkala per 3-4 minggu",
        "Perlu konfirmasi jadwal dokter khusus",
      ],
      recommendedInterval: "Berdasarkan evaluasi dokter gigi",
      image: "/images/service-behel.jpg",
    },
    {
      id: "bleaching-gigi",
      name: "Pemutihan Gigi (Bleaching Estetik)",
      category: "lanjutan",
      categoryLabel: "Estetika & Tindakan Lanjutan",
      status: "Perlu Konfirmasi",
      statusType: "confirmation",
      summary:
        "Prosedur pencerahan warna gigi akibat penumpukan zat warna makanan/minuman dengan bahan pemutih gigi standar klinis yang aman.",
      description:
        "Dilakukan di bawah pengawasan dokter gigi untuk memastikan enamel tetap aman dan mengurangi risiko sensitivitas berlebih.",
      features: [
        "Aplikasi gel pencerah kelas medis dengan isolator gusi",
        "Peningkatan shade warna gigi tampak lebih cerah alami",
        "Konsultasi pra-tindakan untuk memastikan kesehatan gusi",
        "Konfirmasi ketersediaan bahan via WhatsApp",
      ],
      recommendedInterval: "Sesuai indikasi estetika individu",
      image: "/images/service-bleaching.jpg",
    },
    {
      id: "perawatan-saluran-akar",
      name: "Perawatan Saluran Akar (Endodontik)",
      category: "lanjutan",
      categoryLabel: "Estetika & Tindakan Lanjutan",
      status: "Perlu Konfirmasi",
      statusType: "confirmation",
      summary:
        "Penyelamatan gigi dengan infeksi saraf parah agar tidak perlu dicabut, melalui pembersihan dan pengisian saluran akar.",
      description:
        "Ditujukan bagi gigi berlubang sangat dalam yang sudah mengenai pulpa dan sering berdenyut di malam hari.",
      features: [
        "Pembersihan jaringan pulpa yang terinfeksi bakteri",
        "Sterilisasi medikamen saluran akar multi-kunjungan",
        "Obturasi penutupan hermetis saluran akar",
        "Perlu evaluasi tingkat kerumitan saluran akar",
      ],
      recommendedInterval: "Berdasarkan diagnosa nyeri gigi akut",
      image: "/images/service-saluran-akar.jpg",
    },
    {
      id: "odontektomi-bedah-bungsu",
      name: "Odontektomi / Bedah Gigi Bungsu",
      category: "lanjutan",
      categoryLabel: "Estetika & Tindakan Lanjutan",
      status: "Perlu Konfirmasi",
      statusType: "confirmation",
      summary:
        "Pencabutan gigi geraham bungsu yang tumbuh miring (impaksi) dan menekan gigi di depannya atau menimbulkan radang gusi berulang.",
      description:
        "Membutuhkan foto rontgen panoramik sebelumnya untuk melihat posisi akar dan relasi terhadap saraf alveolaris inferior.",
      features: [
        "Anestesi lokal steril tanpa rasa sakit selama tindakan",
        "Insisi minimal invasif untuk pemulihan cepat",
        "Instruksi pasca operasi lengkap dan obat pereda nyeri",
        "Wajib membawa foto rontgen & konfirmasi jadwal",
      ],
      recommendedInterval: "Bila gigi bungsu miring / impaksi",
      image: "/images/service-bedah.jpg",
    },
  ] as ClinicalServiceItem[],

  faqs: [
    {
      q: "Apakah Labuan Dental Clinic (LDC) terdaftar resmi di Kementerian Kesehatan?",
      a: "Ya. Labuan Dental Clinic tercatat secara resmi dalam basis data Kementerian Kesehatan Republik Indonesia (Kemenkes RI) sebagai fasilitas Tempat Praktik Mandiri Dokter Gigi di bawah naungan Dinas Kesehatan Kabupaten Pandeglang dengan dokter penanggung jawab drg. Ansali Iklil Raudoh.",
    },
    {
      q: "Bagaimana cara menuju lokasi klinik dari Carita, Menes, atau Pandeglang?",
      a: "Klinik berlokasi di Jl. Nasional III No. 26, Labuan. Patokan navigasi lapangan paling mudah dan presisi adalah Ciateul, tepat di samping Gudang Alfa. Lokasi berada di pinggir jalan raya utama poros transportasi, mudah diakses kendaraan motor maupun mobil dengan area parkir langsung.",
    },
    {
      q: "Apakah saya bisa langsung datang (walk-in) atau wajib reservasi WhatsApp?",
      a: "Mengingat jam operasional dokter gigi dapat mengalami penyesuaian dinamis per harinya, seluruh pasien SANGAT DIANJURKAN melakukan reservasi atau konfirmasi kedatangan terlebih dahulu melalui nomor WhatsApp 0831-2355-5554 agar mendapatkan estimasi nomor antrean dan slot tindakan yang pasti.",
    },
    {
      q: "Apakah klinik menerima penjaminan BPJS Kesehatan atau asuransi swasta?",
      a: "Saat ini Labuan Dental Clinic beroperasi sebagai Tempat Praktik Mandiri Dokter Gigi swasta. Pembayaran umum dilayani secara tunai, transfer, dan QRIS. Kerja sama penjaminan BPJS/asuransi tertentu dapat ditanyakan langsung kepada petugas via WhatsApp.",
    },
    {
      q: "Kapan anak harus pertama kali dibawa ke dokter gigi?",
      a: "Disarankan sejak usia 1 tahun atau saat gigi susu pertama mulai tumbuh. Di LDC, kami menerapkan pedodonti ramah anak (*friendly dental adaptation*) agar anak mengenal dokter gigi dalam suasana santai tanpa jarum atau rasa takut.",
    },
    {
      q: "Berapa lama waktu yang ideal untuk pembersihan karang gigi (scaling)?",
      a: "Standar medis Kemenkes dan WHO menyarankan pembersihan karang gigi secara rutin setiap 6 bulan sekali. Anda dapat memanfaatkan kalkulator pengingat scaling di website ini untuk menghitung jadwal kontrol berikutnya.",
    },
  ],

  patientReviews: [
    {
      name: "Ibu Rahmawati",
      location: "Labuan, Pandeglang",
      comment:
        "Alhamdulillah pelayanannya sangat ramah. Dokter Ansali telaten sekali saat menambal gigi anak saya yang awalnya nangis ketakutan jadi mau dan tenang. Tempatnya bersih dan adem!",
      treatment: "Tambal Komposit & Perawatan Gigi Anak",
      rating: 5,
    },
    {
      name: "Bpk. Hendra Gunawan",
      location: "Carita",
      comment:
        "Scaling gigi di sini tidak ngilu sama sekali. Dokternya menjelaskan detail kondisi karang gigi dan edukasi sikat gigi yang benar. Senang ada klinik gigi modern di dekat Labuan tanpa harus ke Serang.",
      treatment: "Scaling Gigi Ultrasonik",
      rating: 5,
    },
    {
      name: "Siti Nurhaliza",
      location: "Menes",
      comment:
        "Konsultasi lewat WhatsApp direspons cepat dan ramah. Pas datang ke klinik langsung ditangani sesuai jam janji. Tempatnya tepat di samping Gudang Alfa jadi gampang dicari.",
      treatment: "Konsultasi & Pemeriksaan Gigi",
      rating: 5,
    },
  ],
};
