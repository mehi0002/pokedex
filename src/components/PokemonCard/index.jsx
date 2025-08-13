import CaughtStatus from '../CaughtStatus';
import './PokemonCard.css';

// Displays the Pokemon name, image, and caught status.
function PokemonCard({name, classes, image, alt, caught, catchHandler, selectHandler}) {

  /*** Handlers ***/
  function clickHandler(){
    selectHandler(name);
  }

  /***** Build *****/

  return (
    <article className={`card container ${classes}`}>
          <button onClick={clickHandler} className="cardContent">
            <h3 className="cardTitle">{name}</h3>
            <img src={image} alt={alt}/>          
          </button>
          
          <CaughtStatus name={name} caught={caught} toggleHandler={catchHandler} />
    </article>
  );
      
}

export default PokemonCard;