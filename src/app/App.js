import { BrowserRouter as Router } from 'react-router-dom'; 
import './App.scss';
import { PokeDex } from '../PokemonUI/Pokedex/PokeDex';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Router>
            <PokeDex/>
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
