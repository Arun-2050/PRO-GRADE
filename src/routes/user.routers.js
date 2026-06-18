import{Router} from "express"
import registerUser from "../controllers/user.controller.js"
import {upload} from "../middlewares/multer.middleware.js"
// this is the configuration of the router function means all the power of the routing in express comes in the instance of router variable as route
const router= Router()
// routes is router 
// this is router.router means Router().route to /register and if post request is there so it execute if post===post hence execute the value of the () 
router.route("/register").post(
    upload.fields([{
        name:"avatar",
        maxCount:1,
    },{
        name:"coverImage",
        maxCount:1
    }]),
    registerUser
    )


export default router 