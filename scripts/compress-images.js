import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images-compressed');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function compressImage(inputPath, outputPath) {
  try {
    const info = await sharp(inputPath)
      .resize(1920, null, { // Max width 1920px, maintain aspect ratio
        withoutEnlargement: true
      })
      .jpeg({ quality: 80, progressive: true })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const compressedSize = info.size;
    const savings = ((originalSize - compressedSize) / originalSize * 100).toFixed(2);
    
    console.log(`✓ ${path.basename(inputPath)}: ${(originalSize / 1024).toFixed(2)}KB → ${(compressedSize / 1024).toFixed(2)}KB (${savings}% saved)`);
  } catch (error) {
    console.error(`✗ Error compressing ${inputPath}:`, error.message);
  }
}

async function compressDirectory(dir, baseDir = dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Create corresponding output directory
      const relativePath = path.relative(baseDir, filePath);
      const newOutputDir = path.join(outputDir, relativePath);
      if (!fs.existsSync(newOutputDir)) {
        fs.mkdirSync(newOutputDir, { recursive: true });
      }
      // Recursively compress subdirectory
      await compressDirectory(filePath, baseDir);
    } else if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
      const relativePath = path.relative(baseDir, filePath);
      const outputPath = path.join(outputDir, relativePath).replace(/\.(png|webp)$/i, '.jpg');
      await compressImage(filePath, outputPath);
    }
  }
}

console.log('Starting image compression...\n');
compressDirectory(inputDir)
  .then(() => {
    console.log('\n✓ All images compressed successfully!');
    console.log(`Output directory: ${outputDir}`);
    console.log('\nNext steps:');
    console.log('1. Review compressed images in images-compressed folder');
    console.log('2. Backup original images folder');
    console.log('3. Replace images folder with images-compressed folder');
  })
  .catch(error => {
    console.error('Error during compression:', error);
  });
