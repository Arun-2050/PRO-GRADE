import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app= express()

//app.use(cors()) //this is the  basic version you can do more
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true

})) //this i have to read origin and credential and whitelisting
 
app.use(express.json({limit:"20kb"})) // this is the limit of the json file send by the user to backend and express handle it
//this is for json data 

app.use(express.urlencoded({extended:true,limit:"18kb"})) //extended means object into object limit limits the kb value
//this is for browser data get request and other request
app.use(express.static("public"))//data from the user should be stored in server of mine

app.use(cookieParser())// this help the server to CURD operation on the cookie of the user
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// all the router is written in app.js
// use middle ware is used to make a proper route

//routes
import router from "./routes/user.routers.js";

//router decaration
app.use("/api/v1/users",router)
// use takes route and the function to execute

export {app};