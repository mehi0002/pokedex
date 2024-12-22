import { useState, useEffect } from 'react';
import CaughtStatus from '../CaughtStatus';
import './PokemonCard.css';

// Displays the Pokemon details.
function PokemonCard({url, caught, catchHandler}) {

  /*** States ***/
  const [poke, setPoke] = useState({});                       // pokemon state object

  /*** Effects ***/
    // Grab the pokemon with the given url from the Poke API
    useEffect( () => {                        
        fetch(url)
        .then( response => response.json())
        .then(json => { setPoke(json); });
    }, []);

  /***** Build *****/
  return (
    <article className="card">
    {console.log(poke)}
    { poke.id ?
        <>
          <h3>{poke.name}</h3>
          <img src={poke['sprites']['other']['official-artwork']['front_default']} aria-hidden='true'/>
          <CaughtStatus name={poke.name} caught={caught} toggle={catchHandler}/> 
        </> :
        <p>loading</p>
    }
    </article>
  );
      
}

export default PokemonCard;