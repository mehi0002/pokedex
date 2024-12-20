import './Stats.css';
import Type from '../Type/Type';

// Displays a pokemon's stats
function Stats(props) {
  return (
    <div className="stats">
      <Type> {props.poke.types[0].type.name} </Type>
      {
        props.poke.types[1] &&
        <Type> {props.poke.types[1].type.name} </Type>
      }
    </div>
  );
}

export default Stats;