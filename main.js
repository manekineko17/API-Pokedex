let currentID = 1;
let sprites = 0;
let pokemonSprite = getData.sprites;

function getData(currentID) {
	let apiUrl = `https://pokeapi.co/api/v2/pokemon/${currentID}`  	
	//fetch will get the data. => is called an arrow function
	fetch(apiUrl)
		.then( (data) => data.json())  //2nd data is on json file
		// .then( (data) => console.log(data.json()))  to test
		//the fetch will return a promise (a promise is holding the data for a future use)
		.then((pokemon) => generateHtml(pokemon) )
		// 	.then((pokemon) => console.log(pokemon) ) to test
}
//appel de la fonction
getData(currentID)

function generateHtml(getData) {
	console.log(getData)
	let html = `
		<div id="image_and_name">
			<img id="image_pokemon" src=${getData.sprites.front_default} alt="Pokemon picture">
			<p id="name">${getData.name}</p>
			<div id="height">Height : ${(getData.height/10)} m</div>
			<div id="weight">Weight : ${(getData.weight/10)} kg</div>
		</div>
	`
	let pokemonDiv = document.querySelector('.pokemon') //we take the pokemon class from the html
	pokemonDiv.innerHTML = html //all the api data will appear on the html
}


function currentPokemon(getData) {
	console.log(getData)
	let pokemonSprite ={
			sprite_front: getData.sprites.front_default,
			sprite_back: getData.sprites.back_default,
			sprite_front_shiny: getData.sprites.front_shiny,
			sprite_back_shiny: getData.sprites.back_shiny,
		}
	currentID = pokemon.currentID
	currentPokemon = pokemon
	setValues()
}

function changeSprite(sprites) {
	if(currentID){
		let sprites = [
		currentID.sprite_front,
		currentID.sprite_back,
		currentID.sprite_front_shiny,
		currentID.sprite_back_shiny,
		]
		sprites.src = sprites[sprites]
	}
	console.log(pokemonSprite)
	let imageDiv = document.querySelector('.pokemon') 
	imageDiv.innerHTML = pokemonSprite
}

///////ci-dessous code source  https://codepen.io/victorharry/pen/vYNorav ///////

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

/* top and bottom buttons change the sprites of the pokemon */
pad_button_top.addEventListener('click', () => {
	let pokemonSprite;
	// let sprites;
	let apiUrl = `https://pokeapi.co/api/v2/pokemon/${currentID}`
	sprites = sprites + 1;
	fetch(apiUrl);
	console.log(changeSprite)
	sprites = (sprites <= 0) ? 0 : pokemonSprite;
	changeSprite(sprites)
});
  
// pad_button_bottom.addEventListener('click', () => {
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