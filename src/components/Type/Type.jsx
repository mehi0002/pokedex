import './Type.css';

// Creates a display of the pokemon type(s) with theme colours
function Type(props) {
  return (
    <p className={props.children}> {props.children} </p>
  );
}

export default Type;