"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";

interface AboutImage {
  id?: string;
  image_url: string;
  section: string;
  title?: string;
  description?: string;
}

export default function AdminAboutPage() {
  const [images, setImages] = useState<AboutImage[]>([]);
  const [uploading, setUploading] = useState(false);

  const sections = [
    { id: 'hero1', name: 'Hero Image 1 (Pengalaman Lokal Autentik)' },
    { id: 'hero2', name: 'Hero Image 2 (Layanan Profesional)' },
    { id: 'feature1', name: 'Feature 1 (Keselamatan Utama)' },
    { id: 'feature2', name: 'Feature 2 (Eco-Conscious)' },
    { id: 'feature3', name: 'Feature 3 (Community Based)' },
    { id: 'feature4', name: 'Feature 4 (Tim yang Passionate)' }
  ];

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    const { data } = await supabase
      .from('about_images')
      .select('*');
    setImages(data || []);
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>, section: string) => {
    if (!e.target.files || !e.target.files[0]) return;
    const file = e.target.files[0];
    setUploading(true);

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `about_${section}_${Date.now()}.${fileExt}`;
      const filePath = `about/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(filePath);

      const { data: existing } = await supabase
        .from('about_images')
        .select('id')
        .eq('section', section)
        .single();

      if (existing) {
        await supabase
          .from('about_images')
          .update({ image_url: publicUrl })
          .eq('section', section);
      } else {
        await supabase
          .from('about_images')
          .insert([{
            image_url: publicUrl,
            section: section
          }]);
      }

      alert('Image uploaded!');
      loadImages();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      alert('Error: ' + errorMessage);
    } finally {
      setUploading(false);
    }
  };

  const deleteImage = async (id: string, imageUrl: string) => {
    if (confirm('Delete this image?')) {
      try {
        const urlParts = imageUrl.split('/');
        const filePath = `about/${urlParts[urlParts.length - 1]}`;
        await supabase.storage.from('images').remove([filePath]);
        await supabase.from('about_images').delete().eq('id', id);
        alert('Deleted!');
        loadImages();
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        alert('Error: ' + errorMessage);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold">About Page Images</h1>
            <Link href="/admin" className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
              Back to Admin
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section) => {
              const existingImage = images.find(img => img.section === section.id);
              return (
                <div key={section.id} className="border-2 border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold mb-3">{section.name}</h3>
                  {existingImage ? (
                    <div>
                      <div className="relative h-48 mb-3 rounded-lg overflow-hidden">
                        <Image
                          src={existingImage.image_url}
                          alt={section.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex gap-2">
                        <label className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer text-center text-sm font-semibold">
                          Replace
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleUpload(e, section.id)}
                            disabled={uploading}
                            className="hidden"
                          />
                        </label>
                        <button
                          onClick={() => existingImage.id && deleteImage(existingImage.id, existingImage.image_url)}
                          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 text-sm font-semibold"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-3 border-2 border-dashed border-gray-300">
                        <p className="text-gray-400">No image</p>
                      </div>
                      <label className="block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 cursor-pointer text-center font-semibold">
                        Upload
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleUpload(e, section.id)}
                          disabled={uploading}
                          className="hidden"
                        />
                      </label>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {uploading && <p className="text-blue-600 text-center mt-4">Uploading...</p>}
        </div>
      </div>
    </div>
  );
}
