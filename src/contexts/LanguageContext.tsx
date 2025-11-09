"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: {
    home: string;
    about: string;
    packages: string;
    gallery: string;
    testimonials: string;
    bookNow: string;
    whaleShark: string;
    privateTrip: string;
    openTrip: string;
    moyoIsland: string;
    kenawa: string;
    islandHopping: string;
    heroTitle: string;
    heroDesc: string;
    popularPackages: string;
    popularDesc: string;
    whyTravelTitle: string;
    localExpertise: string;
    localExpertiseDesc: string;
    supportedWay: string;
    supportedWayDesc: string;
    safetyFirst: string;
    safetyFirstDesc: string;
    responsibleTravel: string;
    responsibleTravelDesc: string;
    thingsToDoTitle: string;
    whaleSharkExp: string;
    islandAdventure: string;
    snorkelingDiving: string;
    beachHopping: string;
    customTours: string;
    faqTitle: string;
    faqSubtitle: string;
    faqSectionTitle: string;
    faqVisa: string;
    faqVisaAnswer: string;
    faqRequirements: string;
    faqRequirementsAnswer: string;
    faqBestTime: string;
    faqBestTimeAnswer: string;
    faqHowToGet: string;
    faqHowToGetAnswer: string;
    faqWhatToBring: string;
    faqWhatToBringAnswer: string;
    faqSafety: string;
    faqSafetyAnswer: string;
    footerDesc: string;
    footerReviews: string;
    footerSumbawa: string;
    footerLombok: string;
    testimonialsTitle: string;
    testimonialsDesc: string;
    testimonialsHappyCustomers: string;
    testimonialsAverageRating: string;
    testimonialsSatisfactionRate: string;
    testimonialsSuccessfulTrips: string;
    testimonialsCTATitle: string;
    testimonialsCTADesc: string;
    testimonialsCTAButton: string;
    aboutTitle: string;
    aboutDesc: string;
    aboutOurStory: string;
    aboutOurStoryDesc: string;
    aboutLocalExperience: string;
    aboutProfessionalService: string;
    aboutSafetyFirst: string;
    aboutEcoFriendly: string;
    aboutWhyChooseUs: string;
    aboutExpertTeam: string;
    aboutExpertTeamDesc: string;
    aboutSafetyCertified: string;
    aboutSafetyCertifiedDesc: string;
    aboutEcoConscious: string;
    aboutEcoConsciousDesc: string;
    aboutBestValue: string;
    aboutBestValueDesc: string;
    aboutOurValues: string;
    aboutPassion: string;
    aboutPassionDesc: string;
    aboutIntegrity: string;
    aboutIntegrityDesc: string;
    aboutSustainability: string;
    aboutSustainabilityDesc: string;
    aboutExcellence: string;
    aboutExcellenceDesc: string;
    aboutCommunity: string;
    aboutCommunityDesc: string;
    aboutAdventure: string;
    aboutAdventureDesc: string;
    
    // Island Hopping Page
    islandHoppingTitle: string;
    islandHoppingSubtitle: string;
    islandHoppingIntroTitle: string;
    islandHoppingIntroDesc1: string;
    islandHoppingIntroDesc2: string;
    islandHoppingDestinationsTitle: string;
    islandHoppingKenawa: string;
    islandHoppingKenawaDesc: string;
    islandHoppingMoyo: string;
    islandHoppingMoyoDesc: string;
    islandHoppingSatonda: string;
    islandHoppingSatondaDesc: string;
    islandHoppingHidden: string;
    islandHoppingHiddenDesc: string;
    islandHoppingPackagesTitle: string;
    islandHopping1Day: string;
    islandHopping1DayTime: string;
    islandHopping1DayIslands: string;
    islandHopping1DayMinPax: string;
    islandHopping1DayPrice: string;
    islandHopping2D1N: string;
    islandHopping2D1NTime: string;
    islandHopping2D1NIslands: string;
    islandHopping2D1NMinPax: string;
    islandHopping2D1NPrice: string;
    islandHoppingPopular: string;
    islandHoppingPerPerson: string;
    islandHoppingBookButton: string;
    islandHoppingFacilitiesTitle: string;
    islandHoppingBoat: string;
    islandHoppingBoatDesc: string;
    islandHoppingGuide: string;
    islandHoppingGuideDesc: string;
    islandHoppingSnorkeling: string;
    islandHoppingSnorkelingDesc: string;
    islandHoppingMeals: string;
    islandHoppingMealsDesc: string;
    islandHoppingDocumentation: string;
    islandHoppingDocumentationDesc: string;
    islandHoppingInsurance: string;
    islandHoppingInsuranceDesc: string;
    islandHoppingCTATitle: string;
    islandHoppingCTADesc: string;
    islandHoppingCTAButton: string;
    
    // Gallery Page
    galleryTitle: string;
    galleryAll: string;
    galleryWhaleShark: string;
    galleryMoyoIsland: string;
    galleryKenawa: string;
    galleryIslandHopping: string;
    galleryCTATitle: string;
    galleryCTADesc: string;
    galleryCTAButton: string;
    
    // Common Tour Page Elements
    tourBookNow: string;
    tourChatWhatsApp: string;
    tourPriceTitle: string;
    tourParticipant: string;
    tourOpenTrip: string;
    tourFullPrivate: string;
    tourPerPerson: string;
    tourInclusions: string;
    tourExclusions: string;
    tourItinerary: string;
    tourWhatToBring: string;
    tourTermsConditions: string;
    tourCancellationPolicy: string;
    tourImportantNotes: string;
    tourRecommendedTours: string;
    tourDuration: string;
    tourMinPax: string;
    tourStartingFrom: string;
  };
}

const translations = {
  id: {
    // Navigation
    home: "Beranda",
    about: "Tentang Kami",
    packages: "Paket Wisata",
    gallery: "Galeri",
    testimonials: "Testimoni",
    bookNow: "Book Now",
    
    // Dropdown
    whaleShark: "Whale Shark Experience",
    privateTrip: "Private Trip Whale Shark",
    openTrip: "Open Trip Whale Shark",
    moyoIsland: "Moyo Island Adventure",
    kenawa: "Kenawa Sunset Tour",
    islandHopping: "Sumbawa Island Hopping",
    
    // Homepage Hero
    heroTitle: "Jelajahi Sumbawa Terbaik Bersama Kami",
    heroDesc: "Selamat datang di Adventure Sumbawa Island, penyedia layanan wisata petualangan lokal yang berbasis di Sumbawa. Kami berdiri dengan tujuan untuk memperkenalkan keindahan alam Sumbawa kepada dunia melalui pengalaman wisata yang autentik, aman, dan ramah lingkungan.",
    
    // Popular Packages
    popularPackages: "Paket Wisata Populer",
    popularDesc: "Paket wisata Sumbawa bersama Adventure Sumbawa Island dengan destinasi terlengkap dan pilihan paket wisata yang beragam. Dari snorkeling dengan hiu paus hingga eksplorasi pulau-pulau eksotis.",
    
    // Why Travel With Us
    whyTravelTitle: "Mengapa Berwisata dengan Adventure Sumbawa Island?",
    localExpertise: "Keahlian Lokal yang Terpercaya",
    localExpertiseDesc: "Lahir dan besar di Sumbawa, tim kami mengenal setiap sudut pulau. Kami menyediakan pengalaman autentik dengan pengetahuan lokal mendalam yang hanya bisa diberikan oleh penduduk asli.",
    supportedWay: "Didukung di Setiap Langkah",
    supportedWayDesc: "Dari pertanyaan pertama hingga Anda tiba di rumah, kami ada kapan pun Anda membutuhkan - tersedia 24/7 via WhatsApp untuk memastikan perjalanan Anda berjalan lancar.",
    safetyFirst: "Keselamatan dan Keunggulan Utama",
    safetyFirstDesc: "95% pelanggan kami menilai layanan kami sebagai 'sangat baik' - dan itulah yang selalu kami perjuangkan. Keselamatan Anda adalah prioritas utama dengan peralatan bersertifikat dan pemandu berpengalaman.",
    responsibleTravel: "Berwisata dengan Cara Bertanggung Jawab",
    responsibleTravelDesc: "Semua perjalanan kami ramah lingkungan dan memberikan manfaat nyata bagi komunitas lokal. Kami berkomitmen untuk melestarikan keindahan alam Sumbawa untuk generasi mendatang.",
    
    // Things to Do
    thingsToDoTitle: "Aktivitas di Sumbawa",
    whaleSharkExp: "Whale Shark Experience",
    islandAdventure: "Island Adventure",
    snorkelingDiving: "Snorkeling & Diving",
    beachHopping: "Beach Hopping",
    customTours: "Custom Tours",
    
    // FAQ
    faqTitle: "Panduan Cepat Sumbawa dalam Beberapa Menit",
    faqSubtitle: "Jika Anda belum pernah ke Sumbawa dan ingin mendapatkan gambaran singkat, FAQ perjalanan kecil ini akan membantu Anda memulai perencanaan perjalanan.",
    faqSectionTitle: "Sumbawa - Wajib Tahu & Fakta",
    
    // FAQ Questions
    faqVisa: "Apakah saya memerlukan Visa untuk Indonesia?",
    faqVisaAnswer: "Sebagian besar pengunjung dapat memperoleh Visa on Arrival (VOA) selama 30 hari, dapat diperpanjang sekali untuk 30 hari lagi. Warga negara tertentu mendapat bebas visa selama 30 hari. Periksa dengan kedutaan Indonesia untuk persyaratan negara Anda.",
    
    faqRequirements: "Apa persyaratan perjalanan untuk Sumbawa / Indonesia?",
    faqRequirementsAnswer: "Anda memerlukan paspor yang valid (minimal 6 bulan), tiket pulang/lanjutan, dan bukti akomodasi. Asuransi perjalanan sangat disarankan. Tidak ada vaksinasi khusus yang diperlukan, tetapi Hepatitis A, Tifoid, dan Tetanus direkomendasikan.",
    
    faqBestTime: "Kapan waktu terbaik untuk berwisata ke Sumbawa?",
    faqBestTimeAnswer: "Waktu terbaik mengunjungi Sumbawa adalah selama musim kemarau dari April hingga November. Untuk perjumpaan hiu paus di Teluk Saleh, waktu terbaik adalah dari Maret sampai November dengan musim puncak dari Juni sampai Oktober ketika hiu paus paling banyak. Musim hujan (Desember-Maret) dapat membawa hujan lebat.",
    
    faqHowToGet: "Bagaimana cara ke Sumbawa?",
    faqHowToGetAnswer: "1. BALI - SUMBAWA:\nOpsi Pesawat - Penerbangan dari Bandara Ngurah Rai (DPS) Bali ke Bandara Sultan Muhammad Kaharuddin III (SWQ) Sumbawa Besar, waktu tempuh sekitar 1 jam.\n\n2. LOMBOK - SUMBAWA:\nOpsi Pesawat - Dari Bandara Internasional Lombok (LOP) ke Bandara Sultan Muhammad Kaharuddin III (SWQ) Sumbawa Besar, waktu tempuh sekitar 40 menit.\n\nOpsi Kapal Ferry - Dari Mataram/Senggigi naik angkutan umum/taxi ke Pelabuhan Kayangan (2 jam), lalu naik ferry ke Poto Tano (2 jam), kemudian angkutan umum/taxi ke Sumbawa Besar (2 jam).\n\n3. LABUAN BAJO - SUMBAWA:\nOpsi Kapal Ferry - Dari Labuan Bajo (Flores) ke Pelabuhan Sape (Sumbawa), waktu tempuh sekitar 7 jam.\n\nKami menyediakan layanan penjemputan dari bandara dan pelabuhan.",
    
    faqWhatToBring: "Apa yang harus dibawa untuk trip hiu paus?",
    faqWhatToBringAnswer: "Bawa: pakaian renang, sunscreen ramah terumbu karang, handuk, pakaian ganti, kamera/casing HP tahan air, dan uang tunai untuk pengeluaran pribadi. Kami menyediakan semua peralatan snorkeling, jaket pelampung, dan makanan. Jangan lupa semangat petualangan Anda!",
    
    faqSafety: "Apakah aman berenang dengan hiu paus?",
    faqSafetyAnswer: "Ya! Hiu paus adalah raksasa yang lembut dan pemakan plankton - mereka tidak memakan manusia. Mereka benar-benar tidak berbahaya bagi manusia. Pemandu berpengalaman kami akan memberi pengarahan tentang protokol keselamatan dan perilaku yang tepat di sekitar makhluk megah ini untuk memastikan keselamatan Anda dan mereka.",
    
    // Footer
    footerDesc: "Adventure Sumbawa Island lahir pada tahun 2022 karena sebuah pemikiran yang dilandasi dengan keahlian dan keinginan untuk memberikan pelayanan terbaik bagi customer Adventure Sumbawa Island.",
    footerReviews: "ulasan",
    footerSumbawa: "Sumbawa",
    footerLombok: "Lombok",
    
    // Testimonials Page
    testimonialsTitle: "Testimoni Pelanggan",
    testimonialsDesc: "Apa kata mereka yang telah berpetualang bersama kami. Baca pengalaman nyata dari ratusan pelanggan yang puas.",
    testimonialsHappyCustomers: "Pelanggan Puas",
    testimonialsAverageRating: "Rating Rata-rata",
    testimonialsSatisfactionRate: "Tingkat Kepuasan",
    testimonialsSuccessfulTrips: "Trip Sukses",
    testimonialsCTATitle: "Siap Menjadi Bagian dari Cerita Kami?",
    testimonialsCTADesc: "Bergabunglah dengan ratusan pelanggan puas yang telah merasakan pengalaman tak terlupakan bersama kami",
    testimonialsCTAButton: "Book Sekarang via WhatsApp",
    
    // About Page
    aboutTitle: "Tentang Adventure Sumbawa Island",
    aboutDesc: "Operator wisata lokal terpercaya di Sumbawa, spesialis snorkeling dengan hiu paus dan eksplorasi pulau-pulau eksotis",
    aboutOurStory: "Cerita Kami",
    aboutOurStoryDesc: "Adventure Sumbawa Island adalah operator wisata lokal yang berdedikasi untuk menghadirkan pengalaman wisata terbaik di Sumbawa.",
    aboutLocalExperience: "Pengalaman Lokal Autentik",
    aboutProfessionalService: "Layanan Profesional",
    aboutSafetyFirst: "Keselamatan Utama",
    aboutEcoFriendly: "Ramah Lingkungan",
    aboutWhyChooseUs: "Mengapa Memilih Kami?",
    aboutExpertTeam: "Tim Ahli Berpengalaman",
    aboutExpertTeamDesc: "Tim kami terdiri dari guide lokal berpengalaman yang mengenal setiap sudut Sumbawa",
    aboutSafetyCertified: "Bersertifikat Keselamatan",
    aboutSafetyCertifiedDesc: "Semua peralatan dan prosedur kami memenuhi standar keselamatan internasional",
    aboutEcoConscious: "Peduli Lingkungan",
    aboutEcoConsciousDesc: "Kami berkomitmen untuk menjaga kelestarian alam dan budaya lokal Sumbawa",
    aboutBestValue: "Harga Terbaik",
    aboutBestValueDesc: "Paket wisata dengan harga kompetitif tanpa mengorbankan kualitas layanan",
    aboutOurValues: "Nilai-Nilai Kami",
    aboutPassion: "Passion",
    aboutPassionDesc: "Kami mencintai apa yang kami lakukan dan ingin berbagi keindahan Sumbawa dengan dunia",
    aboutIntegrity: "Integritas",
    aboutIntegrityDesc: "Kejujuran dan transparansi adalah fondasi dari setiap interaksi kami dengan pelanggan",
    aboutSustainability: "Keberlanjutan",
    aboutSustainabilityDesc: "Kami berkomitmen untuk pariwisata berkelanjutan yang menguntungkan komunitas lokal",
    aboutExcellence: "Keunggulan",
    aboutExcellenceDesc: "Kami selalu berusaha memberikan layanan terbaik dan pengalaman yang tak terlupakan",
    aboutCommunity: "Komunitas",
    aboutCommunityDesc: "Kami mendukung dan memberdayakan masyarakat lokal Sumbawa",
    aboutAdventure: "Petualangan",
    aboutAdventureDesc: "Kami percaya setiap perjalanan adalah petualangan yang harus dinikmati sepenuhnya",
    
    // Island Hopping Page
    islandHoppingTitle: "Paket Island Hopping Sumbawa",
    islandHoppingSubtitle: "Jelajahi keindahan pulau-pulau eksotis di sekitar Sumbawa dalam satu perjalanan tak terlupakan",
    islandHoppingIntroTitle: "Petualangan Island Hopping di Sumbawa",
    islandHoppingIntroDesc1: "Rasakan pengalaman luar biasa menjelajahi pulau-pulau cantik di sekitar Sumbawa. Dari pantai berpasir putih, air laut jernih, hingga spot snorkeling terbaik - semua dalam satu paket wisata yang dirancang khusus untuk Anda.",
    islandHoppingIntroDesc2: "Setiap pulau menawarkan keunikan tersendiri, mulai dari Pulau Kenawa yang terkenal dengan sunset-nya, Pulau Moyo dengan air terjun eksotis, hingga pulau-pulau kecil tersembunyi yang masih sangat alami.",
    islandHoppingDestinationsTitle: "Destinasi Island Hopping",
    islandHoppingKenawa: "Pulau Kenawa",
    islandHoppingKenawaDesc: "Sunset spektakuler & pantai pasir putih",
    islandHoppingMoyo: "Pulau Moyo",
    islandHoppingMoyoDesc: "Air terjun & spot diving kelas dunia",
    islandHoppingSatonda: "Pulau Satonda",
    islandHoppingSatondaDesc: "Danau kawah & terumbu karang",
    islandHoppingHidden: "Pulau Tersembunyi",
    islandHoppingHiddenDesc: "Eksplorasi pulau-pulau eksotis",
    islandHoppingPackagesTitle: "Pilihan Paket Island Hopping",
    islandHopping1Day: "Island Hopping 1 Hari",
    islandHopping1DayTime: "08:00 - 17:00",
    islandHopping1DayIslands: "3-4 Pulau",
    islandHopping1DayMinPax: "Min. 2 orang",
    islandHopping1DayPrice: "Mulai IDR 850.000",
    islandHopping2D1N: "Island Hopping 2D1N",
    islandHopping2D1NTime: "2 Hari 1 Malam",
    islandHopping2D1NIslands: "5-6 Pulau",
    islandHopping2D1NMinPax: "Min. 2 orang",
    islandHopping2D1NPrice: "Mulai IDR 1.500.000",
    islandHoppingPopular: "POPULER",
    islandHoppingPerPerson: "Per Orang",
    islandHoppingBookButton: "Book via WhatsApp",
    islandHoppingFacilitiesTitle: "Fasilitas yang Termasuk",
    islandHoppingBoat: "Transportasi Boat",
    islandHoppingBoatDesc: "Boat yang nyaman dan aman untuk island hopping",
    islandHoppingGuide: "Guide Profesional",
    islandHoppingGuideDesc: "Guide berpengalaman yang ramah dan helpful",
    islandHoppingSnorkeling: "Peralatan Snorkeling",
    islandHoppingSnorkelingDesc: "Masker, snorkel, dan fins berkualitas",
    islandHoppingMeals: "Makan & Minum",
    islandHoppingMealsDesc: "Lunch, snack, dan air mineral",
    islandHoppingDocumentation: "Dokumentasi",
    islandHoppingDocumentationDesc: "Foto underwater dan dokumentasi perjalanan",
    islandHoppingInsurance: "Asuransi Perjalanan",
    islandHoppingInsuranceDesc: "Perlindungan selama trip untuk keamanan Anda",
    islandHoppingCTATitle: "Siap Menjelajahi Pulau-Pulau Sumbawa?",
    islandHoppingCTADesc: "Hubungi kami sekarang untuk informasi lebih lanjut dan booking paket island hopping Anda",
    islandHoppingCTAButton: "Book via WhatsApp",
    
    // Gallery Page
    galleryTitle: "Galeri Foto",
    galleryAll: "Semua",
    galleryWhaleShark: "Whale Shark",
    galleryMoyoIsland: "Moyo Island",
    galleryKenawa: "Kenawa",
    galleryIslandHopping: "Island Hopping",
    galleryCTATitle: "Siap Memulai Petualangan Anda?",
    galleryCTADesc: "Hubungi kami sekarang untuk booking dan informasi lebih lanjut",
    galleryCTAButton: "Book Sekarang via WhatsApp",
    
    // Common Tour Page Elements
    tourBookNow: "Book Sekarang",
    tourChatWhatsApp: "Chat di WhatsApp",
    tourPriceTitle: "Harga Tour",
    tourParticipant: "PESERTA",
    tourOpenTrip: "OPEN TRIP",
    tourFullPrivate: "FULL PRIVAT",
    tourPerPerson: "Per Orang",
    tourInclusions: "Yang Termasuk",
    tourExclusions: "Yang Tidak Termasuk",
    tourItinerary: "Itinerary",
    tourWhatToBring: "Yang Harus Dibawa",
    tourTermsConditions: "Syarat & Ketentuan",
    tourCancellationPolicy: "Pembatalan & Penjadwalan ulang",
    tourImportantNotes: "Catatan Penting",
    tourRecommendedTours: "Pilihan Paket Tour Sumbawa Lainnya",
    tourDuration: "Durasi",
    tourMinPax: "Minimal",
    tourStartingFrom: "Mulai dari",
  },
  en: {
    // Navigation
    home: "Home",
    about: "About Us",
    packages: "Tour Packages",
    gallery: "Gallery",
    testimonials: "Testimonials",
    bookNow: "Book Now",
    
    // Dropdown
    whaleShark: "Whale Shark Experience",
    privateTrip: "Private Trip Whale Shark",
    openTrip: "Open Trip Whale Shark",
    moyoIsland: "Moyo Island Adventure",
    kenawa: "Kenawa Sunset Tour",
    islandHopping: "Sumbawa Island Hopping",
    
    // Homepage Hero
    heroTitle: "Explore Sumbawa's Best With Us",
    heroDesc: "Adventure Sumbawa Island is the best local tour operator providing tour packages to Sumbawa, especially snorkeling with whale sharks in Labuhan Jambu",
    
    // Popular Packages
    popularPackages: "Popular Tour Packages",
    popularDesc: "Sumbawa tour packages with Adventure Sumbawa Island featuring the most complete destinations and diverse tour package options. From snorkeling with whale sharks to exploring exotic islands.",
    
    // Why Travel With Us
    whyTravelTitle: "Why travel with Adventure Sumbawa Island?",
    localExpertise: "Local expertise you can trust",
    localExpertiseDesc: "Born and raised in Sumbawa, our team knows every corner of the island. We provide authentic experiences with deep local knowledge that only natives can offer.",
    supportedWay: "Supported every step of the way",
    supportedWayDesc: "From your first inquiry until you arrive home, we're there whenever you need us - available 24/7 via WhatsApp to ensure your trip runs smoothly.",
    safetyFirst: "Safety and excellence first",
    safetyFirstDesc: "95% of our customers rate our service as 'excellent' - and that's what we always strive to be. Your safety is our top priority with certified equipment and experienced guides.",
    responsibleTravel: "Travel the responsible way",
    responsibleTravelDesc: "All our trips are eco-conscious and bring real benefits to local communities. We're committed to preserving Sumbawa's natural beauty for future generations.",
    
    // Things to Do
    thingsToDoTitle: "Sumbawa Things to Do",
    whaleSharkExp: "Whale Shark Experience",
    islandAdventure: "Island Adventure",
    snorkelingDiving: "Snorkeling & Diving",
    beachHopping: "Beach Hopping",
    customTours: "Custom Tours",
    
    // FAQ
    faqTitle: "The Ultimate Quick-Guide to Sumbawa in a few minutes",
    faqSubtitle: "If you have not been to Sumbawa yet and want to get a brief overview, then this little Travel FAQ will help you to start your travel planning.",
    faqSectionTitle: "Sumbawa - Must Know & Facts",
    
    // FAQ Questions
    faqVisa: "Do I need a Visa for Indonesia?",
    faqVisaAnswer: "Most visitors can obtain a Visa on Arrival (VOA) for 30 days, extendable once for another 30 days. Citizens from certain countries get visa-free entry for 30 days. Check with the Indonesian embassy for your specific country requirements.",
    
    faqRequirements: "What are the travel requirements for Sumbawa / Indonesia?",
    faqRequirementsAnswer: "You'll need a valid passport (minimum 6 months validity), return/onward ticket, and proof of accommodation. Travel insurance is highly recommended. No specific vaccinations are required, but Hepatitis A, Typhoid, and Tetanus are recommended.",
    
    faqBestTime: "When are the best months to travel to Sumbawa?",
    faqBestTimeAnswer: "The best time to visit Sumbawa is during the dry season from April to November. For whale shark encounters in Teluk Saleh, the best time is from March to November with peak season from June to October when whale sharks are most abundant. The wet season (December-March) can bring heavy rains.",
    
    faqHowToGet: "How do I get to Sumbawa?",
    faqHowToGetAnswer: "1. BALI - SUMBAWA:\nFlight Option - From Ngurah Rai Airport (DPS) Bali to Sultan Muhammad Kaharuddin III Airport (SWQ) Sumbawa Besar, approximately 1 hour.\n\n2. LOMBOK - SUMBAWA:\nFlight Option - From Lombok International Airport (LOP) to Sultan Muhammad Kaharuddin III Airport (SWQ) Sumbawa Besar, approximately 40 minutes.\n\nFerry Option - From Mataram/Senggigi take public transport/taxi to Kayangan Port (2 hours), then ferry to Poto Tano (2 hours), followed by public transport/taxi to Sumbawa Besar (2 hours).\n\n3. LABUAN BAJO - SUMBAWA:\nFerry Option - From Labuan Bajo (Flores) to Sape Port (Sumbawa), approximately 7 hours.\n\nWe provide pickup services from airports and ports.",
    
    faqWhatToBring: "What should I bring for a whale shark trip?",
    faqWhatToBringAnswer: "Bring: swimwear, reef-safe sunscreen, towel, change of clothes, waterproof camera/phone case, and cash for personal expenses. We provide all snorkeling equipment, life jackets, and meals. Don't forget your sense of adventure!",
    
    faqSafety: "Is it safe to swim with whale sharks?",
    faqSafetyAnswer: "Yes! Whale sharks are gentle giants and filter feeders - they eat plankton, not people. They're completely harmless to humans. Our experienced guides will brief you on safety protocols and proper behavior around these magnificent creatures to ensure both your safety and theirs.",
    
    // Footer
    footerDesc: "Adventure Sumbawa Island was born in 2022 from a vision founded on expertise and the desire to provide the best service for Adventure Sumbawa Island customers.",
    footerReviews: "reviews",
    footerSumbawa: "Sumbawa",
    footerLombok: "Lombok",
    
    // Testimonials Page
    testimonialsTitle: "Customer Testimonials",
    testimonialsDesc: "What our adventurers say about us. Read real experiences from hundreds of satisfied customers.",
    testimonialsHappyCustomers: "Happy Customers",
    testimonialsAverageRating: "Average Rating",
    testimonialsSatisfactionRate: "Satisfaction Rate",
    testimonialsSuccessfulTrips: "Successful Trips",
    testimonialsCTATitle: "Ready to Be Part of Our Story?",
    testimonialsCTADesc: "Join hundreds of satisfied customers who have experienced unforgettable adventures with us",
    testimonialsCTAButton: "Book Now via WhatsApp",
    
    // About Page
    aboutTitle: "About Adventure Sumbawa Island",
    aboutDesc: "Trusted local tour operator in Sumbawa, specializing in whale shark snorkeling and exotic island exploration",
    aboutOurStory: "Our Story",
    aboutOurStoryDesc: "Adventure Sumbawa Island is a local tour operator dedicated to providing the best tourism experience in Sumbawa.",
    aboutLocalExperience: "Authentic Local Experience",
    aboutProfessionalService: "Professional Service",
    aboutSafetyFirst: "Safety First",
    aboutEcoFriendly: "Eco-Friendly",
    aboutWhyChooseUs: "Why Choose Us?",
    aboutExpertTeam: "Expert Team",
    aboutExpertTeamDesc: "Our team consists of experienced local guides who know every corner of Sumbawa",
    aboutSafetyCertified: "Safety Certified",
    aboutSafetyCertifiedDesc: "All our equipment and procedures meet international safety standards",
    aboutEcoConscious: "Eco-Conscious",
    aboutEcoConsciousDesc: "We are committed to preserving Sumbawa's nature and local culture",
    aboutBestValue: "Best Value",
    aboutBestValueDesc: "Competitive tour packages without compromising service quality",
    aboutOurValues: "Our Values",
    aboutPassion: "Passion",
    aboutPassionDesc: "We love what we do and want to share Sumbawa's beauty with the world",
    aboutIntegrity: "Integrity",
    aboutIntegrityDesc: "Honesty and transparency are the foundation of every customer interaction",
    aboutSustainability: "Sustainability",
    aboutSustainabilityDesc: "We are committed to sustainable tourism that benefits local communities",
    aboutExcellence: "Excellence",
    aboutExcellenceDesc: "We always strive to provide the best service and unforgettable experiences",
    aboutCommunity: "Community",
    aboutCommunityDesc: "We support and empower the local Sumbawa community",
    aboutAdventure: "Adventure",
    aboutAdventureDesc: "We believe every journey is an adventure to be fully enjoyed",
    
    // Island Hopping Page
    islandHoppingTitle: "Sumbawa Island Hopping Package",
    islandHoppingSubtitle: "Explore the beauty of exotic islands around Sumbawa in one unforgettable journey",
    islandHoppingIntroTitle: "Island Hopping Adventure in Sumbawa",
    islandHoppingIntroDesc1: "Experience the extraordinary adventure of exploring beautiful islands around Sumbawa. From white sandy beaches, crystal clear waters, to the best snorkeling spots - all in one tour package specially designed for you.",
    islandHoppingIntroDesc2: "Each island offers its own uniqueness, from Kenawa Island famous for its sunsets, Moyo Island with exotic waterfalls, to hidden small islands that are still very natural.",
    islandHoppingDestinationsTitle: "Island Hopping Destinations",
    islandHoppingKenawa: "Kenawa Island",
    islandHoppingKenawaDesc: "Spectacular sunset & white sand beach",
    islandHoppingMoyo: "Moyo Island",
    islandHoppingMoyoDesc: "Waterfall & world-class diving spots",
    islandHoppingSatonda: "Satonda Island",
    islandHoppingSatondaDesc: "Crater lake & coral reefs",
    islandHoppingHidden: "Hidden Islands",
    islandHoppingHiddenDesc: "Explore exotic islands",
    islandHoppingPackagesTitle: "Island Hopping Package Options",
    islandHopping1Day: "Island Hopping 1 Day",
    islandHopping1DayTime: "08:00 - 17:00",
    islandHopping1DayIslands: "3-4 Islands",
    islandHopping1DayMinPax: "Min. 2 people",
    islandHopping1DayPrice: "Starting IDR 850,000",
    islandHopping2D1N: "Island Hopping 2D1N",
    islandHopping2D1NTime: "2 Days 1 Night",
    islandHopping2D1NIslands: "5-6 Islands",
    islandHopping2D1NMinPax: "Min. 2 people",
    islandHopping2D1NPrice: "Starting IDR 1,500,000",
    islandHoppingPopular: "POPULAR",
    islandHoppingPerPerson: "Per Person",
    islandHoppingBookButton: "Book via WhatsApp",
    islandHoppingFacilitiesTitle: "Included Facilities",
    islandHoppingBoat: "Boat Transportation",
    islandHoppingBoatDesc: "Comfortable and safe boat for island hopping",
    islandHoppingGuide: "Professional Guide",
    islandHoppingGuideDesc: "Experienced, friendly and helpful guide",
    islandHoppingSnorkeling: "Snorkeling Equipment",
    islandHoppingSnorkelingDesc: "Quality mask, snorkel, and fins",
    islandHoppingMeals: "Meals & Drinks",
    islandHoppingMealsDesc: "Lunch, snacks, and mineral water",
    islandHoppingDocumentation: "Documentation",
    islandHoppingDocumentationDesc: "Underwater photos and trip documentation",
    islandHoppingInsurance: "Travel Insurance",
    islandHoppingInsuranceDesc: "Protection during the trip for your safety",
    islandHoppingCTATitle: "Ready to Explore Sumbawa Islands?",
    islandHoppingCTADesc: "Contact us now for more information and book your island hopping package",
    islandHoppingCTAButton: "Book via WhatsApp",
    
    // Gallery Page
    galleryTitle: "Photo Gallery",
    galleryAll: "All",
    galleryWhaleShark: "Whale Shark",
    galleryMoyoIsland: "Moyo Island",
    galleryKenawa: "Kenawa",
    galleryIslandHopping: "Island Hopping",
    galleryCTATitle: "Ready to Start Your Adventure?",
    galleryCTADesc: "Contact us now for booking and more information",
    galleryCTAButton: "Book Now via WhatsApp",
    
    // Common Tour Page Elements
    tourBookNow: "Book Now",
    tourChatWhatsApp: "Chat On WhatsApp",
    tourPriceTitle: "Tour Price",
    tourParticipant: "PARTICIPANT",
    tourOpenTrip: "OPEN TRIP",
    tourFullPrivate: "FULL PRIVATE",
    tourPerPerson: "Per Person",
    tourInclusions: "Inclusions",
    tourExclusions: "Exclusions",
    tourItinerary: "Itinerary",
    tourWhatToBring: "What to Bring",
    tourTermsConditions: "Terms & Conditions",
    tourCancellationPolicy: "Cancellation & Rescheduling",
    tourImportantNotes: "Important Notes",
    tourRecommendedTours: "Other Sumbawa Tour Packages",
    tourDuration: "Duration",
    tourMinPax: "Minimum",
    tourStartingFrom: "Starting from",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('id');

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: language === 'id' ? translations.id : translations.en,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
