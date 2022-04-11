const index = (req, res) => {
	const page = {
		title: 'Chat'
	};
	res.render('chat', {
		page: page
	});
};

module.exports = {
	index: index
};