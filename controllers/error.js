const index = (req, res) => {
	const page = {
		title: '404 - Page not found'
	};
	res.render('404', {
		page: page
	});
};

module.exports = {
	index: index
};