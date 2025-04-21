import { useState, useEffect } from 'react';
import Gallery from '../components/Gallery'

function Home (){

    /*** States ***/
    const [pokemon, setPokemon] = useState([]);
    const [caughtList, setCaughtList] = useLocalStorage('caught', []);

    /*** Effects ***/

    // Fetching the first 20 pokemon from the Poke API
    useEffect(() => {                                   
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(json => {setPokemon(json.results); console.log('getting first 20 pokemon...')} );
        }, [] );

    useEffect( () => {
        console.log(`Caught List: ${caughtList}`)
        localStorage.setItem('caught', caughtList);
        }, [caughtList] 
    );

    /*** Functions ***/
    function useLocalStorage(key, defaultValue){
        const obj = localStorage.getItem(key);
        return( useState( obj ? obj : defaultValue));
      }
    
    /*** Handlers ***/

    // Toggles the caught status and updates the pokemon state
    function toggleCaughtHandler(pokeName){           
        console.log(`toggling caught status for ${pokeName}`);
        
        caughtList.includes(pokeName) ?
        setCaughtList( caughtList.filter(poke => poke != pokeName) ) :
        setCaughtList( [...caughtList, pokeName] );
    }

    /*** Build ***/
    return (
        <main className="container-fluid">
            {console.log(pokemon)}
            { pokemon[0] ?
                <Gallery 
                    pokemon={pokemon} 
                    caught={caughtList}
                    catchHandler={toggleCaughtHandler}
                /> :
                <p>loading...</p>
            }
        </main>
      );
}

export default Home;