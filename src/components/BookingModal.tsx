"use client";

import { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tourName?: string;
}

export default function BookingModal({ isOpen, onClose, tourName = "Tour Package" }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    countryCode: "+62",
    participants: "",
    tourPackage: tourName,
    tourDate: "",
    pickupLocation: "",
    specialRequest: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format pesan WhatsApp
    const message = `
*BOOKING REQUEST*

*Name/Group Name:* ${formData.name}
*Email:* ${formData.email}
*WhatsApp:* ${formData.countryCode}${formData.whatsapp}
*Total Participants:* ${formData.participants}
*Tour Package:* ${formData.tourPackage}
*Tour Date:* ${formData.tourDate}
*Pickup Location:* ${formData.pickupLocation}
${formData.specialRequest ? `*Special Request:* ${formData.specialRequest}` : ''}

Mohon konfirmasi ketersediaan dan harga untuk booking ini.
    `.trim();

    // Encode dan kirim ke WhatsApp
    const whatsappUrl = `https://wa.me/6282341331975?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    // Reset form dan tutup modal
    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      countryCode: "+62",
      participants: "",
      tourPackage: tourName,
      tourDate: "",
      pickupLocation: "",
      specialRequest: ""
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-[#0a3d52] text-white p-6">
          <h2 className="text-2xl font-bold">Book Your Tour</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Name / Group Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Name / Group Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="(required)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="(required)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              WhatsApp <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <select
                value={formData.countryCode}
                onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="+62">+62 (Indonesia)</option>
                <option value="+60">+60 (Malaysia)</option>
                <option value="+65">+65 (Singapore)</option>
                <option value="+61">+61 (Australia)</option>
                <option value="+1">+1 (USA/Canada)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+91">+91 (India)</option>
                <option value="+86">+86 (China)</option>
                <option value="+81">+81 (Japan)</option>
                <option value="+82">+82 (South Korea)</option>
              </select>
              <input
                type="tel"
                required
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                placeholder="8123456789"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Participant */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Participant <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              required
              min="1"
              value={formData.participants}
              onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
              placeholder="Total Participant (required)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Choose your Tour */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Choose your Tour! <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.tourPackage}
              onChange={(e) => setFormData({ ...formData, tourPackage: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Select Tour Package</option>
              <option value="Whale Shark Sumbawa Daily Tour">Whale Shark Sumbawa Daily Tour</option>
              <option value="Whale Shark 2D1N Tour">Whale Shark 2D1N Tour</option>
              <option value="Moyo Island & Whale Shark 3D2N">Moyo Island & Whale Shark 3D2N</option>
              <option value="Sumbawa Tour 4D3N">Sumbawa Tour 4D3N</option>
              <option value="Whale Shark Start Labuhan Jambu">Whale Shark Start Labuhan Jambu</option>
              <option value="Custom Tour Package">Custom Tour Package</option>
            </select>
          </div>

          {/* Tour Date */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Tour Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              required
              value={formData.tourDate}
              onChange={(e) => setFormData({ ...formData, tourDate: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Pickup Location */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Pickup Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.pickupLocation}
              onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
              placeholder="Hotel name or address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Special Request */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Special Request (Optional)
            </label>
            <textarea
              value={formData.specialRequest}
              onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
              placeholder="Any special requirements or questions..."
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all"
            >
              Send to WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
