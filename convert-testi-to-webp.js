import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directory = path.join(__dirname, 'public', 'testi');

async function convertToWebp() {
    try {
        if (!fs.existsSync(directory)) {
            console.error('Directory does not exist:', directory);
            return;
        }

        const files = fs.readdirSync(directory);
        const jpgFiles = files.filter(file => file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg'));

        console.log(`Found ${jpgFiles.length} JPG images to convert.`);

        for (const file of jpgFiles) {
            const inputPath = path.join(directory, file);
            const outputFilename = file.replace(/\.(jpg|jpeg)$/i, '.webp');
            const outputPath = path.join(directory, outputFilename);

            try {
                await sharp(inputPath)
                    .webp({ quality: 80 }) // 80% quality is usually a good balance
                    .toFile(outputPath);

                console.log(`Converted: ${file} -> ${outputFilename}`);

                // Remove original file after successful conversion
                fs.unlinkSync(inputPath);
                console.log(`Deleted original: ${file}`);
            } catch (err) {
                console.error(`Error converting ${file}:`, err);
            }
        }

        console.log('All conversions completed!');
    } catch (error) {
        console.error('Error in conversion process:', error);
    }
}

convertToWebp();
