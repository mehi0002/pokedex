import PokemonCard from '../PokemonCard';
import './PokemonList.css';

function PokemonList({pokemon}) {

  return (
    <article>
      <ul>
        {/* {pokemon.map( (poke, index) => 
          <li key={index}>
            <PokemonCard pokeID={index+1} />
          </li>
        )} */}
        <li>
        {console.log(pokemon)}
        {console.log(`Sending pokemon ${pokemon[0].name} at ${pokemon[0].url}`)}
        <PokemonCard url={pokemon[0].url} />
        </li>
      </ul>
    </article>
  );
}

export default PokemonList;