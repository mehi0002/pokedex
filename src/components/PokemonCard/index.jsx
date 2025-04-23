import { useState, useEffect } from 'react';
import CaughtStatus from '../CaughtStatus';
import './PokemonCard.css';

// Displays the Pokemon name, image, and caught status.
function PokemonCard({url, caught, catchHandler, selectHandler}) {

  /*** States ***/
  const [poke, setPoke] = useState({});               // Single pokemon

  /*** Effects ***/
  
  // fetch pokemon from Poke API
  useEffect( () => {                        
    fetch(url)
    .then( response => response.json())
    .then(json => setPoke(json) )}
  , []);

  /*** Handlers ***/
  function clickHandler(e){
    e.preventDefault();
    selectHandler(poke.name);
  }

  /***** Build *****/

  return (
    <article className="card pokeCard">
      { poke.name ?
        <>
          <button onClick={clickHandler} className="cardTitle">
            <h2>{poke.name}</h2>
            <img onClick={clickHandler} src={poke['sprites']['other']['official-artwork']['front_default']} alt={`Official art of ${poke.name}`}/> 
          </button>
          <CaughtStatus name={poke.name} caught={caught} toggleHandler={catchHandler} />
        </>
        :
        <p>loading...</p>
      }
    </article>
  );
      
}

export default PokemonCard;