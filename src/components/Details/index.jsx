import CaughtStatus from "../CaughtStatus";
import './Details.css';

// Dispays the pokemon name, image, and caught status
function Details({poke, catchHandler}){

    /**** Build *****/
    return(
        <>
            <h3>{poke.name}</h3>
            <CaughtStatus pokeName={poke.name} caught={poke.CaughtStatus} toggle={catchHandler} />
            <img src={poke['sprites']['other']['official-artwork']['front_default']} aria-hidden='true'/>
        </>
    );
}

export default Details;