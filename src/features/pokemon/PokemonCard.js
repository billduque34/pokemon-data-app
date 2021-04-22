import { useDispatch } from 'react-redux';
import { addPokemonToProfile } from '../pokemonProfile/pokemonProfileSlice';
import './PokemonCard.scss';

export function PokemonCard({pokemon}) {
    const dispatch = useDispatch();

    const clickPokemon = () => {
        dispatch(addPokemonToProfile(pokemon));
    }

    return (<div className="PokemonCard" onClick={clickPokemon}>
                <div className="img-with-background">
                    <img src={pokemon.sprites.front_default} alt=""/>
                </div>
                <p>{pokemon.name.toUpperCase()}</p>
            </div>);
}