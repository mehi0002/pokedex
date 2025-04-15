import './CaughtStatus.css';

// Indicates if the pokemon is caught or not
function CaughtStatus({name, caught, toggle}) {
  
  let pokeName = '';
  name ? pokeName = name : pokeName = 'this pokemon';

  /**** Handlers *******/
  function clickHandler(){
    console.log('toggling caught status...')
    toggle();
  }

  /**** Build *****/
  return (
    <button
      className = "status" 
      aria-label={caught ? 
        `click to release ${pokeName}` :
        `click to catch ${pokeName}`
      }
      onClick={clickHandler}>

      <img 
        src={caught ? 
          '/src/components/CaughtStatus/assets/caught.svg' : 
          '/src/components/CaughtStatus/assets/uncaught.png'}
        aria-hidden='true'
      />
    </button>
  );
}

export default CaughtStatus;