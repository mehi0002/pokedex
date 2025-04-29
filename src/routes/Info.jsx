import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PokemonInfo  from '../components/PokemonInfo';

// Dispays the pokemon name, image, and caught status
function Info(){

    /*** States ***/
    let params = useParams();
    const [poke, setPoke] = useState({});                       // pokemon state object

    /*** Effects ***/
    // Grab the pokemon with the given url from the Poke API
    useEffect( () => {                        
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokeName}`)
        .then( response => response.json())
        .then(json => { setPoke(json); console.log(`Details: getting profile for ${params.pokeName}`)});
    }, []);

    /**** Build *****/
    return(
        <>
            { poke.id ?
                <>
                    <Link to='/'>back</Link>
                    <PokemonInfo poke={poke} />
                </>
                :
                <p>loading</p>
            }
        </>
    );
}

export default Info;