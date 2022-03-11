const  mongoose  = require("mongoose");

const postSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    game:{
        type:String,
        required:false
    }
})

const Post = mongoose.model('Post', postSchema);
module.exports = Post;