import mongoose,{Schema, SchemaTypes} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema= new Schema({
    videoFiles:{
        type:String,
        required:true,

    },
    thumbnail:{
        type:String,
        required:true,

    },
    title:{
        type:String,
        required:true,

    },
    description:{
        type:String,
        required:true,

    },
    duration:{
        type:String, // this given by the cloudinary duration
        required:true,

    },
    views:{
        type:Number,
        default:0,
    },
    isPublished:{
        type:Boolean,
        default:true,

    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate)