const express = require('express');
const multer = require('multer');
const cors = require('cors');  // Import CORS middleware
const { uploadFileToS3 } = require('./s3Service'); // Import the S3 upload function
const upload = multer({
    limits: {
      fieldSize: 1024 * 1024 * 200 // Increase field size limit to 200 MB (you can adjust this size)
    }
  });  // Initialize multer for handling file uploads
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000 // Render will set PORT in production


// Enable CORS for all routes and origins
app.use(cors({
    origin: '*',  // Allow all origins (you can restrict this in production)
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

// Middleware to parse JSON and handle large payloads
app.use(express.json({ limit: '200mb' }));

// Route to handle uploading images to S3
app.post('/upload-images', upload.none(), async (req, res) => {
    console.log('Request Body:', req.body);
    try {
        const { page1, page2 } = req.body;

        if (!page1 || !page2) {
            return res.status(400).json({ error: 'Missing image data' });
        }

        // Convert base64 to Buffer (needed for S3 upload)
        const page1Buffer = Buffer.from(page1.replace(/^data:image\/png;base64,/, ''), 'base64');
        const page2Buffer = Buffer.from(page2.replace(/^data:image\/png;base64,/, ''), 'base64');

        // Upload the images to S3
        const page1Upload = await uploadFileToS3(page1Buffer, 'page1.png');
        const page2Upload = await uploadFileToS3(page2Buffer, 'page2.png');

        // Send back the URLs of the uploaded images
        res.json({
            page1Url: page1Upload.Location,
            page2Url: page2Upload.Location
        });
    } catch (error) {
        console.error('Error uploading images:', error);
        res.status(500).send('Error uploading images');
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
