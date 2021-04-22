import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemon, getPokemonByType } from "../../PokemonAPI/PokemonAPI";

export const fetchPokemon = createAsyncThunk('pokemon/fetchPokemon',
    async (name='') => {
        if(name) {
            return await getPokemonByType(name); 
        }
        return await getPokemon();
    });

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemon: [],
        isPokemonLoading: false,
        hasErrorPokemon: false
    },
    reducers: {},
    extraReducers: {
        [fetchPokemon.pending]: (state, action) => {
            state.isPokemonLoading = true;
            state.hasErrorPokemon = false;
        },
        [fetchPokemon.fulfilled]: (state, action) => {
            state.pokemon = action.payload;
            state.hasErrorPokemon = false;
            state.isPokemonLoading = false;
        },
        [fetchPokemon.rejected]: (state, action) => {
            state.isPokemonLoading = false;
            state.hasErrorPokemon = true;
        }
    }
});

export const selectPokemon = state => state.pokemon.pokemon;
export default pokemonSlice.reducer;