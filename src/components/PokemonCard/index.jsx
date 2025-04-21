import { useState, useEffect } from 'react';
// import Stats from '../Stats';
import CaughtStatus from '../CaughtStatus';
import './PokemonCard.css';

// Displays the Pokemon details.
function PokemonCard({name, url, caught, catchHandler}) {

  /*** States ***/
  const [poke, setPoke] = useState({});               // Single pokemon

  /*** Effects ***/
  
  // fetch pokemon from Poke API
  useEffect( () => {                        
    fetch(url)
    .then( response => response.json())
    .then(json => setPoke(json) )}
  , []);

  /***** Build *****/
  return (
    <article className="card">
      { poke.id ?
        <>
            <h2>{name}</h2>
            <CaughtStatus name={name} caught={caught} toggleHandler={catchHandler} />
            <img src={poke['sprites']['other']['official-artwork']['front_default']} alt={`Official art of ${poke.name}`}/> 
        </>
        :
        <p>loading...</p>
      }
    </article>
  );
      
}

export default PokemonCard;