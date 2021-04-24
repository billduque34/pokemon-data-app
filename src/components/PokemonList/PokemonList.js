import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PokemonCard } from '../../features/pokemon/PokemonCard';
import { fetchPokemon, selectPokemon } from '../../features/pokemon/pokemonSlice';
import './PokemonList.scss';

export function PokemonList() {
    const pokemon = useSelector(selectPokemon);
    const isLoadingPokemon = useSelector(state => state.pokemon.isPokemonLoading);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPokemon());
    }, [dispatch]);

    return (<div className="PokemonList">
                {isLoadingPokemon ? <img src="./images/pokeball-for-loading.png" alt="loading"/> : <div className="pokemon-list">
                    {pokemon.map(element => <Link to={`/pokemon-profile/${element.id}`} key={element.id}>
                                                <PokemonCard pokemon={element} key={element.id} />
                                            </Link>)}
                </div>}
            </div>);
}