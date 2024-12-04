const multer = require("multer");

const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        const filename=`image-${Date.now()}-${file.originalname}`
        callback(null,filename)
    }
})

const fileFilter=(req,file,callback)=>{
    if(file.mimetype==='image/jpg' || file.mimetype==='image/png' || file.mimetype==='image/jpeg'){
        callback(null,true)
    }else{
        callback(null,false)
        return callback(new Error("File formate not supported"))
    }
}

const multerConfig=multer({
    storage,
    fileFilter
})

module.exports=multerConfig