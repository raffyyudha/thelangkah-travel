import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fungsi untuk compress gambar
async function compressImage(inputPath, outputPath) {
  try {
    const ext = path.extname(inputPath).toLowerCase();
    
    if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(inputPath)
        .jpeg({ quality: 80, progressive: true, mozjpeg: true })
        .toFile(outputPath);
    } else if (ext === '.png') {
      await sharp(inputPath)
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(outputPath);
    }
    
    const originalSize = fs.statSync(inputPath).size;
    const compressedSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - compressedSize) / originalSize * 100).toFixed(2);
    
    console.log(`✓ ${path.basename(inputPath)}: ${(originalSize / 1024).toFixed(2)}KB → ${(compressedSize / 1024).toFixed(2)}KB (${savings}% lebih kecil)`);
  } catch (error) {
    console.error(`✗ Error compressing ${inputPath}:`, error.message);
  }
}

// Fungsi untuk scan folder dan compress semua gambar
async function compressFolder(folderPath) {
  const files = fs.readdirSync(folderPath);
  
  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await compressFolder(filePath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      const tempPath = filePath + '.tmp';
      await compressImage(filePath, tempPath);
      
      // Replace original dengan compressed
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
    }
  }
}

// Main function
async function main() {
  console.log('🚀 Memulai kompresi gambar...\n');
  
  const imagesPath = path.join(__dirname, 'public', 'images');
  
  if (!fs.existsSync(imagesPath)) {
    console.error('❌ Folder images tidak ditemukan!');
    return;
  }
  
  await compressFolder(imagesPath);
  
  console.log('\n✅ Semua gambar berhasil dikompres!');
}

main().catch(console.error);
