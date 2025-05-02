// import { useEffect } from 'react';
// import { useState } from 'react';
import PokemonCard from '../PokemonCard';
import './Gallery.css';

// Displays a list of pokemon cards
function Gallery({pokemonList, caught, catchHandler, selectPokeHandler}) {

  /**** Build *****/
  return (
    <div id='pokemonGallery'>
      <ul>
        { pokemonList.map( (poke, index) => 
          <li key={index+1}>
            <PokemonCard 
              name = {poke.name} 
              image = {poke['sprites']['other']['official-artwork']['front_default']}
              alt = {`Official art of ${poke.name}`}
              caught={ caught.find(caughtPoke => caughtPoke.name == poke.name) ? true : false } 
              catchHandler={catchHandler} 
              selectHandler={selectPokeHandler}
            />
          </li>
        )}
      </ul>
    </div>
  );

}

export default Gallery;