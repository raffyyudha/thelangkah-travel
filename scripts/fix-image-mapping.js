import { createClient } from '@supabase/supabase-js';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const supabaseUrl = 'https://nxzgjxghfxymrogybmnu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54emdqeGdoZnh5bXJvZ3libW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1NTc3ODQsImV4cCI6MjA3ODEzMzc4NH0.4TFLQujs7aBKaoKApkuj4-FUlPGlSVock0c0SJ3PVtA';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const tempDir = path.join(__dirname, '../temp-fix');

// Create temp directory if it doesn't exist
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

// MAPPING YANG BENAR - sesuai dengan yang asli di website
const correctTourImages = {
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

// Compression settings
const compressionSettings = {
  hero: { width: 1920, quality: 85 },
  card: { width: 800, quality: 80 },
  gallery: { width: 1200, quality: 80 },
  default: { width: 1200, quality: 75 }
};

async function compressImage(inputPath, outputPath, settings = compressionSettings.default) {
  try {
    const info = await sharp(inputPath)
      .resize(settings.width, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ 
        quality: settings.quality, 
        progressive: true,
        mozjpeg: true
      })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const compressedSize = info.size;
    const savings = ((originalSize - compressedSize) / originalSize * 100).toFixed(2);
    
    console.log(`✓ ${path.basename(inputPath)}: ${(originalSize / 1024).toFixed(2)}KB → ${(compressedSize / 1024).toFixed(2)}KB (${savings}% saved)`);
    
    return true;
  } catch (error) {
    console.error(`✗ Error compressing ${inputPath}:`, error.message);
    return false;
  }
}

async function uploadCompressedImage(filePath, fileName) {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    const supabasePath = `tour-images-fixed/${fileName}`;

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('images')
      .upload(supabasePath, fileBuffer, {
        contentType: 'image/jpeg',
        upsert: true
      });

    if (uploadError) {
      console.error(`✗ Error uploading ${fileName}:`, uploadError.message);
      return null;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(supabasePath);

    return publicUrl;
  } catch (error) {
    console.error(`✗ Error uploading ${fileName}:`, error.message);
    return null;
  }
}

async function updateDatabaseWithCorrectImage(tourName, imageType, newUrl) {
  try {
    const { error } = await supabase
      .from('tour_images')
      .update({ image_url: newUrl })
      .eq('tour_name', tourName)
      .eq('image_type', imageType);

    if (error) {
      console.error(`✗ Error updating DB for ${tourName} - ${imageType}:`, error.message);
      return false;
    }

    return true;
  } catch (error) {
    console.error(`✗ Error updating DB for ${tourName} - ${imageType}:`, error.message);
    return false;
  }
}

async function fixImageMapping() {
  console.log('🔧 Fixing image mapping with correct images...\n');
  
  let successCount = 0;
  let errorCount = 0;
  const processedFiles = new Set();

  for (const [tourName, images] of Object.entries(correctTourImages)) {
    console.log(`\n📦 Fixing tour: ${tourName}`);
    
    for (const [imageType, imagePath] of Object.entries(images)) {
      try {
        const publicDir = path.join(__dirname, '../public');
        const fullPath = path.join(publicDir, imagePath);
        
        if (!fs.existsSync(fullPath)) {
          console.log(`⚠️  File not found: ${imagePath}`);
          errorCount++;
          continue;
        }

        // Create unique filename for this tour and image type
        const fileKey = `${tourName}_${imageType}_${path.basename(imagePath)}`;
        
        if (processedFiles.has(fileKey)) {
          console.log(`⏭️  Already processed: ${fileKey}`);
          continue;
        }
        processedFiles.add(fileKey);

        // Determine compression settings
        let settings = compressionSettings.default;
        if (imageType === 'hero') settings = compressionSettings.hero;
        else if (imageType === 'card') settings = compressionSettings.card;
        else if (imageType.startsWith('gallery')) settings = compressionSettings.gallery;

        // Compress image
        const compressedFileName = `${tourName}_${imageType}_fixed.jpg`;
        const compressedPath = path.join(tempDir, compressedFileName);
        
        console.log(`🔄 Compressing: ${tourName} - ${imageType}`);
        const compressionSuccess = await compressImage(fullPath, compressedPath, settings);
        
        if (!compressionSuccess) {
          errorCount++;
          continue;
        }

        // Upload compressed image
        console.log(`📤 Uploading: ${compressedFileName}`);
        const newUrl = await uploadCompressedImage(compressedPath, compressedFileName);
        
        if (!newUrl) {
          errorCount++;
          continue;
        }

        // Update database
        console.log(`💾 Updating database: ${tourName} - ${imageType}`);
        const dbUpdateSuccess = await updateDatabaseWithCorrectImage(tourName, imageType, newUrl);
        
        if (dbUpdateSuccess) {
          successCount++;
          console.log(`✅ Successfully fixed: ${tourName} - ${imageType}`);
        } else {
          errorCount++;
        }

        // Clean up temp file
        if (fs.existsSync(compressedPath)) {
          fs.unlinkSync(compressedPath);
        }

      } catch (error) {
        console.error(`✗ Error fixing ${tourName} - ${imageType}:`, error.message);
        errorCount++;
      }
    }
  }

  // Clean up temp directory
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true });
  }

  console.log('\n' + '='.repeat(60));
  console.log('🔧 IMAGE MAPPING FIX SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Successfully fixed: ${successCount} images`);
  console.log(`❌ Failed: ${errorCount} images`);
  console.log('='.repeat(60));
  
  if (successCount > 0) {
    console.log('\n🎉 Image mapping fixed successfully!');
    console.log('✨ All images should now display correctly on the website.');
  } else {
    console.log('\n⚠️  No images were successfully fixed. Please check the errors above.');
  }
}

fixImageMapping().catch(console.error);
