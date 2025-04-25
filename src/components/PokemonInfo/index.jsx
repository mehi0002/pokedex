import Type from '../Type/Type';
import StatMeter from '../StatMeter/StatMeter';
import './PokemonInfo.css';

// function PokemonInfo (url){
    function PokemonInfo ({poke}){

    /*** Build ***/
    return(
        
        <>
            {console.log(`pokemon info: ${JSON.stringify(poke)}`)}
            {console.log(poke.abilities)}

            {
                poke.name ?
                    <aside id='pokeInfo'>
                        <h2>{poke.name}</h2>
                        <img src={poke['sprites']['other']['official-artwork']['front_default']} alt={`Official art of ${poke.name}`}/> 
                        
                        <section className="details">
                            <h3>Type</h3>
                            <Type> {poke.types[0].type.name} </Type>            {/* Type #1 */}            
                            { poke.types[1] && 
                            <Type> {poke.types[1].type.name} </Type>            /* Type #2 */
                            }
                            <h3>Characteristics</h3>
                            <p>{`Height: ${poke.height}`}</p>                   {/* Height */}
                            <p>{`Weight: ${poke.weight}`}</p>                   {/* Weight */}
                            <p>{`Base XP: ${poke.base_experience}`}</p>         {/* Base XP */}
                        </section>
                
                        <section className='stats'>
                            <h3>Stats</h3>
                            <ul>                                                {/* Base stats */}
                            {
                                poke.stats.map( (stat, index) =>
                                <li key={index}>
                                    <StatMeter pokeName={poke.name} statName={stat.stat.name} base={stat.base_stat} />
                                </li>
                                )
                            }
                            </ul>
                        </section>
                    </aside>
                :
                <p>loading...</p>
            }
        </>
    )
}

export default PokemonInfo;