import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const supabaseUrl = 'https://nxzgjxghfxymrogybmnu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54emdqeGdoZnh5bXJvZ3libW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1NTc3ODQsImV4cCI6MjA3ODEzMzc4NH0.4TFLQujs7aBKaoKApkuj4-FUlPGlSVock0c0SJ3PVpA';

const supabase = createClient(supabaseUrl, supabaseKey);

async function uploadHomepageHero() {
  try {
    console.log('Starting homepage hero image upload...');

    // Path to the current hero image
    const heroImagePath = path.join(__dirname, '../public/images/hero.jpg');
    
    if (!fs.existsSync(heroImagePath)) {
      console.error('Hero image not found at:', heroImagePath);
      return;
    }

    // Read the file
    const fileBuffer = fs.readFileSync(heroImagePath);
    const fileName = `homepage/hero-${Date.now()}.jpg`;

    // Upload to Supabase Storage
    console.log('Uploading hero image to storage...');
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('images')
      .upload(fileName, fileBuffer, {
        contentType: 'image/jpeg',
        upsert: false
      });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      return;
    }

    console.log('Upload successful:', uploadData);

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('images')
      .getPublicUrl(fileName);

    const publicUrl = urlData.publicUrl;
    console.log('Public URL:', publicUrl);

    // Insert into database
    console.log('Inserting into database...');
    const { data: dbData, error: dbError } = await supabase
      .from('homepage_images')
      .upsert([
        {
          image_url: publicUrl,
          section: 'hero',
          title: 'Homepage Hero Banner',
          description: 'Main banner image for homepage'
        }
      ], {
        onConflict: 'section'
      });

    if (dbError) {
      console.error('Database error:', dbError);
      return;
    }

    console.log('✅ Homepage hero image uploaded successfully!');
    console.log('Database record:', dbData);

  } catch (error) {
    console.error('Error:', error);
  }
}

uploadHomepageHero();
