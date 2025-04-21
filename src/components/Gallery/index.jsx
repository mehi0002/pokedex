import PokemonCard from '../PokemonCard';
import './Gallery.css';

// Displays a list of pokemon info
function Gallery({pokemon, caught, catchHandler}) {

  /**** Build *****/
  return (
    <article id='pokemonGallery'>
      <ul>
        {pokemon.map( (poke, index) => 
          <li key={index+1}>
            <PokemonCard 
              name={poke.name} 
              url={poke.url} 
              caught={ caught.includes(poke.name) ? true : false } 
              catchHandler={catchHandler} 
            />
          </li>
        )}
      </ul>
      <button>Load More</button>
    </article>
  );
}

export default Gallery;