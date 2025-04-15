import './Stats.css';
import Type from '../Type/Type';
import StatMeter from '../StatMeter/StatMeter';

// Displays a pokemon's stats
function Stats({poke}) {
  
  return (
    <>
      <section className='stats'>

        <div className="details">
          <h3>Type</h3>
          <Type> {poke.types[0].type.name} </Type>            {/* Type #1 */}            
          { poke.types[1] && 
            <Type> {poke.types[1].type.name} </Type>          /* Type #2 */
          }
          <h3>Characteristics</h3>
          <p>{`Height: ${poke.height}`}</p>                   {/* Height */}
          <p>{`Weight: ${poke.weight}`}</p>                   {/* Weight */}
          <p>{`Base XP: ${poke.base_experience}`}</p>         {/* Base XP */}
        </div>

        <div className='stats'>
          <h3>Stats</h3>
          <ul>                         {/* Base stats */}
            {
              poke.stats.map( (stat, index) =>
                <li key={index}>
                  <StatMeter pokeName={poke.name} statName={stat.stat.name} base={stat.base_stat} />
                </li>
              )
            }
          </ul>
        </div>

      </section>
    </>
  );
}

export default Stats;