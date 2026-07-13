"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Footer } from "@/components/Footer";
import { supabase } from "@/lib/supabase";

const categories = ["galleryAll", "galleryWhaleShark", "galleryMoyoIsland", "galleryKenawa", "galleryIslandHopping", "galleryGallery"];

interface GalleryImage {
  id: string | number;
  image_url: string;
  title?: string | null;
  description?: string | null;
  display_order?: number;
}

export default function GalleryPage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("galleryAll");
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      const { data, error } = await supabase
        .from('gallery_images')
        .select('*')
        .order('display_order');
      if (!error) setImages((data as GalleryImage[]) || []);
    };
    loadImages();
  }, []);

  const filteredItems = images;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-start">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/kenawa/sunset.jpg"
            alt="Gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 max-w-3xl">
            {t.galleryTitle}
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            {t.popularDesc}
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${selectedCategory === category
                  ? "bg-[#00a6b5] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {t[category as keyof typeof t]}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="relative h-48 md:h-64 rounded-lg overflow-hidden cursor-pointer group"
              >
                <Image
                  src={item.image_url}
                  alt={item.title || "Gallery"}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  quality={75}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  unoptimized={item.image_url.startsWith('http')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg mb-1">{item.title || "Gallery"}</h3>
                    <p className="text-gray-200 text-sm">{item.description || ""}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[70vh]">
              <Image
                src={selectedImage.image_url}
                alt={selectedImage.title || "Gallery"}
                fill
                className="object-contain"
                quality={85}
                sizes="100vw"
                unoptimized={selectedImage.image_url.startsWith('http')}
              />
            </div>
            <div className="text-center mt-6">
              <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title || "Gallery"}</h3>
              <p className="text-gray-300">{selectedImage.description || ""}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            {t.galleryCTATitle}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.galleryCTADesc}
          </p>
          <a
            href="https://wa.me/6282341331975?text=Halo%20Go%20Whale%20Shark%20Sumbawa,%20saya%20ingin%20booking%20trip"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
          >
            {t.galleryCTAButton}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
