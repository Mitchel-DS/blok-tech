const UserPost = require('../models/UserPost');

const index = (req, res) => {
	const page = {
		title: 'Post'
	};
	res.render('userpost', {
		page: page
	});
};

const userpost = async (req, res) => {
	const userpost = await new UserPost(req.body);
	userpost.save();
	res.redirect('/feed');
};

module.exports = {
	index: index,
	userpost: userpost
};