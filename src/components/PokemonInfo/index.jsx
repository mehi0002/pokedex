import Type from '../Type/Type';
import StatMeter from '../StatMeter/StatMeter';
import './PokemonInfo.css';

    function PokemonInfo ({poke}){

    /*** Build ***/
    return(

        <article id='pokeInfo'>
            <h2>{poke.name}</h2>
            <img src={poke['sprites']['other']['official-artwork']['front_default']} alt={`Official art of ${name}`}/> 
            
            <section id="pokeDetails">
                
                <h3>Type</h3>
                <ul id="types">
                    <li className={`type ${poke.types[0].type.name}`}>{poke.types[0].type.name}</li>
                    { poke.types[1] &&
                        <li className={`type ${poke.types[1].type.name}`}>{poke.types[1].type.name}</li>
                    }
                </ul>
                
                <h3>Characteristics</h3>
                <ul id="characteristics">
                    <li>{`Height: ${poke.height}`}</li>                   {/* Height */}
                    <li>{`Weight: ${poke.weight}`}</li>                   {/* Weight */}
                    <li>{`Base XP: ${poke.base_experience}`}</li>         {/* Base XP */}
                </ul>
            </section>
    
            <section className='stats'>
                <h3>Stats</h3>
                <ul id="stats">                                                {/* Base stats */}
                {
                    poke.stats.map( (stat, index) =>
                    <li key={index}>
                        <StatMeter pokeName={poke.name} statName={stat.stat.name} base={stat.base_stat} />
                    </li>
                    )
                }
                </ul>
            </section>
        </article>
    )
}

export default PokemonInfo;