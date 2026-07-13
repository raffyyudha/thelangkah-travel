import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nxzgjxghfxymrogybmnu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54emdqeGdoZnh5bXJvZ3libW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1NTc3ODQsImV4cCI6MjA3ODEzMzc4NH0.4TFLQujs7aBKaoKApkuj4-FUlPGlSVock0c0SJ3PVtA';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const allPrices = [
  // Tour 1: whale-shark-start-sumbawa (Private tour dengan 10 tiers)
  {
    tour_name: 'whale-shark-start-sumbawa',
    participants: '1',
    open_trip_price: '-',
    full_private_price: 'IDR 9,910,000'
  },
  {
    tour_name: 'whale-shark-start-sumbawa',
    participants: '2',
    open_trip_price: '-',
    full_private_price: 'IDR 5,020,000'
  },
  {
    tour_name: 'whale-shark-start-sumbawa',
    participants: '3',
    open_trip_price: '-',
    full_private_price: 'IDR 3,400,000'
  },
  {
    tour_name: 'whale-shark-start-sumbawa',
    participants: '4',
    open_trip_price: '-',
    full_private_price: 'IDR 2,580,000'
  },
  {
    tour_name: 'whale-shark-start-sumbawa',
    participants: '5',
    open_trip_price: '-',
    full_private_price: 'IDR 2,100,000'
  },
  {
    tour_name: 'whale-shark-start-sumbawa',
    participants: '6',
    open_trip_price: '-',
    full_private_price: 'IDR 1,780,000'
  },
  {
    tour_name: 'whale-shark-start-sumbawa',
    participants: '7',
    open_trip_price: '-',
    full_private_price: 'IDR 1,620,000'
  },
  {
    tour_name: 'whale-shark-start-sumbawa',
    participants: '8',
    open_trip_price: '-',
    full_private_price: 'IDR 1,440,000'
  },
  {
    tour_name: 'whale-shark-start-sumbawa',
    participants: '9',
    open_trip_price: '-',
    full_private_price: 'IDR 1,290,000'
  },
  {
    tour_name: 'whale-shark-start-sumbawa',
    participants: '10',
    open_trip_price: '-',
    full_private_price: 'IDR 1,180,000'
  },
  
  // Tour 2: whale-shark-2d1n
  {
    tour_name: 'whale-shark-2d1n',
    participants: '2 -10',
    open_trip_price: 'IDR. 1,960,000/Person',
    full_private_price: 'IDR. 2,850,000/person'
  },
  
  // Tour 3: combo-moyo-whale-shark
  {
    tour_name: 'combo-moyo-whale-shark',
    participants: '2-10',
    open_trip_price: 'IDR. 1,450,000/orang',
    full_private_price: 'IDR. 2,500,000/orang'
  },
  
  // Tour 4: whale-shark-start-labuhan-jambu (8 tiers)
  {
    tour_name: 'whale-shark-start-labuhan-jambu',
    participants: '1',
    open_trip_price: 'IDR. 8,890,000. / Person',
    full_private_price: '-'
  },
  {
    tour_name: 'whale-shark-start-labuhan-jambu',
    participants: '2',
    open_trip_price: 'IDR. 4,685,000. / Person',
    full_private_price: '-'
  },
  {
    tour_name: 'whale-shark-start-labuhan-jambu',
    participants: '3',
    open_trip_price: 'IDR. 3,425,000 / Person',
    full_private_price: '-'
  },
  {
    tour_name: 'whale-shark-start-labuhan-jambu',
    participants: '4',
    open_trip_price: 'IDR. 2,975,000. / Person',
    full_private_price: '-'
  },
  {
    tour_name: 'whale-shark-start-labuhan-jambu',
    participants: '5',
    open_trip_price: 'IDR. 2,930,000. / Person',
    full_private_price: '-'
  },
  {
    tour_name: 'whale-shark-start-labuhan-jambu',
    participants: '6',
    open_trip_price: 'IDR. 2,650,000. / Person',
    full_private_price: '-'
  },
  {
    tour_name: 'whale-shark-start-labuhan-jambu',
    participants: '7',
    open_trip_price: 'IDR. 2,295,000. / Person',
    full_private_price: '-'
  },
  {
    tour_name: 'whale-shark-start-labuhan-jambu',
    participants: '8',
    open_trip_price: 'IDR. 1,990,000. / Person',
    full_private_price: '-'
  },
  
  // Tour 5: trip-4d3n-sumbawa
  {
    tour_name: 'trip-4d3n-sumbawa',
    participants: '2-10',
    open_trip_price: 'IDR. 1,450,000/orang',
    full_private_price: 'IDR. 2,500,000/orang'
  },
  
  // Tour 6: whale-shark-experience
  {
    tour_name: 'whale-shark-experience',
    participants: '2-10',
    open_trip_price: 'IDR. 1,450,000/orang',
    full_private_price: 'IDR. 2,500,000/orang'
  },
  // Tour 7: whale-shark-speedboat
  {
    tour_name: 'whale-shark-speedboat',
    participants: '2-10',
    open_trip_price: 'IDR. 2,150,000/Person',
    full_private_price: 'IDR. 3,100,000/person'
  },
  // Tour 8: whale-shark-1day-labuhan-jambu
  {
    tour_name: 'whale-shark-1day-labuhan-jambu',
    participants: '2-10',
    open_trip_price: 'IDR. 1,650,000/Person',
    full_private_price: 'IDR. 2,600,000/person'
  },
  // Tour 9: whale-shark-2d1n-poto-tano
  {
    tour_name: 'whale-shark-2d1n-poto-tano',
    participants: '2-10',
    open_trip_price: 'IDR. 2,050,000/Person',
    full_private_price: 'IDR. 2,950,000/person'
  },
  // Tour 10: whale-shark-2d1n-sekongkang
  {
    tour_name: 'whale-shark-2d1n-sekongkang',
    participants: '2-10',
    open_trip_price: 'IDR. 2,050,000/Person',
    full_private_price: 'IDR. 2,950,000/person'
  },
  // Tour 11: whale-shark-moyo-kenawa-lombok
  {
    tour_name: 'whale-shark-moyo-kenawa-lombok',
    participants: '2-10',
    open_trip_price: 'IDR. 2,350,000/Person',
    full_private_price: 'IDR. 3,400,000/person'
  }
];

async function insertAllPrices() {
  console.log('Starting to insert all tour prices...\n');
  
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
