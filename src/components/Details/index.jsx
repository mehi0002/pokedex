import CaughtStatus from "../CaughtStatus";
import './Details.css';

function Details({poke, catchHandler}){

    return(
        <article>
            <header>
                <h3>{poke.name}</h3>
            </header>
            <CaughtStatus pokeName={poke.name} caught={poke.CaughtStatus} toggle={catchHandler} />
            <img src={poke['sprites']['other']['official-artwork']['front_default']} alt={`Official artwork for ${poke.name}`}/>
          </article>
    );
}

export default Details;