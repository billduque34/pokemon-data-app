import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSpecies } from "../../PokemonAPI/PokemonAPI";

export const fetchSpecies = createAsyncThunk('species/fetchSpecies',
    async (name) => {
        return await getSpecies(name);
    });

    export const speciesSlice = createSlice({
        name: 'species',
        initialState: {
            species: {},
            isLoadingSpecies: false,
            hasErrorSpecies: false,
        },
        reducers: {},
        extraReducers: {
            [fetchSpecies.pending]: (state, action) => {
                state.isLoadingSpecies = true;
                state.hasErrorSpecies = false;
            },
            [fetchSpecies.fulfilled]: (state, action) => {
                state.species = action.payload;
                state.isLoadingSpecies = false;
                state.hasErrorSpecies = false;
            },
            [fetchSpecies.rejected]: (state, action) => {
                state.isLoadingSpecies = false;
                state.hasErrorSpecies = true;
            }
        }
    });

export const selectSpecies = state => state.species.species;
export default speciesSlice.reducer;