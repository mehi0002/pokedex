import StatMeter from '../StatMeter/StatMeter';
import './PokemonInfo.css';

    function PokemonInfo ({poke}){

    /*** Functions ***/
    function closePokeInfo(){
        document.getElementById("pokeInfo").classList.remove("view");
    }

    /*** Build ***/
    return(

        <article className="pokeInfo container">
            <section className="card">
                <h2>{poke.name}</h2>
                <img src={poke['sprites']['other']['official-artwork']['front_default']} alt={`Official art of ${name}`}/> 
                <button 
                  id="closePokeInfo" 
                  className="container interactive" 
                  aria-label="close" 
                  onClick={closePokeInfo}
                >
                  X
                </button>
            </section>
            
            <section className="details">
                <div className="detailsSidebar">
                    {/* Types */}
                    <ul aria-label='types' className="types">
                        <li className={`type ${poke.types[0].type.name}`}>{poke.types[0].type.name}</li>
                        { poke.types[1] &&
                            <li className={`type ${poke.types[1].type.name}`}>{poke.types[1].type.name}</li>
                        }
                    </ul>
                    
                    {/* Charcteristics */}
                    <ul aria-label='characteristics' className="characteristics">
                        {/* Height */}
                        <li><span className="charName">Height:</span><span className="charVal">{poke.height}</span></li>                   
                        {/* Weight */}
                        <li><span className="charName">Weight:</span><span className="charVal">{poke.weight}</span></li>                  
                        {/* Base XP */}
                        <li><span className="charName">Base XP:</span><span className="charVal">{poke.base_experience}</span></li>                  
                    </ul>
                </div>
    
                {/* Base Stat Meters */}
                <ul aria-label="stats" className='stats'>                                                {/* Base stats */}
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