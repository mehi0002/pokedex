import PokemonCard from '../PokemonCard';
import './PokemonList.css';

// Displays a list of pokemon info
// Displays stats when a pokemon is selected
function PokemonList({pokemon}) {

  /**** Build *****/
  return (
    <article>
      <ul id='pokemonList'>
        {pokemon.map( (poke, index) => 
          <li key={index+1}>
            <PokemonCard url={pokemon[index].url} />
          </li>
        )}
      </ul>
    </article>
  );
}

export default PokemonList;