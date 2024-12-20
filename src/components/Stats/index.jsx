import './Stats.css';
import Type from '../Type/Type';
import StatMeter from '../StatMeter/StatMeter';

// Displays a pokemon's stats
function Stats(props) {
  
  return (
    <div className='stats'>

      <div className="statBlock">
        <Type> {props.poke.types[0].type.name} </Type>            {/* Type #1 */}            
        { props.poke.types[1] && 
          <Type> {props.poke.types[1].type.name} </Type>          /* Type #2 */
        }
        <p>{`Height: ${props.poke.height}`}</p>                   {/* Height */}
        <p>{`Weight: ${props.poke.weight}`}</p>                   {/* Weight */}
        <p>{`Base XP: ${props.poke.base_experience}`}</p>         {/* Base XP */}
      </div>

      <div className='statMeters'>                                {/* Base stats */}
        {
          props.poke.stats.map( stat =>
            <StatMeter pokeName={props.poke.name} statName={stat.stat.name} base={stat.base_stat} />
          )
        }
      </div>

    </div>
  );
}

export default Stats;