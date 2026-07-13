import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nxzgjxghfxymrogybmnu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54emdqeGdoZnh5bXJvZ3libW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1NTc3ODQsImV4cCI6MjA3ODEzMzc4NH0.4TFLQujs7aBKaoKApkuj4-FUlPGlSVock0c0SJ3PVtA';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Homepage tour order sesuai dengan page.tsx
const homepageTours = [
  { tourName: "whale-shark-start-sumbawa", title: "Tour A: 1 Day Whale Shark Trip (A)" },
  { tourName: "whale-shark-1day-labuhan-jambu", title: "Tour B: 1 Day Whale Shark Trip (B)" },
  { tourName: "whale-shark-speedboat", title: "Tour C: 1 Day Whale Shark Trip (C)" },
  { tourName: "whale-shark-2d1n", title: "Tour D: 2D1N Trip hiu paus (D)" },
  { tourName: "whale-shark-2d1n-poto-tano", title: "Tour E: 2D1N Trip hiu paus (E)" },
  { tourName: "whale-shark-2d1n-sekongkang", title: "Tour F: 2D1N Trip hiu paus (F)" },
  { tourName: "whale-shark-start-labuhan-jambu", title: "Tour G: 2D1N Trip hiu paus (G)" },
  { tourName: "whale-shark-experience", title: "Tour H: 2D1N Trip hiu paus (H)" },
  { tourName: "combo-moyo-whale-shark", title: "Tour I: 3D2N Trip Sumbawa Island (I)" },
  { tourName: "whale-shark-moyo-kenawa-lombok", title: "Tour J: 3D2N Trip Sumbawa Island (J)" },
  { tourName: "trip-4d3n-sumbawa", title: "Tour K: 4D3N Trip Sumbawa Island (K)" }
];

async function debugHomepageImages() {
  console.log('🔍 Debugging homepage images mapping...\n');
  
  for (const tour of homepageTours) {
    console.log(`📦 ${tour.title}`);
    console.log(`   Tour Name: ${tour.tourName}`);
    
    try {
      // Get card image (what homepage should show)
      const { data: cardData, error: cardError } = await supabase
        .from('tour_images')
        .select('image_url')
        .eq('tour_name', tour.tourName)
        .eq('image_type', 'card')
        .maybeSingle();

      if (cardError) {
        console.log(`   ❌ Card Error: ${cardError.message}`);
      } else if (cardData && cardData.image_url) {
        const fileName = cardData.image_url.split('/').pop();
        console.log(`   ✅ Card Image: ${fileName}`);
      } else {
        console.log(`   ⚠️  No card image found`);
      }

      // Also check hero image for comparison
      const { data: heroData } = await supabase
        .from('tour_images')
        .select('image_url')
        .eq('tour_name', tour.tourName)
        .eq('image_type', 'hero')
        .maybeSingle();

      if (heroData && heroData.image_url) {
        const fileName = heroData.image_url.split('/').pop();
        console.log(`   📸 Hero Image: ${fileName}`);
      }

    } catch (error) {
      console.log(`   ❌ Error: ${error.message}`);
    }
    
    console.log('');
  }
}

debugHomepageImages();
