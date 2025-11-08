"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import Image from "next/image";

interface HomepageImage {
  id: string;
  image_url: string;
  section: string;
  title: string | null;
  description: string | null;
}

export default function AdminHomepagePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [images, setImages] = useState<HomepageImage[]>([]);
  const [uploading, setUploading] = useState(false);
  const [manualUrl, setManualUrl] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("admin_auth");
    if (auth === "authenticated") {
      setIsAuthenticated(true);
      fetchImages();
    }
  }, []);

  const fetchImages = async () => {
    const { data, error } = await supabase
      .from("homepage_images")
      .select("*")
      .order("section");

    if (error) {
      console.error("Error fetching images:", error);
    } else {
      setImages(data || []);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "sumbawa2025") {
      localStorage.setItem("admin_auth", "authenticated");
      setIsAuthenticated(true);
      fetchImages();
    } else {
      alert("Password salah!");
    }
  };

  const handleImageUpload = async (file: File, section: string) => {
    try {
      setUploading(true);

      // Upload to Supabase Storage
      const fileExt = file.name.split(".").pop();
      const fileName = `${section}-${Date.now()}.${fileExt}`;
      const filePath = `homepage/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("images")
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) {
        console.error("Upload error details:", uploadError);
        throw uploadError;
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from("images")
        .getPublicUrl(filePath);

      const imageUrl = urlData.publicUrl;

      // Check if section already exists
      const existingImage = images.find((img) => img.section === section);

      if (existingImage) {
        // Update existing
        const { error: updateError } = await supabase
          .from("homepage_images")
          .update({ image_url: imageUrl })
          .eq("section", section);

        if (updateError) throw updateError;
      } else {
        // Insert new
        const { error: insertError } = await supabase
          .from("homepage_images")
          .insert([{ image_url: imageUrl, section }]);

        if (insertError) throw insertError;
      }

      alert("Image uploaded successfully!");
      fetchImages();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      alert("Error: " + errorMessage);
    } finally {
      setUploading(false);
    }
  };

  const handleManualUrlSave = async () => {
    if (!manualUrl.trim()) {
      alert("Please enter an image URL");
      return;
    }

    try {
      const existingImage = images.find((img) => img.section === "hero");

      if (existingImage) {
        // Update existing
        const { error } = await supabase
          .from("homepage_images")
          .update({ image_url: manualUrl })
          .eq("section", "hero");

        if (error) throw error;
      } else {
        // Insert new
        const { error } = await supabase
          .from("homepage_images")
          .insert([{ image_url: manualUrl, section: "hero" }]);

        if (error) throw error;
      }

      alert("Image URL saved successfully!");
      setManualUrl("");
      fetchImages();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      alert("Error: " + errorMessage);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    try {
      const { error } = await supabase
        .from("homepage_images")
        .delete()
        .eq("id", id);

      if (error) throw error;

      alert("Image deleted successfully!");
      fetchImages();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      alert("Error: " + errorMessage);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6">Admin Login - Homepage</h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-lg mb-4"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  const heroImage = images.find((img) => img.section === "hero");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Homepage Images Admin</h1>
          <Link
            href="/admin"
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            Back to Admin
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">🖼️ Hero Image (Main Banner)</h2>
          
          {heroImage && (
            <div className="mb-4">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-2">
                <Image
                  src={heroImage.image_url}
                  alt="Hero Banner"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleDelete(heroImage.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          )}

          <div className="mb-6">
            <label className="block mb-2 font-semibold">
              Option 1: {heroImage ? "Replace Image" : "Upload Image"}
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleImageUpload(file, "hero");
              }}
              disabled={uploading}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {uploading && <p className="mt-2 text-blue-600">Uploading...</p>}
          </div>

          <div className="border-t pt-4">
            <label className="block mb-2 font-semibold">
              Option 2: Use Existing Image URL (Workaround)
            </label>
            <p className="text-sm text-gray-600 mb-2">
              Jika upload error, gunakan URL image yang sudah ada di Supabase Storage atau path lokal
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                value={manualUrl}
                onChange={(e) => setManualUrl(e.target.value)}
                placeholder="/images/hero.jpg atau https://..."
                className="flex-1 px-4 py-2 border rounded-lg"
              />
              <button
                onClick={handleManualUrlSave}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
              >
                Save URL
              </button>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
          <h3 className="font-bold mb-2">📝 Instructions:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Upload hero image untuk main banner homepage</li>
            <li>Recommended size: 1920x600px atau lebih besar</li>
            <li>Format: JPG, PNG, WebP</li>
            <li>Image akan otomatis muncul di homepage</li>
          </ul>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="font-bold mb-2 text-red-800">⚠️ Jika Upload Error (403/Signature Failed):</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>
              <strong>Buka Supabase Dashboard → Storage</strong>
              <br />
              <span className="text-gray-600">Pastikan bucket &quot;images&quot; sudah dibuat dan public</span>
            </li>
            <li>
              <strong>Check Storage Policies:</strong>
              <br />
              <span className="text-gray-600">Di Storage → Policies, pastikan ada policy untuk upload</span>
            </li>
            <li>
              <strong>Workaround Sementara:</strong>
              <br />
              <span className="text-gray-600">Gunakan &quot;Option 2&quot; di atas, input: <code className="bg-gray-200 px-1">/images/hero.jpg</code></span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
