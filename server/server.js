const express = require('express');
const multer = require('multer');
const cors = require('cors');  // Import CORS middleware
const { uploadFileToS3 } = require('./s3Service'); // Import the S3 upload function
const upload = multer();  // Initialize multer for handling file uploads
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000 // Render will set PORT in production

// Enable CORS for all routes and origins
app.use(cors());

// Middleware to parse JSON and handle large payloads
app.use(express.json({ limit: '50mb' }));

// Route to handle uploading images to S3
app.post('/upload-images', async (req, res) => {
    try {
        const { page1, page2 } = req.body;

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
