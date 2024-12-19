import { useState, useEffect } from 'react';
import PokemonList from './components/PokemonList'
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  // Fetching the first 20 pokemon from the Poke API
  useEffect(() => {                                   
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(json => {setPokemon(json.results); console.log('getting first 20 pokemon...')} )
    }, [] );

  return (
    <main>
      {pokemon[0] ?
        <PokemonList pokemon={pokemon} /> :
        <p>loading...</p>
      }
    </main>
  );
}

export default App
