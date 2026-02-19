const {Imagekit}=require("@imagekit/nodejs");

const ImageKitClieant=new Imagekit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
})

