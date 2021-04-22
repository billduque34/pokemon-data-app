import './PokemonPage.scss';
import { pokemonTypes } from '../../utilities/pokemonTypesData';
import { PokemonList } from '../PokemonList/PokemonList';

export function PokemonPage() {
    
    return (<div className="PokemonPage">
                <aside>
                    <nav>
                        {pokemonTypes.map(type => <button style={{backgroundColor: type.color}}>{type.name}</button>)}
                    </nav>
                </aside>
                <main>
                    <div className="border-shadow">
                        <div className="outline-screen">
                            <div className="screen">
                                <PokemonList/>
                            </div>
                        </div>
                    </div>
                </main>
            </div>);
}