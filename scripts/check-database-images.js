import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nxzgjxghfxymrogybmnu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54emdqeGdoZnh5bXJvZ3libW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1NTc3ODQsImV4cCI6MjA3ODEzMzc4NH0.4TFLQujs7aBKaoKApkuj4-FUlPGlSVock0c0SJ3PVtA';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkDatabaseImages() {
  console.log('🔍 Checking current database images...\n');
  
  try {
    const { data, error } = await supabase
      .from('tour_images')
      .select('*')
      .order('tour_name', { ascending: true });

    if (error) {
      console.error('Error fetching data:', error);
      return;
    }

    // Group by tour_name
    const groupedData = {};
    data.forEach(item => {
      if (!groupedData[item.tour_name]) {
        groupedData[item.tour_name] = {};
      }
      groupedData[item.tour_name][item.image_type] = item.image_url;
    });

    console.log('📊 Current database mapping:\n');
    
    for (const [tourName, images] of Object.entries(groupedData)) {
      console.log(`🎯 ${tourName}:`);
      for (const [imageType, url] of Object.entries(images)) {
        const fileName = url.split('/').pop();
        console.log(`  ${imageType}: ${fileName}`);
      }
      console.log('');
    }

  } catch (error) {
    console.error('Error:', error);
  }
}

checkDatabaseImages();
