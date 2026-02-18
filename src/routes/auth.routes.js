const express=require('express');
const authController=require('../controllers/auth.controller');



const router=express.Router();

router.post('/register',authController.registerUser);  //Api for registration

router.post('/login',authController.loginUser);     //Api for Login 


module.exports=router;