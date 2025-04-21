import { useState, useEffect } from 'react';
import Gallery from '../components/Gallery'

function Home (){

    /*** States ***/
    const [pokemon, setPokemon] = useState([]);
    const [url, setURL] = useState('https://pokeapi.co/api/v2/pokemon');
    const [caughtList, setCaughtList] = useLocalStorage('caught', ['bulbasaur']);

    /*** Effects ***/

    // Fetch first 20 pokemon on load
    useEffect(() => { 
        fetchPokeList(); 
    }, [] );

    //Save caught list to local storage when updated
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

    function fetchPokeList(){
        fetch(url)
        .then(response => response.json())
        .then(json => {
            setPokemon([...pokemon, ...json.results]); 
            setURL(json.next);
            console.log(`fetching pokemon list: ${json}`)} );
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
            {console.log(`Pokemon: ${pokemon}`)}
            { pokemon[0] ?
                <>
                    <Gallery 
                        pokemon={pokemon} 
                        caught={caughtList}
                        catchHandler={toggleCaughtHandler}
                    /> 
                    <button onClick={fetchPokeList}>Load More</button>
                </>
                :
                <p>loading...</p>
            }
        </main>
      );
}

export default Home;