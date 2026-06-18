// import multer from "multer";

// const storage = multer.diskStorage({ //this is diskstorage of multer object prototype
//     destination: function (req, file, cb) { //it has two parameter destination and file name and each have its function contain req,file,cb callback to handle the file
//       cb(null, './public/temp')
//     },
//     filename: function (req, file, cb) {
      
//       cb(null, file.originalname)
//     }
//   })
  
// export  const upload = multer({  storage }) // youcan do storage:storage into storage cause thekey value is same
// //this multer object storage is replaced by the storage key of the object multer



// chai code

import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  
export const upload = multer({ 
    storage, 
})