/**
 * Created by nadamo on 2017. 07. 14..
 */
window.addEventListener("load", (event) => {
	console.log('Document Loaded ', event);
});

document.getElementById('loadMore').addEventListener('click', (event) => {
	console.log('Load More...');
	console.log('Search Value: ' + document.getElementById('search').value);
	console.log(pokeData.search(document.querySelector('#search').value));
});

document.getElementById('search').addEventListener('input', (event) => {
	console.log("EVENT: ", event);
	console.log("THIS: ", event);

});

fetch('http://pokeapi.nadamo.me/pokemon/').then((response) => console.log('RESPONSE: ', response.body.json)).catch((err) => console.log('ERROR: ', err));

pokemons = [1,5,15];



/*
* <li>
 <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
 alt="bulbasaur" width="96" height="96">
 <label>Bulbasaur</label>
 <span>
 	<span class="grass">grass</span>
 	<span class="poison">poison</span>
 </span>
 </li>
* */

function renderPokemon(pokemon){
	let li = document.createElement('li');
	let img = document.createElement('img');
	let label = document.createElement('label');
	let types = document.createElement('span');
	pokemon.type.forEach((type) => {
		let span = document.createElement('span');
		span.textContent = type;
		span.setAttribute('class', type);
		types.appendChild(span);
	})
	img.src = pokemon.sprite;
	label.textContent = pokemon.name;
	li.appendChild(img);
	li.appendChild(label);
	li.appendChild(types);
	document.querySelector('main ul').appendChild(li);
	
}

pokemons.forEach(function (item) {
	renderPokemon(pokeData.getPokemon(item));
});