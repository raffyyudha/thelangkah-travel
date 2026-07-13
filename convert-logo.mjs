import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function convertLogoToWebP() {
    const inputPath = join(__dirname, 'public', 'images', 'logo.png');
    const outputPath = join(__dirname, 'public', 'images', 'logo.webp');

    try {
        await sharp(inputPath)
            .webp({ quality: 90, lossless: false })
            .toFile(outputPath);

        console.log('✅ Logo converted to WebP successfully!');
        console.log(`Input: ${inputPath}`);
        console.log(`Output: ${outputPath}`);
    } catch (error) {
        console.error('❌ Error converting logo:', error);
    }
}

convertLogoToWebP();
