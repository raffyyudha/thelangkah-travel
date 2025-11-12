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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3">
            <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 overflow-hidden flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="Adventure Sumbawa Island"
                width={150}
                height={150}
                className="object-cover scale-[1.8]"
                style={{ 
                  filter: 'brightness(0.7) saturate(1.2)',
                  objectPosition: 'center 50%',
                  transform: 'translateY(18px) scale(1.8)'
                }}
              />
            </div>
            <span className="text-[#73939E] font-bold text-base md:text-xl uppercase tracking-wide leading-tight">
              Adventure<br className="md:hidden" /> Sumbawa Island
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-[#00a6b5] transition-colors font-medium">
              {t.home}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#00a6b5] transition-colors font-medium">
              {t.about}
            </Link>
            <NavDropdown
              title={t.packages}
              items={[
                { label: "Tour 1: Whale Shark Start Sumbawa", href: "/whale-shark-start-sumbawa" },
                { label: "Tour 2: Whale Shark 1 Day Labuhan Jambu", href: "/whale-shark-1day-labuhan-jambu" },
                { label: "Tour 3: Whale Shark 2D1N", href: "/whale-shark-2d1n" },
                { label: "Tour 4: Combo Moyo & Whale Shark", href: "/combo-moyo-whale-shark" },
                { label: "Tour 5: Whale Shark 2D1N Poto Tano", href: "/whale-shark-2d1n-poto-tano" },
                { label: "Tour 6: Whale Shark 2D1N Sekongkang", href: "/whale-shark-2d1n-sekongkang" },
                { label: "Tour 7: Whale Shark Start Lombok", href: "/whale-shark-start-labuhan-jambu" },
                { label: "Tour 8: Sumbawa 4D3N", href: "/trip-4d3n-sumbawa" },
                { label: "Tour 9: Whale Shark Experience", href: "/whale-shark-experience" },
                { label: "Tour 10: Whale Shark Speed Boat", href: "/whale-shark-speedboat" },
                { label: "Tour 11: 3D2N Moyo Kenawa Lombok", href: "/whale-shark-moyo-kenawa-lombok" },
              ]}
            />
            <Link href="/gallery" className="text-gray-700 hover:text-[#00a6b5] transition-colors font-medium">
              {t.gallery}
            </Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-[#00a6b5] transition-colors font-medium">
              {t.testimonials}
            </Link>
          </div>

          {/* Language Switcher - Always Visible */}
          <div className="flex items-center gap-2 md:gap-4">
            <LanguageSwitcher variant="header" />

            {/* Contact Button - Desktop Only */}
            <a
              href="https://wa.me/6282341331975?text=Halo%20Adventure%20Sumbawa%20Island,%20saya%20ingin%20booking%20trip"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-medium transition-colors"
            >
              {t.bookNow}
            </a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <Link href="/" className="block py-2 text-gray-700 hover:text-[#00a6b5]">
              {t.home}
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-[#00a6b5]">
              {t.about}
            </Link>
            <MobileNavDropdown
              title={t.packages}
              items={[
                { label: "Tour 1: Whale Shark Start Sumbawa", href: "/whale-shark-start-sumbawa" },
                { label: "Tour 2: Whale Shark 1 Day Labuhan Jambu", href: "/whale-shark-1day-labuhan-jambu" },
                { label: "Tour 3: Whale Shark 2D1N", href: "/whale-shark-2d1n" },
                { label: "Tour 4: Combo Moyo & Whale Shark", href: "/combo-moyo-whale-shark" },
                { label: "Tour 5: Whale Shark 2D1N Poto Tano", href: "/whale-shark-2d1n-poto-tano" },
                { label: "Tour 6: Whale Shark 2D1N Sekongkang", href: "/whale-shark-2d1n-sekongkang" },
                { label: "Tour 7: Whale Shark Start Lombok", href: "/whale-shark-start-labuhan-jambu" },
                { label: "Tour 8: Sumbawa 4D3N", href: "/trip-4d3n-sumbawa" },
                { label: "Tour 9: Whale Shark Experience", href: "/whale-shark-experience" },
                { label: "Tour 10: Whale Shark Speed Boat", href: "/whale-shark-speedboat" },
                { label: "Tour 11: 3D2N Moyo Kenawa Lombok", href: "/whale-shark-moyo-kenawa-lombok" },
              ]}
            />
            <Link href="/gallery" className="block py-2 text-gray-700 hover:text-[#00a6b5]">
              {t.gallery}
            </Link>
            <Link href="/testimonials" className="block py-2 text-gray-700 hover:text-[#00a6b5]">
              {t.testimonials}
            </Link>
            {/* Contact Button Mobile */}
            <a
              href="https://wa.me/6282341331975?text=Halo%20Adventure%20Sumbawa%20Island,%20saya%20ingin%20booking%20trip"
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
      <button className="flex items-center gap-1 text-gray-700 hover:text-[#00a6b5] transition-colors font-medium py-2">
        {title}
        <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="bg-white shadow-lg rounded-lg py-2 min-w-[250px] border border-gray-100">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#00a6b5] transition-colors"
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
        className="flex items-center justify-between w-full text-gray-700 hover:text-[#00a6b5] font-medium"
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
              className="block py-1 text-gray-600 hover:text-[#00a6b5] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
