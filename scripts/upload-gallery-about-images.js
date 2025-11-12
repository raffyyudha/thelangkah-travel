import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const supabaseUrl = 'https://nxzgjxghfxymrogybmnu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54emdqeGdoZnh5bXJvZ3libW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1NTc3ODQsImV4cCI6MjA3ODEzMzc4NH0.4TFLQujs7aBKaoKApkuj4-FUlPGlSVock0c0SJ3PVtA';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Gallery images - using existing images from public folder
const galleryImages = [
  '/images/hero.jpg',
  '/images/islandjawa.jpg',
  '/images/IMG_2992.JPG',
  '/images/IMG_2079.JPG',
  '/images/IMG_2082.JPG',
  '/images/IMG_2806.JPG',
  '/images/kenawa/sunset.jpg',
  '/images/hero.PNG',
  '/images/IMG_3429.JPG',
  '/images/IMG_2805.JPG'
];

// About page images - 6 sections
const aboutImages = {
  'hero1': '/images/hero.jpg', // Pengalaman Lokal Autentik
  'hero2': '/images/islandjawa.jpg', // Layanan Profesional
  'feature1': '/images/IMG_2992.JPG', // Keselamatan Utama
  'feature2': '/images/IMG_2079.JPG', // Eco-Conscious
  'feature3': '/images/IMG_2082.JPG', // Community Based
  'feature4': '/images/IMG_2806.JPG' // Tim yang Passionate
};

async function uploadGalleryImages() {
  console.log('\n📸 Uploading Gallery Images...\n');
  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < galleryImages.length; i++) {
    const imagePath = galleryImages[i];
    try {
      const publicDir = path.join(__dirname, '../public');
      const fullPath = path.join(publicDir, imagePath);
      
      if (!fs.existsSync(fullPath)) {
        console.log(`⚠️  File not found: ${imagePath}`);
        errorCount++;
        continue;
      }

      const fileBuffer = fs.readFileSync(fullPath);
      const fileExt = path.extname(imagePath);
      const fileName = `gallery_${i}_${Date.now()}${fileExt}`;
      const filePath = `gallery/${fileName}`;

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, fileBuffer, {
          contentType: `image/${fileExt.replace('.', '')}`,
          upsert: false
        });

      if (uploadError) {
        console.error(`✗ Error uploading ${imagePath}:`, uploadError.message);
        errorCount++;
        continue;
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(filePath);

      // Save to database
      const { error: dbError } = await supabase
        .from('gallery_images')
        .insert([{
          image_url: publicUrl,
          display_order: i
        }]);

      if (dbError) {
        console.error(`✗ Error saving to DB:`, dbError.message);
        errorCount++;
        continue;
      }

      console.log(`✓ Uploaded gallery image ${i + 1}/${galleryImages.length}`);
      successCount++;
    } catch (error) {
      console.error(`✗ Error processing ${imagePath}:`, error.message);
      errorCount++;
    }
  }

  console.log(`\n✅ Gallery: ${successCount} uploaded, ${errorCount} failed\n`);
}

async function uploadAboutImages() {
  console.log('\n📄 Uploading About Page Images...\n');
  let successCount = 0;
  let errorCount = 0;

  for (const [section, imagePath] of Object.entries(aboutImages)) {
    try {
      const publicDir = path.join(__dirname, '../public');
      const fullPath = path.join(publicDir, imagePath);
      
      if (!fs.existsSync(fullPath)) {
        console.log(`⚠️  File not found: ${imagePath}`);
        errorCount++;
        continue;
      }

      const fileBuffer = fs.readFileSync(fullPath);
      const fileExt = path.extname(imagePath);
      const fileName = `about_${section}_${Date.now()}${fileExt}`;
      const filePath = `about/${fileName}`;

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, fileBuffer, {
          contentType: `image/${fileExt.replace('.', '')}`,
          upsert: false
        });

      if (uploadError) {
        console.error(`✗ Error uploading ${section}:`, uploadError.message);
        errorCount++;
        continue;
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(filePath);

      // Check if exists
      const { data: existing } = await supabase
        .from('about_images')
        .select('id')
        .eq('section', section)
        .single();

      if (existing) {
        await supabase
          .from('about_images')
          .update({ image_url: publicUrl })
          .eq('section', section);
      } else {
        await supabase
          .from('about_images')
          .insert([{
            image_url: publicUrl,
            section: section
          }]);
      }

      console.log(`✓ Uploaded about image: ${section}`);
      successCount++;
    } catch (error) {
      console.error(`✗ Error processing ${section}:`, error.message);
      errorCount++;
    }
  }

  console.log(`\n✅ About: ${successCount} uploaded, ${errorCount} failed\n`);
}

async function main() {
  console.log('='.repeat(50));
  console.log('Starting Gallery & About Images Upload');
  console.log('='.repeat(50));

  await uploadGalleryImages();
  await uploadAboutImages();

  console.log('='.repeat(50));
  console.log('✅ Upload Complete!');
  console.log('='.repeat(50));
}

main().catch(console.error);
