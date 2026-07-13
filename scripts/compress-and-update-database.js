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

const inputDir = path.join(__dirname, '../public/images');
const tempDir = path.join(__dirname, '../temp-compressed');

// Create temp directory if it doesn't exist
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

// Compression settings for different image types
const compressionSettings = {
  hero: { width: 1920, quality: 85 },      // Hero images - high quality
  card: { width: 800, quality: 80 },       // Card images - medium quality
  gallery: { width: 1200, quality: 80 },   // Gallery images - medium quality
  default: { width: 1200, quality: 75 }    // Default compression
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
    
    return {
      originalSize,
      compressedSize,
      savings: parseFloat(savings)
    };
  } catch (error) {
    console.error(`✗ Error compressing ${inputPath}:`, error.message);
    return null;
  }
}

async function uploadCompressedImage(filePath, fileName) {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    const supabasePath = `tour-images-compressed/${fileName}`;

    // Upload to Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('images')
      .upload(supabasePath, fileBuffer, {
        contentType: 'image/jpeg',
        upsert: true // Replace if exists
      });

    if (uploadError) {
      console.error(`✗ Error uploading ${fileName}:`, uploadError.message);
      return null;
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(supabasePath);

    return publicUrl;
  } catch (error) {
    console.error(`✗ Error uploading ${fileName}:`, error.message);
    return null;
  }
}

async function updateDatabaseWithCompressedImage(tourName, imageType, newUrl) {
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

async function compressAndUpdateAllImages() {
  console.log('🚀 Starting image compression and database update...\n');
  
  let totalOriginalSize = 0;
  let totalCompressedSize = 0;
  let successCount = 0;
  let errorCount = 0;
  const processedFiles = new Set(); // To avoid processing duplicates

  for (const [tourName, images] of Object.entries(tourImages)) {
    console.log(`\n📦 Processing tour: ${tourName}`);
    
    for (const [imageType, imagePath] of Object.entries(images)) {
      try {
        const publicDir = path.join(__dirname, '../public');
        const fullPath = path.join(publicDir, imagePath);
        
        if (!fs.existsSync(fullPath)) {
          console.log(`⚠️  File not found: ${imagePath}`);
          errorCount++;
          continue;
        }

        // Skip if already processed (same file used in multiple tours)
        const fileKey = path.basename(imagePath);
        if (processedFiles.has(fileKey)) {
          console.log(`⏭️  Skipping already processed: ${fileKey}`);
          continue;
        }
        processedFiles.add(fileKey);

        // Determine compression settings based on image type
        let settings = compressionSettings.default;
        if (imageType === 'hero') settings = compressionSettings.hero;
        else if (imageType === 'card') settings = compressionSettings.card;
        else if (imageType.startsWith('gallery')) settings = compressionSettings.gallery;

        // Compress image
        const compressedFileName = `${tourName}_${imageType}_compressed.jpg`;
        const compressedPath = path.join(tempDir, compressedFileName);
        
        console.log(`🔄 Compressing: ${tourName} - ${imageType}`);
        const compressionResult = await compressImage(fullPath, compressedPath, settings);
        
        if (!compressionResult) {
          errorCount++;
          continue;
        }

        totalOriginalSize += compressionResult.originalSize;
        totalCompressedSize += compressionResult.compressedSize;

        // Upload compressed image to Supabase
        console.log(`📤 Uploading: ${compressedFileName}`);
        const newUrl = await uploadCompressedImage(compressedPath, compressedFileName);
        
        if (!newUrl) {
          errorCount++;
          continue;
        }

        // Update database with new URL
        console.log(`💾 Updating database: ${tourName} - ${imageType}`);
        const dbUpdateSuccess = await updateDatabaseWithCompressedImage(tourName, imageType, newUrl);
        
        if (dbUpdateSuccess) {
          successCount++;
          console.log(`✅ Successfully processed: ${tourName} - ${imageType}`);
        } else {
          errorCount++;
        }

        // Clean up temp file
        fs.unlinkSync(compressedPath);

      } catch (error) {
        console.error(`✗ Error processing ${tourName} - ${imageType}:`, error.message);
        errorCount++;
      }
    }
  }

  // Clean up temp directory
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true });
  }

  // Summary
  const totalSavings = ((totalOriginalSize - totalCompressedSize) / totalOriginalSize * 100).toFixed(2);
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 COMPRESSION SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Successfully processed: ${successCount} images`);
  console.log(`❌ Failed: ${errorCount} images`);
  console.log(`📏 Total original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`📦 Total compressed size: ${(totalCompressedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`💾 Total space saved: ${((totalOriginalSize - totalCompressedSize) / 1024 / 1024).toFixed(2)} MB (${totalSavings}%)`);
  console.log('='.repeat(60));
  
  if (successCount > 0) {
    console.log('\n🎉 Image compression and database update completed successfully!');
    console.log('✨ All images in the database are now optimized and lighter.');
    console.log('🌐 Website should load faster now!');
  } else {
    console.log('\n⚠️  No images were successfully processed. Please check the errors above.');
  }
}

// Run the compression and update process
compressAndUpdateAllImages().catch(console.error);
