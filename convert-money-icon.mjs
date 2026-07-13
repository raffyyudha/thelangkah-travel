import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'public', 'images', 'icons', 'money-temp.png');
const outputPath = path.join(__dirname, 'public', 'images', 'icons', 'money.webp');

async function convertToWebP() {
    console.log('🔄 Converting money icon to WebP...\n');

    try {
        await sharp(inputPath)
            .webp({ quality: 90 })
            .toFile(outputPath);

        console.log(`✅ Converted: money-temp.png → money.webp`);
    } catch (error) {
        console.error(`❌ Error converting:`, error.message);
    }

    console.log('\n✨ Conversion complete!');
}

convertToWebP();
