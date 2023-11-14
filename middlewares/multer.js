const multer  = require('multer')

const Storage = multer.diskStorage({
    destination:'uploads',
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
      },
  })

  const upload = multer({
    storage:Storage
  }).single('file')
  

exports.uploadMiddleware = async(req,res,next) => {
    upload(req,res,(err)=>{
        if(err){
            throw new Error('There is no token Attached to Header')
        }
        else{
        next()
        }
})
}