export async function getPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=25');
    const jsonResponse = await response.json();
    const getProfiles = await Promise.all(jsonResponse.results.map(pokemon => getPokemonProfile(pokemon.name)));
    return getProfiles;
}

export async function getPokemonProfile(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    const jsonResponse = await response.json();
    return {
        ...jsonResponse,
        imageMain: jsonResponse.sprites.other['official-artwork'].front_default
    };
}

export async function getPokemonByType(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${name}/`);
    const jsonResponse = await response.json();
    const getProfiles = await Promise.all(jsonResponse.pokemon.map(pokemon => getPokemonProfile(pokemon.pokemon.name)));
    return getProfiles;
}

export async function getSpecies(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`);
    const jsonResponse = await response.json();
    return {
        generation: jsonResponse.generation.name.toUpperCase(),
        text: (jsonResponse.flavor_text_entries[0].flavor_text + ' ' + jsonResponse.flavor_text_entries[1].flavor_text).replace(/[^a-zA-Z. ]/g, " ")
    };
}