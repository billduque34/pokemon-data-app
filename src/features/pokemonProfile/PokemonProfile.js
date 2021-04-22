import { useSelector } from 'react-redux';
import './PokemonProfile.scss';
import { selectPokemonProfile } from './pokemonProfileSlice';

export function PokemonProfile() {
    const pokemonProfile = useSelector(selectPokemonProfile);

    return (<div className="PokemonProfile">
                <div className="inner-border">
                    <div className="images-and-description">
                        <div className="poke-images">
                            <div className="background-image">
                                <img src={pokemonProfile.sprites.other['official-artwork'].front_default} alt=""/>
                            </div>
                            <div className="pokemon-gallery">
                                {Object.values(pokemonProfile.sprites)
                                        .filter(image => typeof image === 'string')
                                        .map((image,index) =><img key={index+1} src={image} alt="" />)}
                            </div>
                        </div>
                        <div className="poke-description">

                        </div>
                    </div>
                    <div className="poke-infos">

                    </div>
                </div>
            </div>);
}