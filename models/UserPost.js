const mongoose  = require('mongoose');

const userPostSchema = new mongoose.Schema({
	username:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true,
	},
	description:{
		type:String,
		required:true,
	},
	game:{
		type:String,
		required:true,
	}
});

const UserPost = mongoose.model('UserPost', userPostSchema);

module.exports = UserPost;