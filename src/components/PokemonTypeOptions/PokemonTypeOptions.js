import { useDispatch } from 'react-redux';
import { fetchPokemon } from '../../features/pokemon/pokemonSlice';
import { pokemonTypes } from '../../utilities/pokemonTypesData';
import './PokemonTypeOptions.scss';

export function PokemonTypeOptions() {
    const dispatch = useDispatch();

    const clickType = (type) => {
        return () => {
            dispatch(fetchPokemon(type.toLowerCase()));
        }
    }

    return (<div className="PokemonTypeOptions">
                {pokemonTypes.map((type,index) => <button key={index+1} 
                                                          style={{backgroundColor: type.color}}
                                                          onClick={clickType(type.name)}>{type.name}</button>)}
            </div>);
}