import dotenv from "dotenv"
import DBconnect from "./database/db.js";
import { app } from "./app.js";


dotenv.config({
    path: "./.env"
})

DBconnect().then(
    ()=>{
        app.listen(process.env.PORT || 8000,()=>{
            console.log("server is running on port :",process.env.PORT);
        })
    }
).then(()=>{
    app.on("APP error",(error)=>{
        console.log("app is crashed:",error);
        throw error


    })
})
.catch((error)=>{
    console.log("DB is crashed",error);
})








































// import mongoose from "mongoose";// this import the mongoose library
// import { DB_NAME } from "./contants";// this is the name of the database used by mongodb


//----------------------New method





















// import { express } from "express";
// const app=express() 

// // always rap the iffee or funtion in try or catch or promise adn make the function async so that it take its time to connect and when connected show
// ;(async()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI }/${DB_NAME}`) // this line connect the database
//        app.on("error",(error)=>{ //this is the line that catch the error and ON isthe event listener for that take "string and funtion"
//          console.log("app cant able to listen the request");
//          throw error // if the error is there it help us to throw the error so  that all application will run without this part of error
//        })
//        app.listen(process.env.PORT,()=>{
//          console.log("app is listening on",process.env.PORT);
//        })
//     } catch (error) {
//         console.error("error :",error);
//         throw error 
        
//     }

// })()  //thiis is a async code in which iffe isused 
// // this ; is used to obliterate the errors done by the other co worker

