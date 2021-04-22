import { createSlice } from "@reduxjs/toolkit";

export const pokemonProfileSlice = createSlice({
    name: 'pokemonProfile',
    initialState: {},
    reducers: {
        addPokemonToProfile: (state, action) => {
            return action.payload;
        }
    }
});

export const selectPokemonProfile = state => state.pokemonProfile;
export const { addPokemonToProfile } = pokemonProfileSlice.actions;
export default pokemonProfileSlice.reducer;