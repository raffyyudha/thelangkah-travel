import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nxzgjxghfxymrogybmnu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54emdqeGdoZnh5bXJvZ3libW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1NTc3ODQsImV4cCI6MjA3ODEzMzc4NH0.4TFLQujs7aBKaoKApkuj4-FUlPGlSVock0c0SJ3PVtA';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function nuclearCacheClear() {
  console.log('💥 NUCLEAR CACHE CLEAR - Adding unique timestamps to force complete refresh...\n');
  
  try {
    // Get all images
    const { data: images, error } = await supabase
      .from('tour_images')
      .select('*');

    if (error) {
      console.error('Error fetching images:', error);
      return;
    }

    let updateCount = 0;
    
    for (const image of images) {
      // Generate unique timestamp for each image
      const uniqueTimestamp = Date.now() + Math.random() * 1000;
      
      // Remove existing cache-busting parameter if any
      let newUrl = image.image_url.split('?')[0];
      
      // Add new unique timestamp
      newUrl += `?cache=${Math.floor(uniqueTimestamp)}&refresh=true`;

      // Update in database
      const { error: updateError } = await supabase
        .from('tour_images')
        .update({ image_url: newUrl })
        .eq('id', image.id);

      if (updateError) {
        console.error(`Error updating ${image.tour_name} - ${image.image_type}:`, updateError);
      } else {
        console.log(`💥 Nuclear update: ${image.tour_name} - ${image.image_type}`);
        updateCount++;
      }
      
      // Small delay to ensure unique timestamps
      await new Promise(resolve => setTimeout(resolve, 10));
    }

    console.log(`\n🎉 Nuclear cache clear completed! Updated ${updateCount} image URLs.`);
    console.log('🔥 All browser caches should now be completely bypassed.');
    console.log('\n⚠️  IMPORTANT: Please do the following:');
    console.log('1. Stop the dev server (Ctrl+C)');
    console.log('2. Delete .next folder if it exists');
    console.log('3. Clear browser cache completely (Ctrl+Shift+Delete)');
    console.log('4. Restart dev server (npm run dev)');
    console.log('5. Hard refresh browser (Ctrl+F5)');

  } catch (error) {
    console.error('Error:', error);
  }
}

nuclearCacheClear();
