import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from '../features/pokemon/pokemonSlice';
import pokemonProfileReducer from '../features/pokemonProfile/pokemonProfileSlice';
import speciesReducer from '../features/species/speciesSlice';

export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer,
        pokemonProfile: pokemonProfileReducer,
        species: speciesReducer
    } 
});

