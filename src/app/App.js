import { BrowserRouter as Router } from 'react-router-dom'; 
import './App.scss';
import { PokeDex } from '../PokemonUI/Pokedex/PokeDex';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <PokeDex/>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
