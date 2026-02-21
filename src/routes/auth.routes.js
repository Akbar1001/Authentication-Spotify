const express=require('express');
const authController=require('../controllers/auth.controller');



const router=express.Router();

router.post('/register',authController.registerUser);  //Api for registration

router.post('/login',authController.loginUser);     //Api for Login 

router.post('/logout',authController.logoutUser);  // APi for Logout
module.exports=router;