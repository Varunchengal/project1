require('dotenv').config()

const express =require('express')

const cors=require('cors')

const server=express()

server.use(express.json())
server.use(cors())

const routes=require('./route/route')
require('./connection/dbConnection')
server.use(routes)

server.use('/upload',express.static('./uploads'))

const PORT=process.env.PORT || 4000

server.listen(PORT,()=>{
    console.log("SERVER IS RUNNING AT PORT", PORT)
})

server.get('/',(req,res)=>{
    res.send(`<h2>SERVER RUNNING SUCCESSFULLY</h2>`)
})
