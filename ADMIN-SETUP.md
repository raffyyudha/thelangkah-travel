# Admin Dashboard Setup Guide

## 🚀 Quick Start

### 1. Setup Supabase Database

1. Go to your Supabase project: https://nxzgjxghfxymrogybmnu.supabase.co
2. Navigate to **SQL Editor**
3. Copy and paste the content from `supabase-schema.sql`
4. Click **Run** to create tables and policies

### 2. Install Dependencies

```bash
npm install @supabase/supabase-js
npm install --save-dev sharp
```

### 3. Upload Existing Images to Supabase

```bash
npm run upload-images
```

This will:
- Upload all tour images (hero + 3 gallery images) for all 6 tours
- Save image URLs to Supabase database
- Total: 24 images uploaded automatically

### 4. Compress Images (Optional but Recommended)

```bash
npm run compress-images
```

This will:
- Compress all images in `public/images`
- Output to `public/images-compressed`
- Reduce file sizes by ~60-80%
- Convert PNG/WebP to optimized JPG

After compression:
1. Backup original `public/images` folder
2. Delete `public/images`
3. Rename `public/images-compressed` to `public/images`
4. Run `npm run upload-images` again to upload compressed versions

### 4. Access Admin Dashboard

1. Navigate to: `http://localhost:3000/admin`
2. Default password: `sumbawa2025`
3. **IMPORTANT:** Change password in `src/app/admin/page.tsx` line 28

## 📋 Features

### Manage Prices
- Add/Edit/Delete tour prices
- Support for multiple participant tiers
- Separate pricing for Open Trip and Full Private

### Manage Images
- Upload images directly to Supabase Storage
- Organize by tour name and image type (hero, gallery1-3)
- Delete images with automatic storage cleanup

## 🔐 Security Notes

1. **Change Admin Password:**
   - Edit `src/app/admin/page.tsx`
   - Line 28: `const ADMIN_PASSWORD = "sumbawa2025";`
   - Use a strong, unique password

2. **Supabase RLS (Row Level Security):**
   - Public can READ prices and images
   - Only authenticated users can INSERT/UPDATE/DELETE
   - Storage bucket is public for images

3. **Production Deployment:**
   - Consider adding proper authentication (Supabase Auth)
   - Move credentials to environment variables
   - Enable rate limiting

## 📊 Database Schema

### tour_prices
- `id`: UUID (Primary Key)
- `tour_name`: Text (e.g., "whale-shark-start-sumbawa")
- `participants`: Text (e.g., "2-10")
- `open_trip_price`: Text (e.g., "IDR. 1,450,000/Person")
- `full_private_price`: Text (e.g., "IDR. 2,500,000/person")
- `created_at`: Timestamp
- `updated_at`: Timestamp

### tour_images
- `id`: UUID (Primary Key)
- `tour_name`: Text
- `image_url`: Text (Supabase Storage URL)
- `image_type`: Text (hero, gallery1, gallery2, gallery3)
- `created_at`: Timestamp

## 🎯 Next Steps

1. ✅ Run SQL schema in Supabase
2. ✅ Install dependencies
3. ✅ Compress images (optional)
4. ✅ Change admin password
5. ✅ Test admin dashboard at /admin
6. ✅ Upload images via dashboard
7. ✅ Update tour prices

## 🛠️ Troubleshooting

### Images not showing?
- Check Supabase Storage bucket is public
- Verify image URLs in database
- Check browser console for errors

### Can't login to admin?
- Verify password in code matches what you're entering
- Check browser console for errors
- Clear browser cache

### Prices not updating on tour pages?
- You'll need to integrate Supabase queries into tour pages
- Currently, prices are hardcoded in tour pages
- Next step: Replace hardcoded prices with Supabase data

## 📝 TODO: Integrate Prices into Tour Pages

To display dynamic prices from Supabase on tour pages:

```typescript
// In tour page component
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

const [prices, setPrices] = useState([]);

useEffect(() => {
  async function loadPrices() {
    const { data } = await supabase
      .from('tour_prices')
      .select('*')
      .eq('tour_name', 'whale-shark-start-sumbawa'); // Change per tour
    
    setPrices(data || []);
  }
  loadPrices();
}, []);
```

Would you like me to implement this integration?
