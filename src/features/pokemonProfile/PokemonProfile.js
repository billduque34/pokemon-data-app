import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpecies, selectSpecies } from '../species/speciesSlice';
import './PokemonProfile.scss';
import { selectPokemonProfile } from './pokemonProfileSlice';

export function PokemonProfile() {
    const pokemonProfile = useSelector(selectPokemonProfile);
    const species = useSelector(selectSpecies);

    const dispatch = useDispatch();
    const [pokeId, setPokeId] = useState();

    const loadingSpecies = useSelector(state => state.species.isLoadingSpecies);

    useEffect(() => {
        dispatch(fetchSpecies(pokemonProfile.name));
    }, [pokemonProfile.name, dispatch]);

    useEffect(() => {
        const id = pokemonProfile.id;
        if(id < 10) {
             setPokeId(`000${id}`);
        } else if(id < 100) {
             setPokeId(`00${id}`);
        } else if(id < 1000) {
             setPokeId(`0${id}`);
        } else {
             setPokeId(id);
        }
    }, [pokemonProfile]);

    if(loadingSpecies) {
        return <></>;
    }

    return (<div className="PokemonProfile">
                <div className="inner-border">
                    <div className="images-and-description">
                        <div className="poke-images">
                            <div className="background-image">
                                <img src={pokemonProfile.imageMain} alt=""/>
                            </div>
                            <div className="pokemon-gallery">
                                {Object.values(pokemonProfile.sprites)
                                        .filter(image => typeof image === 'string')
                                        .map((image,index) =><img key={index+1} src={image} alt="" />)}
                            </div>
                        </div>
                        <div className="poke-description">
                            <div className="id-and-name">
                                <div className="poke-id">
                                    <p>{pokeId}</p>
                                </div>  
                                <div className="poke-name">
                                    <p>{pokemonProfile.name.toUpperCase()}</p>
                                </div>
                            </div>
                            <div className="evolution">
                                <div className="evo">
                                    <p>{species.generation}</p>
                                </div>
                                <p>{species.text}</p>
                            </div>
                        </div>
                    </div>
                    <div className="poke-infos">
                    </div>
                </div>
            </div>);
}