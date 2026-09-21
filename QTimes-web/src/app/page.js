"use client";

import { useState, useEffect } from "react";
import { 
  Menu, X, Star, Camera, Users, Coffee, 
  MapPin, Clock, MessageCircle, ArrowRight, CheckCircle2
} from "lucide-react";

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-instagram ${className}`}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { badge: "Signature Drinks", title: "Sunset Americano", price: "Rp28.000", img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80", colSpan: "md:col-span-2 md:row-span-2" },
    { badge: "Main Course", title: "O.G Steak", price: "Rp50.000", img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80", colSpan: "md:col-span-1 md:row-span-1" },
    { badge: "Dessert", title: "Basque Cheesecake", price: "Rp44.000", img: "/images/slice-cheesecake-with-cherry-topping-sprig-mint-white-plate.jpg", colSpan: "md:col-span-1 md:row-span-1" },
    { badge: "Signature Drinks", title: "Matcha on Cloud", price: "Rp39.600", img: "/images/vegan-dairy-free-drink.jpg", colSpan: "md:col-span-1 md:row-span-1" },
    { badge: "Main Course", title: "Gyudon Fusion", price: "Rp54.000", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80", colSpan: "md:col-span-1 md:row-span-1" },
    { badge: "Dessert", title: "Poured Tiramisu", price: "Rp55.000", img: "/images/plate-tiramisu-with-cup-coffee-background.jpg", colSpan: "md:col-span-1 md:row-span-1" },
    { badge: "Signature Beans", title: "QTimes Signature Roast", price: "House Blend", img: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=1200&q=80", colSpan: "md:col-span-3 md:row-span-1" },
  ];

  return (
    <div className="min-h-screen bg-qtimes-bg text-qtimes-text selection:bg-qtimes-primary selection:text-white pb-20 overflow-hidden">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "py-4" : "py-6"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${isScrolled ? "bg-qtimes-surface/80 backdrop-blur-md border border-qtimes-border shadow-lg" : "bg-transparent"}`}>
            
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-qtimes-primary group-hover:scale-105 transition-transform duration-300">
                <img src="/images/qtimes.png" alt="QTimes Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-heading font-bold text-xl tracking-wide">QTimes</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium text-qtimes-muted hover:text-white transition-colors">Tentang</a>
              <a href="#cabang" className="text-sm font-medium text-qtimes-muted hover:text-white transition-colors">Cabang</a>
              <a href="#menu" className="text-sm font-medium text-qtimes-muted hover:text-white transition-colors">Menu</a>
              <a href="#location" className="text-sm font-medium text-qtimes-muted hover:text-white transition-colors">Lokasi</a>
              <a href="#delivery" className="bg-qtimes-primary text-white text-sm font-bold px-5 py-2 rounded-full hover:bg-qtimes-primary-hover transition-colors">Delivery</a>
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden absolute top-full left-0 w-full px-4 transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 translate-y-2 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
          <div className="bg-qtimes-surface border border-qtimes-border rounded-[24px] p-6 shadow-2xl flex flex-col gap-4">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Tentang Kami</a>
            <a href="#cabang" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Cabang</a>
            <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Menu Favorit</a>
            <a href="#location" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Lokasi</a>
            <a href="#delivery" onClick={() => setIsMobileMenuOpen(false)} className="bg-qtimes-primary text-center text-white font-bold px-5 py-3 rounded-xl mt-2">Delivery & Pesan</a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 md:px-6 pt-32 space-y-4 md:space-y-6">
        
        {/* 1. HERO SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          <div className="bento-card col-span-1 md:col-span-4 lg:col-span-4 row-span-2 relative min-h-[450px] md:min-h-[550px] flex items-end p-8 md:p-12 group overflow-hidden">
            <div className="absolute inset-0">
              <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1920&q=80" alt="Suasana QTimes Cafe" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
            </div>
            
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-heading font-bold leading-[1.1] mb-4">
                Cozy Spot for <span className="text-qtimes-primary italic font-normal">Coffee & Chill</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                Coffee shop lokal & multi-konsep favorit di Kota Serang.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#menu" className="btn-primary">Lihat Menu</a>
                <a href="#delivery" className="btn-outline">Pesan via GoFood/GrabFood</a>
              </div>
            </div>
          </div>

          <div className="bento-card col-span-1 md:col-span-2 lg:col-span-2 p-8 flex flex-col justify-center items-center text-center group bg-qtimes-surface">
            <h3 className="text-6xl font-heading text-qtimes-secondary mb-2 group-hover:scale-110 transition-transform duration-500">4.9</h3>
            <div className="flex gap-1 text-[#FFB800] mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <p className="text-qtimes-muted text-sm leading-relaxed">
              Dipercaya dan dicintai oleh ratusan pelanggan di Google Maps.
            </p>
          </div>

          <div className="bento-card bg-qtimes-primary border-none col-span-1 md:col-span-2 lg:col-span-2 p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 opacity-20">
              <Coffee size={160} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-heading font-bold mb-3 text-white">Buka Setiap Hari</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Mulai dari pukul 09.00 hingga 22.00 WIB. Siap menemani harimu dari pagi hingga malam.
              </p>
            </div>
            <a href="#location" className="relative z-10 inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all">
              Cek Lokasi <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* 2. TENTANG QTIMES (USE CASE) */}
        <section id="about" className="pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative min-h-[400px]">
              <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-[32px] overflow-hidden border-4 border-qtimes-bg z-10">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80" alt="WFC di QTimes" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-3/4 h-3/4 rounded-[32px] overflow-hidden border-4 border-qtimes-bg z-0">
                <img src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=800&q=80" alt="Keluarga makan di QTimes" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-heading font-bold mb-6">Lebih dari Sekadar <span className="text-qtimes-primary italic font-normal">Kedai Kopi</span></h2>
              <p className="text-qtimes-muted text-lg mb-8 leading-relaxed">
                QTimes didesain dengan memadukan gaya coffee shop komersial modern dan kenyamanan layaknya di rumah sendiri. Kami mengutamakan aksesibilitas agar semua kalangan di Kota Serang dapat memiliki ruang santai yang tepat.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-qtimes-surface flex items-center justify-center flex-shrink-0 text-qtimes-primary">
                    <Coffee size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Pecinta Kopi</h4>
                    <p className="text-sm text-qtimes-muted">Nikmati racikan house-blend terbaik untuk menemani harimu.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-qtimes-surface flex items-center justify-center flex-shrink-0 text-qtimes-primary">
                    <Star size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Pekerja & Mahasiswa (WFC)</h4>
                    <p className="text-sm text-qtimes-muted">Fasilitas memadai untuk Work From Cafe tanpa gangguan.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-qtimes-surface flex items-center justify-center flex-shrink-0 text-qtimes-primary">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Keluarga & Sahabat</h4>
                    <p className="text-sm text-qtimes-muted">Ruang yang hangat untuk makan malam kasual bersama orang terdekat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. DUA CABANG, DUA KARAKTER */}
        <section id="cabang" className="pt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Dua Cabang, <span className="text-qtimes-primary italic font-normal">Dua Karakter</span></h2>
            <p className="text-qtimes-muted max-w-2xl mx-auto">Kami hadir di dua titik strategis Kota Serang, masing-class membawa keunikan kawasannya sendiri.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Cabang 1 */}
            <div className="bento-card group overflow-hidden flex flex-col">
              <div className="h-64 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80" alt="QTimes Serang City" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="bg-qtimes-primary text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">Cabang Orisinal</div>
                  <h3 className="text-2xl font-heading font-bold text-white">Q'Times Cafe & Beyond</h3>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-qtimes-muted mb-6">
                    Berlokasi di kawasan mall modern dengan basis pelanggan yang stabil. Cabang pertama yang melahirkan filosofi "Cozy Spot for Coffee & Chill" kami.
                  </p>
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="text-qtimes-primary flex-shrink-0 mt-1" size={18} />
                    <p className="text-sm font-medium">Ruko Perumahan Serang City No. 16, Drangong, Taktakan, Kota Serang.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cabang 2 */}
            <div className="bento-card group overflow-hidden flex flex-col">
              <div className="h-64 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80" alt="QTimes Pasar Lama" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="bg-white text-qtimes-bg text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">Cabang Baru (2026)</div>
                  <h3 className="text-2xl font-heading font-bold text-white">QTimes Cafe @Pasar Lama</h3>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-qtimes-muted mb-6">
                    Mewarnai kawasan bisnis modern yang sedang direvitalisasi oleh Pemkot Serang. Titik kumpul yang langsung menjadi favorit di tengah denyut nadi ekonomi kota.
                  </p>
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="text-qtimes-primary flex-shrink-0 mt-1" size={18} />
                    <p className="text-sm font-medium">Jl. Maulana Hasanudin No. 30, Kotabaru, Kota Serang.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. MENU FAVORIT */}
        <section id="menu" className="pt-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-2">Signature <span className="text-qtimes-primary italic font-normal">Tastings</span></h2>
              <p className="text-qtimes-muted">Menu fusion Nusantara, Western, dan Japanese andalan kami.</p>
            </div>
            <a href="https://linktr.ee/qtimes" target="_blank" rel="noreferrer" className="btn-outline text-sm px-5 py-2">Lihat Menu Lengkap (Linktree)</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {menuItems.map((item, index) => (
              <div key={index} className={`bento-card relative group min-h-[250px] ${item.colSpan} overflow-hidden`}>
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="absolute top-6 left-6 bg-qtimes-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {item.badge}
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-white group-hover:text-qtimes-primary transition-colors">{item.title}</h3>
                    <p className="text-white/80 font-medium mt-1">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. PROMO Q LUNCH BREAK */}
        <section className="pt-16">
          <div className="bg-qtimes-primary rounded-[32px] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            {/* Background pattern */}
            <div className="absolute -top-24 -right-24 opacity-10 rotate-12">
              <Star size={300} />
            </div>
            
            <div className="relative z-10 max-w-xl">
              <div className="bg-white/20 text-white border border-white/30 px-4 py-1 rounded-full text-xs font-bold inline-block mb-4 backdrop-blur-sm">
                Spesial Makan Siang
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Q Lunch Break</h2>
              <p className="text-white/90 text-lg mb-0">
                Lapar di tengah kesibukan? Nikmati paket hemat *bundling* makanan dan minuman lengkap mulai dari <strong>Rp49.000-an</strong> saja.
              </p>
            </div>
            
            <div className="relative z-10 flex-shrink-0">
              <a href="#delivery" className="bg-white text-qtimes-primary hover:bg-qtimes-surface hover:text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 inline-block">
                Pesan Promo Sekarang
              </a>
            </div>
          </div>
        </section>

        {/* 6. SUASANA & FASILITAS */}
        <section className="pt-24 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="col-span-1 md:col-span-2 lg:col-span-4 mb-4">
              <h2 className="text-4xl font-heading font-bold mb-2">Fasilitas <span className="text-qtimes-primary italic font-normal">Terbaik</span></h2>
              <p className="text-qtimes-muted">Didesain untuk memastikan setiap detiknya berkesan.</p>
            </div>

            <div className="bento-card p-8 flex flex-col items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-qtimes-surface-hover flex items-center justify-center text-qtimes-primary">
                <Coffee size={28} />
              </div>
              <h3 className="font-heading font-bold text-xl">WFC Friendly</h3>
              <p className="text-sm text-qtimes-muted leading-relaxed">
                Colokan listrik yang melimpah di setiap meja dipadukan dengan koneksi WiFi cepat. Kerja produktif tanpa khawatir kehabisan baterai.
              </p>
            </div>

            <div className="bento-card p-8 flex flex-col items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-qtimes-surface-hover flex items-center justify-center text-qtimes-primary">
                <Users size={28} />
              </div>
              <h3 className="font-heading font-bold text-xl">Zonasi 2 Lantai</h3>
              <p className="text-sm text-qtimes-muted leading-relaxed">
                Bangunan dua lantai dengan pemisahan area Smoking dan Non-Smoking yang tegas, menjaga kenyamanan semua tamu.
              </p>
            </div>

            <div className="bento-card p-8 flex flex-col items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-qtimes-surface-hover flex items-center justify-center text-qtimes-primary">
                <Clock size={28} />
              </div>
              <h3 className="font-heading font-bold text-xl">Musala Bersih</h3>
              <p className="text-sm text-qtimes-muted leading-relaxed">
                Dilengkapi dengan musala (prayer room) yang bersih dan nyaman, agar Anda bisa berlama-lama tanpa melewatkan waktu ibadah.
              </p>
            </div>

            <div className="bento-card p-8 flex flex-col items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-qtimes-surface-hover flex items-center justify-center text-qtimes-primary">
                <Camera size={28} />
              </div>
              <h3 className="font-heading font-bold text-xl">Hiburan Santai</h3>
              <p className="text-sm text-qtimes-muted leading-relaxed">
                Tersedia aneka ragam board games seru dan koleksi buku bacaan santai untuk memecah kebosanan bersama teman.
              </p>
            </div>
          </div>
        </section>

        {/* 7. PESAN & ANTAR */}
        <section id="delivery" className="pt-16 pb-16">
          <div className="bento-card border-qtimes-border p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-qtimes-surface to-[#110f0e]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Lagi Mager Keluar? <span className="text-qtimes-primary italic font-normal">Biar Kami yang Antar</span></h2>
                <p className="text-qtimes-muted mb-8 text-lg">
                  Nikmati seluruh menu favorit QTimes dari kenyamanan rumah atau kantormu. Tersedia di platform pesan-antar kesayanganmu.
                </p>
                <div className="flex flex-wrap gap-4">
                  {/* Gojek Style Button */}
                  <a href="https://linktr.ee/qtimes" target="_blank" rel="noreferrer" className="bg-[#00AA13] hover:bg-[#008f10] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-3 transition-transform hover:-translate-y-1 shadow-lg shadow-[#00AA13]/20">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-motorcycle"><path d="M10 8h.01"/><path d="M10.5 4h3l2 4 4 2"/><path d="M14 11h6"/><path d="M18.8 8c-.6-.4-1.2-.6-1.8-.6h-3"/><path d="M22 17c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4Z"/><path d="M4 17c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4Z"/><path d="M4 17h10"/><path d="M7 11h.01"/><path d="M8 8h.01"/></svg>
                    Pesan via GoFood
                  </a>
                  {/* Grab Style Button */}
                  <a href="https://linktr.ee/qtimes" target="_blank" rel="noreferrer" className="bg-[#00B14F] hover:bg-[#009442] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-3 transition-transform hover:-translate-y-1 shadow-lg shadow-[#00B14F]/20">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                    Pesan via GrabFood
                  </a>
                </div>
              </div>
              
              <div className="bg-qtimes-bg rounded-3xl p-8 border border-qtimes-border relative">
                <div className="absolute -top-4 -right-4 bg-[#25D366] text-white p-3 rounded-full shadow-lg">
                  <MessageCircle size={24} />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-2">Punya Pertanyaan Spesifik?</h3>
                <p className="text-qtimes-muted mb-6">Tanya soal menu, ketersediaan meja, atau reservasi langsung ke tim kami.</p>
                <a href="https://wa.me/6281188807247" target="_blank" rel="noreferrer" className="w-full bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform hover:-translate-y-1">
                  <MessageCircle size={20} />
                  Ngobrol Yuk
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 8. LOKASI & JAM OPERASIONAL */}
        <section id="location" className="pt-8">
          <div className="mb-8">
            <h2 className="text-4xl font-heading font-bold mb-2">Panduan <span className="text-qtimes-primary italic font-normal">Lokasi</span></h2>
            <p className="text-qtimes-muted">Temukan cabang kami yang terdekat dari posisimu saat ini.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Map 1 */}
            <div className="bento-card overflow-hidden flex flex-col">
              <div className="p-6 border-b border-qtimes-border bg-qtimes-surface flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg mb-1">QTimes Serang City</h3>
                  <p className="text-xs text-qtimes-muted">Drangong, Taktakan</p>
                </div>
                <div className="bg-qtimes-bg border border-qtimes-border px-3 py-1 rounded-full text-xs font-semibold">Cabang Orisinal</div>
              </div>
              <div className="h-[300px] relative w-full bg-qtimes-surface">
                {/* Fallback image if iframe doesn't load or is slow */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.067305929665!2d106.12607907573663!3d-6.121650360029584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418afe990f1469%3A0xe104fccefc8bc861!2sQTimes%20Serang%20City!5e0!3m2!1sen!2sid!4v1714545229671!5m2!1sen!2sid" 
                  className="absolute inset-0 w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>

            {/* Map 2 */}
            <div className="bento-card overflow-hidden flex flex-col">
              <div className="p-6 border-b border-qtimes-border bg-qtimes-surface flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg mb-1">QTimes Pasar Lama</h3>
                  <p className="text-xs text-qtimes-muted">Kotabaru, Pasar Lama</p>
                </div>
                <div className="bg-qtimes-primary/10 text-qtimes-primary border border-qtimes-primary/20 px-3 py-1 rounded-full text-xs font-semibold">Cabang Baru</div>
              </div>
              <div className="h-[300px] relative w-full bg-qtimes-surface">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15868.610338296803!2d106.1278682!3d-6.1101489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418b168260be93%3A0xb1013b3605abaee6!2sQTimes%20Cafe%20Serang%20(Pasar%20Lama%20%2F%20Royal%20Baroe)!5e0!3m2!1sid!2sid!4v1787828831263!5m2!1sid!2sid" 
                  className="absolute inset-0 w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
        </section>

        {/* 9. IKUTI KAMI */}
        <section className="pt-24 pb-12">
          <div className="bento-card p-12 bg-qtimes-surface flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] rounded-2xl flex items-center justify-center text-white mb-6">
              <InstagramIcon size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Intip Keseruannya</h2>
            <p className="text-qtimes-muted max-w-xl mx-auto mb-8 text-lg">
              Tetap terhubung dan dapatkan info promo terbaru, update menu, serta vibes harian QTimes langsung di feed Instagram kami.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/qtimes.co" target="_blank" rel="noreferrer" className="btn-primary flex items-center gap-2">
                Follow @qtimes.co
              </a>
              <a href="https://linktr.ee/qtimes" target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-2">
                Kunjungi Linktree
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* 10. FOOTER */}
      <footer className="max-w-7xl mx-auto px-4 md:px-6 pt-10">
        <div className="bg-[#151311] rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border border-qtimes-border">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-qtimes-primary">
              <img src="/images/qtimes.png" alt="QTimes Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-2xl">QTimes</h4>
              <p className="text-sm text-qtimes-muted">Cozy Spot for Coffee & Chill</p>
            </div>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="text-sm text-qtimes-muted md:text-right">
              <p>Senin - Minggu</p>
              <p>09:00 - 22:00 WIB</p>
            </div>
            <div className="flex gap-4">
              <a href="https://instagram.com/qtimes.co" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-qtimes-surface flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:to-[#bc1888] transition-all duration-300">
                <InstagramIcon size={18} />
              </a>
              <a href="https://wa.me/6281188807247" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-qtimes-surface flex items-center justify-center text-white hover:bg-[#25D366] transition-all duration-300">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-qtimes-muted">
          &copy; {new Date().getFullYear()} QTimes Cafe Serang. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
