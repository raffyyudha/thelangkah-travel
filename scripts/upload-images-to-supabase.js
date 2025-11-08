import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const supabaseUrl = 'https://nxzgjxghfxymrogybmnu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54emdqeGdoZnh5bXJvZ3libW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1NTc3ODQsImV4cCI6MjA3ODEzMzc4NH0.4TFLQujs7aBKaoKApkuj4-FUlPGlSVock0c0SJ3PVtA';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Mapping gambar untuk setiap tour
const tourImages = {
  'whale-shark-start-sumbawa': {
    hero: '/images/whale-shark/IMG_2992.JPG',
    gallery1: '/images/whale-shark/IMG_2079.JPG',
    gallery2: '/images/whale-shark/IMG_2082.JPG',
    gallery3: '/images/whale-shark/IMG_2806.JPG'
  },
  'whale-shark-2d1n': {
    hero: '/images/whale-shark/IMG_2992.JPG',
    gallery1: '/images/whale-shark/IMG_2079.JPG',
    gallery2: '/images/whale-shark/IMG_2082.JPG',
    gallery3: '/images/whale-shark/IMG_2806.JPG'
  },
  'combo-moyo-whale-shark': {
    hero: '/images/hero.jpg',
    gallery1: '/images/whale-shark/IMG_2992.JPG',
    gallery2: '/images/whale-shark/IMG_2079.JPG',
    gallery3: '/images/whale-shark/IMG_2082.JPG'
  },
  'whale-shark-start-labuhan-jambu': {
    hero: '/images/whale-shark/IMG_2992.JPG',
    gallery1: '/images/whale-shark/IMG_2079.JPG',
    gallery2: '/images/whale-shark/IMG_2082.JPG',
    gallery3: '/images/whale-shark/IMG_2806.JPG'
  },
  'trip-4d3n-sumbawa': {
    hero: '/images/islandjawa.jpg',
    gallery1: '/images/whale-shark/IMG_2992.JPG',
    gallery2: '/images/whale-shark/IMG_2079.JPG',
    gallery3: '/images/whale-shark/IMG_2082.JPG'
  },
  'whale-shark-experience': {
    hero: '/images/whale-shark/IMG_2806.JPG',
    gallery1: '/images/whale-shark/IMG_2992.JPG',
    gallery2: '/images/whale-shark/IMG_2079.JPG',
    gallery3: '/images/whale-shark/IMG_2082.JPG'
  }
};

async function uploadImage(tourName, imageType, imagePath) {
  try {
    const publicDir = path.join(__dirname, '../public');
    const fullPath = path.join(publicDir, imagePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  File not found: ${imagePath}`);
      return null;
    }

    const fileBuffer = fs.readFileSync(fullPath);
    const fileExt = path.extname(imagePath);
    const fileName = `${tourName}_${imageType}${fileExt}`;
    const filePath = `tour-images/${fileName}`;

    // Upload to Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('images')
      .upload(filePath, fileBuffer, {
        contentType: `image/${fileExt.replace('.', '')}`,
        upsert: true // Replace if exists
      });

    if (uploadError) {
      console.error(`✗ Error uploading ${fileName}:`, uploadError.message);
      return null;
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(filePath);

    // Check if already exists
    const { data: existing } = await supabase
      .from('tour_images')
      .select('id')
      .eq('tour_name', tourName)
      .eq('image_type', imageType)
      .single();

    let dbError = null;
    if (existing) {
      // Update existing
      const { error } = await supabase
        .from('tour_images')
        .update({ image_url: publicUrl })
        .eq('tour_name', tourName)
        .eq('image_type', imageType);
      dbError = error;
    } else {
      // Insert new
      const { error } = await supabase
        .from('tour_images')
        .insert({
          tour_name: tourName,
          image_url: publicUrl,
          image_type: imageType
        });
      dbError = error;
    }

    if (dbError) {
      console.error(`✗ Error saving to DB ${fileName}:`, dbError.message);
      return null;
    }

    console.log(`✓ Uploaded: ${tourName} - ${imageType}`);
    return publicUrl;
  } catch (error) {
    console.error(`✗ Error processing ${tourName} - ${imageType}:`, error.message);
    return null;
  }
}

async function uploadAllImages() {
  console.log('Starting image upload to Supabase...\n');
  
  let successCount = 0;
  let errorCount = 0;

  for (const [tourName, images] of Object.entries(tourImages)) {
    console.log(`\n📦 Processing: ${tourName}`);
    
    for (const [imageType, imagePath] of Object.entries(images)) {
      const result = await uploadImage(tourName, imageType, imagePath);
      if (result) {
        successCount++;
      } else {
        errorCount++;
      }
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log(`✓ Successfully uploaded: ${successCount} images`);
  console.log(`✗ Failed: ${errorCount} images`);
  console.log('='.repeat(50));
  console.log('\n✅ Upload complete! Check your Supabase Storage.');
}

uploadAllImages().catch(console.error);
