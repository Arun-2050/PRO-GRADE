// const asyncfunction=(fun)=>async(req,res,next,)=>{
 
//  //this is a async function handling a async function in a try catch block so that 
//  //we dont have to write same code again and again 
//  //it take a async function in try func is passed in another async func
//  // the main task is to make a async function that takes a function  and await it to hanfdle with try and catch
//     try {
//          await fun(req,res,next)
        
//     } catch (error) 
//     {
//      res.status(error.code || 500).json({
//         success:false,
//         message:error.message
//      })
//     }
// }

// export {asyncfunction}


const asyncfunction = (fun) => {
   return async (req, res, next) => {
     try {
       await fun(req, res, next);
     } catch (error) {
       next(error); // Pass error to global error handler
     }
   };
 };
 
 export { asyncfunction };
 

