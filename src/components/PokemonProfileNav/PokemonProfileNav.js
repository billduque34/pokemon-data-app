import './PokemonProfileNav.scss';

export function PokemonProfileNav(props) {
    return (<div className="PokemonProfileNav">
                <button onClick={() => props.setActive('information')}>INFO</button>
                <button onClick={() => props.setActive('moves')}>MOVES</button>
                <button onClick={() => props.setActive('evolution')}>EVOLUTION</button>
            </div>);
}