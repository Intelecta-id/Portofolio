export type MenuItem = {
  name: string;
  price: number;
  isFavorite?: boolean;
};

export type MenuKelas = {
  id: string;
  label: string;
  priceRange: string;
  items: MenuItem[];
};

export const menuData: MenuKelas[] = [
  {
    id: "klasik",
    label: "Kelas Klasik",
    priceRange: "Rp4.000 – Rp5.000",
    items: [
      { name: "Cokelat", price: 4000, isFavorite: true },
      { name: "Pisang", price: 4000 },
      { name: "Susu", price: 4000 },
      { name: "Keju", price: 5000 },
      { name: "Kacang", price: 5000 },
      { name: "Strawberry", price: 5000 },
      { name: "Blueberry", price: 5000 },
    ],
  },
  {
    id: "campur",
    label: "Kelas Campur",
    priceRange: "Rp6.000 – Rp10.000",
    items: [
      { name: "Coklat Pisang", price: 6000, isFavorite: true },
      { name: "Coklat Kacang", price: 7000 },
      { name: "Coklat Keju", price: 8000 },
      { name: "Coklat Keju Pisang", price: 9000, isFavorite: true },
      { name: "Keju Susu Kacang", price: 8000 },
      { name: "Strawberry Keju", price: 8000 },
      { name: "Pisang Keju Susu", price: 9000 },
      { name: "Coklat Susu Kacang", price: 9000 },
      { name: "Full House", price: 10000 },
    ],
  },
  {
    id: "juara",
    label: "Kelas Juara",
    priceRange: "Rp11.000 – Rp16.000",
    items: [
      { name: "Nutella", price: 14000, isFavorite: true },
      { name: "Ovomaltine", price: 14000 },
      { name: "Silverqueen", price: 13000, isFavorite: true },
      { name: "Greentea", price: 11000 },
      { name: "Lotus Biscoff", price: 16000, isFavorite: true },
      { name: "Milo", price: 12000 },
      { name: "Skippy", price: 13000 },
      { name: "Oreo", price: 12000 },
      { name: "Regal", price: 11000 },
    ],
  },
];
