import { Link } from 'react-router-dom';
import './HeaderBar.scss';

export function HeaderBar() {
    return (<div className="HeaderBar">
                <Link to="/">
                    <button>HOME</button>
                </Link>
                <Link to="/pokemon">
                    <button>POKEMON</button>
                </Link>
                <Link to="/">
                    <button>ITEMS</button>
                </Link>
                <Link to="/">
                    <button>BERRIES</button>
                </Link>
                <Link to="/">
                    <button>CONTESTS</button>
                </Link>
                <Link to="/">
                    <button>REGIONS</button>
                </Link>
            </div>);
}