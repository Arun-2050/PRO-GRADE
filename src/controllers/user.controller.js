import { asyncfunction } from "../utils/asyncfun.js";
// this is constroller means a function which executes itself on get and other operation on a specific API 
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { Apierror } from "../utils/Apierror.js"
import { User } from "../models/user.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncfunction(async (req, res) => {
  const { fullname, email, username, password } = req.body
  console.log("email:", email);


  // if (fullname===""){
  //     throw new Apierror(400,"fullname is required")

  // }

  // if ([fullname,email,username,password].some((field)=>{field?.trim()===""})){
  //     throw new Apierror(400,"All fields are required")
  // }

  if ([fullname, email, username, password].some(field => !field || field.trim() === "")) {
    throw new Apierror(400, "All fields are required username email password");
  }







  // const existedUser=await User.findOne({
  //     $or:[{username},{email}]
  // })

  const existedUser = await User.findOne({
    $or: [
      { username: username.toLowerCase() },
      { email }
    ]
  });


  if (existedUser) {
    throw new Apierror(409, "user is already existed")
  }

  const avatarLocalpublicpath = req.files?.avatar?.[0]?.path;
  const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

  if (!avatarLocalpublicpath) {
    throw new Apierror(400, "Avatar file is required");
  }

  // upload on cloudinary
  const avatar = await uploadOnCloudinary(avatarLocalpublicpath);

  if (!avatar) {
    throw new Apierror(400, "Avatar upload to Cloudinary failed");
  }

  let coverImage = null;
  if (coverImageLocalPath) {
    coverImage = await uploadOnCloudinary(coverImageLocalPath);
  }







  const user = await User.create({
    fullname,
    email,
    password,
    username: username.toLowerCase(),
    avatar: avatar.url,
    coverImage: coverImage?.url || ""
  });






  // const user=await User.create({fullname,avatar:avatar.url,coverImage:coverImage?.url || "",email,password,username:username.toLowerCase()})

  const createdUser = await User.findById(user._id).select("-password -refreshToken")

  if (!createdUser) {
    throw new Apierror(500, "user cant be created by the data base")
  }


  return res.status(201).json(
    new ApiResponse(201, createdUser, "User created successfully")
  );


  // return res.status(201).json(
  //     new ApiResponse(200,createdUser,"user created successfully")
  // )


})


export default registerUser