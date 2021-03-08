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
			<div id="description">
				<div id="id">ID : ${(getData.id)} </div>
				<div id="type">Types : ${(getData.types[0].type.name)}</div>
				<div id="height">Height : ${(getData.height/10)} m</div>
				<div id="weight">Weight : ${(getData.weight/10)} kg</div>
				<div id="ability">Ability : ${(getData.abilities[0].ability.name)} </div>
				<div class="moves">Move 1 : ${(getData.moves[0].move.name)}</div>
				<div class="moves">Move 2 : ${(getData.moves[1].move.name)}</div>
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




