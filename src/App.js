import './App.css';
import { Route } from 'react-router-dom'
import Home from './pages/home/Home';
import axios from 'axios';
import Header from './components/Header/Header';
import PokemonDetail from './pages/pokemonDetail/PokemonDetail';
import MyPokemons from './pages/myPokemons/MyPokemons';

function App() {

  axios.defaults.baseURL ="https://pokeapi.co/api/v2";

  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/pokemon/:pokemonName" exact component={PokemonDetail} />
      <Route path="/my-pokemons" exact component={MyPokemons} />
    </div>
  );
}

export default App;
