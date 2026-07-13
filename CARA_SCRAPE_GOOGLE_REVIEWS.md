# 📝 Cara Scrape Google Reviews untuk Website

## 🔗 Link Google Maps
https://www.google.com/maps/place/WHALE+SHARK+TOUR+SUMBAWA+(GOWHALESHARK)/@-8.7120043,118.0096907,17z/data=!3m1!4b1!4m6!3m5!1s0x2dca55007088a6eb:0x7874b2792f594a32!8m2!3d-8.7120043!4d118.0096907!16s%2Fg%2F11y6qt_21y

---

## ⚡ METODE TERCEPAT: Browser Console (5 menit)

### Langkah-langkah:

1. **Buka Google Maps**
   - Klik link di atas atau search "WHALE SHARK TOUR SUMBAWA GOWHALESHARK"
   - Pastikan Anda melihat halaman bisnis

2. **Load Semua Reviews**
   - Klik tab "Reviews" 
   - Scroll ke bawah perlahan sampai semua review ter-load
   - Tunggu sampai tidak ada review baru yang muncul

3. **Buka Developer Console**
   - Tekan `F12` atau `Ctrl+Shift+I` (Windows)
   - Tekan `Cmd+Option+I` (Mac)
   - Pilih tab "Console"

4. **Copy-Paste Script Ini ke Console**

```javascript
// Script untuk extract Google Maps reviews
const reviews = [];
const reviewElements = document.querySelectorAll('.jftiEf');

console.log('Found ' + reviewElements.length + ' reviews');

reviewElements.forEach((el, index) => {
  try {
    // Get reviewer name
    const nameEl = el.querySelector('.d4r55');
    const name = nameEl ? nameEl.textContent.trim() : 'Anonymous';
    
    // Get rating
    const ratingEl = el.querySelector('.kvMYJc');
    const ratingText = ratingEl ? ratingEl.getAttribute('aria-label') : '';
    const ratingMatch = ratingText.match(/(\d+)/);
    const rating = ratingMatch ? parseInt(ratingMatch[1]) : 5;
    
    // Get date
    const dateEl = el.querySelector('.rsqaWe');
    const date = dateEl ? dateEl.textContent.trim() : 'Recently';
    
    // Get review text
    const textEl = el.querySelector('.wiI7pd');
    const text = textEl ? textEl.textContent.trim() : '';
    
    // Get avatar (optional)
    const avatarEl = el.querySelector('.NBa7we');
    const avatar = avatarEl ? avatarEl.getAttribute('src') : '';
    
    if (text && text.length > 10) {
      reviews.push({
        id: index + 1,
        name: name,
        rating: rating,
        date: date,
        text: text,
        avatar: avatar || undefined
      });
    }
  } catch (error) {
    console.error('Error processing review ' + index, error);
  }
});

console.log('\\n=== TOTAL REVIEWS EXTRACTED: ' + reviews.length + ' ===\\n');
console.log('Copy the JSON below and paste into src/data/googleReviews.ts:\\n');
console.log(JSON.stringify(reviews, null, 2));
```

5. **Copy Output JSON**
   - Script akan menampilkan JSON di console
   - Copy semua output (dari `[` sampai `]`)

6. **Paste ke File**
   - Buka file: `src/data/googleReviews.ts`
   - Replace array `googleReviews` dengan JSON yang baru
   - Save file

---

## 🔧 ALTERNATIF: Google Places API (Official & Legal)

### Setup:

1. **Daftar Google Cloud Console**
   - Go to: https://console.cloud.google.com/
   - Create new project

2. **Enable Places API**
   - Search "Places API" 
   - Click "Enable"

3. **Create API Key**
   - Go to "Credentials"
   - Create API Key
   - Restrict to Places API only

4. **Install Package**
```bash
npm install @googlemaps/google-maps-services-js
```

5. **Create Script**
```javascript
// fetch-google-reviews.js
const { Client } = require("@googlemaps/google-maps-services-js");

const client = new Client({});

async function fetchReviews() {
  const placeId = "ChIJ66gIcABVyiwSMqRZL3myeHg"; // Your place ID
  
  const response = await client.placeDetails({
    params: {
      place_id: placeId,
      fields: ["name", "rating", "reviews"],
      key: "YOUR_API_KEY_HERE",
    },
  });

  const reviews = response.data.result.reviews || [];
  console.log(JSON.stringify(reviews, null, 2));
}

fetchReviews();
```

---

## 📋 ALTERNATIF: Manual Copy-Paste

Jika metode di atas tidak berhasil:

1. Buka Google Maps reviews
2. Copy setiap review satu per satu
3. Format manual ke dalam struktur:

```typescript
{
  id: 1,
  name: "Nama Customer",
  rating: 5,
  date: "1 minggu yang lalu",
  text: "Review text here..."
}
```

---

## 🎯 Setelah Mendapatkan Reviews

1. **Update File Data**
   - Edit `src/data/googleReviews.ts`
   - Paste reviews yang sudah di-extract

2. **Update Testimonials Page**
   - File sudah otomatis menggunakan data dari `googleReviews.ts`
   - Refresh browser untuk melihat perubahan

3. **Customize Display**
   - Edit `src/app/testimonials/page.tsx` untuk customize tampilan
   - Bisa filter by rating, sort by date, dll

---

## ⚠️ CATATAN PENTING

1. **Terms of Service**
   - Scraping Google Maps melanggar ToS
   - Gunakan Google Places API untuk cara yang legal
   - Atau copy manual untuk jumlah review yang sedikit

2. **Rate Limiting**
   - Google Places API memiliki quota
   - Free tier: 100 requests/day
   - Cukup untuk update review berkala

3. **Privacy**
   - Jangan tampilkan informasi pribadi customer
   - Blur atau crop avatar jika perlu
   - Minta izin jika ingin menampilkan foto

---

## 🚀 Quick Start

Untuk mulai cepat, jalankan:

```bash
node scrape-google-reviews.js
```

Script akan memberikan instruksi lengkap dan template file.
