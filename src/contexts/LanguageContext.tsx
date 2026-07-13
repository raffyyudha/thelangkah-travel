"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: {
    home: string;
    about: string;
    packages: string;
    gallery: string;
    articles: string;
    testimonials: string;
    bookNow: string;
    moreDetails: string;
    whaleShark: string;
    privateTrip: string;
    openTrip: string;
    moyoIsland: string;
    kenawa: string;
    islandHopping: string;
    heroTitle: string;
    heroDesc: string;
    heroCTAButton: string;
    welcomeTitle: string;
    welcomeDesc: string;
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
    faqQ1: string; faqA1: string;
    faqQ2: string; faqA2: string;
    faqQ3: string; faqA3: string;
    faqQ4: string; faqA4: string;
    faqQ5: string; faqA5: string;
    faqQ6: string; faqA6: string;
    faqQ7: string; faqA7: string;
    faqQ8: string; faqA8: string;
    faqQ9: string; faqA9: string;
    faqQ10: string; faqA10: string;
    faqQ11: string; faqA11: string;
    faqQ12: string; faqA12: string;
    faqQ13: string; faqA13: string;
    faqQ14: string; faqA14: string;
    faqQ15: string; faqA15: string;
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
    aboutMissionTitle: string;
    aboutMissionDesc1: string;
    aboutMissionDesc2: string;
    aboutVisionTitle: string;
    aboutVisionDesc1: string;
    aboutVisionDesc2: string;
    aboutTeamTitle: string;
    aboutTeamSubtitle: string;
    aboutPassionateTeam: string;
    aboutFlexibleTitle: string;
    aboutFlexibleDesc: string;
    aboutProDocumentationTitle: string;
    aboutProDocumentationDesc: string;
    contactUsTitle: string;
    aboutCTAHeading: string;
    aboutCTADesc: string;
    aboutCTASeePackages: string;
    teamRoleFounderLeadGuide: string;
    teamRoleOpsManager: string;
    teamRoleSeniorGuide: string;
    teamRoleMarineExpert: string;
    teamDescFounder: string;
    teamDescOps: string;
    teamDescSenior: string;
    teamDescMarine: string;
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
    galleryGallery: string;
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
    tourPaymentTitle: string;
    tourPaymentDeposit: string;
    tourPaymentProof: string;
    tourPaymentBankTitle: string;
    tourPaymentBankName: string;
    tourPaymentAccountNumber: string;
    tourPaymentAccountName: string;
    tourPaymentSwiftCode: string;
    tourPaymentInternationalTitle: string;
    tourPaymentInternationalOption1: string;
    tourPaymentConfirmationTitle: string;
    tourPaymentConfirmationItem1: string;
    tourPaymentConfirmationItem2: string;
    tourPaymentConfirmationItem3: string;

    // Homepage Tour Titles
    tourA: string;
    tourAPriceFrom: string;
    tourB: string;
    tourBPriceFrom: string;
    tourC: string;
    tourCPriceFrom: string;
    tourD: string;
    tourDPriceFrom: string;
    tourE: string;
    tourEPriceFrom: string;
    tourF: string;
    tourFPriceFrom: string;
    tourG: string;
    tourGPriceFrom: string;
    tourH: string;
    tourHPriceFrom: string;
    tourI: string;
    tourIPriceFrom: string;
    tourJ: string;
    tourJPriceFrom: string;
    tourK: string;
    tourKPriceFrom: string;
    transportServiceTitle: string;
    transportServicePrice: string;
    tourPaymentInternationalOption2: string;
    tourPaymentInternationalNote: string;

    // Tour Page CTA
    interestedBookHere: string;
    customerReviews: string;
    googleRatingSummary: string;
    tourFAQTitle: string;

    // Common Tour Dropdown Content
    termsItem1: string;
    termsItem2: string;
    termsItem3: string;
    termsItem4: string;
    termsItem5: string;
    termsItem6: string;
    termsItem7: string;
    cancelItem1: string;
    cancelItem2: string;
    cancelItem3: string;
    cancelItem4: string;
    faqItem1: string;
    faqItem2: string;
    faqItem3: string;
    faqItem4: string;
    faqItem5: string;
    relatedToursDesc: string;
    priceDetailTitle: string;

    // Why Choose Us Section
    whyChooseTitle: string;
    whyChooseSubtitle: string;
    whyLocalOperatorTitle: string;
    whyLocalOperatorDesc: string;
    whyExperiencedGuidesTitle: string;
    whyExperiencedGuidesDesc: string;
    whyFreeDocumentationTitle: string;
    whyFreeDocumentationDesc: string;
    whySafetyPriorityTitle: string;
    whySafetyPriorityDesc: string;
    whyTransparentPricingTitle: string;
    whyTransparentPricingDesc: string;
  };
}

const translations = {
  id: {
    // Navigation
    home: "Beranda",
    about: "Tentang Kami",
    packages: "Paket Wisata",
    gallery: "Galeri",
    articles: "Artikel",
    testimonials: "Testimoni",
    bookNow: "Pesan Sekarang",
    moreDetails: "Lihat Detail",

    // Dropdown
    whaleShark: "Whale Shark Experience",
    privateTrip: "Private Trip Whale Shark",
    openTrip: "Open Trip Whale Shark",
    moyoIsland: "Moyo Island Adventure",
    kenawa: "Kenawa Sunset Tour",
    islandHopping: "Sumbawa Island Hopping",

    // Homepage Hero
    heroTitle: "Petualangan Hiu Paus Sumbawa",
    heroDesc: "Pengalaman terbaik bertemu hiu paus langsung di habitat alami mereka.",
    heroCTAButton: "Pesan Sekarang",
    welcomeTitle: "Go Whale Shark Sumbawa",
    welcomeDesc: "Go Whale Shark Sumbawa adalah platform layanan wisata petualangan lokal yang berbasis di Sumbawa. Kami hadir dengan komitmen untuk memperkenalkan keindahan alam Sumbawa kepada dunia melalui pengalaman wisata yang autentik, aman, nyaman, dan ramah lingkungan.\nDengan tim lokal berpengalaman, kami menawarkan perjalanan yang dirancang dengan penuh perhatian, memberikan kesempatan kepada setiap tamu untuk menikmati Sumbawa secara lebih dekat, alami, dan berkesan.",

    // Popular Packages
    popularPackages: "Paket Wisata Populer",
    popularDesc: "Nikmati pengalaman terbaik menjelajahi Sumbawa dari berenang bersama hiu paus hingga mengeksplor pulau exotis.",

    // Gallery Categories
    galleryGallery: "Gallery",

    // Why Travel With Us
    whyTravelTitle: "Mengapa Berwisata dengan Go Whale Shark Sumbawa?",
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
    faqQ1: "Kapan waktu terbaik melihat hiu paus?",
    faqA1: "Hiu paus biasanya dapat dilihat sepanjang tahun, namun periode terbaik adalah:\n• April – September (musim kemarau)\n• Pagi hari jam 04.00 Am – 10.00 Am\n\nCuaca lebih tenang dan peluang perjumpaan lebih tinggi.",

    faqQ2: "Apakah berenang dengan hiu paus aman?",
    faqA2: "Ya, aman. Hiu paus adalah filter feeder (pemakan plankton).\nMereka tidak agresif dan tidak memiliki gigi besar.\n\nKami tetap menerapkan aturan keamanan internasional:\n• Tidak menyentuh hiu paus\n• Menjaga jarak 3–4 meter\n• Tidak menghalangi arah berenang\n• Tidak memakai sunblock kimia",

    faqQ3: "Berapa lama perjalanan dari Labuan Bajo / Bali / Lombok ke Sumbawa?",
    faqA3: "• Bali → Sumbawa: 45 menit pesawat atau 10 jam lewat darat via Lombok\n• Lombok → Sumbawa: 2 jam menggunakan ferry\n• Labuan Bajo → Sumbawa: 7 jam menggunakan Ferry\n\nWisatawan biasanya tiba di Sumbawa Besar lalu dijemput ke Labuhan Jambu.",

    faqQ4: "Apakah bisa melihat hiu paus dari permukaan tanpa berenang?",
    faqA4: "Bisa.\nTamu dapat melihat hiu paus langsung dari atas perahu, terutama saat mereka naik ke permukaan untuk makan.",

    faqQ5: "Apa yang sudah termasuk dalam tur?",
    faqA5: "Biasanya termasuk:\n• Kapal tradisional\n• Guide berpengalaman\n• Alat snorkel & pelampung\n• Air mineral, sarapan ringan\n• Dokumentasi Underwater\n• Tiket wisata & konservasi",

    faqQ6: "Apakah cocok untuk pemula atau yang tidak bisa berenang?",
    faqA6: "Sangat cocok.\nGuide akan memandu dari awal, bahkan tamu yang tidak bisa berenang tetap bisa ikut dengan pelampung full support.",

    faqQ7: "Berapa banyak hiu paus yang biasanya terlihat?",
    faqA7: "Tergantung kondisi.\nBiasanya 1–5 ekor, kadang lebih saat aktivitas bagang sedang ramai.",

    faqQ8: "Apakah hiu paus liar atau diberi makan?",
    faqA8: "Hiu paus di Labuhan Jambu adalah liar dan bebas,\ntetapi mereka sering mendekati area bagang karena ada plankton & ikan kecil dari aktivitas nelayan.",

    faqQ9: "Berapa lama durasi tur?",
    faqA9: "Rata-rata 3–4 jam, termasuk:\n• Perjalanan 30–45 menit\n• Observasi dari perahu\n• Snorkeling bersama hiu paus",

    faqQ10: "Apakah ada batas usia?",
    faqA10: "Tidak ada batasan.\nNamun anak-anak harus didampingi orang tua.",

    faqQ11: "Apa yang harus dibawa tamu?",
    faqA11: "• Pakaian renang\n• Handuk\n• Dry bag\n• Kacamata hitam\n• Kamera underwater (jika ada)",

    faqQ12: "Bagaimana dengan Pulau Moyo, apakah bisa digabung?",
    faqA12: "Bisa.\nBanyak tamu asing memilih paket:\n\nHiu Paus Pagi → Pulau Moyo (Air Terjun Mata Jitu / Pantai Takat)",

    faqQ13: "Apakah tur bisa privat?",
    faqA13: "Ya, sebagian besar tamu internasional memilih private trip, terutama dari:\n• USA\n• Australia\n• Eropa\n• Singapura\n• Malaysia\n\nPrivate tour lebih fleksibel soal waktu & pelayanan.",

    faqQ14: "Apakah bisa dijemput dari hotel?",
    faqA14: "Bisa.\nKami menyediakan penjemputan dari:\n• Sumbawa Besar Hotel\n• Maluk Hotel\n• sape Harbour\n• Poto Tano Harbour\n• Airport Sumbawa Besar",

    faqQ15: "Apakah hiu paus berbahaya bagi manusia?",
    faqA15: "Tidak.\nMereka adalah hewan yang sangat lembut dan pelan.\nBahaya hanya terjadi jika tamu menyentuh atau terlalu dekat.",

    // Footer
    footerDesc: "Go Whale Shark Sumbawa lahir sejak tahun 2020 sebagai operator wisata lokal di Labuhan Jambu, Sumbawa, yang berkomitmen menghadirkan pengalaman wisata hiu paus yang aman, alami, transparan, dan bertanggung jawab.",
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
    aboutTitle: "Tentang Go Whale Shark Sumbawa",
    aboutDesc: "Go Whale Shark Sumbawa adalah operator wisata lokal yang berbasis di Labuhan Jambu, Sumbawa, dengan fokus pada pengalaman berenang bersama hiu paus secara alami, aman, dan bertanggung jawab.",
    aboutOurStory: "Tentang Kami",
    aboutOurStoryDesc: "Kami lahir dari masyarakat lokal yang telah lama hidup berdampingan dengan laut dan hiu paus. Berbekal pengalaman bertahun-tahun, kami memahami musim, waktu terbaik, serta perilaku hiu paus, sehingga dapat memberikan pengalaman yang autentik dan berkesan bagi setiap tamu.\n\nSebagai operator lokal, kami mengutamakan kejujuran, keamanan, dan transparansi harga. Tidak ada biaya tersembunyi — semua informasi disampaikan dengan jelas sejak awal. Setiap perjalanan dipandu oleh pemandu lokal berpengalaman, dilengkapi dengan briefing keselamatan dan peralatan standar.\n\nKami juga berkomitmen pada eco tourism dan responsible travel, dengan mengikuti aturan jarak aman, tidak menyentuh hiu paus, serta mendukung pelestarian ekosistem laut dan ekonomi masyarakat setempat.\n\nBagi kami, wisata bukan hanya tentang perjalanan, tetapi juga tentang pengalaman, edukasi, dan kontribusi positif bagi alam dan komunitas lokal.",
    aboutLocalExperience: "Pengalaman Lokal Autentik",
    aboutProfessionalService: "Layanan Profesional",
    aboutSafetyFirst: "Keselamatan Utama",
    aboutEcoFriendly: "Ramah Lingkungan",
    aboutWhyChooseUs: "Mengapa Memilih Kami?",
    aboutMissionTitle: "Misi",
    aboutMissionDesc1: "1. Menyediakan pengalaman wisata hiu paus yang aman & berkualitas\nDengan standar keselamatan tinggi, pemandu lokal berpengalaman, dan pelayanan profesional.\n\n2. Menerapkan wisata ramah lingkungan (eco tourism)\nMenjaga jarak aman, tidak menyentuh hiu paus, dan melindungi ekosistem laut.\n\n3. Memberdayakan masyarakat lokal Labuhan Jambu\nMelibatkan nelayan dan warga lokal sebagai pemandu serta kru operasional.\n\n4. Menjunjung transparansi & kejujuran\nMemberikan informasi jelas, harga transparan, dan tanpa biaya tersembunyi.\n\n5. Memberikan pelayanan ramah & respons cepat\nMemastikan setiap tamu mendapatkan pengalaman yang nyaman dan berkesan.\n\n6. Membangun reputasi positif wisata Sumbawa di tingkat global\nMelalui kualitas layanan, ulasan tamu, dan kerja sama dengan platform internasional.",
    aboutMissionDesc2: "",
    aboutVisionTitle: "Visi",
    aboutVisionDesc1: "Menjadi operator wisata hiu paus lokal terpercaya di Sumbawa yang menghadirkan pengalaman wisata aman, autentik, dan berkelanjutan, sekaligus berkontribusi pada pelestarian laut dan kesejahteraan masyarakat lokal.",
    aboutVisionDesc2: "",
    aboutTeamTitle: "Tim Kami",
    aboutTeamSubtitle: "Kenali para profesional di balik pengalaman wisata Anda",
    aboutPassionateTeam: "Tim yang Passionate",
    aboutFlexibleTitle: "Fleksibel & Customizable",
    aboutFlexibleDesc: "Paket dapat disesuaikan dengan kebutuhan dan budget Anda",
    aboutProDocumentationTitle: "Dokumentasi Profesional",
    aboutProDocumentationDesc: "Kami membantu mengabadikan momen terbaik Anda",
    contactUsTitle: "Hubungi Kami",
    aboutCTAHeading: "Siap Berpetualang Bersama Kami?",
    aboutCTADesc: "Hubungi kami sekarang dan mulai rencanakan petualangan tak terlupakan Anda di Sumbawa",
    aboutCTASeePackages: "Lihat Paket Wisata",
    teamRoleFounderLeadGuide: "Founder & Lead Guide",
    teamRoleOpsManager: "Operations Manager",
    teamRoleSeniorGuide: "Senior Guide",
    teamRoleMarineExpert: "Marine Expert",
    teamDescFounder: "Berpengalaman lebih dari 10 tahun sebagai guide wisata Sumbawa",
    teamDescOps: "Mengatur semua operasional trip dengan detail dan profesional",
    teamDescSenior: "Guide berpengalaman dengan pengetahuan mendalam tentang Sumbawa",
    teamDescMarine: "Ahli ekosistem laut dan konservasi hiu paus",
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
    tourPaymentTitle: "Metode Pembayaran",
    tourPaymentDeposit: "Pembayaran dilakukan dengan mengirimkan deposit sebesar 40% dan sisanya dapat ditransfer saat hari pertama program tour.",
    tourPaymentProof: "Jika Anda telah mengirimkan pembayaran deposit, silakan kirim bukti transfer ke WhatsApp kami. Tim kami akan segera mengirim faktur pembayaran Anda. Berikut nomor rekening kami:",
    tourPaymentBankTitle: "Nomor Rekening:",
    tourPaymentBankName: "Nama Bank : BANK RAKYAT INDONESIA (BRI)",
    tourPaymentAccountNumber: "Nomor Rekening : 477301031640533",
    tourPaymentAccountName: "Nama Rekening : ANDI MUHAR",
    tourPaymentSwiftCode: "Code Swift : BRINDJAXXX",
    tourPaymentInternationalTitle: "Pembayaran Wisatawan Internasional tersedia:",
    tourPaymentInternationalOption1: "PayPal",
    tourPaymentInternationalOption2: "Wise Transfer",
    tourPaymentInternationalNote: "Pilih metode paling nyaman untuk Anda.",
    tourPaymentConfirmationTitle: "Konfirmasi Pembayaran Setelah pembayaran berhasil:",
    tourPaymentConfirmationItem1: "Sistem kami secara otomatis mengirimkan invoice resmi",
    tourPaymentConfirmationItem2: "Admin kami juga akan menghubungi Anda via WhatsApp",
    tourPaymentConfirmationItem3: "Booking Anda langsung tercatat dalam sistem kami",

    // Homepage Tour Titles
    tourA: "1 Hari Trip Hiu Paus\n(Start & Finish Sumbawa Besar)",
    tourAPriceFrom: "Mulai 750.000 IDR per orang",
    tourB: "1 Hari Tur Hiu Paus\n( Start & Finish Labuhan Jambu )",
    tourBPriceFrom: "Mulai 500.000 IDR per orang",
    tourC: "Tur Hiu Paus Mewah\n( Menggunakan speed boat )",
    tourCPriceFrom: "",
    tourD: "2 Hari 1 Malam Tur Hiu Paus\n( Start & Finish Sumbawa Besar )",
    tourDPriceFrom: "Mulai 900.000 IDR per orang",
    tourE: "2 Hari 1 Malam Tur Hiu Paus\n(Start & finish area Poto tano)",
    tourEPriceFrom: "Mulai 1.150.000 IDR per orang",
    tourF: "2 Hari 1 Malam Tur Hiu Paus\n(Start & finish area Sakongkang)",
    tourFPriceFrom: "Mulai 1.380.000 IDR per orang",
    tourG: "2 Hari 1 Malam Tur Hiu Paus\n(Start & finish area Lombok)",
    tourGPriceFrom: "Mulai 1.550.000 IDR per orang",
    tourH: "2 Hari 1 Malam Tur Hiu Paus\n(Scuba diving Sumbawa)",
    tourHPriceFrom: "Mulai 1.500.000 IDR per orang",
    tourI: "3 Hari 2 Malam Tur Sumbawa Island\nHiu paus & pulau Moyo\n( Start & Finish sumbawa besar )",
    tourIPriceFrom: "Mulai 2.160.000 IDR per orang",
    tourJ: "3 Hari 2 Malam Trip Sumbawa Island\nHiu paus-pulau Moyo-Kenawa\n(Start & Finish Area Lombok)",
    tourJPriceFrom: "Mulai 3.430.000 IDR per orang",
    tourK: "4 Hari 3 Malam Tur Sumbawa Island\nHiu paus-pulau Moyo-Kenawa\n( Start & Finish Sumbawa Besar )",
    tourKPriceFrom: "Mulai 2.860.000 IDR per orang",

    transportServiceTitle: "Layanan Transportasi\n( Antar & Jemput )",
    transportServicePrice: "",

    // Tour Page CTA
    interestedBookHere: "Tertarik dengan Program Tour ini? Book Di Sini:",
    customerReviews: "Review Pelanggan Whale Shark Sumbawa (klik di sini):",
    googleRatingSummary: "Skor Google: 5.0 dari 5, berdasarkan 68 ulasan",
    tourFAQTitle: "Tentang Hiu Paus Sumbawa",

    // Common Tour Dropdown Content
    termsItem1: "Paket Tour Hiu Paus Sumbawa bersifat PRIVATE dan tidak akan digabung dengan peserta lain",
    termsItem2: "Anak usia 5 tahun ke bawah pada saat tour gratis",
    termsItem3: "Semua anak di bawah umur harus didampingi orang tua/wali setiap saat",
    termsItem4: "Pembayaran deposit 40% diperlukan untuk mengamankan reservasi paket",
    termsItem5: "Tanggal tour yang fleksibel tersedia berdasarkan permintaan",
    termsItem6: "Setelah Anda memutuskan untuk booking trip, mohon berikan detail ukuran kaki Anda untuk fins snorkeling dan berenang",
    termsItem7: "Pembayaran sisa dapat ditransfer/tunai saat Anda bertemu guide kami",
    cancelItem1: "Pembatalan hingga 3 hari sebelum acara: biaya pembatalan 25% akan dikenakan, berdasarkan total harga booking",
    cancelItem2: "Pembatalan 3 hari sebelum atau pada hari acara: Deposit tidak dapat dikembalikan, tetapi Anda akan mendapat kesempatan untuk melakukan tour di hari lain sesuai jadwal tanpa biaya tambahan",
    cancelItem3: "Tidak hadir pada hari acara: Terlepas dari pembatalan sebelumnya, pembayaran tidak dapat dikembalikan",
    cancelItem4: "Force majeure (misalnya cuaca buruk, bencana alam, perang): Guide berhak membatalkan atau memodifikasi jadwal/itinerary demi keselamatan peserta dan kru. Setiap perubahan atau pembatalan karena force majeure tidak dapat dikembalikan",
    faqItem1: "Hiu paus Sumbawa berkeliaran di lautan mencari makanan sepanjang tahun di teluk Saleh Sumbawa, mereka berkumpul di sekitar platform penangkapan ikan terapung. Platform ini menggunakan lampu terang yang menarik plankton dan ikan – sarapan sempurna untuk hiu paus!",
    faqItem2: "Dilarang menyentuh kulit mereka yang tertutup membran mukus sensitif yang tidak boleh disentuh, dapat membahayakan hiu paus dan mengganggu perilaku alami mereka",
    faqItem3: "Kami menyediakan semua peralatan yang Anda butuhkan (snorkel, masker dan fins), tetapi jangan ragu untuk membawa milik Anda sendiri. Kami juga menyarankan membawa ear plugs untuk mengurangi suara keras mesin perahu lokal yang akan digunakan untuk pergi ke titik Hiu Paus",
    faqItem4: "Kami tidak dapat mengontrol Alam. Kondisi laut pada hari itu dapat mempengaruhi visibilitas air atau faktor lain di luar kendali kami. Oleh karena itu, kami tidak dapat menawarkan jaminan atau pengembalian dana terkait penampakan",
    faqItem5: "Namun, kami menjaga koordinasi yang kuat dengan semua lokal & Kru untuk memastikan Anda mengunjungi Titik Kongregasi Hiu Paus Sumbawa pada waktu terbaik. Terima kasih atas pengertian Anda saat kami berusaha memberikan pengalaman terbaik yang harmonis dengan alam",
    relatedToursDesc: "Pulau Moyo terletak di Kabupaten Sumbawa, Provinsi Nusa Tenggara Barat. Selain Pulau Moyo, berikut berbagai pilihan paket wisata lainnya yang bisa anda nikmati bersama keluarga, kerabat dan sahabat saat berlibur ke Pulau Sumbawa.",
    priceDetailTitle: "Detail Harga Paket",

    // Why Choose Us Section
    whyChooseTitle: "Mengapa Memilih Tour Bersama",
    whyChooseSubtitle: "Go Whale Shark Sumbawa",
    whyLocalOperatorTitle: "Operator Lokal Asli",
    whyLocalOperatorDesc: "Kami adalah operator lokal yang berbasis langsung di Labuhan Jambu, dekat dengan habitat alami hiu paus. Bukan perantara atau agen luar daerah.",
    whyExperiencedGuidesTitle: "Pemandu Lokal Berpengalaman",
    whyExperiencedGuidesDesc: "Tim kami adalah pemandu lokal profesional yang memahami laut, cuaca, serta perilaku hiu paus dengan baik.",
    whyFreeDocumentationTitle: "Dokumentasi Foto & Video Gratis",
    whyFreeDocumentationDesc: "Abadikan momen berenang bersama hiu paus dengan dokumentasi gratis menggunakan kamera berkualitas.",
    whySafetyPriorityTitle: "Keamanan & Kenyamanan Prioritas Utama",
    whySafetyPriorityDesc: "Dilengkapi life jacket, briefing keselamatan, dan pendampingan penuh selama snorkeling.",
    whyTransparentPricingTitle: "Harga Jelas & Transparan",
    whyTransparentPricingDesc: "Semua harga kami jelas sejak awal. Tidak ada biaya tambahan mendadak saat hari keberangkatan.",
  },
  en: {
    // Navigation
    home: "Home",
    about: "About Us",
    packages: "Tour Packages",
    gallery: "Gallery",
    articles: "Articles",
    testimonials: "Testimonials",
    bookNow: "Book Now",
    moreDetails: "More details",

    // Dropdown
    whaleShark: "Whale Shark Experience",
    privateTrip: "Private Trip Whale Shark",
    openTrip: "Open Trip Whale Shark",
    moyoIsland: "Moyo Island Adventure",
    kenawa: "Kenawa Sunset Tour",
    islandHopping: "Sumbawa Island Hopping",

    // Homepage Hero
    heroTitle: "Sumbawa Whale Shark Adventure",
    heroDesc: "The best experience to meet whale sharks directly in their natural habitat.",
    heroCTAButton: "Book Your Tour Now",
    welcomeTitle: "Go Whale Shark Sumbawa",
    welcomeDesc: "Go Whale Shark Sumbawa is a local adventure travel service platform based in Sumbawa. We are here with a commitment to introduce the natural beauty of Sumbawa to the world through authentic, safe, comfortable, and eco-friendly travel experiences.\nWith an experienced local team, we offer carefully designed journeys, providing every guest the opportunity to enjoy Sumbawa more closely, naturally, and memorably.",

    // Popular Packages
    popularPackages: "Popular Tour Packages",
    popularDesc: "Enjoy the best experience exploring Sumbawa from swimming with whale sharks to exploring exotic islands.",

    // Gallery Categories
    galleryGallery: "Gallery",

    // Why Travel With Us
    whyTravelTitle: "Why Travel with Go Whale Shark Sumbawa?",
    localExpertise: "Trusted Local Expertise",
    localExpertiseDesc: "Born and raised in Sumbawa, our team knows every corner of the island. We provide authentic experiences with deep local knowledge that only natives can offer.",
    supportedWay: "Supported Every Step of the Way",
    supportedWayDesc: "From your first inquiry until you arrive home, we're there whenever you need us - available 24/7 via WhatsApp to ensure your trip runs smoothly.",
    safetyFirst: "Safety and Excellence First",
    safetyFirstDesc: "95% of our customers rate our service as 'excellent' - and that's what we always strive for. Your safety is our top priority with certified equipment and experienced guides.",
    responsibleTravel: "Responsible Travel",
    responsibleTravelDesc: "All our trips are eco-friendly and bring real benefits to local communities. We're committed to preserving Sumbawa's natural beauty for future generations.",

    // Things to Do
    thingsToDoTitle: "Things to Do in Sumbawa",
    whaleSharkExp: "Whale Shark Experience",
    islandAdventure: "Island Adventure",
    snorkelingDiving: "Snorkeling & Diving",
    beachHopping: "Beach Hopping",
    customTours: "Custom Tours",

    // FAQ
    faqTitle: "Quick Guide to Sumbawa in a Few Minutes",
    faqSubtitle: "If you haven't been to Sumbawa yet and want a brief overview, this travel FAQ will help you start planning your trip.",
    faqSectionTitle: "Sumbawa - Must Know Facts",

    // FAQ Questions
    faqQ1: "When is the best time to see whale sharks?",
    faqA1: "Whale sharks can usually be seen all year round, but the best period is:\n• April – September (dry season)\n• Morning from 04.00 AM – 10.00 AM\n\nThe weather is calmer and the chance of encounter is higher.",

    faqQ2: "Is swimming with whale sharks safe?",
    faqA2: "Yes, it is safe. Whale sharks are filter feeders (plankton eaters).\nThey are not aggressive and do not have large teeth.\n\nWe still apply international safety rules:\n• Do not touch the whale shark\n• Keep a distance of 3–4 meters\n• Do not block their swimming path\n• Do not use chemical sunblock",

    faqQ3: "How long is the trip from Labuan Bajo / Bali / Lombok to Sumbawa?",
    faqA3: "• Bali → Sumbawa: 45 minutes by plane or 10 hours by land via Lombok\n• Lombok → Sumbawa: 2 hours by ferry\n• Labuan Bajo → Sumbawa: 7 hours by ferry\n\nTourists usually arrive in Sumbawa Besar and are then picked up to Labuhan Jambu.",

    faqQ4: "Can I see whale sharks from the surface without swimming?",
    faqA4: "Yes, you can.\nGuests can see whale sharks directly from the boat, especially when they come up to the surface to feed.",

    faqQ5: "What is included in the tour?",
    faqA5: "Usually includes:\n• Traditional boat\n• Experienced guide\n• Snorkel gear & life jacket\n• Mineral water, light breakfast\n• Underwater documentation\n• Entrance & conservation tickets",

    faqQ6: "Is it suitable for beginners or non-swimmers?",
    faqA6: "Very suitable.\nThe guide will assist from the start, even guests who cannot swim can still join with full support life jackets.",

    faqQ7: "How many whale sharks are usually seen?",
    faqA7: "It depends on conditions.\nUsually 1–5 sharks, sometimes more when bagang activity is busy.",

    faqQ8: "Are the whale sharks wild or fed?",
    faqA8: "Whale sharks in Labuhan Jambu are wild and free,\nbut they often approach the bagang area because there are plankton & small fish from fisherman activities.",

    faqQ9: "How long is the tour duration?",
    faqA9: "On average 3–4 hours, including:\n• 30–45 minutes journey\n• Observation from the boat\n• Snorkeling with whale sharks",

    faqQ10: "Is there an age limit?",
    faqA10: "There is no limit.\nHowever, children must be accompanied by parents.",

    faqQ11: "What should guests bring?",
    faqA11: "• Swimwear\n• Towel\n• Dry bag\n• Sunglasses\n• Underwater camera (if any)",

    faqQ12: "What about Moyo Island, can it be combined?",
    faqA12: "Yes.\nMany international guests choose the package:\n\nMorning Whale Shark → Moyo Island (Mata Jitu Waterfall / Takat Beach)",

    faqQ13: "Can the tour be private?",
    faqA13: "Yes, most international guests choose private trips, especially from:\n• USA\n• Australia\n• Europe\n• Singapore\n• Malaysia\n\nPrivate tours are more flexible regarding time & service.",

    faqQ14: "Can I be picked up from the hotel?",
    faqA14: "Yes.\nWe provide pickup from:\n• Sumbawa Besar Hotel\n• Maluk Hotel\n• Sape Harbour\n• Poto Tano Harbour\n• Sumbawa Besar Airport",

    faqQ15: "Are whale sharks dangerous to humans?",
    faqA15: "No.\nThey are very gentle and slow animals.\nDanger only occurs if guests touch or get too close.",

    // Footer
    footerDesc: "Go Whale Shark Sumbawa was founded in 2020 as a local tour operator in Labuhan Jambu, Sumbawa, committed to providing safe, natural, transparent, and responsible whale shark tourism experiences.",
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
    aboutTitle: "About Go Whale Shark Sumbawa",
    aboutDesc: "Go Whale Shark Sumbawa is a local tour operator based in Labuhan Jambu, Sumbawa, focusing on swimming with whale sharks naturally, safely, and responsibly.",
    aboutOurStory: "Our Story",
    aboutOurStoryDesc: "We were born from a local community that has long lived side by side with the sea and whale sharks. With years of experience, we understand the seasons, the best times, and the behavior of whale sharks, so we can provide an authentic and memorable experience for every guest.\n\nAs a local operator, we prioritize honesty, safety, and price transparency. There are no hidden costs — all information is communicated clearly from the start. Each trip is guided by experienced local guides, equipped with safety briefings and standard equipment.\n\nWe are also committed to eco tourism and responsible travel, by following safe distance rules, not touching whale sharks, and supporting the preservation of marine ecosystems and the local community economy.\n\nFor us, tourism is not just about the journey, but also about experience, education, and positive contributions to nature and the local community.",
    aboutLocalExperience: "Authentic Local Experience",
    aboutProfessionalService: "Professional Service",
    aboutSafetyFirst: "Safety First",
    aboutEcoFriendly: "Eco-Friendly",
    aboutWhyChooseUs: "Why Choose Us?",
    aboutMissionTitle: "Our Mission",
    aboutMissionDesc1: "Deliver the best travel experiences in Sumbawa while preserving nature and empowering local communities.",
    aboutMissionDesc2: "We are committed to providing professional, safe and memorable services for every guest who entrusts their journey to us.",
    aboutVisionTitle: "Our Vision",
    aboutVisionDesc1: "To become the leading local tour operator in Sumbawa known for service quality, environmental commitment, and positive contribution to the community.",
    aboutVisionDesc2: "To share Sumbawa's hidden beauty with the world while preserving it for future generations.",
    aboutTeamTitle: "Our Team",
    aboutTeamSubtitle: "Meet the professionals behind your travel experience",
    aboutPassionateTeam: "Passionate Team",
    aboutFlexibleTitle: "Flexible & Customizable",
    aboutFlexibleDesc: "Packages can be tailored to your needs and budget",
    aboutProDocumentationTitle: "Professional Documentation",
    aboutProDocumentationDesc: "We help capture your best moments",
    contactUsTitle: "Contact Us",
    aboutCTAHeading: "Ready to Adventure with Us?",
    aboutCTADesc: "Contact us now and start planning your unforgettable Sumbawa adventure",
    aboutCTASeePackages: "See Tour Packages",
    teamRoleFounderLeadGuide: "Founder & Lead Guide",
    teamRoleOpsManager: "Operations Manager",
    teamRoleSeniorGuide: "Senior Guide",
    teamRoleMarineExpert: "Marine Expert",
    teamDescFounder: "Over 10 years of experience as a Sumbawa tour guide",
    teamDescOps: "Manages all trip operations with detail and professionalism",
    teamDescSenior: "Experienced guide with deep knowledge of Sumbawa",
    teamDescMarine: "Expert in marine ecosystems and whale shark conservation",
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
    tourPaymentTitle: "Payment Methods",
    tourPaymentDeposit: "Payment is made by sending a 40% deposit and the remaining balance can be transferred on the first day of the tour program.",
    tourPaymentProof: "After sending your deposit payment, please send the transfer receipt to our WhatsApp. Our team will promptly send your invoice. Our bank account details:",
    tourPaymentBankTitle: "Bank Account Details:",
    tourPaymentBankName: "Bank Name: BANK RAKYAT INDONESIA (BRI)",
    tourPaymentAccountNumber: "Account Number: 477301031640533",
    tourPaymentAccountName: "Account Holder: ANDI MUHAR",
    tourPaymentSwiftCode: "Swift Code: BRINDJAXXX",
    tourPaymentInternationalTitle: "International traveler payment options available:",
    tourPaymentInternationalOption1: "PayPal",
    tourPaymentInternationalOption2: "Wise Transfer",
    tourPaymentInternationalNote: "Choose the method that is most convenient for you.",
    tourPaymentConfirmationTitle: "Payment confirmation after the payment is successful:",
    tourPaymentConfirmationItem1: "Our system automatically sends an official invoice",
    tourPaymentConfirmationItem2: "Our admin will also contact you via WhatsApp",
    tourPaymentConfirmationItem3: "Your booking is immediately recorded in our system",

    // Homepage Tour Titles
    tourA: "1 Day Whale Shark Tour\n(Start & Finish Sumbawa Besar)",
    tourAPriceFrom: "Starting from 750,000 IDR per person",
    tourB: "1 Day Whale Shark Tour\n( Start & Finish Labuhan Jambu )",
    tourBPriceFrom: "Starting from 500,000 IDR per person",
    tourC: "Luxury Whale Shark Tour\n( Using speed boat )",
    tourCPriceFrom: "",
    tourD: "2D 1N Whale Shark Tour\n( Start & Finish Sumbawa Besar )",
    tourDPriceFrom: "Starting from 900,000 IDR per person",
    tourE: "2D1N Whale Shark Trip\n(Start & Finish Poto Tano Area)",
    tourEPriceFrom: "Starting from 1,150,000 IDR per person",
    tourF: "2D1N Whale Shark Trip\n(Start & Finish Sekongkang Area)",
    tourFPriceFrom: "Starting from 1,380,000 IDR per person",
    tourG: "2D1N Whale Shark Trip\n(Start & Finish Lombok Area)",
    tourGPriceFrom: "Starting from 1,550,000 IDR per person",
    tourH: "2D1N Whale Shark Trip\n(Scuba diving Sumbawa)",
    tourHPriceFrom: "Starting from 1,500,000 IDR per person",
    tourI: "3D 2N Sumbawa Island Tour\nWhale shark & Moyo island\n( Start & Finish Sumbawa Besar )",
    tourIPriceFrom: "Starting from 2,160,000 IDR per person",
    tourJ: "3D 2N Sumbawa Island Tour\nWhale Shark - Moyo Island - Kenawa\n(Start & Finish Lombok Area)",
    tourJPriceFrom: "Starting from 3,430,000 IDR per person",
    tourK: "4D 3N Sumbawa Island Tour\nShark whale-Moyo-Kenawa island\n( Start & Finish Sumbawa Besar )",
    tourKPriceFrom: "Starting from 2,860,000 IDR per person",

    transportServiceTitle: "Transportation Service\n( Drop off & Pick up )",
    transportServicePrice: "",

    // Tour Page CTA
    interestedBookHere: "Interested in this Tour Program? Book Here:",
    customerReviews: "Whale Shark Sumbawa Customer Reviews (click here):",
    googleRatingSummary: "Google Score: 5.0 out of 5, based on 68 reviews",
    tourFAQTitle: "About Sumbawa Whale Shark",

    // Common Tour Dropdown Content
    termsItem1: "Whale Shark Sumbawa Tour package is PRIVATE and will not be shared with other participants",
    termsItem2: "Children aged 5 years and under at the time of tour are free of charge",
    termsItem3: "All minors must be accompanied by parents/guardians at all times",
    termsItem4: "Payment of a 40% deposit is required to secure a package reservation",
    termsItem5: "Flexible tour dates are available upon request",
    termsItem6: "Once you decide to book the trip, please provide us with details of your foot size for snorkeling and swimming fins",
    termsItem7: "Remaining payment can be transferred or paid in cash when you meet our guide",
    cancelItem1: "Cancellation up to 3 days before the event: a 25% cancellation fee will apply, based on the total booking price",
    cancelItem2: "Cancellation 3 days before or on the day of the event: The deposit is non-refundable, but you will get the opportunity to do the tour on another day as scheduled with no extra charge",
    cancelItem3: "No-show on the day of the event: Regardless of prior cancellation, the payment is non-refundable",
    cancelItem4: "Force majeure (e.g., bad weather, natural disasters, war): The guide reserves the right to cancel or modify the schedule/itinerary for the safety of participants and crew. Any changes or cancellations due to force majeure are non-refundable",
    faqItem1: "Sumbawa whale sharks roam the ocean in search of food all year round in Sumbawa's Saleh Bay. They gather around floating fishing platforms that use bright lights to attract plankton and fish – the perfect breakfast for whale sharks!",
    faqItem2: "It is forbidden to touch them. Their skin is covered in a sensitive mucus membrane that should not be touched, as it can harm the whale shark and disrupt their natural behavior",
    faqItem3: "We provide all the equipment you need (snorkel, mask and fins), but feel free to bring your own. We also suggest bringing ear plugs to reduce the loud sound of the local boat's engine that will be used to go to the whale shark point",
    faqItem4: "We cannot control Mother Nature. Sea conditions on the day may impact water visibility or other factors beyond our control. Therefore, we cannot offer any guarantees or refunds regarding sightings",
    faqItem5: "However, we maintain strong coordination with all the local crews to ensure you visit the Whale Shark Sumbawa Congregation Point at the best possible time. Thank you for your understanding as we strive to provide the best experience in harmony with nature",
    relatedToursDesc: "Moyo Island is located in Sumbawa Regency, West Nusa Tenggara Province. Besides Moyo Island, here are various other tour package options that you can enjoy with family, relatives and friends when vacationing to Sumbawa Island.",
    priceDetailTitle: "Package Price Details",

    // Why Choose Us Section
    whyChooseTitle: "Why Choose Tour with",
    whyChooseSubtitle: "Go Whale Shark Sumbawa",
    whyLocalOperatorTitle: "Authentic Local Operator",
    whyLocalOperatorDesc: "We are a local operator based directly in Labuhan Jambu, close to the natural habitat of whale sharks. Not an intermediary or outside agent.",
    whyExperiencedGuidesTitle: "Experienced Local Guides",
    whyExperiencedGuidesDesc: "Our team consists of professional local guides who understand the sea, weather, and whale shark behavior well.",
    whyFreeDocumentationTitle: "Free Photo & Video Documentation",
    whyFreeDocumentationDesc: "Capture your moments swimming with whale sharks with free documentation using quality cameras.",
    whySafetyPriorityTitle: "Safety & Comfort Top Priority",
    whySafetyPriorityDesc: "Equipped with life jackets, safety briefing, and full assistance during snorkeling.",
    whyTransparentPricingTitle: "Clear & Transparent Pricing",
    whyTransparentPricingDesc: "All our prices are clear from the start. No sudden additional charges on departure day.",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('id');

  useEffect(() => {
    // Check local storage first
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'id' || savedLang === 'en')) {
      setLanguageState(savedLang);
    } else {
      // Detect browser language
      // If browser language starts with 'id' (e.g. id-ID), use Indonesian
      // Otherwise default to English for international users
      const browserLang = navigator.language || (navigator.languages && navigator.languages[0]);
      if (browserLang && browserLang.toLowerCase().startsWith('id')) {
        setLanguageState('id');
      } else {
        setLanguageState('en');
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

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
