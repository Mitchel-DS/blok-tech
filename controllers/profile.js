const UserPost = require('../models/UserPost');

const index = (req, res) => {
	const page = {
		title: 'Profile'
	};
	UserPost.find({username: 'Mitchel'}).lean().then(userposts => {
		res.render('profile', {
			page: page,
			userposts: userposts
		});
	});
};

module.exports = {
	index: index
};