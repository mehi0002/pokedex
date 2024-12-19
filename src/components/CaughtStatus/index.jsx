import './CaughtStatus.css';

function CaughtStatus({pokeName, caught, toggle}) {
  
  let name = '';
  pokeName ? name = pokeName : name = 'this pokemon';

  function clickHandler(){
    console.log('toggling caught status...')
    toggle();
  }

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
        alt={caught ? 'red and white pokeball' : 'uncoloured pokeball'}
        aria-label={caught ? `you have caught ${name}` : `you have not caught ${name}`}
      />
    </button>
  );
}

export default CaughtStatus;