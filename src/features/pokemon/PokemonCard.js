import './PokemonCard.scss';

export function PokemonCard({pokemon}) {
    return (<div className="PokemonCard">
                <div className="img-with-background">
                    <img src={pokemon.sprites.front_default} alt=""/>
                </div>
                <p>{pokemon.name}</p>
            </div>);
}