let currentID = 1;
// let currentSprite = 0;

function getData(currentID) {
	let apiUrl = `https://pokeapi.co/api/v2/pokemon/${currentID}`  	
	//fetch will get the data. => is called an arrow function
	fetch(apiUrl)
		.then( (data) => data.json())  //2nd data is on json file
		// .then( (data) => console.log(data.json()))  to test
		//the fetch will return a promise (a promise is holding the date for a future use)
		.then((pokemon) => generateHtml(pokemon) )
		// 	.then((pokemon) => console.log(pokemon) ) to test
}

//appel de la fonction
getData(currentID)

//new function
function generateHtml(getData) {
	console.log(getData)
	let html = `
		<div id="image_and_name">
			<img id="image_pokemon" src=${getData.sprites.front_default} alt="Pokemon picture">
			<p id="name">${getData.name}</p>
			<div id="height">Height : ${getData.height}</div>
			<div id="weight">Weight : ${getData.weight}</div>
		</div>

	`
	let pokemonDiv = document.querySelector('.pokemon') //we take the pokemon class from the html
	pokemonDiv.innerHTML = html //all the api data will appear on the html
}

///////ci-dessous code source https://codepen.io/victorharry/pen/vYNorav ///////

/* right and left buttons change the id of the pokemon */
pad_button_right.addEventListener('click', () => {  
	currentID = currentID + 1;
	let apiUrl = `https://pokeapi.co/api/v2/pokemon/${currentID}`  
	fetch(apiUrl);
	console.log(apiUrl)
	getData(currentID)
 });
  
pad_button_left.addEventListener('click', () => {
	currentID = currentID - 1;
	let apiUrl = `https://pokeapi.co/api/v2/pokemon/${currentID}`  
	fetch(apiUrl);
	console.log(apiUrl)
	getData(currentID)
  });

// /* top and bottom buttons change the sprites of the pokemon */
// pad_button_right.addEventListener('click', () => {
// 	currentSprite = currentSprite + 1;
// 	currentSprite = (currentSprite <= 0) ? 0 : currentSprite;
// 	changeSprite();
// 	getData(currentID)
// });
  
// pad_button_left.addEventListener('click', () => {
// 	currentSprite = currentSprite - 1;
// 	currentSprite = (currentSprite <= 0) ? 0 : currentSprite;
// 	changeSprite();
// 	getData(currentID)
// });
  
//sound b
// b_button.addEventListener('click', () => {
// 	if(greetings.style.display == 'none') {
// 	  details_container.style.display = 'none';
// 	  content_container.style.display = 'flex';
// 	}
//   });

//sound a
// a_button.addEventListener('click', () => {
// 	if(greetings.style.display == 'none') {
// 	  content_container.style.display = 'none';
// 	  details_container.style.display = 'flex';
// 	}
  
//   });