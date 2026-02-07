const fs = require('fs');
const path = require('path');

// Using exifr package to extract EXIF data
async function extractExif() {
  try {
    const exifr = require('exifr');
    
    const imagesDir = path.join(__dirname, '../public/images');
    const galleryDataPath = path.join(__dirname, '../data/gallery.ts');
    
    // Read current gallery data to preserve categories and alt text
    const galleryContent = fs.readFileSync(galleryDataPath, 'utf-8');
    
    // Get all image files
    const files = fs.readdirSync(imagesDir)
      .filter(f => /\.(jpg|jpeg|png)$/i.test(f) && f !== 'logo.jpg');
    
    console.log(`Found ${files.length} images to process...\n`);
    
    const results = [];
    
    for (const file of files) {
      const filePath = path.join(imagesDir, file);
      console.log(`Processing: ${file}`);
      
      try {
        const exif = await exifr.parse(filePath, {
          tiff: true,
          exif: true,
          gps: false,
          icc: false
        });
        
        if (exif) {
          const settings = {
            aperture: exif.FNumber ? String(exif.FNumber) : exif.ApertureValue ? String(Math.round(exif.ApertureValue * 10) / 10) : null,
            shutter: exif.ExposureTime ? formatShutterSpeed(exif.ExposureTime) : null,
            iso: exif.ISO || exif.ISOSpeedRatings || null,
            focalLength: exif.FocalLength ? String(Math.round(exif.FocalLength)) : null,
            camera: exif.Make && exif.Model ? `${exif.Make} ${exif.Model}`.trim() : exif.Model || null,
            lens: exif.LensModel || exif.LensInfo || null
          };
          
          results.push({ file, settings, exif });
          console.log(`  ✓ Aperture: f/${settings.aperture || 'N/A'}`);
          console.log(`  ✓ Shutter: ${settings.shutter || 'N/A'}`);
          console.log(`  ✓ ISO: ${settings.iso || 'N/A'}`);
          console.log(`  ✓ Focal Length: ${settings.focalLength ? settings.focalLength + 'mm' : 'N/A'}`);
          console.log(`  ✓ Camera: ${settings.camera || 'N/A'}`);
          console.log(`  ✓ Lens: ${settings.lens || 'N/A'}\n`);
        } else {
          console.log(`  ✗ No EXIF data found\n`);
          results.push({ file, settings: null });
        }
      } catch (err) {
        console.log(`  ✗ Error reading EXIF: ${err.message}\n`);
        results.push({ file, settings: null });
      }
    }
    
    console.log('\n' + '='.repeat(60));
    console.log('EXIF EXTRACTION SUMMARY');
    console.log('='.repeat(60));
    results.forEach(r => {
      console.log(`${r.file}: ${r.settings ? '✓ Has EXIF' : '✗ No EXIF'}`);
    });
    console.log('\nTo update gallery.ts with this data, manually copy the settings');
    console.log('or create an update script that merges this with existing data.\n');
    
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

function formatShutterSpeed(exposureTime) {
  if (exposureTime >= 1) {
    return `${exposureTime}s`;
  }
  // Convert to fraction
  const denominator = Math.round(1 / exposureTime);
  return `1/${denominator}`;
}

extractExif();
