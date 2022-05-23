(() => {
    const searchButton = document.getElementById('search');

    async function getPokemonById () {
        const pokemonId = document.getElementById('pokemon-id');
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        // If call failed, giva an error
        if (!response.ok) {
            throw 'Something went wrong!';
        }
        const data = await response.json();
        console.log(data);
    }
})