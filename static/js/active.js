// active class variables
const currentLocation = window.location.pathname;
const navItem = document.querySelector('.navigation').querySelectorAll('a');
const navLength = navItem.length;

// loops over navitems and checks current location 
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

// 