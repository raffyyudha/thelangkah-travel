import fs from 'fs';
import path from 'path';

// List of all tour directories
const tourDirectories = [
  'whale-shark-1day-labuhan-jambu',
  'whale-shark-2d1n',
  'whale-shark-2d1n-poto-tano',
  'whale-shark-2d1n-sekongkang',
  'whale-shark-experience',
  'whale-shark-moyo-kenawa-lombok',
  'whale-shark-speedboat',
  'whale-shark-start-labuhan-jambu',
  'combo-moyo-whale-shark',
  'trip-4d3n-sumbawa'
];

// Related tours configuration (same for all pages)
const relatedToursConfig = `
  // Related tours configuration for optimized loading
  const relatedTours = [
    {
      tourName: "whale-shark-start-sumbawa",
      title: "Trip 1 Hari Hiu Paus (Start & Finish Sumbawa Besar)",
      href: "/whale-shark-start-sumbawa"
    },
    {
      tourName: "whale-shark-1day-labuhan-jambu",
      title: "Trip 1 Hari Hiu Paus (Start & Finish Labuhan Jambu)",
      href: "/whale-shark-1day-labuhan-jambu"
    },
    {
      tourName: "whale-shark-speedboat",
      title: "Trip 1 Hari Hiu Paus (Menggunakan Speed Boat)",
      href: "/whale-shark-speedboat"
    },
    {
      tourName: "whale-shark-2d1n",
      title: "Tour Wisata Hiu Paus Sumbawa 2 Hari 1 Malam start & finish Sumbawa Besar",
      href: "/whale-shark-2d1n"
    },
    {
      tourName: "whale-shark-2d1n-poto-tano",
      title: "2D1N Trip Hiu Paus (Start & Finish Area Poto Tano)",
      href: "/whale-shark-2d1n-poto-tano"
    },
    {
      tourName: "whale-shark-2d1n-sekongkang",
      title: "2D1N Trip Hiu Paus (Start & Finish Area Sekongkang)",
      href: "/whale-shark-2d1n-sekongkang"
    },
    {
      tourName: "whale-shark-start-labuhan-jambu",
      title: "Paket Tour Hiu Paus Sumbawa 2 Hari 1 Malam start & finish Lombok",
      href: "/whale-shark-start-labuhan-jambu"
    },
    {
      tourName: "whale-shark-experience",
      title: "Sumbawa Whale Shark Tour 2 Days 1 Night (scuba diving tour)",
      href: "/whale-shark-experience"
    },
    {
      tourName: "combo-moyo-whale-shark",
      title: "Paket Tour Sumbawa 3 Hari 2 Malam Pulau Moyo - Hiu Paus Teluk Saleh",
      href: "/combo-moyo-whale-shark"
    },
    {
      tourName: "whale-shark-moyo-kenawa-lombok",
      title: "3D2N Trip Hiu Paus - Pulau Moyo - Kenawa (Start & Finish Area Lombok)",
      href: "/whale-shark-moyo-kenawa-lombok"
    },
    {
      tourName: "trip-4d3n-sumbawa",
      title: "Paket Tour Sumbawa 4 Hari 3 Malam Wisata Pulau Moyo, Pulau Kenawa & Hiu Paus",
      href: "/trip-4d3n-sumbawa"
    }
  ];`;

function optimizeTourPage(tourName) {
  const filePath = path.join(process.cwd(), 'src', 'app', tourName, 'page.tsx');
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // 1. Update imports
  const oldImport = 'import { DropdownSection, DynamicPricingTable, PaymentMethodsSection, DynamicTourImages } from "@/components/TourComponents";\nimport BookingModal from "@/components/BookingModal";\nimport { DynamicRelatedTour } from "@/components/DynamicRelatedTour";';
  const newImport = 'import { DropdownSection, DynamicPricingTable, PaymentMethodsSection, OptimizedTourImages, OptimizedRelatedToursGrid } from "@/components/TourComponents";\nimport BookingModal from "@/components/BookingModal";';
  
  if (content.includes(oldImport)) {
    content = content.replace(oldImport, newImport);
    modified = true;
    console.log(`✅ Updated imports for ${tourName}`);
  }

  // 2. Add related tours configuration after state declarations
  const statePattern = /const \[isBookingModalOpen, setIsBookingModalOpen\] = useState\(false\);/;
  if (statePattern.test(content) && !content.includes('relatedTours = [')) {
    content = content.replace(statePattern, `const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);${relatedToursConfig}`);
    modified = true;
    console.log(`✅ Added related tours config for ${tourName}`);
  }

  // 3. Replace DynamicTourImages with OptimizedTourImages
  const tourImagePattern = new RegExp(`<DynamicTourImages tourName="${tourName}" />`, 'g');
  if (tourImagePattern.test(content)) {
    content = content.replace(tourImagePattern, `<OptimizedTourImages tourName="${tourName}" />`);
    modified = true;
    console.log(`✅ Updated DynamicTourImages for ${tourName}`);
  }

  // 4. Replace the entire related tours grid section
  const relatedToursPattern = /<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">\s*(?:<DynamicRelatedTour[\s\S]*?\/>\s*)*<\/div>/;
  const newRelatedToursGrid = `<OptimizedRelatedToursGrid 
            tours={relatedTours} 
            currentTourName="${tourName}"
          />`;
  
  if (relatedToursPattern.test(content)) {
    content = content.replace(relatedToursPattern, newRelatedToursGrid);
    modified = true;
    console.log(`✅ Updated related tours grid for ${tourName}`);
  }

  // Write the updated content back to file
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`🎉 Successfully optimized ${tourName}`);
  } else {
    console.log(`⚠️  No changes needed for ${tourName}`);
  }
}

// Run optimization for all tour pages
console.log('🚀 Starting tour pages optimization...\n');

tourDirectories.forEach(tourName => {
  console.log(`\n📄 Processing ${tourName}...`);
  optimizeTourPage(tourName);
});

console.log('\n✨ Tour pages optimization completed!');
