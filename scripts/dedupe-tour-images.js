import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nxzgjxghfxymrogybmnu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54emdqeGdoZnh5bXJvZ3libW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1NTc3ODQsImV4cCI6MjA3ODEzMzc4NH0.4TFLQujs7aBKaoKApkuj4-FUlPGlSVock0c0SJ3PVtA';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function dedupe() {
  console.log('🧹 Deduplicating tour_images (keep newest id per tour_name + image_type)...');

  // Fetch all rows
  const { data: rows, error } = await supabase
    .from('tour_images')
    .select('id,tour_name,image_type,image_url')
    .order('id', { ascending: false });

  if (error) {
    console.error('Error fetching rows:', error);
    process.exit(1);
  }

  // Group by key
  const seen = new Set();
  const toDelete = [];

  for (const row of rows) {
    const key = `${row.tour_name}__${row.image_type}`;
    if (seen.has(key)) {
      toDelete.push(row);
    } else {
      seen.add(key);
    }
  }

  if (toDelete.length === 0) {
    console.log('✅ No duplicates found.');
    return;
  }

  console.log(`⚠️ Found ${toDelete.length} duplicates. Deleting older rows...`);

  // Delete in batches
  const batchSize = 50;
  for (let i = 0; i < toDelete.length; i += batchSize) {
    const batch = toDelete.slice(i, i + batchSize);
    const ids = batch.map(r => r.id);
    const { error: delErr } = await supabase
      .from('tour_images')
      .delete()
      .in('id', ids);
    if (delErr) {
      console.error('Delete error:', delErr);
    } else {
      console.log(`🗑️ Deleted ${ids.length} duplicate rows: [${ids.join(', ')}]`);
    }
  }

  console.log('🎉 Deduplication complete.');
}

dedupe().catch(err => { console.error(err); process.exit(1); });
