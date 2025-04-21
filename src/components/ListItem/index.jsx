import CaughtStatus from '../CaughtStatus';
import './ListItem.css';

// Dispays the pokemon name, image, and caught status
function ListItem({poke, caught, catchHandler}){

    /**** Build *****/
    return(
        <>
            <CaughtStatus name={poke.name} caught={caught} toggleHandler={catchHandler}/>
            <h3>{poke.name}</h3>
            <img src={poke['sprites']['other']['official-artwork']['front_default']} aria-hidden='true'/>
        </>
    );
}

export default ListItem;