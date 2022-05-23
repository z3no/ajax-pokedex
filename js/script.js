const apiPokemon = "https://pokeapi.co/api/v2/pokemon/";
const searchButton = document.getElementById('search');

async function getPokemonById () {
    let pokemonId = document.getElementById('pokemon-id').value;
    let numberId = Number(pokemonId);

    const response = await fetch(`${apiPokemon}${numberId}`);
    // If call failed, giva an error
    if (!response.ok) {
        throw 'Something went wrong!';
    }
    const data = await response.json();
    console.log(data.id, data.name, data.moves[0], data.moves[1], data.moves[2], data.moves[3], data.sprites.front_default);
}

searchButton.addEventListener('click', getPokemonById);