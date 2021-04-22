import { Route, Switch } from 'react-router';
import { HeaderBar } from '../../components/HeaderBar/HeaderBar';
import { HomePage } from '../../components/HomePage/HomePage';
import { MusicBar } from '../../components/MusicBar/MusicBar';
import { PokemonList } from '../../components/PokemonList/PokemonList';
import { PokemonTypeOptions } from '../../components/PokemonTypeOptions/PokemonTypeOptions';
import './PokeDex.scss';

export function PokeDex() {
    return (<div className="PokeDex">
                <header>
                    <div className="header-outline">
                        <HeaderBar/>
                        <MusicBar/>
                        <div className="sub-options">
                            <div className="sub-option-screen">
                                <div className="tinted-screen">
                                    <Switch>
                                        <Route exact path="/">
                                            <div></div>
                                        </Route>
                                        <Route path="/pokemon">
                                            <PokemonTypeOptions/>
                                        </Route>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="icon-container">
                        <img src="./images/pokeknowledge.png" alt=""/>
                    </div>
                    <div className="main-outline">
                        <div className="screen-outline">
                            <div className="screen">
                                <Switch>
                                    <Route exact path="/">
                                        <HomePage/>
                                    </Route>
                                    <Route path="/pokemon">
                                        <PokemonList/>
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </main>
            </div>);
}