import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from '../features/pokemon/pokemonSlice';

export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer
    }
});