import { useState, useEffect } from 'react';
import Gallery from '../components/Gallery'

function Home (){

    /*** States ***/
    const [pokemon, setPokemon] = useState([]);
    const [caughtList, setCaughtList] = useState([]);

    /*** Effects ***/

    // Fetching the first 20 pokemon from the Poke API
    useEffect(() => {                                   
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(json => {setPokemon(json.results); console.log('getting first 20 pokemon...')} )
        }, [] );

    /*** Handlers ***/

    // Toggles the caught status and updates the pokemon state
    function toggleCaughtHandler(){           
        console.log(`setting caught status to true...`)
    }

    /*** Build ***/
    return (
        <main className="container-fluid">
        {console.log(pokemon)}
        {pokemon[0] ?
            <Gallery pokemon={pokemon} caughtList={caughtList} catchHandler={toggleCaughtHandler}/> :
            <p>loading...</p>
        }
        </main>
    );
}

export default Home;