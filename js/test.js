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
    //console.log(data);
    //console.log(data, data.id, data.name, data.moves[0], data.moves[1], data.moves[2], data.moves[3], data.sprites.front_default);

    //get pokemon species url
    const responseSpecies = await fetch (data.species.url);
    const dataSpecies = await responseSpecies.json();
    //console.log(dataSpecies);

    //get pokemon evolution chain
    const responseEvolutionChain = await fetch (dataSpecies.evolution_chain.url);
    const dataEvolutionChain = await responseEvolutionChain.json();
    //console.log(dataEvolutionChain);

    //evolutions
    const firstForm = dataEvolutionChain.chain.species.name;
    const firstFormDataFetch = await fetch(`${apiPokemon}${firstForm}`);
    const firstFormData = await firstFormDataFetch.json();
    console.log(firstFormData);

    const firstEvolution = dataEvolutionChain.chain.evolves_to[0].species.name;
    const firstEvolutionDataFetch = await fetch(`${apiPokemon}${firstEvolution}`);
    const firstEvolutionData = await firstEvolutionDataFetch.json();
    console.log(firstEvolutionData);

    const secondEvolution = dataEvolutionChain.chain.evolves_to[0].evolves_to[0].species.name;
    const secondEvolutionDataFetch = await fetch(`${apiPokemon}${secondEvolution}`);
    const secondEvolutionData = await secondEvolutionDataFetch.json();
    console.log(secondEvolutionData);

    //Pokemon with evolutions in array
    let pokemonArray = [];
    pokemonArray.push(firstForm);
    pokemonArray.push(firstEvolution);
    pokemonArray.push(secondEvolution);

    console.log(pokemonArray);

    //display evolutions
    function displayEvolutions (){
        const evolutionDisplay = document.getElementById('evolutionContainer');
        evolutionDisplay.innerText = pokemonArray.join(' ');
        console.log(pokemonArray);
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

    //display the images
    function addImage (){
        const pokemonImageContainer = document.getElementById('pokemonImageContainer');
        let newPokemonImage = new Image;
        newPokemonImage.src = data.sprites.other.home.front_default;
        pokemonImageContainer.innerHTML = '';
        pokemonImageContainer.appendChild(newPokemonImage);

    }
    addImage();

    function showFirstForm () {
        const container = document.getElementById('firstForm');
        let firstFormImage = new Image(100,100);
        firstFormImage.src = firstFormData.sprites.other.home.front_default;
        container.innerHTML = '';
        container.appendChild(firstFormImage);
    }

    function showFirstEvolution () {
        const container = document.getElementById('firstEvolution');
        let firstEvolutionImage = new Image(100,100);
        firstEvolutionImage.src = firstEvolutionData.sprites.other.home.front_default;
        container.innerHTML = '';
        container.appendChild(firstEvolutionImage);
    }

    function showSecondEvolution () {
        const container = document.getElementById('secondEvolution');
        let secondEvolutionImage = new Image(100,100);
        secondEvolutionImage.src = secondEvolutionData.sprites.other.home.front_default;
        container.innerHTML = '';
        container.appendChild(secondEvolutionImage);
    }

    showFirstForm();
    showFirstEvolution();
    showSecondEvolution();

    //make the card visible in HTML
    function displayCard () {
        display.style.visibility = 'visible';
    }

    displayCard();

}

searchButton.addEventListener('click', getPokemon);