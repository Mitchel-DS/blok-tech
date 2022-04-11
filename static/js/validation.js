const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const inputs = event.target.querySelectorAll('input');
	const error = event.target.querySelector('label#error');

	if (!inputs[0].value || !inputs[1].value || !inputs[2].value) {
		error.classList.add('errorlabel');
		error.innerHTML = '<span>Error:</span> Niet alle invoer velden zijn ingevuld!';
		inputs.forEach(element => {
			element.classList.add('foute-input');
		});
	} else {
		event.target.submit();
	}
});