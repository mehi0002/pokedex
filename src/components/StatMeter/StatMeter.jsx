import './StatMeter.css';

// Displays a meter representing the value of a pokemon's base stat
function StatMeter(props) {

  return (
    <>
      <label for={`${props.pokeName}_${props.statName}`}> {props.statName} </label>
      <meter min='0' max='255' value={props.base}></meter>
    </>
  );
}

export default StatMeter;