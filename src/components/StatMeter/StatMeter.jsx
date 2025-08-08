import './StatMeter.css';

// Displays a meter representing the value of a pokemon's base stat
function StatMeter(props) {

  return (
    <>
      <label 
        htmlFor={`${props.pokeName}_${props.statName}`}
        className="statName"
      > 
        {props.statName} 
      </label>
      <meter className="statVal" min='0' max='255' value={props.base}></meter>
    </>
  );
}

export default StatMeter;