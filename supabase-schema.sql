-- Create tour_prices table
CREATE TABLE IF NOT EXISTS tour_prices (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  tour_name TEXT NOT NULL,
  participants TEXT NOT NULL,
  open_trip_price TEXT NOT NULL,
  full_private_price TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create tour_images table
CREATE TABLE IF NOT EXISTS tour_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  tour_name TEXT NOT NULL,
  image_url TEXT NOT NULL,
  image_type TEXT NOT NULL, -- 'hero', 'gallery1', 'gallery2', 'gallery3'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE(tour_name, image_type)
);

-- Create storage bucket for images
INSERT INTO storage.buckets (id, name, public)
VALUES ('images', 'images', true)
ON CONFLICT (id) DO NOTHING;

-- Enable RLS (Row Level Security)
ALTER TABLE tour_prices ENABLE ROW LEVEL SECURITY;
ALTER TABLE tour_images ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public can read tour_prices" ON tour_prices;
DROP POLICY IF EXISTS "Public can read tour_images" ON tour_images;
DROP POLICY IF EXISTS "Anyone can insert tour_prices" ON tour_prices;
DROP POLICY IF EXISTS "Anyone can update tour_prices" ON tour_prices;
DROP POLICY IF EXISTS "Anyone can delete tour_prices" ON tour_prices;
DROP POLICY IF EXISTS "Anyone can insert tour_images" ON tour_images;
DROP POLICY IF EXISTS "Anyone can update tour_images" ON tour_images;
DROP POLICY IF EXISTS "Anyone can delete tour_images" ON tour_images;
DROP POLICY IF EXISTS "Public can view images" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can upload images" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can update images" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can delete images" ON storage.objects;

-- Create policies for public read access
CREATE POLICY "Public can read tour_prices" ON tour_prices
  FOR SELECT USING (true);

CREATE POLICY "Public can read tour_images" ON tour_images
  FOR SELECT USING (true);

-- Create policies for managing data (allow anon for upload script)
CREATE POLICY "Anyone can insert tour_prices" ON tour_prices
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can update tour_prices" ON tour_prices
  FOR UPDATE USING (true);

CREATE POLICY "Anyone can delete tour_prices" ON tour_prices
  FOR DELETE USING (true);

CREATE POLICY "Anyone can insert tour_images" ON tour_images
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can update tour_images" ON tour_images
  FOR UPDATE USING (true);

CREATE POLICY "Anyone can delete tour_images" ON tour_images
  FOR DELETE USING (true);

-- Storage policies
CREATE POLICY "Public can view images" ON storage.objects
  FOR SELECT USING (bucket_id = 'images');

CREATE POLICY "Anyone can upload images" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'images');

CREATE POLICY "Anyone can update images" ON storage.objects
  FOR UPDATE USING (bucket_id = 'images');

CREATE POLICY "Anyone can delete images" ON storage.objects
  FOR DELETE USING (bucket_id = 'images');

-- Create indexes for better performance
DROP INDEX IF EXISTS idx_tour_prices_tour_name;
DROP INDEX IF EXISTS idx_tour_images_tour_name;
DROP INDEX IF EXISTS idx_tour_images_image_type;

CREATE INDEX idx_tour_prices_tour_name ON tour_prices(tour_name);
CREATE INDEX idx_tour_images_tour_name ON tour_images(tour_name);
CREATE INDEX idx_tour_images_image_type ON tour_images(image_type);

-- Insert sample data for tour_prices (skip if already exists)
INSERT INTO tour_prices (tour_name, participants, open_trip_price, full_private_price) VALUES
('whale-shark-start-sumbawa', '2 - 10', 'IDR. 1,450,000/Person', 'IDR. 2,500,000/person'),
('whale-shark-2d1n', '2 -10', 'IDR. 1,960,000/Person', 'IDR. 2,850,000/person')
ON CONFLICT DO NOTHING;

-- Note: Run this SQL in your Supabase SQL Editor
-- After running, you can access the admin dashboard at /admin
-- Default password: sumbawa2025 (change in the code)
