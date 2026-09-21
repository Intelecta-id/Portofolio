export type Cabang = {
  nama: string;
  alamat?: string;
  mapsUrl?: string;
};

export type WilayahCabang = {
  id: string;
  label: string;
  cabang: Cabang[];
};

export const cabangData: WilayahCabang[] = [
  {
    id: "jabodetabek",
    label: "Jabodetabek",
    cabang: [
      {
        nama: "Tanjung Duren",
        alamat: "Jakarta Barat",
        mapsUrl: "https://maps.app.goo.gl/gBW24VKLmhZryiXX6",
      },
      {
        nama: "Meruya",
        alamat: "Jakarta Barat",
        mapsUrl: "https://maps.app.goo.gl/qJZxL4p3i879wy3u7",
      },
      {
        nama: "Ciledug",
        alamat: "Tangerang",
        mapsUrl: "https://maps.app.goo.gl/mBmAb9713saqbZWk8",
      },
      {
        nama: "Bintaro",
        alamat: "Tangerang Selatan",
        mapsUrl: "https://maps.app.goo.gl/mHSRaoRFboApoXtRA",
      },
      {
        nama: "Bekasi",
        alamat: "Bekasi",
        mapsUrl: "https://maps.app.goo.gl/AV1bxtLmHuMHtykg9",
      },
      { nama: "Cileungsi", alamat: "Bogor" },
      { nama: "Sawangan", alamat: "Depok" },
      { nama: "Jelambar", alamat: "Jakarta Barat" },
      { nama: "Greenlake City", alamat: "Tangerang" },
      { nama: "Tangerang", alamat: "Tangerang" },
    ],
  },
  {
    id: "jawatengah",
    label: "Jawa Tengah",
    cabang: [{ nama: "Semarang" }],
  },
  {
    id: "jawatimur",
    label: "Jawa Timur",
    cabang: [{ nama: "Surabaya" }, { nama: "Malang" }],
  },
  {
    id: "papua",
    label: "Papua",
    cabang: [{ nama: "Jayapura" }],
  },
];
