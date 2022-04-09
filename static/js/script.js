const currentLocation = window.location.pathname;

const navItem = document.querySelector('.navigation').querySelectorAll('a');
console.log(navItem);

// navItem.forEach(element => {
// 	element.addEventListener('click', function(){
// 		navItem.forEach(nav=>nav.classList.remove('active'));

// 		this.classList.add('active');
// 	});
// });

const navLength = navItem.length;

for (i = 0; i<navLength; i++){
	if(currentLocation.includes(navItem[i].pathname)){
		console.log(i);
		if(i != 0){
			navItem[i].className = 'active';
		} else if (currentLocation == '/'){
			navItem[0].className = 'active';
		}
	}
}

