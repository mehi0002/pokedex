import './CardHeader.css';

// Dispays the pokemon name, image, and caught status
function CardHeader({poke, catchHandler}){

    /**** Build *****/
    return(
        <>
            <h3>{poke.name}</h3>
            <img src={poke['sprites']['other']['official-artwork']['front_default']} aria-hidden='true'/>
        </>
    );
}

export default CardHeader;