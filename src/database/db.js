
import mongoose from "mongoose";
import {DB_NAME} from "../contants.js"



const DBconnect=async ()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`/n MongoDB connected! DB host${connectionInstance.connection.host}`);
        // this do which connection of database i am connected
    } catch (error) {
        console.log("this is the error",error);
        //throw (error) // this throw the error to exit
        process.exit(1) // this is the built in function of the node environment help to terminate the crurrent context process
        
    }
}

export default DBconnect