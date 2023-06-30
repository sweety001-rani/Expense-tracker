const express=require('express')
const {loginController, registerController}=require('../controllers/usercontroller')
const router=express.Router()

//post||login
router.post('/login',loginController)

//post||register
router.post('/register',registerController)

module.exports=router;