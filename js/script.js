
    const apiPokemon = "https://pokeapi.co/api/v2/pokemon/";
    //const searchButton = document.getElementById('search');
    //searchButton.addEventListener('click', getPokemonById);

    async function getPokemonById () {
        //let pokemonId = document.getElementById('pokemon-id').value;
        //let numberId = Number(pokemonId);

        const response = await fetch(apiPokemon);
        // If call failed, giva an error
        if (!response.ok) {
            throw 'Something went wrong!';
        }
        const data = await response.json();
        console.log(data);
    }

    getPokemonById();