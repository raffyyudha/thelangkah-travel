import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nxzgjxghfxymrogybmnu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54emdqeGdoZnh5bXJvZ3libW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1NTc3ODQsImV4cCI6MjA3ODEzMzc4NH0.4TFLQujs7aBKaoKApkuj4-FUlPGlSVock0c0SJ3PVtA';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function forceCacheRefresh() {
  console.log('🔄 Adding cache-busting timestamps to all image URLs...\n');
  
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
    const timestamp = Date.now();

    for (const image of images) {
      // Add cache-busting parameter to URL
      let newUrl = image.image_url;
      
      // Remove existing cache-busting parameter if any
      newUrl = newUrl.split('?')[0];
      
      // Add new timestamp
      newUrl += `?v=${timestamp}`;

      // Update in database
      const { error: updateError } = await supabase
        .from('tour_images')
        .update({ image_url: newUrl })
        .eq('id', image.id);

      if (updateError) {
        console.error(`Error updating ${image.tour_name} - ${image.image_type}:`, updateError);
      } else {
        console.log(`✅ Updated: ${image.tour_name} - ${image.image_type}`);
        updateCount++;
      }
    }

    console.log(`\n🎉 Successfully updated ${updateCount} image URLs with cache-busting parameters!`);
    console.log('🌐 All images should now refresh in browsers.');

  } catch (error) {
    console.error('Error:', error);
  }
}

forceCacheRefresh();
