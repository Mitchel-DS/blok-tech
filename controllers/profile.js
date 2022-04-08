const index = (req, res) => {
	const page = {
		title: 'Profile'
	};
	res.render('profile', {
		page: page
	});
};

module.exports = {
	index: index
};