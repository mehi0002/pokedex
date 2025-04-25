import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    .then(json => setPoke(json) )
  }, []);

  /*** Handlers ***/
  function clickHandler(e){
    e.preventDefault();
    // selectHandler({...poke});

  }

  /***** Build *****/

  return (
    <article className="card pokeCard">
      { poke.name ?
        <>
          {/* Mobile version - opens a new view */}
          <Link to={`/${poke.name}`} className="cardTitle mobile">
            <p>{poke.name}</p>
            <img src={poke['sprites']['other']['official-artwork']['front_default']} alt={`Official art of ${poke.name}`}/> 
          </Link>
          
          {/* Tablet version - updates a sidebar */}
          {/* <button onClick={clickHandler} className="cardTitle tablet">
            <p>{poke.name}</p>
            <img src={poke['sprites']['other']['official-artwork']['front_default']} alt={`Official art of ${poke.name}`}/> 
          </button> */}
          
          <CaughtStatus name={poke.name} caught={caught} toggleHandler={catchHandler} />
        </>
        :
        <p>loading...</p>
      }
    </article>
  );
      
}

export default PokemonCard;