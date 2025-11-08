"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";

interface TourPrice {
  id?: string;
  tour_name: string;
  participants: string;
  open_trip_price: string;
  full_private_price: string;
}

interface TourImage {
  id?: string;
  tour_name: string;
  image_url: string;
  image_type: string;
}

export default function AdminDashboard() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedTour, setSelectedTour] = useState("whale-shark-start-sumbawa");
  
  const [prices, setPrices] = useState<TourPrice[]>([]);
  const [images, setImages] = useState<TourImage[]>([]);
  const [editingPrice, setEditingPrice] = useState<TourPrice | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  const ADMIN_PASSWORD = "sumbawa2025";

  const tours = [
    { id: "whale-shark-start-sumbawa", name: "Tour 1: Whale Shark Start Sumbawa" },
    { id: "whale-shark-2d1n", name: "Tour 2: Whale Shark 2D1N" },
    { id: "combo-moyo-whale-shark", name: "Tour 3: Combo Moyo & Whale Shark" },
    { id: "whale-shark-start-labuhan-jambu", name: "Tour 4: Whale Shark Start Lombok" },
    { id: "trip-4d3n-sumbawa", name: "Tour 5: Sumbawa 4D3N" },
    { id: "whale-shark-experience", name: "Tour 6: Whale Shark Experience" }
  ];

  const currentTourPrices = prices.filter(p => p.tour_name === selectedTour);
  const currentTourImages = images.filter(img => img.tour_name === selectedTour);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      loadPrices();
      loadImages();
    } else {
      alert("Password salah!");
    }
  };

  const loadPrices = async () => {
    const { data } = await supabase.from('tour_prices').select('*').order('tour_name');
    setPrices(data || []);
  };

  const loadImages = async () => {
    const { data } = await supabase.from('tour_images').select('*').order('tour_name');
    setImages(data || []);
  };

  const savePrice = async (price: TourPrice) => {
    if (price.id) {
      const { error } = await supabase.from('tour_prices').update({
        participants: price.participants,
        open_trip_price: price.open_trip_price,
        full_private_price: price.full_private_price
      }).eq('id', price.id);
      if (error) alert('Error: ' + error.message);
      else { alert('Updated!'); loadPrices(); setEditingPrice(null); }
    } else {
      const { error } = await supabase.from('tour_prices').insert([{...price, tour_name: selectedTour}]);
      if (error) alert('Error: ' + error.message);
      else { alert('Added!'); loadPrices(); setEditingPrice(null); }
    }
  };

  const deletePrice = async (id: string) => {
    if (confirm('Delete this price?')) {
      const { error } = await supabase.from('tour_prices').delete().eq('id', id);
      if (error) alert('Error: ' + error.message);
      else { alert('Deleted!'); loadPrices(); }
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, imageType: string) => {
    if (!e.target.files || !e.target.files[0]) return;
    const file = e.target.files[0];
    setUploadingImage(true);

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${selectedTour}_${imageType}_${Date.now()}.${fileExt}`;
      const filePath = `tour-images/${fileName}`;

      const { error: uploadError } = await supabase.storage.from('images').upload(filePath, file);
      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage.from('images').getPublicUrl(filePath);

      const { data: existing } = await supabase.from('tour_images')
        .select('id').eq('tour_name', selectedTour).eq('image_type', imageType).single();

      if (existing) {
        await supabase.from('tour_images').update({ image_url: publicUrl })
          .eq('tour_name', selectedTour).eq('image_type', imageType);
      } else {
        await supabase.from('tour_images').insert([{
          tour_name: selectedTour,
          image_url: publicUrl,
          image_type: imageType
        }]);
      }

      alert('Image uploaded!');
      loadImages();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      alert('Error: ' + errorMessage);
    } finally {
      setUploadingImage(false);
    }
  };

  const deleteImage = async (id: string, imageUrl: string) => {
    if (confirm('Delete this image?')) {
      try {
        const urlParts = imageUrl.split('/');
        const filePath = `tour-images/${urlParts[urlParts.length - 1]}`;
        await supabase.storage.from('images').remove([filePath]);
        await supabase.from('tour_images').delete().eq('id', id);
        alert('Deleted!');
        loadImages();
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        alert('Error: ' + errorMessage);
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg mb-4"
            />
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl md:text-3xl font-bold">Admin Dashboard</h1>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 text-sm md:text-base"
            >
              Logout
            </button>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Link href="/admin/homepage" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 text-sm">
              🏠 Manage Homepage
            </Link>
            <Link href="/admin/gallery" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm">
              📸 Manage Gallery
            </Link>
            <Link href="/admin/about" className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 text-sm">
              ℹ️ Manage About Page
            </Link>
          </div>
        </div>

        {/* Tour Selector */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
          <label className="block text-sm font-semibold mb-2">Select Tour:</label>
          <select
            value={selectedTour}
            onChange={(e) => setSelectedTour(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg text-sm md:text-base"
          >
            {tours.map(tour => (
              <option key={tour.id} value={tour.id}>{tour.name}</option>
            ))}
          </select>
        </div>

        {/* Prices Section */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold">Prices for {tours.find(t => t.id === selectedTour)?.name}</h2>
            <button
              onClick={() => setEditingPrice({ tour_name: selectedTour, participants: "", open_trip_price: "", full_private_price: "" })}
              className="bg-green-600 text-white px-3 md:px-4 py-2 rounded-lg hover:bg-green-700 text-sm md:text-base"
            >
              + Add Price
            </button>
          </div>

          {editingPrice && (
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-4">{editingPrice.id ? "Edit Price" : "Add New Price"}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Participants (e.g., 2-10)"
                  value={editingPrice.participants}
                  onChange={(e) => setEditingPrice({...editingPrice, participants: e.target.value})}
                  className="px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Open Trip Price"
                  value={editingPrice.open_trip_price}
                  onChange={(e) => setEditingPrice({...editingPrice, open_trip_price: e.target.value})}
                  className="px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Full Private Price"
                  value={editingPrice.full_private_price}
                  onChange={(e) => setEditingPrice({...editingPrice, full_private_price: e.target.value})}
                  className="px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="flex gap-2 mt-4">
                <button onClick={() => savePrice(editingPrice)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Save</button>
                <button onClick={() => setEditingPrice(null)} className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Cancel</button>
              </div>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm">Participants</th>
                  <th className="px-4 py-2 text-left text-sm">Open Trip</th>
                  <th className="px-4 py-2 text-left text-sm">Full Private</th>
                  <th className="px-4 py-2 text-left text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentTourPrices.map((price) => (
                  <tr key={price.id} className="border-b">
                    <td className="px-4 py-2 text-sm">{price.participants}</td>
                    <td className="px-4 py-2 text-sm">{price.open_trip_price}</td>
                    <td className="px-4 py-2 text-sm">{price.full_private_price}</td>
                    <td className="px-4 py-2">
                      <button onClick={() => setEditingPrice(price)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 text-xs">Edit</button>
                      <button onClick={() => price.id && deletePrice(price.id)} className="bg-red-500 text-white px-2 py-1 rounded text-xs">Delete</button>
                    </td>
                  </tr>
                ))}
                {currentTourPrices.length === 0 && (
                  <tr><td colSpan={4} className="px-4 py-8 text-center text-gray-500">No prices yet. Click "+ Add Price" to add one.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Images Section */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold mb-6">Images for {tours.find(t => t.id === selectedTour)?.name}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {['hero', 'gallery1', 'gallery2', 'gallery3'].map((type) => {
              const existingImage = currentTourImages.find(img => img.image_type === type);
              const label = type === 'hero' ? '🖼️ Hero Image (Main Banner)' : 
                           type === 'gallery1' ? '📸 Gallery Image 1' :
                           type === 'gallery2' ? '📸 Gallery Image 2' :
                           '📸 Gallery Image 3';
              return (
                <div key={type} className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-400 transition-colors">
                  <h3 className="font-bold mb-3 text-lg">{label}</h3>
                  {existingImage ? (
                    <div>
                      <div className="relative h-64 mb-3 rounded-lg overflow-hidden border-2 border-gray-300">
                        <Image src={existingImage.image_url} alt={type} fill className="object-cover" />
                      </div>
                      <div className="flex gap-2">
                        <label className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer text-center text-sm font-semibold">
                          Replace Image
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageUpload(e, type)}
                            disabled={uploadingImage}
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
                      <div className="h-64 bg-gray-100 rounded-lg flex flex-col items-center justify-center mb-3 border-2 border-dashed border-gray-300">
                        <svg className="w-16 h-16 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-gray-400 font-semibold">No image uploaded</p>
                        <p className="text-gray-400 text-sm">Click below to upload</p>
                      </div>
                      <label className="block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 cursor-pointer text-center font-semibold">
                        Upload Image
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(e, type)}
                          disabled={uploadingImage}
                          className="hidden"
                        />
                      </label>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {uploadingImage && <p className="text-blue-600 text-center">Uploading...</p>}
        </div>
      </div>
    </div>
  );
}
