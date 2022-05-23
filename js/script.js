const apiPokemon = "https://pokeapi.co/api/v2/pokemon/";
const searchButton = document.getElementById('search');


async function getPokemon () {
    const pokemonValue = document.getElementById('pokemon').value;
    let input = pokemonValue;

    const response = await fetch(`${apiPokemon}${input}`);
    // If call failed, give an error
    if (!response.ok) {
        throw 'Something went wrong!';
    }
    const data = await response.json();
    console.log(data.id, data.name, data.moves[0], data.moves[1], data.moves[2], data.moves[3], data.sprites.front_default);
    //display the ID
    let pokemonID = document.getElementById('pokemonID');
    pokemonID.innerText = data.id;
}

searchButton.addEventListener('click', getPokemon);