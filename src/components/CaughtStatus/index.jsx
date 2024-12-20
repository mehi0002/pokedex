import './CaughtStatus.css';

// Indicates if the pokemon is caught or not
function CaughtStatus({pokeName, caught, toggle}) {
  
  let name = '';
  pokeName ? name = pokeName : name = 'this pokemon';

  /**** Handlers *******/
  function clickHandler(){
    console.log('toggling caught status...')
    toggle();
  }

  /**** Build *****/
  return (
    <button 
      aria-label={caught ? 
        `click to release ${name}` :
        `click to catch ${name}`
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