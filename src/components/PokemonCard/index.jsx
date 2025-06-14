import { Link, NavLink } from 'react-router-dom';
import ListItem from '../ListItem';
import CaughtStatus from '../CaughtStatus';
import './PokemonCard.css';

// Displays the Pokemon name, image, and caught status.
function PokemonCard({name, image, alt, caught, catchHandler, selectHandler}) {

  /*** Handlers ***/
  function clickHandler(){
    selectHandler(name);
  }

  /***** Build *****/

  return (
    <article className='card'>
        <>
          {/* Mobile version - opens a new view */}
          <Link to={`/${name}`} className="cardContent mobile">
            <h3 class="cardTitle">{name}</h3>
            <img src={image} alt={alt}/>          
          </Link>
          
          {/* Tablet version - updates a sidebar */}
          {/* <button onClick={clickHandler} className="cardContent tablet desktop">
            <p>{name}</p>
            <img src={image} alt={alt}/>          
          </button> */}
          
          <CaughtStatus name={name} caught={caught} toggleHandler={catchHandler} />
        </>
    </article>
  );
      
}

export default PokemonCard;