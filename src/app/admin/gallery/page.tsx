"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";

interface GalleryImage {
  id: string;
  image_url: string;
  title?: string;
  description?: string;
  display_order: number;
}

export default function AdminGalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    const { data } = await supabase
      .from('gallery_images')
      .select('*')
      .order('display_order');
    setImages(data || []);
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    const file = e.target.files[0];
    setUploading(true);

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `gallery_${Date.now()}.${fileExt}`;
      const filePath = `gallery/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(filePath);

      const { error: dbError } = await supabase
        .from('gallery_images')
        .insert([{
          image_url: publicUrl,
          display_order: images.length
        }]);

      if (dbError) throw dbError;

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
        const filePath = `gallery/${urlParts[urlParts.length - 1]}`;
        await supabase.storage.from('images').remove([filePath]);
        await supabase.from('gallery_images').delete().eq('id', id);
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
            <h1 className="text-2xl md:text-3xl font-bold">Gallery Management</h1>
            <Link href="/admin" className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
              Back to Admin
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
          <div className="mb-6">
            <label className="block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 cursor-pointer text-center font-semibold w-full md:w-auto">
              + Upload New Image
              <input
                type="file"
                accept="image/*"
                onChange={handleUpload}
                disabled={uploading}
                className="hidden"
              />
            </label>
            {uploading && <p className="text-blue-600 mt-2">Uploading...</p>}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div key={image.id} className="border rounded-lg p-2">
                <div className="relative h-40 mb-2">
                  <Image
                    src={image.image_url}
                    alt="Gallery"
                    fill
                    className="object-cover rounded"
                    unoptimized={image.image_url.startsWith('http')}
                  />
                </div>
                <button
                  onClick={() => deleteImage(image.id, image.image_url)}
                  className="bg-red-500 text-white px-3 py-1 rounded text-sm w-full hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {images.length === 0 && (
            <p className="text-center text-gray-500 py-8">No images yet. Upload your first image!</p>
          )}
        </div>
      </div>
    </div>
  );
}
