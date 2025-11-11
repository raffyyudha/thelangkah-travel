"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tourName?: string;
}

export default function BookingModal({ isOpen, onClose, tourName = "Tour Package" }: BookingModalProps) {
  const { language, t: commonT } = useLanguage();
  const l = language === "id"
    ? {
        title: "Booking Tour",
        nameGroup: "Nama / Nama Grup",
        required: "(wajib)",
        email: "Email",
        whatsapp: "WhatsApp",
        participant: "Jumlah Peserta",
        participantPlaceholder: "Total Peserta (wajib)",
        chooseTour: "Pilih Paket Tour",
        selectTour: "Pilih Paket Tour",
        tourDate: "Tanggal Tour",
        pickup: "Lokasi Penjemputan",
        pickupPlaceholder: "Nama hotel atau alamat",
        specialRequest: "Permintaan Khusus (Opsional)",
        cancel: "Batal",
        sendWA: "Kirim ke WhatsApp",
        msgBookingRequest: "PERMINTAAN BOOKING",
        msgName: "Nama/Nama Grup",
        msgTotal: "Jumlah Peserta",
        msgPackage: "Paket Tour",
        msgDate: "Tanggal Tour",
        msgPickup: "Lokasi Jemput",
        msgSpecial: "Permintaan Khusus",
        msgFooter: "Mohon konfirmasi ketersediaan dan harga untuk booking ini.",
        customTour: "Paket Tour Custom",
      }
    : {
        title: "Book Your Tour",
        nameGroup: "Name / Group Name",
        required: "(required)",
        email: "Email",
        whatsapp: "WhatsApp",
        participant: "Participant",
        participantPlaceholder: "Total Participant (required)",
        chooseTour: "Choose your Tour!",
        selectTour: "Select Tour Package",
        tourDate: "Tour Date",
        pickup: "Pickup Location",
        pickupPlaceholder: "Hotel name or address",
        specialRequest: "Special Request (Optional)",
        cancel: "Cancel",
        sendWA: "Send to WhatsApp",
        msgBookingRequest: "BOOKING REQUEST",
        msgName: "Name/Group Name",
        msgTotal: "Total Participants",
        msgPackage: "Tour Package",
        msgDate: "Tour Date",
        msgPickup: "Pickup Location",
        msgSpecial: "Special Request",
        msgFooter: "Please confirm availability and price for this booking.",
        customTour: "Custom Tour Package",
      };
  const tourSelectOptions = [
    commonT.tourA,
    commonT.tourB,
    commonT.tourC,
    commonT.tourD,
    commonT.tourE,
    commonT.tourF,
    commonT.tourG,
    commonT.tourH,
    commonT.tourI,
    commonT.tourJ,
    commonT.tourK,
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    countryCode: "+62",
    participants: "",
    tourPackage: tourName || "",
    tourDate: "",
    pickupLocation: "",
    specialRequest: ""
  });

  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        countryCode: "+62",
        participants: "",
        tourPackage: tourName || "",
        tourDate: "",
        pickupLocation: "",
        specialRequest: "",
      });
    }
  }, [isOpen, tourName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format pesan WhatsApp
    const message = `
*${l.msgBookingRequest}*

*${l.msgName}:* ${formData.name}
*Email:* ${formData.email}
*WhatsApp:* ${formData.countryCode}${formData.whatsapp}
*${l.msgTotal}:* ${formData.participants}
*${l.msgPackage}:* ${formData.tourPackage}
*${l.msgDate}:* ${formData.tourDate}
*${l.msgPickup}:* ${formData.pickupLocation}
${formData.specialRequest ? `*${l.msgSpecial}:* ${formData.specialRequest}` : ''}

${l.msgFooter}
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
          <h2 className="text-2xl font-bold">{l.title}</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Name / Group Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {l.nameGroup} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={l.required}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {l.email} <span className="text-red-500">*</span>
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
              {l.whatsapp} <span className="text-red-500">*</span>
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
              {l.participant} <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              required
              min="1"
              value={formData.participants}
              onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
              placeholder={l.participantPlaceholder}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Choose your Tour */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {l.chooseTour} <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.tourPackage}
              onChange={(e) => setFormData({ ...formData, tourPackage: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">{l.selectTour}</option>
              {tourSelectOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
              <option value={l.customTour}>{l.customTour}</option>
            </select>
          </div>

          {/* Tour Date */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {l.tourDate} <span className="text-red-500">*</span>
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
              {l.pickup} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.pickupLocation}
              onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
              placeholder={l.pickupPlaceholder}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Special Request */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {l.specialRequest}
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
              {l.cancel}
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all"
            >
              {l.sendWA}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
