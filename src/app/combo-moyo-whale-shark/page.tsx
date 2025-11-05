import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Clock, Users, MapPin, Check, X } from "lucide-react";

export const metadata = {
  title: "Combo: Moyo Island + Whale Shark | Adventure Sumbawa Island",
  description: "Paket kombinasi Pulau Moyo dan Hiu Paus - pengalaman lengkap menjelajahi keindahan Sumbawa dalam satu trip.",
};

export default function ComboMoyoWhaleSharkPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-start">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/whale-shark/IMG_2992.JPG"
            alt="Combo Moyo + Whale Shark"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-block bg-gradient-to-r from-[#00a6b5] to-purple-600 text-white px-4 py-2 rounded-full font-semibold mb-4">
              PAKET KOMBINASI
            </div>
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">
              Moyo Island + Whale Shark
            </h1>
            <p className="text-white text-xl mb-6">
              Eksplorasi Pulau Moyo dan berenang bersama hiu paus dalam satu paket lengkap
            </p>
            <div className="flex flex-wrap gap-4 text-white mb-8">
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>2 Days 1 Night</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} />
                <span>Min. 4 Pax</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Moyo & Labuhan Jambu</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/6282341331975?text=Halo,%20saya%20ingin%20booking%20Combo%20Moyo%20Island%20+%20Whale%20Shark"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
              >
                <MessageCircle size={24} />
                Book via WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
              >
                Tanya Detail
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-[#00a6b5] via-purple-500 to-purple-600 text-white p-8 rounded-2xl text-center">
              <h3 className="text-lg font-semibold mb-2">Paket Kombinasi</h3>
              <div className="text-5xl font-bold mb-2">Rp 1.2 Juta</div>
              <p className="text-sm opacity-90">per orang (min. 4 pax)</p>
              <p className="text-xs opacity-80 mt-2">Hemat dibanding booking terpisah!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Point Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Meeting Point
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4">
                <MapPin size={32} className="text-[#00a6b5] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Sumbawa Besar</h3>
                  <p className="text-gray-600">Titik kumpul untuk trip kombinasi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/whale-shark/IMG_2992.JPG"
                alt="Whale Shark"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-4xl mb-2">🦈</div>
                <h3 className="text-white font-bold text-lg mb-1">Swim with Whale Sharks</h3>
                <p className="text-white/90 text-sm">Berenang bersama hiu paus</p>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/hero.jpg"
                alt="Air Terjun Moyo"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-4xl mb-2">💧</div>
                <h3 className="text-white font-bold text-lg mb-1">Air Terjun Mata Jitu</h3>
                <p className="text-white/90 text-sm">Air terjun eksotis Pulau Moyo</p>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/whale-shark/IMG_2082.JPG"
                alt="Snorkeling"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-4xl mb-2">🤿</div>
                <h3 className="text-white font-bold text-lg mb-1">Snorkeling</h3>
                <p className="text-white/90 text-sm">Terumbu karang yang indah</p>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/hero.jpg"
                alt="Island Hopping"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-4xl mb-2">🏝️</div>
                <h3 className="text-white font-bold text-lg mb-1">Island Hopping</h3>
                <p className="text-white/90 text-sm">Eksplorasi 2 destinasi terbaik</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Itinerary
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Hari 1 - Pulau Moyo</h3>
              <div className="space-y-6">
                <ItineraryItem
                  time="06:00"
                  title="Pickup & Berangkat"
                  description="Pickup dari meeting point dan perjalanan ke Pulau Moyo."
                />
                <ItineraryItem
                  time="09:00"
                  title="Trekking Air Terjun"
                  description="Trekking ke Air Terjun Mata Jitu dan berenang."
                />
                <ItineraryItem
                  time="12:00"
                  title="Makan Siang"
                  description="Makan siang di pantai Pulau Moyo."
                />
                <ItineraryItem
                  time="13:30"
                  title="Snorkeling & Beach Time"
                  description="Snorkeling dan waktu bebas di pantai."
                />
                <ItineraryItem
                  time="16:00"
                  title="Check-in Penginapan"
                  description="Check-in di penginapan dan istirahat."
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Hari 2 - Whale Shark Experience</h3>
              <div className="space-y-6">
                <ItineraryItem
                  time="06:00"
                  title="Berangkat ke Labuhan Jambu"
                  description="Perjalanan menuju spot hiu paus di Teluk Saleh."
                />
                <ItineraryItem
                  time="08:30"
                  title="Snorkeling with Whale Shark"
                  description="Aktivitas snorkeling bersama hiu paus (2-3 jam)."
                />
                <ItineraryItem
                  time="12:00"
                  title="Makan Siang"
                  description="Makan siang di boat atau pulau terdekat."
                />
                <ItineraryItem
                  time="13:00"
                  title="Free Time"
                  description="Waktu bebas untuk snorkeling tambahan."
                />
                <ItineraryItem
                  time="15:00"
                  title="Kembali & Drop Off"
                  description="Perjalanan kembali dan drop off ke meeting point."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Include & Exclude */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Include */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <Check size={24} className="text-white" />
                </div>
                Yang Termasuk
              </h2>
              <ul className="space-y-4">
                <IncludeItem text="Transport PP dari meeting point" />
                <IncludeItem text="Boat untuk semua perjalanan" />
                <IncludeItem text="Penginapan 1 malam" />
                <IncludeItem text="Peralatan snorkeling lengkap" />
                <IncludeItem text="Guide profesional" />
                <IncludeItem text="Makan (2x makan siang, 1x makan malam, 1x sarapan)" />
                <IncludeItem text="Air mineral" />
                <IncludeItem text="Dokumentasi foto underwater" />
                <IncludeItem text="Asuransi perjalanan" />
                <IncludeItem text="Tiket masuk semua lokasi" />
              </ul>
            </div>

            {/* Exclude */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                  <X size={24} className="text-white" />
                </div>
                Yang Tidak Termasuk
              </h2>
              <ul className="space-y-4">
                <ExcludeItem text="Tiket pesawat/ferry ke Sumbawa" />
                <ExcludeItem text="Makan di luar itinerary" />
                <ExcludeItem text="Keperluan pribadi" />
                <ExcludeItem text="Tips guide (optional)" />
                <ExcludeItem text="Underwater camera (bisa sewa)" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00a6b5] via-purple-500 to-purple-600 text-white">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Siap untuk Petualangan Lengkap?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Dapatkan pengalaman terbaik Moyo Island dan Whale Shark dalam satu paket hemat!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6282341331975?text=Halo,%20saya%20ingin%20booking%20Combo%20Moyo%20Island%20+%20Whale%20Shark"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              <MessageCircle size={24} />
              Book via WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all transform hover:scale-105"
            >
              Tanya Detail
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ItineraryItem({ time, title, description }: { time: string; title: string; description: string }) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00a6b5] to-purple-600 flex items-center justify-center text-white font-bold text-sm">
          {time}
        </div>
      </div>
      <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function IncludeItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
      <span className="text-gray-700">{text}</span>
    </li>
  );
}

function ExcludeItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <X size={20} className="text-red-500 flex-shrink-0 mt-1" />
      <span className="text-gray-700">{text}</span>
    </li>
  );
}
