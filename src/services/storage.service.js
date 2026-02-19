const {ImageKit}=require("@imagekit/nodejs");

const ImageKitClieant=new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
})

async function uploadFile(file){
    const result=ImageKitClieant.files.upload({
        file,
        fileName:"music"+Date.now(),
        folder:"Spotify/music"
    })

    return result;
}

module.exports={uploadFile};