"use client";

import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent("Halo, saya ingin bertanya tentang paket wisata");
    window.open(`https://wa.me/6282341331975?text=${message}`, "_blank");
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <button
        onClick={handleClick}
        className={`fixed bottom-6 right-4 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="animate-pulse" />
      </button>
    </>
  );
}
