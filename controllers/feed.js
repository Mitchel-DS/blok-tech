const UserPost = require('../models/UserPost');

const index = (req, res) => {
	const page = {
		title: 'Feed'
	};
	UserPost.find().lean().then(userposts => {
		res.render('feed', {
			page: page,
			userposts: userposts
		});
	});	
};

module.exports = {
	index: index
};





