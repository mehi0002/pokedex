import { useState, useEffect } from 'react';
import CardHeader from '../CardHeader';
import Stats from '../Stats';
import './PokemonCard.css';

// Displays the Pokemon details.
function PokemonCard({url}) {

  /*** States ***/
  const [poke, setPoke] = useState({});               // Single pokemon
  const [viewStats, setViewStats] = useState(false);  // Tracks whether stats are visible

  /*** Effects ***/
  
  // fetch pokemon from Poke API
  useEffect( () => {                        
    fetch(url)
    .then( response => response.json())
    .then(json => setPoke(json) )}
  , []);

  /*** Functions ***/
  function openCloseStats(){
    setViewStats( prevState => !prevState);
  }

  /***** Build *****/
  return (
    <article className="card">
    {console.log(poke)}
    { poke.id ?
        <>
          <header>
            <CardHeader poke={poke}/> 
            <button onClick={openCloseStats}> {`View ${poke.name}'s stats`} </button>
          </header>
          <main>
            <Stats poke={poke} visible={viewStats}/>
          </main>
        </>
        :
        <p>loading...</p>
      }
    </article>
  );
      
}

export default PokemonCard;