/**
 * Created by nadamo on 2017. 07. 14..
 */
var pokemons = [
	{
		"id": 1,
		"name": "Bulbasaur",
		"type": [ "grass", "poison" ],
		"sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
	},
	{
		"id": 5,
		"name": "Charmeleon",
		"type": [ "fire" ],
		"sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
	},
	{
		"id": 15,
		"name": "Beedrill",
		"type": [ "bug", "poison" ],
		"sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
	},
	{
		"id": 193,
		"name": "Yanma",
		"type": [ "bug", "flying" ],
		"sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png"
	},
	{
		"id": 152,
		"name": "Chikorita",
		"type": [ "grass" ],
		"sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png"
	}
]



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
	renderPokemon(item);
});