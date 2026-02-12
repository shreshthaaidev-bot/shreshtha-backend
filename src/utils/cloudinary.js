import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_CLOUD_API_KEY,
    api_secret:CLOUDINARY_CLOUD_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath)return null
        const response = await cloudinary.uploader.upload

        cloudinary.uploader.upload(loacalFilePath,{
            resource_type:"auto"
        })
        console.log("file has been uploaded on cloudinary",response.url)
        return response;
        
    } catch(error) {
        fs.unlinkSync(localFilePath)

    }
}

export {uploadOnCloudinary};