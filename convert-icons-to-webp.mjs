import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsDir = path.join(__dirname, 'public', 'images', 'icons');

// Icons to convert
const icons = ['building.png', 'people.png', 'camera.png', 'lifejacket.png', 'money.png'];

async function convertToWebP() {
    console.log('🔄 Converting icons to WebP...\n');

    for (const icon of icons) {
        const inputPath = path.join(iconsDir, icon);
        const outputPath = path.join(iconsDir, icon.replace('.png', '.webp'));

        if (!fs.existsSync(inputPath)) {
            console.log(`⚠️  ${icon} not found, skipping...`);
            continue;
        }

        try {
            await sharp(inputPath)
                .webp({ quality: 90 })
                .toFile(outputPath);

            console.log(`✅ Converted: ${icon} → ${icon.replace('.png', '.webp')}`);
        } catch (error) {
            console.error(`❌ Error converting ${icon}:`, error.message);
        }
    }

    console.log('\n✨ Conversion complete!');
}

convertToWebP();
