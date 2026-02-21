const musicModel=require("../models/music.model")
const jwt=require('jsonwebtoken')
const {uploadFile}=require("../services/storage.service")
const albumModel=require("../models/album.model");

async function createMusic(req,res) {

    const {title}=req.body;
    const file=req.file;

    const result = await uploadFile(file.buffer.toString('base64'));

    const music=await musicModel.create({
        uri: result.url,
        title,
        artist:req.user.id
    })

    res.status(200).json({
        message:"Music created Successfully",
        music:{
            id:music.id,
            uri:music.uri,
            title:music.title,
            artist:music.artist,
        }
    })

}


async function createAlbum(req,res){
   

    const {title,musicIds} = req.body;
    
    const album = await albumModel.create({
        title,
        artist:req.user.id,
        musics:musicIds,
    })

    res.status(201).json({
        message:"Album Created Successfully",
        album:{
            id:album._id,
            title:album.title,
            artist:album.artist,
            music:album.music,
            musics:album.musics,
        }
    })
}
module.exports={createMusic}