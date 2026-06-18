import mongoose ,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
 

const userSchema= new Schema({

    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true //searching field optimization
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true

    },
    fullname:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String,
        //using couldinary to handle pictures and other things
        // required:true,

    },
    coverImage:{
        type:String
    },
    watchHistory:[
        {
        type:Schema.Types.ObjectId,
        ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[true,'password is required']

    },
    refreshToken:{
        type:String
    }

},{timestamps:true})
//pre middleware is one that tell or takes a function with operationvalue like : sava;post ; get things
userSchema.pre("save",async function(next){ // pre is a middleware used before an operation take string and callback and callback should be in function not arrow because
    // arrow fuction doesnot have this refrence means olny the global context environment empty
 if(!this.isModified("password")) return null
    
    this.password= await bcrypt.hash(this.password,10)
    next() // check this codddddddddddddeeee
    
    
    // this  is a function that checks is password val modified or not 
 
 

})
//methods is the one that help us to make more user-defined function by .dot notaion because of the obejeect prototupe language
userSchema.methods.isPasswordCorrect= async function (password){//mongoose is object model language so to store a function prototype .dot notationis used
    return await bcrypt.compare(password,this.password) //this is compare functinon that take the strng val and this password of user it saves and compare it 
    //this is true or false canbe
}
//sign method takes the payload,access keys and expiresIN key payload and expireskey in object form
userSchema.methods.generateAccessToken= function(){
   return jwt.sign({
        _id:this.id,
        email:this.email,
        username:this.username,
        fullname:this.fullname
    },process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    })

}
userSchema.methods.generateRefreshToken= function(){
    return jwt.sign({
        _id:this.id,
        
    },process.env.REFRESH_TOKEN_SECERT,{
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    })

    
}
// jwt is the bearar token means if a user have it it can acess database easily without any password and things
// be carefull because to use function not .arrow function does not have this value

export const User= mongoose.model("User",userSchema)