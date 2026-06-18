// import {v2 as cloudinary} from "cloudinary"
// import fs from "fs"



// const uploadOnCloudinary= async(localFilePath)=>{
//     try {
//         if(!localFilePath) return null
//         //upload cloudinary
//         const response=await cloudinary.uploader.upload(localFilePath,{
//             resource_type:"auto"
//         })
//         //file is uplaoded
//         console.log("file is uploaded",response.url);
//         return response;
        

//     } catch (error) {
//         fs.unlinkSync(localFilePath)// this remove the temperory file as the upload functionis failed to upload causing user to upload again on our server
        
//     }
// }



    // Configuration
    // cloudinary.config({ 
    //     cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    //     api_key: process.env.CLOUDINARY_API_KEY, 
    //     api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    // });



// // export {uploadOnCloudinary}

// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";

// const uploadOnCloudinary = async (localFilePath) => {
//   try {
//     if (!localFilePath) return null;

//     const response = await cloudinary.uploader.upload(localFilePath, {
//       resource_type: "auto"
//     });

//     console.log("File uploaded to Cloudinary:", response.secure_url);

//     // Delete local temp file after successful upload
//     fs.unlinkSync(localFilePath);

//     return response;

//   } catch (error) {
//     console.error("Cloudinary Upload Failed:", error.message);

//     // Safe cleanup if upload fails
//     if (localFilePath && fs.existsSync(localFilePath)) {
//       fs.unlinkSync(localFilePath);
//     }

//     return null;
//   }
// };

// export { uploadOnCloudinary };

// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";

// cloudinary.config({ 
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//   api_key: process.env.CLOUDINARY_API_KEY, 
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

// const uploadOnCloudinary = async (localFilePath) => {
//   try {
//     if (!localFilePath) return null;

//     const response = await cloudinary.uploader.upload(localFilePath, {
//       resource_type: "auto"
//     });

//     console.log("Cloudinary Upload Success:", response.secure_url);

//     return response;

//   } catch (error) {


//     if (fs.existsSync(localFilePath)) {
//       fs.unlinkSync(localFilePath);
//     }
    


//     console.error("Cloudinary Upload Failed:", error.message);
//     return null;
//   }
// };

// export { uploadOnCloudinary };

import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}



export {uploadOnCloudinary}
