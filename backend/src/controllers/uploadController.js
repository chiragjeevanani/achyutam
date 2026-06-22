import path from 'path';
import multer from 'multer';
import fs from 'fs';
import sharp from 'sharp';

const uploadDir = process.env.UPLOAD_DIR || path.resolve(process.cwd(), '../../achyutam_uploads');

// Ensure uploads directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Use memoryStorage so sharp can process the buffer before saving
const storage = multer.memoryStorage();

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png|webp/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('Images only (jpg, jpeg, png, webp)!'));
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
  limits: { fileSize: 20 * 1024 * 1024 }, // 20 MB raw upload limit
});

export const uploadImage = upload.single('image');

export const handleUploadResponse = async (req, res) => {
  if (!req.file) {
    res.status(400);
    throw new Error('No image file provided');
  }

  try {
    // Generate a unique WebP filename (strip original extension)
    const baseName = `image-${Date.now()}`;
    const filename = `${baseName}.webp`;
    const outputPath = path.join(uploadDir, filename);

    // Compress & convert to WebP using sharp
    // - Max 1400px wide (preserves aspect ratio)
    // - Quality 80 (excellent visual quality, ~85-90% smaller than raw JPEG)
    // - Strip EXIF metadata for privacy & smaller file size
    await sharp(req.file.buffer)
      .rotate() // auto-rotate based on EXIF orientation
      .resize({ width: 1400, withoutEnlargement: true })
      .webp({ quality: 80, effort: 4 })
      .toFile(outputPath);

    const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${filename}`;
    res.json({
      message: 'Image uploaded successfully',
      url: fileUrl,
      filename,
    });
  } catch (err) {
    console.error('Image processing error:', err);
    res.status(500);
    throw new Error('Failed to process image');
  }
};
