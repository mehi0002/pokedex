import PokemonCard from '../PokemonCard';
import './Gallery.css';

// Displays a list of pokemon info
// Displays stats when a pokemon is selected
function Gallery({pokemon, caught, catchHandler}) {

  /**** Build *****/
  return (
    <article>
      <ul id='pokemonList'>
        {pokemon.map( (poke, index) => 
          <li key={index+1}>
            {/* <PokemonCard poke={poke} caught={caughtList[index]} catchHandler={catchHandler} /> */}
            <PokemonCard name={poke.name} url={poke.url} caught={ caught[poke.name] ? true : false } catchHandler={catchHandler} />
          </li>
        )}
      </ul>
    </article>
  );
}

export default Gallery;