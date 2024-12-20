import { useState, useEffect } from 'react';
import Details from '../Details';
import Stats from '../Stats';
import './PokemonCard.css';

// Displays the Pokemon details.
// Handles caught status.
function PokemonCard(props) {

  // pokemon state object
  const [poke, setPoke] = useState({});     

  // Grab the pokemon with the given url from the Poke API
  useEffect( () => {                        
    fetch(props.url)
    .then( response => response.json())
    .then(json => { setPoke(json); });
  }, []);

  // Toggles the caught status and updates the pokemon state
  function toggleCaughtHandler(){           
    console.log(`setting caught status to ${!poke.CaughtStatus}`)
  }

  /***** Build *****/
  return (
    <article>
      { poke.id ?
        <>
          <header>
            <Details poke={poke} catchHandler={toggleCaughtHandler}/> 
          </header>
          <main>
            <Stats poke={poke} />
          </main>
        </>
        :
        <p>loading...</p>
      }
    </article>
  );
      
}

export default PokemonCard;