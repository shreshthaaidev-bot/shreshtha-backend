import {asyncHandler} from "../utils/asyncHandler.js";

const login = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "login route working" });
});

const registerUser = asyncHandler(async(req,res)=>{
    //get user details from frontend
    //validation-not empty
    //check if user already exists
    //check for images,avatars
    //upload them to cloudinary
    //create user object-create entry in db
    //remove pw and refresh token field
    //check for user creatiom
    //return res

    const {fullname,email,username,password} =req.body
    console.log("email:",email);

})

export {registerUser,login}