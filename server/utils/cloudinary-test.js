import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

async function testUpload() {
  try {
    const res = await cloudinary.uploader.upload("https://res.cloudinary.com/demo/image/upload/sample.jpg", {
      resource_type: "image"
    });
    console.log("✅ Upload success:", res.secure_url);
  } catch (error) {
    console.error("❌ Upload failed:", error);
  }
}

testUpload();
