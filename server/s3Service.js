const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
require('dotenv').config(); // To load AWS credentials from .env

// Initialize the S3 client
const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});
//
// Function to upload a file to S3
const uploadFileToS3 = async (fileContent, fileName) => {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: fileName,
        Body: fileContent,
        
    };

    try {
        // Upload the file to S3
        const command = new PutObjectCommand(params);
        const data = await s3.send(command);
        return {
            Location: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`
        };
    } catch (err) {
        console.error('Error uploading file to S3:', err);
        throw err;
    }
};

module.exports = {
    uploadFileToS3
};
