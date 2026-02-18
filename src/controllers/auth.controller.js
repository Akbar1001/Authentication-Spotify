const userModel=require('../models/user.model');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs')

// Logic for registration OR Authentication API creation
async function registerUser(req,res){

    const {username,email,password,role="user"} =req.body;

    const isuseralreadyexist= await userModel.findOne({
        $or:[ {username},{email}]
    })

    if(isuseralreadyexist){
        res.status(409).json({
            message:"User already exists"
        })
    }
    
    const hash= await bcrypt.hash(password, 10);

    const user= await userModel.create({
        username,
        email,
        password: hash,
        role
    })

    const token=jwt.sign({
        id : user._id,
        role: user.role,
    },process.env.JWT_SECRET);

    res.cookie("token",token);

    res.status(201).json({
        message:"User created Successfully",
        user:{
            id: user._id,
            username:user.username,
            email:user.email,
            role:user.role
        }
    })
}

module.exports={registerUser}