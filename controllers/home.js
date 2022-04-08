const index = (req, res) => {
	const page = {
		title: 'Home'
	};

	res.render('home', {
		page: page
	});
};

module.exports = {
	index: index
};