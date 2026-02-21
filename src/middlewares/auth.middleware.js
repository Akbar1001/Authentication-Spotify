const jwt=require("jsonwebtoken");


async function authartist(req,res,next){
    
    const token= req.cookies.token;

    if(!token)
        return res.status(401).json({message:"Unauthorized"})

    try{

        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        if(decoded.role != "artist"){
            return res.status(401).json({message:"Unauthorized"})
        }

        req.user=decoded;

        next()

    }catch(err){
        console.error(err);
        return res.status(401).json({message:"Unauthorized"})
    }
}

async function authUser(req,res,next){
    
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }
    try{
        
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        if(decoded.role!="user" && decoded.role!="artist"){
            return res.status(401).json({message:"Unauthorized"})
        }

        req.user=decoded.role;

        next()

    }catch(err){
        console.error(err);
        return res.status.json({message:"Unauthorized"})
    }
}

module.exports={authartist,authUser}