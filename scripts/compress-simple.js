import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images-compressed');

console.log('🖼️  Starting image compression...\n');
console.log(`📁 Input: ${inputDir}`);
console.log(`📁 Output: ${outputDir}\n`);

(async () => {
  try {
    const files = await imagemin([`${inputDir}/**/*.{jpg,jpeg,png,PNG,JPG,JPEG}`], {
      destination: outputDir,
      plugins: [
        imageminMozjpeg({ quality: 80 }),
        imageminPngquant({ quality: [0.6, 0.8] })
      ]
    });

    console.log(`\n✅ Compressed ${files.length} images successfully!`);
    console.log(`\n📊 Results:`);
    files.forEach(file => {
      console.log(`  ✓ ${path.basename(file.destinationPath)}`);
    });
    
    console.log(`\n📁 Output directory: ${outputDir}`);
    console.log('\n📝 Next steps:');
    console.log('  1. Review compressed images in images-compressed folder');
    console.log('  2. Backup original images folder');
    console.log('  3. Replace images folder with images-compressed folder');
  } catch (error) {
    console.error('❌ Error during compression:', error);
  }
})();
