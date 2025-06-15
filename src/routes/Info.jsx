import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import PokemonInfo  from '../components/PokemonInfo';
import BackButton from "../components/BackButton";
import Navigation from "../components/Navigation";
import SkipLink from "../components/SkipLink";

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
        .then(json => setPoke(json));
    }, []); 

    /**** Build *****/

    return(
        <>
            <main id="infoContent">
                <BackButton />
                { poke.id ?
                    <PokemonInfo poke={poke} />
                :
                    <p>loading</p>
                }
            </main>
        </>
    );
}

export default Info;