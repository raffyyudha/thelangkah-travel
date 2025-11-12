import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const supabaseUrl = 'https://nxzgjxghfxymrogybmnu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54emdqeGdoZnh5bXJvZ3libW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1NTc3ODQsImV4cCI6MjA3ODEzMzc4NH0.4TFLQujs7aBKaoKApkuj4-FUlPGlSVock0c0SJ3PVtA';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Mapping gambar untuk setiap tour - SESUAI DENGAN YANG DIPAKAI DI WEBSITE ASLI
const tourImages = {
  'whale-shark-start-sumbawa': {
    card: '/images/whaleshark.PNG',
    hero: '/images/IMG_2992.JPG',
    gallery1: '/images/IMG_2079.JPG',
    gallery2: '/images/IMG_2082.JPG',
    gallery3: '/images/IMG_2806.JPG'
  },
  'whale-shark-1day-labuhan-jambu': {
    card: '/images/whale-shark-1day-labuhan-jambu.PNG',
    hero: '/images/whale-shark-1day-labuhan-jambu-hero.PNG',
    gallery1: '/images/whale-shark-1day-labuhan-jambu-1.PNG',
    gallery2: '/images/whale-shark-1day-labuhan-jambu-2.PNG',
    gallery3: '/images/whale-shark-1day-labuhan-jambu-3.PNG'
  },
  'whale-shark-speedboat': {
    card: '/images/whale-shark-speedboat-3.JPG',
    hero: '/images/whale-shark-speedboat-hero.jpg',
    gallery1: '/images/whale-shark-speedboat-1.jpg',
    gallery2: '/images/whale-shark-speedboat-2.jpg',
    gallery3: '/images/whale-shark-speedboat-3.JPG'
  },
  'whale-shark-2d1n': {
    card: '/images/tripbaru.PNG',
    hero: '/images/IMG_2992.JPG',
    gallery1: '/images/IMG_2079.JPG',
    gallery2: '/images/IMG_2082.JPG',
    gallery3: '/images/IMG_2806.JPG'
  },
  'whale-shark-2d1n-poto-tano': {
    card: '/images/whale-shark-2d1n-poto-tano-3.JPG',
    hero: '/images/whale-shark-2d1n-poto-tano-hero.PNG',
    gallery1: '/images/whale-shark-2d1n-poto-tano-1.PNG',
    gallery2: '/images/whale-shark-2d1n-poto-tano-2.PNG',
    gallery3: '/images/whale-shark-2d1n-poto-tano-3.JPG'
  },
  'whale-shark-2d1n-sekongkang': {
    card: '/images/whale-shark-2d1n-sekongkang.PNG',
    hero: '/images/whale-shark-2d1n-sekongkang-hero.PNG',
    gallery1: '/images/whale-shark-2d1n-sekongkang-1.PNG',
    gallery2: '/images/whale-shark-2d1n-sekongkang-2.PNG',
    gallery3: '/images/whale-shark-2d1n-sekongkang-3.PNG'
  },
  'whale-shark-start-labuhan-jambu': {
    card: '/images/whaleshark.PNG',
    hero: '/images/IMG_2992.JPG',
    gallery1: '/images/IMG_2079.JPG',
    gallery2: '/images/IMG_2082.JPG',
    gallery3: '/images/IMG_2806.JPG'
  },
  'whale-shark-moyo-kenawa-lombok': {
    card: '/images/whale-shark-moyo-kenawa-lombok.PNG',
    hero: '/images/whale-shark-moyo-kenawa-lombok-hero.PNG',
    gallery1: '/images/whale-shark-moyo-kenawa-lombok-1.PNG',
    gallery2: '/images/whale-shark-moyo-kenawa-lombok-2.PNG',
    gallery3: '/images/whale-shark-moyo-kenawa-lombok-3.PNG'
  },
  'trip-4d3n-sumbawa': {
    card: '/images/whale-shark-moyo-kenawa-lombok-hero.PNG',
    hero: '/images/islandjawa.jpg',
    gallery1: '/images/IMG_2992.JPG',
    gallery2: '/images/IMG_2079.JPG',
    gallery3: '/images/IMG_2082.JPG'
  },
  'combo-moyo-whale-shark': {
    card: '/images/moyoisland.JPG',
    hero: '/images/hero.jpg',
    gallery1: '/images/IMG_2992.JPG',
    gallery2: '/images/IMG_2079.JPG',
    gallery3: '/images/IMG_2082.JPG'
  },
  'whale-shark-experience': {
    card: '/images/whaleshark.PNG',
    hero: '/images/IMG_2806.JPG',
    gallery1: '/images/IMG_2992.JPG',
    gallery2: '/images/IMG_2079.JPG',
    gallery3: '/images/IMG_2082.JPG'
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
