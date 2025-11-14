import {v2 as cloudinary} from 'cloudinary';




//Configuration
    cloudinary.config({ 
        cloud_name: 'dflwtabz8', 
        api_key: '259673289484591', 
        api_secret: 'q6mG8Fil615p4f0NB1rXHSo6J0Q' // Click 'View API Keys' above to copy your API secret
    });
    

export const uploadMedia = async (file) => {
 try{
    const uploadResponse = await cloudinary.uploader.upload(file, {
      resource_type: "auto"
    });
    return uploadResponse;
 } catch (error) {
    console.error("Cloudinary upload failed:", error);  // 👈 shows the actual reason
    throw new Error("Error uploading media");
 }
};

export const deleteMediaFromCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId, {
      resource_type: "image"
    });
    } catch (error) {
     console.error("Cloudinary delete failed:", error);
     throw new Error("Error deleting media");
  }
};



export default cloudinary;
