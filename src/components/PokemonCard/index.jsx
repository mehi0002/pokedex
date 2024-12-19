import { useState, useEffect } from 'react';
import Details from '../Details';
import './PokemonCard.css';

function PokemonCard(props) {

  const [poke, setPoke] = useState({});

  useEffect( () => {
    fetch(props.url)
    .then( response => response.json())
    .then(json => { console.log(`getting poke: ${json.name}`); setPoke(json); });
  }, []);

  function toggleCaughtHandler(){
    console.log(`setting caught status to ${!poke.CaughtStatus}`)
  }

  return (
    <>
      { poke.id ?
        <Details poke={poke} catchHandler={toggleCaughtHandler}/> :
        <p>loading...</p>
      }
    </>
  );
      
}

export default PokemonCard;