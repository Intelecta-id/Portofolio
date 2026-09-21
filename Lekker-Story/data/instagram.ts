export type InstaPost = {
  id: string;
  imgUrl: string;
  caption: string;
  likes?: number;
};

export const instaPosts: InstaPost[] = [
  {
    id: "1",
    imgUrl: "https://images.unsplash.com/photo-1568051243858-533a607809a5?w=600&q=80",
    caption: "Lipatan sempurna, isian melimpah. Kelas Juara hadir setiap hari.",
    likes: 342,
  },
  {
    id: "2",
    imgUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
    caption: "Coklat Pisang favorit sepanjang masa. Mulai Rp6.000.",
    likes: 289,
  },
  {
    id: "3",
    imgUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80",
    caption: "Nongkrong santai, colokan tersedia, AC nyala. Cabang Meruya.",
    likes: 416,
  },
  {
    id: "4",
    imgUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
    caption: "Lotus Biscoff - bintang kelas Juara yang tidak perlu diperkenalkan.",
    likes: 527,
  },
  {
    id: "5",
    imgUrl: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&q=80",
    caption: "Weekend di Tanjung Duren. Live music setiap malam Sabtu.",
    likes: 381,
  },
  {
    id: "6",
    imgUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    caption: "Menu klasik, harga ramah kantong. Dari Rp4.000 sudah bisa lekker.",
    likes: 294,
  },
  {
    id: "7",
    imgUrl: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=1000&q=80",
    caption: "Teman ngobrol yang sempurna untuk sore harimu. Lekker pisang coklat keju selalu jadi andalan.",
    likes: 612,
  },
];
