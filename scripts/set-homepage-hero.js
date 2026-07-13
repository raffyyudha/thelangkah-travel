import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nxzgjxghfxymrogybmnu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54emdqeGdoZnh5bXJvZ3libW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1NTc3ODQsImV4cCI6MjA3ODEzMzc4NH0.4TFLQujs7aBKaoKApkuj4-FUlPGlSVock0c0SJ3PVpA';

const supabase = createClient(supabaseUrl, supabaseKey);

async function setHomepageHero() {
  try {
    console.log('Setting homepage hero image...');

    // Use the hero.PNG image that user uploaded
    const imageUrl = '/images/hero.PNG';

    // Check if hero image already exists
    const { data: existing, error: checkError } = await supabase
      .from('homepage_images')
      .select('*')
      .eq('section', 'hero')
      .maybeSingle();

    if (checkError) {
      console.error('Error checking existing image:', checkError);
      return;
    }

    if (existing) {
      // Update existing
      console.log('Updating existing hero image...');
      const { error: updateError } = await supabase
        .from('homepage_images')
        .update({ 
          image_url: imageUrl,
          title: 'Homepage Hero Banner',
          description: 'Sunset view of Sumbawa Island'
        })
        .eq('section', 'hero');

      if (updateError) {
        console.error('Update error:', updateError);
        return;
      }

      console.log('✅ Homepage hero image updated successfully!');
    } else {
      // Insert new
      console.log('Inserting new hero image...');
      const { error: insertError } = await supabase
        .from('homepage_images')
        .insert([
          {
            image_url: imageUrl,
            section: 'hero',
            title: 'Homepage Hero Banner',
            description: 'Sunset view of Sumbawa Island'
          }
        ]);

      if (insertError) {
        console.error('Insert error:', insertError);
        return;
      }

      console.log('✅ Homepage hero image inserted successfully!');
    }

    console.log('Image URL:', imageUrl);

  } catch (error) {
    console.error('Error:', error);
  }
}

setHomepageHero();
