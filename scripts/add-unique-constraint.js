import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nxzgjxghfxymrogybmnu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54emdqeGdoZnh5bXJvZ3libW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1NTc3ODQsImV4cCI6MjA3ODEzMzc4NH0.4TFLQujs7aBKaoKApkuj4-FUlPGlSVock0c0SJ3PVtA';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function addUniqueConstraint() {
  console.log('🔒 Adding unique constraint to prevent duplicate (tour_name, image_type)...\n');
  
  try {
    // First check if constraint already exists
    const { data: constraints } = await supabase
      .rpc('get_table_constraints', { table_name: 'tour_images' })
      .single();

    console.log('Note: This script requires database admin access.');
    console.log('Please run this SQL command in Supabase SQL Editor:\n');
    
    const sql = `
-- Add unique constraint to prevent duplicate (tour_name, image_type)
ALTER TABLE public.tour_images 
ADD CONSTRAINT tour_images_unique UNIQUE (tour_name, image_type);
`;
    
    console.log(sql);
    console.log('\nThis will prevent future duplicates in the tour_images table.');
    console.log('✅ After running this SQL, Admin Dashboard uploads will be guaranteed unique.');

  } catch (error) {
    console.log('Note: Cannot execute DDL via client. Please run this SQL in Supabase SQL Editor:\n');
    
    const sql = `
-- Add unique constraint to prevent duplicate (tour_name, image_type)
ALTER TABLE public.tour_images 
ADD CONSTRAINT tour_images_unique UNIQUE (tour_name, image_type);
`;
    
    console.log(sql);
  }
}

addUniqueConstraint();
