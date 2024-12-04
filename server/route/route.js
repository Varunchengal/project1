const express=require('express')
const multerConfig = require('../middleware/userMiddleware')
const userController=require('../controller/userController')
const routes=express.Router()

routes.post('/reg',multerConfig.single('profile'),userController.register)
routes.post('/login',userController.login)
routes.post('/add',multerConfig.single('cover'),userController.addBook)
routes.get('/view',userController.viewBook)

module.exports=routes