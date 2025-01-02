import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Stats from "../components/Stats";

// Dispays the pokemon name, image, and caught status
function Details(params){

    /*** States ***/
    const {name} = useParams();
    const [poke, setPoke] = useState({});                       // pokemon state object

    /*** Effects ***/
    // Grab the pokemon with the given url from the Poke API
    useEffect( () => {                        
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then( response => response.json())
        .then(json => { setPoke(json); console.log(`Details: getting profile for ${name}`)});
    }, []);

    /**** Build *****/
    return(
        <>
            <Link to='/'>back</Link>
            {console.log(poke)}
            { poke.id &&
                <article className='details'>
                    <h3>{poke.name}</h3>
                    <img src={poke['sprites']['other']['official-artwork']['front_default']} aria-hidden='true'/>
                    {/* <CaughtStatus pokeName={poke.name} caught={poke.CaughtStatus} toggle={catchHandler} /> */}
                    <Stats poke={poke}></Stats>
                </article>
            }
        </>
    );
}

export default Details;