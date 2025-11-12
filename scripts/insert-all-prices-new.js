import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nxzgjxghfxymrogybmnu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54emdqeGdoZnh5bXJvZ3libW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1NTc3ODQsImV4cCI6MjA3ODEzMzc4NH0.4TFLQujs7aBKaoKApkuj4-FUlPGlSVock0c0SJ3PVtA';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Template harga untuk semua tour (10 tiers dari 1-10 orang)
const basePrices = [
  { participants: '1', price: 'IDR 9,910,000' },
  { participants: '2', price: 'IDR 5,020,000' },
  { participants: '3', price: 'IDR 3,400,000' },
  { participants: '4', price: 'IDR 2,580,000' },
  { participants: '5', price: 'IDR 2,100,000' },
  { participants: '6', price: 'IDR 1,780,000' },
  { participants: '7', price: 'IDR 1,620,000' },
  { participants: '8', price: 'IDR 1,440,000' },
  { participants: '9', price: 'IDR 1,290,000' },
  { participants: '10', price: 'IDR 1,180,000' }
];

// Daftar semua tour
const tourNames = [
  'whale-shark-start-sumbawa',
  'whale-shark-2d1n',
  'combo-moyo-whale-shark',
  'whale-shark-start-labuhan-jambu',
  'trip-4d3n-sumbawa',
  'whale-shark-experience',
  'whale-shark-speedboat',
  'whale-shark-1day-labuhan-jambu',
  'whale-shark-2d1n-poto-tano',
  'whale-shark-2d1n-sekongkang',
  'whale-shark-moyo-kenawa-lombok'
];

// Generate semua harga untuk semua tour
const allPrices = [];
tourNames.forEach(tourName => {
  basePrices.forEach(({ participants, price }) => {
    allPrices.push({
      tour_name: tourName,
      participants: participants,
      open_trip_price: '-',
      full_private_price: price
    });
  });
});

async function insertAllPrices() {
  console.log('Starting to insert all tour prices...\n');
  console.log(`Total prices to insert: ${allPrices.length}\n`);
  
  let successCount = 0;
  let errorCount = 0;

  for (const price of allPrices) {
    try {
      // Check if already exists
      const { data: existing } = await supabase
        .from('tour_prices')
        .select('id')
        .eq('tour_name', price.tour_name)
        .eq('participants', price.participants)
        .single();

      if (existing) {
        // Update existing
        const { error } = await supabase
          .from('tour_prices')
          .update({
            open_trip_price: price.open_trip_price,
            full_private_price: price.full_private_price
          })
          .eq('id', existing.id);

        if (error) throw error;
        console.log(`✓ Updated: ${price.tour_name} - ${price.participants}`);
      } else {
        // Insert new
        const { error } = await supabase
          .from('tour_prices')
          .insert([price]);

        if (error) throw error;
        console.log(`✓ Inserted: ${price.tour_name} - ${price.participants}`);
      }
      successCount++;
    } catch (error) {
      console.error(`✗ Error for ${price.tour_name} - ${price.participants}:`, error.message);
      errorCount++;
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log(`✓ Successfully processed: ${successCount} prices`);
  console.log(`✗ Failed: ${errorCount} prices`);
  console.log('='.repeat(50));
  console.log('\n✅ All prices inserted/updated!');
}

insertAllPrices().catch(console.error);
