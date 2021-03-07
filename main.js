let currentID = 1;
let sprites = 0;
let pokemonSprite = getData.sprites;
let sound_1 = 'media/sound_1.mp3';
let sound_2 = 'media/sound_2.mp3';

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
			<div id="height_weight">
				<div id="height">Height : ${(getData.height/10)} m</div>
				<div id="weight">Weight : ${(getData.weight/10)} kg</div>
			</div>
		</div>
	`
	let pokemonDiv = document.querySelector('.pokemon') //we take the pokemon class from the html
	pokemonDiv.innerHTML = html //all the api data will appear on the html
}

/* right and left buttons change the id of the pokemon */
button_right.addEventListener('click', () => {  
	currentID = currentID + 1;
	let apiUrl = `https://pokeapi.co/api/v2/pokemon/${currentID}`  
	fetch(apiUrl);
	console.log(apiUrl)
	getData(currentID)
 });
  
button_left.addEventListener('click', () => {
	currentID = currentID - 1;
	let apiUrl = `https://pokeapi.co/api/v2/pokemon/${currentID}`  
	fetch(apiUrl);
	console.log(apiUrl)
	getData(currentID)
});


//changement des sprites à venir
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


