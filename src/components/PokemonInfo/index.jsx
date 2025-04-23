import { useState, useEffect } from 'react';
import Stats from "../Stats";

function PokemonInfo (url){
    
    /*** States ***/
    const [poke, setPoke] = useState({});               // Single pokemon

    /*** Effects ***/
    
    // fetch pokemon from Poke API
    useEffect( () => {    
        console.log(`fetching selected pokemon ${JSON.stringify(url.url)}`);                    
        fetch(url.url)
        .then(response => response.json())
        .then(json => setPoke(json) )}
    , [url]);

    /*** Build ***/
    return(
        
        <aside id="pokeInfo" className="card">
            {console.log(`pokemon info: ${JSON.stringify(poke)}`)}
            {
                poke.id ?
                    <>
                        <h2>{poke.name}</h2>
                        <img src={poke['sprites']['other']['official-artwork']['front_default']} alt={`Official art of ${poke.name}`}/> 
                        <Stats poke={poke}/>
                    </>
                :
                <p>loading...</p>
            }
        </aside>
    )
}

export default PokemonInfo;