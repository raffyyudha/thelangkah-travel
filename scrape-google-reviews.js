/**
 * Google Maps Review Scraper
 * 
 * IMPORTANT: This script requires puppeteer to be installed
 * Run: npm install puppeteer
 * 
 * Usage: node scrape-google-reviews.js
 */

const fs = require('fs');

// Google Maps Place URL
const PLACE_URL = 'https://www.google.com/maps/place/WHALE+SHARK+TOUR+SUMBAWA+(GOWHALESHARK)/@-8.7120043,118.0096907,17z/data=!3m1!4b1!4m6!3m5!1s0x2dca55007088a6eb:0x7874b2792f594a32!8m2!3d-8.7120043!4d118.0096907!16s%2Fg%2F11y6qt_21y';

console.log('='.repeat(60));
console.log('GOOGLE MAPS REVIEW SCRAPER');
console.log('='.repeat(60));
console.log('');
console.log('⚠️  CATATAN PENTING:');
console.log('Scraping Google Maps secara otomatis melanggar Terms of Service Google.');
console.log('Sebagai alternatif, gunakan salah satu metode berikut:');
console.log('');
console.log('METODE 1: Manual Copy-Paste (RECOMMENDED)');
console.log('1. Buka URL Google Maps di browser');
console.log('2. Klik tab "Reviews"');
console.log('3. Scroll ke bawah untuk load semua reviews');
console.log('4. Buka Browser Console (F12)');
console.log('5. Paste dan jalankan script berikut:');
console.log('');
console.log('--- COPY SCRIPT INI ---');
console.log(`
const reviews = [];
const reviewElements = document.querySelectorAll('.jftiEf');

reviewElements.forEach((el, index) => {
  const nameEl = el.querySelector('.d4r55');
  const ratingEl = el.querySelector('.kvMYJc');
  const dateEl = el.querySelector('.rsqaWe');
  const textEl = el.querySelector('.wiI7pd');
  
  if (nameEl && textEl) {
    const name = nameEl.textContent.trim();
    const ratingMatch = ratingEl?.getAttribute('aria-label')?.match(/\\d+/);
    const rating = ratingMatch ? parseInt(ratingMatch[0]) : 5;
    const date = dateEl?.textContent.trim() || 'Recently';
    const text = textEl.textContent.trim();
    
    reviews.push({
      id: index + 1,
      name: name,
      rating: rating,
      date: date,
      text: text
    });
  }
});

console.log('Total reviews found:', reviews.length);
console.log('\\n--- COPY OUTPUT BELOW TO googleReviews.ts ---\\n');
console.log(JSON.stringify(reviews, null, 2));
`);
console.log('--- END SCRIPT ---');
console.log('');
console.log('6. Copy output JSON dan paste ke src/data/googleReviews.ts');
console.log('');
console.log('METODE 2: Google Places API (OFFICIAL)');
console.log('1. Daftar di Google Cloud Console');
console.log('2. Enable Places API');
console.log('3. Get API Key');
console.log('4. Use Places API to fetch reviews legally');
console.log('');
console.log('METODE 3: Manual Input');
console.log('Buka Google Maps dan copy-paste review satu per satu ke file.');
console.log('');
console.log('='.repeat(60));
console.log('');
console.log('Google Maps URL:');
console.log(PLACE_URL);
console.log('');

// Create a template file with instructions
const templateContent = `// Google Maps Reviews - WHALE SHARK TOUR SUMBAWA
// Last Updated: ${new Date().toLocaleDateString('id-ID')}
// Source: ${PLACE_URL}

export interface GoogleReview {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
  avatar?: string;
  response?: string;
}

// PASTE YOUR REVIEWS HERE
// Use the browser console script from scrape-google-reviews.js
export const googleReviews: GoogleReview[] = [
  // Example:
  {
    id: 1,
    name: "Customer Name",
    rating: 5,
    date: "1 minggu yang lalu",
    text: "Amazing experience! Highly recommended.",
  },
  // Add more reviews here...
];

// Total reviews: ${0}
// Average rating: ${0}
`;

fs.writeFileSync('src/data/googleReviews.ts', templateContent);
console.log('✓ Template file created: src/data/googleReviews.ts');
console.log('');
console.log('Next steps:');
console.log('1. Follow the instructions above to get reviews');
console.log('2. Paste the JSON into src/data/googleReviews.ts');
console.log('3. Update the testimonials page to use this data');
console.log('');
