import { NextRequest, NextResponse } from 'next/server';

interface Message {
  role: string;
  content: string;
}

// Smart mock AI that generates contextual responses
function generateResponse(userMessage: string, conversationHistory: Message[]): string {
  const msg = userMessage.toLowerCase();

  // Greeting responses
  if (msg.match(/^(hai|halo|hi|hello|hey|selamat)/)) {
    const greetings = [
      'Hai! Senang bisa membantu Anda hari ini. Saya AI Assistant dari Go Whale Shark Sumbawa. Ada yang bisa saya bantu tentang paket wisata kami? 😊',
      'Halo! Terima kasih sudah menghubungi Go Whale Shark Sumbawa. Saya siap membantu Anda merencanakan petualangan di Sumbawa! Ada yang ingin ditanyakan? 🌴',
      'Hi there! Selamat datang di Go Whale Shark Sumbawa. Mau tanya-tanya tentang tour hiu paus atau destinasi lainnya? 🦈'
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  // Price inquiries
  if (msg.includes('harga') || msg.includes('biaya') || msg.includes('price') || msg.includes('cost') || msg.includes('berapa')) {
    const priceResponses = [
      'Untuk informasi harga yang akurat, saya sarankan hubungi langsung tim kami via WhatsApp di +62 823-4133-1975. Harga bervariasi tergantung jumlah peserta, musim, dan paket yang dipilih. Biasanya kami bisa kasih special rate untuk group! 💰',
      'Harga paket wisata kami cukup kompetitif! Tapi karena ada banyak faktor (jumlah orang, tanggal, include/exclude), lebih baik kita diskusi via WhatsApp ya. Tim kami akan bantu carikan paket terbaik sesuai budget Anda. Nomor WA: +62 823-4133-1975 📱',
      'Soal harga, kami punya range yang fleksibel tergantung kebutuhan. Mau paket yang mana dulu nih? Nanti saya bantu connect ke tim untuk quotation detail via WhatsApp (+62 823-4133-1975). Biasanya bisa nego juga kalau rombongan! 😊'
    ];
    return priceResponses[Math.floor(Math.random() * priceResponses.length)];
  }

  // Whale shark inquiries
  if (msg.includes('hiu paus') || msg.includes('whale shark') || msg.includes('hiu') || msg.includes('paus')) {
    const whaleSharkResponses = [
      'Wah, tour hiu paus adalah signature tour kami! 🦈 Kami punya beberapa pilihan:\n\n1. **Tour Harian** - Start & finish Sumbawa Besar (cocok yang waktunya terbatas)\n2. **Tour 2D1N** - Lebih santai, ada waktu explore lebih banyak spot\n3. **Tour dari Lombok** - Buat yang dari Lombok/Bali\n4. **Scuba Diving Tour** - Buat certified divers yang mau diving bareng hiu paus!\n\nSemuanya dijamin encounter rate tinggi karena kami tau spot-spot terbaiknya. Mau tau lebih detail yang mana?',
      'Hiu paus di Teluk Saleh Sumbawa itu amazing! Mereka gentle giants yang bisa sampai 10 meter panjangnya. Best time untuk snorkeling bareng mereka adalah Oktober-Mei.\n\nKami punya 4 paket tour hiu paus:\n✅ Harian (day trip)\n✅ 2D1N dari Sumbawa\n✅ 2D1N dari Lombok  \n✅ Diving tour (untuk certified divers)\n\nSemua paket include guide berpengalaman, snorkeling gear, dokumentasi underwater, dan tentunya encounter dengan hiu paus! Tertarik yang mana? 🌊',
      'Tour hiu paus adalah must-do kalau ke Sumbawa! Bayangkan snorkeling bareng giant fish yang ramah dan cantik. Kami sudah berpengalaman bertahun-tahun di Teluk Saleh.\n\nPaket yang tersedia:\n🦈 Day trip (harian)\n🦈 2 hari 1 malam (lebih puas)\n🦈 Start dari Lombok (buat yang dari Lombok/Bali)\n🦈 Diving package (buat yang punya license)\n\nSetiap paket dijamin ketemu hiu paus, karena kami tau timing dan lokasi terbaiknya. Mau info spesifik paket yang mana?'
    ];
    return whaleSharkResponses[Math.floor(Math.random() * whaleSharkResponses.length)];
  }

  // Moyo Island inquiries
  if (msg.includes('moyo') || msg.includes('pulau moyo') || msg.includes('kenawa')) {
    const moyoResponses = [
      'Pulau Moyo itu hidden gem banget! 🏝️ Punya air terjun eksotis (Mata Jitu Waterfall) yang airnya jernih banget, plus pantai-pantai yang masih virgin.\n\nKami punya 2 paket:\n1. **3D2N Moyo + Hiu Paus** - Kombinasi island hopping & whale shark\n2. **4D3N Moyo, Kenawa & Hiu Paus** - Paket lengkap explore 2 pulau cantik + ketemu hiu paus\n\nCocok banget buat honeymoon atau quality time sama keluarga. Mau tau itinerary detailnya?',
      'Pulau Moyo dan Kenawa adalah surga tersembunyi di Sumbawa! Moyo terkenal dengan air terjunnya yang spektakuler, sementara Kenawa punya pasir putih dan air super jernih.\n\nPaket tour kami:\n🌴 3 hari 2 malam: Moyo + Hiu Paus\n🌴 4 hari 3 malam: Moyo + Kenawa + Hiu Paus (BEST VALUE!)\n\nKedua paket include camping/homestay, meals, boat, guide, dan semua aktivitas. Perfect untuk yang mau disconnect dari rutinitas! Tertarik?',
      'Moyo Island itu Princess Diana pernah vacation di sana lho! Sekarang masih sangat natural dan belum terlalu touristy.\n\nHighlights:\n✨ Mata Jitu Waterfall - air terjun di tengah hutan\n✨ Snorkeling spots dengan coral yang masih pristine\n✨ Pantai-pantai sepi yang Instagrammable\n\nKami combine dengan Pulau Kenawa dan tour hiu paus dalam paket 3D2N atau 4D3N. Dijamin unforgettable experience! Mau tau lebih lanjut?'
    ];
    return moyoResponses[Math.floor(Math.random() * moyoResponses.length)];
  }

  // Booking/reservation inquiries
  if (msg.includes('booking') || msg.includes('book') || msg.includes('reservasi') || msg.includes('pesan')) {
    return 'Untuk booking, prosesnya gampang kok! 📝\n\n1. Hubungi kami via WhatsApp: +62 823-4133-1975\n2. Tentukan paket & tanggal yang diinginkan\n3. Kami kasih quotation & itinerary detail\n4. Konfirmasi dengan DP (biasanya 30-50%)\n5. Done! Tinggal tunggu hari H\n\nTim kami fast response dan akan bantu arrange semuanya. Mau langsung chat WA sekarang?';
  }

  // What to bring / preparation
  if (msg.includes('bawa') || msg.includes('persiapan') || msg.includes('prepare') || msg.includes('packing')) {
    return 'Good question! Ini checklist yang perlu dibawa:\n\n✅ Pakaian santai & baju renang\n✅ Sunscreen (penting banget!)\n✅ Kamera underwater (kalau punya)\n✅ Obat-obatan pribadi\n✅ Power bank\n✅ Sandal/sepatu yang nyaman\n\nYang kami sediakan:\n✅ Snorkeling gear\n✅ Life jacket\n✅ Dokumentasi underwater\n✅ Meals sesuai paket\n✅ Guide berpengalaman\n\nAda pertanyaan lain tentang persiapan?';
  }

  // Best time to visit
  if (msg.includes('kapan') || msg.includes('waktu') || msg.includes('when') || msg.includes('musim') || msg.includes('bulan')) {
    return 'Best time untuk tour hiu paus di Sumbawa adalah **Oktober - Mei**. Ini peak season karena:\n\n🌊 Laut lebih tenang\n🦈 Hiu paus banyak muncul (encounter rate 90%+)\n☀️ Cuaca cerah, perfect untuk foto\n\nTapi sebenarnya sepanjang tahun juga bisa, cuma di musim hujan (Juni-September) kadang laut agak berombak.\n\nKalau Pulau Moyo, year-round bagus! Air terjunnya malah lebih deras di musim hujan.\n\nKapan rencana mau kesini?';
  }

  // Safety concerns
  if (msg.includes('aman') || msg.includes('bahaya') || msg.includes('safe') || msg.includes('dangerous')) {
    return 'Tenang, tour kami 100% aman! 🛟\n\n**Safety measures:**\n✅ Guide bersertifikat & berpengalaman 10+ tahun\n✅ Life jacket disediakan untuk semua peserta\n✅ Boat yang terawat dengan safety equipment lengkap\n✅ Briefing safety sebelum aktivitas\n✅ Asuransi perjalanan (recommended)\n\n**Tentang hiu paus:**\nMereka itu gentle giants, totally harmless! Makan plankton aja, bukan predator. Malah sering curious sama manusia. Kami sudah handle ribuan tamu tanpa insiden.\n\nAda concern spesifik yang mau ditanyakan?';
  }

  // Thank you / closing
  if (msg.includes('terima kasih') || msg.includes('thank') || msg.includes('makasih') || msg.includes('thanks')) {
    return 'Sama-sama! Senang bisa membantu. Kalau ada pertanyaan lagi, jangan ragu untuk tanya ya. Atau langsung hubungi WhatsApp kami untuk booking: +62 823-4133-1975\n\nHave a great day! 🌴😊';
  }

  // Default contextual response
  const defaultResponses = [
    'Hmm, saya kurang paham pertanyaannya. Bisa dijelaskan lebih detail? Atau mungkin mau tanya tentang:\n\n🦈 Paket tour hiu paus\n🏝️ Pulau Moyo & Kenawa\n💰 Harga & booking\n📅 Waktu terbaik berkunjung\n\nAtau langsung chat tim kami via WhatsApp untuk info lebih lengkap: +62 823-4133-1975',
    'Maaf, saya belum bisa jawab pertanyaan itu dengan baik. Tapi saya bisa bantu info tentang:\n\n• Tour hiu paus (berbagai paket)\n• Island hopping Moyo & Kenawa  \n• Proses booking & harga\n• Tips perjalanan\n\nMau tanya yang mana? Atau hubungi langsung WA kami: +62 823-4133-1975 untuk chat dengan tim! 😊',
    'Wah, pertanyaan menarik! Tapi untuk info yang lebih akurat, saya sarankan chat langsung dengan tim kami via WhatsApp ya: +62 823-4133-1975\n\nMereka bisa kasih info real-time dan lebih detail. Atau ada hal lain yang bisa saya bantu sekarang?'
  ];

  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    // Get last user message
    const lastMessage = messages[messages.length - 1];
    const userText = lastMessage.content;

    // Generate contextual response
    const response = generateResponse(userText, messages);

    // Simulate realistic API delay (300-800ms)
    const delay = 300 + Math.random() * 500;
    await new Promise(resolve => setTimeout(resolve, delay));

    return NextResponse.json({
      choices: [{
        message: {
          role: 'assistant',
          content: response
        }
      }]
    });

  } catch (error) {
    console.error('Error in mock chat API:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
