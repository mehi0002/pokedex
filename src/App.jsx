import { useState, useEffect } from 'react';
import Gallery from './components/Gallery'
import './App.css';

function App() {

  /*** States ***/
  const [pokemon, setPokemon] = useState([]);
  const [caught, setCaught] = useLocalStorage('caught', {});

  /*** Effects ***/

  // Fetching the first 20 pokemon from the Poke API
  useEffect(() => {                                   
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(json => {setPokemon(json.results); console.log('getting first 20 pokemon...')} )
    }, [] );

  /*** Functions ***/

  function useLocalStorage(key, defaultValue){
    const obj = localStorage.getItem(key);
    return( useState( obj ? obj : defaultValue));
  }
  
  /*** Build ***/
  return (
    <main className="container-fluid">
      {pokemon[0] ?
        <Gallery pokemon={pokemon} caught={caught}/> :
        <p>loading...</p>
      }
    </main>
  );
}

export default App
