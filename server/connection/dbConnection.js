const mongoose= require('mongoose')

const connectString=process.env.DATABASE

mongoose.connect(connectString).then(()=>{
    console.log("MONGODB CONNECTED SUCCESSFULL")
}).catch((err)=>{
    console.log("MONGODB CONNECTION FAILED", err)
})