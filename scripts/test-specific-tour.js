import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nxzgjxghfxymrogybmnu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54emdqeGdoZnh5bXJvZ3libW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1NTc3ODQsImV4cCI6MjA3ODEzMzc4NH0.4TFLQujs7aBKaoKApkuj4-FUlPGlSVock0c0SJ3PVtA';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testSpecificTour() {
  console.log('🔍 Testing specific tour queries...\n');
  
  // Test Tour A (whale-shark-start-sumbawa) - yang di screenshot kiri
  console.log('📦 Testing Tour A (whale-shark-start-sumbawa):');
  
  try {
    const { data: cardData, error: cardError } = await supabase
      .from('tour_images')
      .select('image_url')
      .eq('tour_name', 'whale-shark-start-sumbawa')
      .eq('image_type', 'card')
      .maybeSingle();

    if (cardError) {
      console.log(`   ❌ Card Error: ${cardError.message}`);
    } else if (cardData && cardData.image_url) {
      console.log(`   ✅ Card Image URL: ${cardData.image_url}`);
      console.log(`   📸 Expected: whaleshark.PNG (compressed)`);
    } else {
      console.log(`   ⚠️  No card image found`);
    }

    // Test Tour B (whale-shark-1day-labuhan-jambu) - yang di screenshot kanan
    console.log('\n📦 Testing Tour B (whale-shark-1day-labuhan-jambu):');
    
    const { data: cardDataB, error: cardErrorB } = await supabase
      .from('tour_images')
      .select('image_url')
      .eq('tour_name', 'whale-shark-1day-labuhan-jambu')
      .eq('image_type', 'card')
      .maybeSingle();

    if (cardErrorB) {
      console.log(`   ❌ Card Error: ${cardErrorB.message}`);
    } else if (cardDataB && cardDataB.image_url) {
      console.log(`   ✅ Card Image URL: ${cardDataB.image_url}`);
      console.log(`   📸 Expected: whale-shark-1day-labuhan-jambu.PNG (compressed)`);
    } else {
      console.log(`   ⚠️  No card image found`);
    }

    // Test semua tour untuk melihat apakah ada duplikasi
    console.log('\n🔍 Checking for duplicate images across tours:');
    
    const { data: allCards } = await supabase
      .from('tour_images')
      .select('tour_name, image_url')
      .eq('image_type', 'card');

    const imageMap = {};
    allCards.forEach(card => {
      const fileName = card.image_url.split('/').pop().split('?')[0]; // Remove cache busting
      if (!imageMap[fileName]) {
        imageMap[fileName] = [];
      }
      imageMap[fileName].push(card.tour_name);
    });

    console.log('\n📊 Image usage across tours:');
    Object.entries(imageMap).forEach(([fileName, tours]) => {
      if (tours.length > 1) {
        console.log(`   🔄 ${fileName} used by: ${tours.join(', ')}`);
      } else {
        console.log(`   ✅ ${fileName} used by: ${tours[0]}`);
      }
    });

  } catch (error) {
    console.error('Error:', error);
  }
}

testSpecificTour();
