let currentID = 1;
// let currentSprite = 0;

//source https://www.youtube.com/watch?v=tFVdxGgJPCo
//le code en commentaire ci-dessous permet d'aller chercher les data sur l'api mais pas de changer d'id en JS
// creation of an object
// function apiData = {
// 	url: 'https://pokeapi.co/api/v2',  //pokeapi url
// 	type: 'pokemon',  					//api type
// 	id: '1',    						//pokemon id
// 	//we can add more caracteristics in our object
// }

//construction of the url to obtain datas
// function apiUrl = `${apiData.url}/${apiData.type}/${apiData.id}`  	
// 				// ` => alt gr 7
				//recreating the url https://pokeapi.co/api/v2/apiData/pokemon/id

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

//another way to create the url with shorter code, more readable. This is called deconstruction
// const {url, type, id} = apiData
// const apiUrl = `${url}/${type}/${id}`  	

//checking if the url works
//console.log(apiUrl)


//new function
// const generateHtml =(data) => {
// 	console.log(data)
// 	const html = `
// 		<div id="image_name">
// 			<img id="image_pokemon" src=${data.sprites.front_default} alt="Pokemon picture">
// 			<p id="name">${data.name}</p>
// 		</div>
// 		<div id="details">
// 			<span>Height : ${data.height} - </span>
// 			<span>Weight : ${data.weight} </span>
// 		</div>
// 	`
// 	const pokemonDiv = document.querySelector('.pokemon') //we take the pokemon class from the html
// 	pokemonDiv.innerHTML = html //all the api data will appear on the html

// }

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


////////////////////////////// ci-dessous code source https://codepen.io/victorharry/pen/vYNorav ///////

/* top and bottom buttons to change the id of the pokemon */
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

// /* left and right buttons to change the sprites of the pokemon */
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
  
// b_button.addEventListener('click', () => {
// 	if(greetings.style.display == 'none') {
// 	  details_container.style.display = 'none';
// 	  content_container.style.display = 'flex';
// 	}
//   });
  
// a_button.addEventListener('click', () => {
// 	if(greetings.style.display == 'none') {
// 	  content_container.style.display = 'none';
// 	  details_container.style.display = 'flex';
// 	}
  
//   });