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
    //console.log(data, data.id, data.name, data.moves[0], data.moves[1], data.moves[2], data.moves[3], data.sprites.front_default);
    //display the ID
    let pokemonID = document.getElementById('pokemonID');
    pokemonID.innerText = data.id;
    //display the Pokémon name
    let pokemonName = document.getElementById('pokemonName');
    pokemonName.innerText = data.name;
    //display the moves
    let pokemonMoves = document.getElementById('pokemonMoves');
    function moves () {
        const moves = [];
        for (let i = 0; i < 4; i++) {
            moves.push(` ${data.moves[i].move.name}`);
        }
        return moves;
    }
    pokemonMoves.innerText = moves();
    //display the image
    function addImage (){
        const pokemonImageContainer = document.getElementById('pokemonImageContainer');
        let newPokemonImage = new Image;
        newPokemonImage.src = data.sprites.front_default;
        pokemonImageContainer.innerHTML = '';
        pokemonImageContainer.appendChild(newPokemonImage);
    }

    addImage();
}

searchButton.addEventListener('click', getPokemon);