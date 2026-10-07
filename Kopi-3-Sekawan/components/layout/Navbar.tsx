"use client";

import React, { useState } from "react";
import { Coffee, MapPin, Camera, Menu, X, Compass, ExternalLink } from "lucide-react";
import Button from "@/components/ui/Button";
import { brandData } from "@/data/brandData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-oat/90 border-b border-espresso/10 transition-spring">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand & Location Indicator */}
          <a
            href="/"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-crema rounded-lg"
          >
            <div className="w-11 h-11 rounded-xl bg-espresso text-oat flex items-center justify-center shadow-md transition-spring group-hover:bg-crema group-hover:rotate-6">
              <Coffee className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-espresso group-hover:text-crema transition-spring">
                {brandData.name}
              </span>
              <span className="text-xs font-medium text-espresso/70 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-crema shrink-0" aria-hidden="true" />
                {brandData.location.building} · Unit RA-03
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-espresso/80">
            <a
              href="/#akses"
              className="hover:text-crema transition-spring focus-visible:outline-none focus-visible:text-crema"
            >
              Rute & Akses
            </a>
            <a
              href="/#menu"
              className="hover:text-crema transition-spring focus-visible:outline-none focus-visible:text-crema"
            >
              Digital Menu
            </a>
            <a
              href="/#suasana"
              className="hover:text-crema transition-spring focus-visible:outline-none focus-visible:text-crema"
            >
              Suasana WFC
            </a>
            <a
              href="/#operasional"
              className="hover:text-crema transition-spring focus-visible:outline-none focus-visible:text-crema"
            >
              Jam Buka
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href={brandData.location.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
              icon={Camera}
            >
              Instagram
            </Button>
            <Button
              href={brandData.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
              icon={Compass}
              iconRight={ExternalLink}
            >
              Buka Maps
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-espresso hover:bg-espresso/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-crema"
            aria-expanded={isOpen}
            aria-label="Buka menu navigasi"
          >
            {isOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-cream border-b border-espresso/10 px-4 pt-3 pb-6 space-y-3 animate-fade-up">
          <nav className="flex flex-col space-y-2.5 text-base font-medium text-espresso">
            <a
              href="/#akses"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-espresso/5 transition-spring"
            >
              Rute & Akses RA-03
            </a>
            <a
              href="/#menu"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-espresso/5 transition-spring"
            >
              Digital Menu
            </a>
            <a
              href="/#suasana"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-espresso/5 transition-spring"
            >
              Suasana WFC
            </a>
            <a
              href="/#operasional"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-espresso/5 transition-spring"
            >
              Jam Operasional
            </a>
          </nav>
          <div className="pt-3 border-t border-espresso/10 flex flex-col gap-2.5">
            <Button
              href={brandData.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              icon={Compass}
              iconRight={ExternalLink}
              className="w-full"
            >
              Petunjuk Arah Google Maps
            </Button>
            <Button
              href={brandData.location.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="md"
              icon={Camera}
              className="w-full"
            >
              Instagram @kopi3sekawan
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
