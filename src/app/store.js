import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pokemonReducer from '../features/pokemon/pokemonSlice';
import pokemonProfileReducer from '../features/pokemonProfile/pokemonProfileSlice';
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
        pokemon: pokemonReducer,
        pokemonProfile: pokemonProfileReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export let store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export let persistor = persistStore(store);
