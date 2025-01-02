import PokemonCard from '../PokemonCard';
import './PokemonList.css';

// Displays a list of pokemon info
// Displays stats when a pokemon is selected
function PokemonList({pokemon, caughtList, catchHandler}) {

  /**** Build *****/
  return (
    <article>
      <ul id='pokemonList'>
        {pokemon.map( (poke, index) => 
          <li key={index+1}>
            {/* <PokemonCard poke={poke} caught={caughtList[index]} catchHandler={catchHandler} /> */}
            <PokemonCard url={poke.url} caught={false} catchHandler={catchHandler} />
          </li>
        )}
      </ul>
    </article>
  );
}

export default PokemonList;