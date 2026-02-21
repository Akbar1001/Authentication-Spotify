const express=require('express')
const router=express.Router();
const MusicController=require("../controllers/music.controller");
const authMiddleware=require("../middlewares/auth.middleware")
const multer=require("multer")

const upload=multer({
    storage:multer.memoryStorage()
})

router.post("/upload",authMiddleware.authartist,upload.single("music"),MusicController.createMusic);
router.post("/album",authMiddleware.authartist,MusicController.createAlbum); 



module.exports=router;