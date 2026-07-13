import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nxzgjxghfxymrogybmnu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54emdqeGdoZnh5bXJvZ3libW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1NTc3ODQsImV4cCI6MjA3ODEzMzc4NH0.4TFLQujs7aBKaoKApkuj4-FUlPGlSVock0c0SJ3PVtA';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

function isAdminUpload(url) {
  // Admin dashboard uploads to 'tour-images/' with timestamped filenames
  // Our scripts uploaded to 'tour-images-compressed/' and 'tour-images-fixed/'
  return url.includes('/tour-images/') && !url.includes('/tour-images-compressed/') && !url.includes('/tour-images-fixed/');
}

async function preferAdminUploads() {
  console.log('🧭 Prefer admin dashboard uploads per (tour_name, image_type) and remove others');

  const { data: rows, error } = await supabase
    .from('tour_images')
    .select('id,tour_name,image_type,image_url')
    .order('id', { ascending: false });

  if (error) {
    console.error('Error fetching rows:', error);
    process.exit(1);
  }

  // Group
  const groups = new Map();
  for (const r of rows) {
    const key = `${r.tour_name}__${r.image_type}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(r);
  }

  const toDelete = [];
  const toKeep = [];

  for (const [key, list] of groups.entries()) {
    // Choose preferred row: admin upload if exists, else newest id
    const adminRows = list.filter(r => isAdminUpload(r.image_url));
    let chosen;
    if (adminRows.length > 0) {
      chosen = adminRows.reduce((a, b) => (a.id > b.id ? a : b));
    } else {
      chosen = list[0]; // already sorted desc by id
    }

    toKeep.push(chosen);
    list.forEach(r => { if (r.id !== chosen.id) toDelete.push(r.id); });
  }

  if (toDelete.length > 0) {
    console.log(`🗑️ Will delete ${toDelete.length} non-preferred rows`);
    const { error: delErr } = await supabase
      .from('tour_images')
      .delete()
      .in('id', toDelete);
    if (delErr) {
      console.error('Delete error:', delErr);
    } else {
      console.log('✅ Deleted non-preferred rows');
    }
  } else {
    console.log('✅ No extra rows to delete');
  }

  // Optionally, add cache-busting to chosen URLs
  const timestamp = Date.now();
  for (const row of toKeep) {
    const base = row.image_url.split('?')[0];
    const newUrl = `${base}?v=${timestamp}`;
    await supabase
      .from('tour_images')
      .update({ image_url: newUrl })
      .eq('id', row.id);
  }

  console.log('🎉 Preference applied. Admin-chosen images will be used.');
}

preferAdminUploads().catch(err => { console.error(err); process.exit(1); });
