"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

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
  image_type: string; // 'hero', 'gallery1', 'gallery2', 'gallery3'
}

export default function AdminDashboard() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<"prices" | "images">("prices");
  
  // Prices State
  const [prices, setPrices] = useState<TourPrice[]>([]);
  const [editingPrice, setEditingPrice] = useState<TourPrice | null>(null);
  
  // Images State
  const [images, setImages] = useState<TourImage[]>([]);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectedTour, setSelectedTour] = useState("");
  const [selectedImageType, setSelectedImageType] = useState("");

  const ADMIN_PASSWORD = "sumbawa2025"; // Change this to your secure password

  const tours = [
    "whale-shark-start-sumbawa",
    "whale-shark-2d1n",
    "combo-moyo-whale-shark",
    "whale-shark-start-labuhan-jambu",
    "trip-4d3n-sumbawa",
    "whale-shark-experience"
  ];

  // Authentication
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

  // Load Prices from Supabase
  const loadPrices = async () => {
    const { data, error } = await supabase
      .from('tour_prices')
      .select('*')
      .order('tour_name', { ascending: true });
    
    if (error) {
      console.error('Error loading prices:', error);
    } else {
      setPrices(data || []);
    }
  };

  // Load Images from Supabase
  const loadImages = async () => {
    const { data, error } = await supabase
      .from('tour_images')
      .select('*')
      .order('tour_name', { ascending: true });
    
    if (error) {
      console.error('Error loading images:', error);
    } else {
      setImages(data || []);
    }
  };

  // Save/Update Price
  const savePrice = async (price: TourPrice) => {
    if (price.id) {
      // Update
      const { error } = await supabase
        .from('tour_prices')
        .update({
          participants: price.participants,
          open_trip_price: price.open_trip_price,
          full_private_price: price.full_private_price
        })
        .eq('id', price.id);
      
      if (error) {
        alert('Error updating price: ' + error.message);
      } else {
        alert('Price updated successfully!');
        loadPrices();
        setEditingPrice(null);
      }
    } else {
      // Insert
      const { error } = await supabase
        .from('tour_prices')
        .insert([price]);
      
      if (error) {
        alert('Error adding price: ' + error.message);
      } else {
        alert('Price added successfully!');
        loadPrices();
        setEditingPrice(null);
      }
    }
  };

  // Delete Price
  const deletePrice = async (id: string) => {
    if (confirm('Are you sure you want to delete this price?')) {
      const { error } = await supabase
        .from('tour_prices')
        .delete()
        .eq('id', id);
      
      if (error) {
        alert('Error deleting price: ' + error.message);
      } else {
        alert('Price deleted successfully!');
        loadPrices();
      }
    }
  };

  // Upload Image
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    if (!selectedTour || !selectedImageType) {
      alert('Please select tour and image type first!');
      return;
    }

    const file = e.target.files[0];
    setUploadingImage(true);

    try {
      // Upload to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${selectedTour}_${selectedImageType}_${Date.now()}.${fileExt}`;
      const filePath = `tour-images/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(filePath);

      // Save to database
      const { error: dbError } = await supabase
        .from('tour_images')
        .insert([{
          tour_name: selectedTour,
          image_url: publicUrl,
          image_type: selectedImageType
        }]);

      if (dbError) throw dbError;

      alert('Image uploaded successfully!');
      loadImages();
      setSelectedTour("");
      setSelectedImageType("");
    } catch (error: any) {
      alert('Error uploading image: ' + error.message);
    } finally {
      setUploadingImage(false);
    }
  };

  // Delete Image
  const deleteImage = async (id: string, imageUrl: string) => {
    if (confirm('Are you sure you want to delete this image?')) {
      try {
        // Extract file path from URL
        const urlParts = imageUrl.split('/');
        const filePath = `tour-images/${urlParts[urlParts.length - 1]}`;

        // Delete from storage
        await supabase.storage
          .from('images')
          .remove([filePath]);

        // Delete from database
        const { error } = await supabase
          .from('tour_images')
          .delete()
          .eq('id', id);

        if (error) throw error;

        alert('Image deleted successfully!');
        loadImages();
      } catch (error: any) {
        alert('Error deleting image: ' + error.message);
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

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-6">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("prices")}
              className={`px-6 py-3 font-semibold ${
                activeTab === "prices"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600"
              }`}
            >
              Manage Prices
            </button>
            <button
              onClick={() => setActiveTab("images")}
              className={`px-6 py-3 font-semibold ${
                activeTab === "images"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600"
              }`}
            >
              Manage Images
            </button>
          </div>
        </div>

        {/* Prices Tab */}
        {activeTab === "prices" && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Tour Prices</h2>
              <button
                onClick={() => setEditingPrice({
                  tour_name: "",
                  participants: "",
                  open_trip_price: "",
                  full_private_price: ""
                })}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Add New Price
              </button>
            </div>

            {/* Price Form */}
            {editingPrice && (
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-bold mb-4">
                  {editingPrice.id ? "Edit Price" : "Add New Price"}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <select
                    value={editingPrice.tour_name}
                    onChange={(e) => setEditingPrice({...editingPrice, tour_name: e.target.value})}
                    className="px-4 py-2 border rounded-lg"
                  >
                    <option value="">Select Tour</option>
                    {tours.map(tour => (
                      <option key={tour} value={tour}>{tour}</option>
                    ))}
                  </select>
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
                  <button
                    onClick={() => savePrice(editingPrice)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingPrice(null)}
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Prices List */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Tour Name</th>
                    <th className="px-4 py-2 text-left">Participants</th>
                    <th className="px-4 py-2 text-left">Open Trip</th>
                    <th className="px-4 py-2 text-left">Full Private</th>
                    <th className="px-4 py-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {prices.map((price) => (
                    <tr key={price.id} className="border-b">
                      <td className="px-4 py-2">{price.tour_name}</td>
                      <td className="px-4 py-2">{price.participants}</td>
                      <td className="px-4 py-2">{price.open_trip_price}</td>
                      <td className="px-4 py-2">{price.full_private_price}</td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => setEditingPrice(price)}
                          className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => price.id && deletePrice(price.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Images Tab */}
        {activeTab === "images" && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Tour Images</h2>

            {/* Upload Form */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-4">Upload New Image</h3>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <select
                  value={selectedTour}
                  onChange={(e) => setSelectedTour(e.target.value)}
                  className="px-4 py-2 border rounded-lg"
                >
                  <option value="">Select Tour</option>
                  {tours.map(tour => (
                    <option key={tour} value={tour}>{tour}</option>
                  ))}
                </select>
                <select
                  value={selectedImageType}
                  onChange={(e) => setSelectedImageType(e.target.value)}
                  className="px-4 py-2 border rounded-lg"
                >
                  <option value="">Select Image Type</option>
                  <option value="hero">Hero Image</option>
                  <option value="gallery1">Gallery 1</option>
                  <option value="gallery2">Gallery 2</option>
                  <option value="gallery3">Gallery 3</option>
                </select>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploadingImage}
                  className="px-4 py-2 border rounded-lg"
                />
              </div>
              {uploadingImage && <p className="text-blue-600">Uploading...</p>}
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-3 gap-4">
              {images.map((image) => (
                <div key={image.id} className="border rounded-lg p-4">
                  <div className="relative h-48 mb-2">
                    <Image
                      src={image.image_url}
                      alt={image.tour_name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <p className="font-semibold text-sm">{image.tour_name}</p>
                  <p className="text-gray-600 text-xs mb-2">{image.image_type}</p>
                  <button
                    onClick={() => image.id && deleteImage(image.id, image.image_url)}
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 w-full"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
