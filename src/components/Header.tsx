"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="bg-[#0a3d52] shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between min-h-[5rem] py-2">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start gap-0.5 group">
            <div className="relative w-32 h-10 md:w-36 md:h-11 flex-shrink-0">
              <Image
                src="/images/logo.webp"
                alt="Go Whale Shark Sumbawa"
                width={144}
                height={44}
                className="object-contain w-full h-full object-left"
                priority
              />
            </div>
            <span className="text-white font-black text-sm md:text-lg uppercase tracking-wide leading-none group-hover:text-gray-200 transition-colors pl-0.5">
              Go Whale Shark Sumbawa
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-gray-200 hover:text-white transition-colors font-medium">
              {t.home}
            </Link>
            <NavDropdown
              title={t.packages}
              items={[
                { label: t.tourB, href: "/whale-shark-1day-labuhan-jambu" },
                { label: t.tourD, href: "/whale-shark-2d1n" },
                { label: t.tourI, href: "/combo-moyo-whale-shark" },
                { label: t.tourK, href: "/trip-4d3n-sumbawa" },
                { label: t.tourC, href: "/whale-shark-speedboat" },
                { label: "Layanan Transportasi ( Antar & Jemput )", href: "/transport-service" },
              ]}
            />
            <Link href="/gallery" className="text-gray-200 hover:text-white transition-colors font-medium">
              {t.gallery}
            </Link>
            <Link href="/artikel" className="text-gray-200 hover:text-white transition-colors font-medium">
              {t.articles}
            </Link>
          </div>

          {/* Language Switcher - Always Visible */}
          <div className="flex items-center gap-2 md:gap-4">
            <LanguageSwitcher variant="header" />

            {/* Contact Button - Desktop Only */}
            <a
              href="https://wa.me/6282341331975?text=Halo%20Go%20Whale%20Shark%20Sumbawa,%20saya%20ingin%20booking%20trip"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-medium transition-colors"
            >
              {t.bookNow}
            </a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-600">
            <Link href="/" className="block py-2 text-gray-200 hover:text-white">
              {t.home}
            </Link>
            <MobileNavDropdown
              title={t.packages}
              items={[
                { label: t.tourB, href: "/whale-shark-1day-labuhan-jambu" },
                { label: t.tourD, href: "/whale-shark-2d1n" },
                { label: t.tourI, href: "/combo-moyo-whale-shark" },
                { label: t.tourK, href: "/trip-4d3n-sumbawa" },
                { label: t.tourC, href: "/whale-shark-speedboat" },
                { label: "Layanan Transportasi ( Antar & Jemput )", href: "/transport-service" },
              ]}
            />
            <Link href="/gallery" className="block py-2 text-gray-200 hover:text-white">
              {t.gallery}
            </Link>
            <Link href="/artikel" className="block py-2 text-gray-200 hover:text-white">
              {t.articles}
            </Link>
            {/* Contact Button Mobile */}
            <a
              href="https://wa.me/6282341331975?text=Halo%20Go%20Whale%20Shark%20Sumbawa,%20saya%20ingin%20booking%20trip"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-medium text-center transition-colors"
            >
              {t.bookNow}
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavDropdown({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 text-gray-200 hover:text-white transition-colors font-medium py-2">
        {title}
        <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="bg-[#0a3d52] shadow-lg rounded-lg py-2 min-w-[250px] border border-gray-600">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-2 text-gray-200 hover:bg-[#0d4d63] hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileNavDropdown({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-gray-200 hover:text-white font-medium"
      >
        {title}
        <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="pl-4 mt-2 space-y-2">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block py-1 text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
