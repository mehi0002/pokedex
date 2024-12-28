import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to={`/${poke.name}`} aria-label={`view stats for ${poke.name}`}>
            <img src={poke['sprites']['other']['official-artwork']['front_default']} aria-hidden='true'/>
          </Link>
          <CaughtStatus name={poke.name} caught={caught} toggle={catchHandler}/> 
        </> :
        <p>loading</p>
    }
    </article>
  );
      
}

export default PokemonCard;