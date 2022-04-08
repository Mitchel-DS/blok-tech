const index = (req, res) => {
	const page = {
		title: '404 - Page not found'
	};
	res.render('error', {
		page: page
	});
};

module.exports = {
	index: index
};