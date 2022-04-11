function showNotification() {
	const notification = new Notification('Welcome message', {
		body: 'Hello there! Welcome.'
	});
}

if (Notification.permission === 'granted') {
	// alert('we have permission!');
	showNotification();
} else if (Notification.permission !== 'granted') {
	Notification.requestPermission().then(permission => {
		if (permission === 'granted') {
			console.log(permission);
			showNotification();
		}
	});
}