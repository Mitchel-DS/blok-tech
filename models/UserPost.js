// require mongoose for model implementation
const mongoose  = require("mongoose");

// hier wordt een nieuwe mongoose schema aangemaakt met de bijbehorende datatypes
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
});

// schema wordt in een variable gezet 
const UserPost = mongoose.model('UserPost', userPostSchema);

// model wordt geexporteerd om te kunnen gebruiken in andere bestanden
module.exports = UserPost;