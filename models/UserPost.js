const mongoose  = require("mongoose");
const userPostSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    game:{
        type:String,
        required:false,
    }
})
const UserPost = mongoose.model('UserPost', userPostSchema);
module.exports = UserPost;