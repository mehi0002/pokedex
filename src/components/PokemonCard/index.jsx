import { useState, useEffect } from 'react';
// import Stats from '../Stats';
import CaughtStatus from '../CaughtStatus';
import './PokemonCard.css';

// Displays the Pokemon details.
function PokemonCard({name, url, caught}) {

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
  // function openCloseStats(){
  //   console.log('open/close stats...')
  //   setViewStats( prevState => !prevState);
  // }

  /***** Build *****/
  return (
    <article className="card">
    { poke.id ?
        <>
            <h2>{poke.name}</h2>
            {/* <div className='imageContainer'> */}
              <img src={poke['sprites']['other']['official-artwork']['front_default']} alt={`Official art of ${poke.name}`}/> 
            {/* </div> */}
            <CaughtStatus name={poke.name} caught={caught}></CaughtStatus>

           {/* viewStats &&
          //   <main>
          //     <div className="cardHeader">
          //       <h3>{poke.name}</h3>
          //       <img src={poke['sprites']['other']['official-artwork']['front_default']}/>
          //       <CaughtStatus name={poke.name} caught={} toggle={}></CaughtStatus>
          //     </div>
          //     <Stats poke={poke}/>
          //   </main>
          // */}
        </>
        :
        <p>loading...</p>
      }
    </article>
  );
      
}

export default PokemonCard;