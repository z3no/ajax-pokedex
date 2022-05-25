const apiPokemon = "https://pokeapi.co/api/v2/pokemon/";
const searchButton = document.getElementById('search');
const display = document.querySelector('.display');

async function getPokemon () {
    const pokemonValue = document.getElementById('pokemon').value;
    let input = pokemonValue;

    //get pokemon name/id by input
    const response = await fetch(`${apiPokemon}${input}`);
    // If call failed, give an error
    if (!response.ok) {
        throw 'Something went wrong!';
    }
    const data = await response.json();
    console.log(data);
    //console.log(data, data.id, data.name, data.moves[0], data.moves[1], data.moves[2], data.moves[3], data.sprites.front_default);

    //get pokemon species url
    const responseSpecies = await fetch (data.species.url);
    const dataSpecies = await responseSpecies.json();
    console.log(dataSpecies);

    //get pokemon evolution chain
    const responseEvolutionChain = await fetch (dataSpecies.evolution_chain.url);
    const dataEvolutionChain = await responseEvolutionChain.json();
    console.log(dataEvolutionChain);

    //Evolutions eevee
    if (dataEvolutionChain.chain.evolves_to.length === 8) {
        console.log(dataEvolutionChain.chain.species.name);
        console.log(dataEvolutionChain.chain.evolves_to[0].species.name);
        console.log(dataEvolutionChain.chain.evolves_to[1].species.name);
        console.log(dataEvolutionChain.chain.evolves_to[2].species.name);
        console.log(dataEvolutionChain.chain.evolves_to[3].species.name);
        console.log(dataEvolutionChain.chain.evolves_to[4].species.name);
        console.log(dataEvolutionChain.chain.evolves_to[5].species.name);
        console.log(dataEvolutionChain.chain.evolves_to[6].species.name);
        console.log(dataEvolutionChain.chain.evolves_to[7].species.name);
    }

    //display the ID
    let pokemonID = document.getElementById('pokemonID');
    pokemonID.innerText = data.id;

    //display the Pokémon name
    let pokemonName = document.getElementById('pokemonName');
    pokemonName.innerText = data.name;

    //display the moves
    let oneTrickPony = ['ditto', '132', '201', 'unown', '235', 'smeargle'] //Pokémons with one move in array
    if (input === oneTrickPony) {
        let pokemonMoves = document.getElementById('pokemonMoves');
        let movesArray = data.moves.map(moves => moves.move.name);
        console.log(pokemonMoves);
        pokemonMoves.innerText = movesArray;
    } else {
        pokemonMoves.innerText = data.moves.map(moves => moves.move.name).splice(0, 4).join(', ');
    }

    //display the image
    function addImage (){
        const pokemonImageContainer = document.getElementById('pokemonImageContainer');
        let newPokemonImage = new Image;
        newPokemonImage.src = data.sprites.other.home.front_default;
        pokemonImageContainer.innerHTML = '';
        pokemonImageContainer.appendChild(newPokemonImage);
    }

    addImage();

    //make the card visible in HTML
    function displayCard () {
        display.style.visibility = 'visible';
    }

    displayCard();

}

searchButton.addEventListener('click', getPokemon);