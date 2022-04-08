const UserPost = require('../models/UserPost');

const index = (req, res) => {
	const page = {
		title: 'Home'
	};
	UserPost.find().lean().then(userposts => {
		res.render('home', {
			page: page,
			userposts: userposts
		});
	});
};

module.exports = {
	index: index
};