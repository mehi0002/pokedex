import { useState, useEffect } from 'react';
import Gallery from '../components/Gallery';
import PokemonInfo  from '../components/PokemonInfo';

function Home (){

    /*** States ***/
    const [pokemonList, setpokemonList] = useState([]);
    const [url, setURL] = useState('https://pokeapi.co/api/v2/pokemon');
    const [caughtList, setCaughtList] = useLocalStorage('caught', []);
    const [selectedPoke, setSelectedPoke] = useState('');
    const [displayVis, setDisplayVis] = useState(false);

    /*** Effects ***/

    // Fetch first 20 pokemon on load
    useEffect(() => { 
        fetchPokeList(); 
        
    }, [] );

    //Save caught list to local storage when updated
    useEffect( () => {
        console.log(`Caught List: ${caughtList}`)
        localStorage.setItem('caught', JSON.stringify(caughtList) );
    }, [caughtList] );

    /*** Functions ***/

    // Initialize state with local storage
    function useLocalStorage(key, defaultValue){
        const obj = localStorage.getItem(key);
        return( useState( obj ? JSON.parse(obj) : defaultValue));
      }

    // Fetch the next list of pokemon from the PokeAPI
    function fetchPokeList(){
        fetch(url)
        .then(response => response.json())
        .then(json => {
            setpokemonList([...pokemonList, ...json.results]); 
            setURL(json.next);
        } );
    }
    
    /*** Handlers ***/

    // Toggles the caught status and updates the pokemon state
    function toggleCaughtHandler(pokeName){  
        
        caughtList.includes(pokeName) ?
        setCaughtList( caughtList.filter(poke => poke != pokeName) ) :
        setCaughtList( [...caughtList, pokeName] );
    }

    function selectPokeHandler(pokeName){
        const tempPoke = pokemonList.filter( poke => poke.name == pokeName);

        console.log(`selecting ${pokeName}`);
        console.log(`found ${tempPoke[0].url}`);
        
        setSelectedPoke(tempPoke[0]);
    }

    /*** Build ***/
    return (
        <main id="siteContent" className="container-fluid">
            {console.log(`Pokemon List: ${pokemonList}`)}
            {console.log(`Selected Pokemon: ${JSON.stringify(selectedPoke)}`)}
            
            { selectedPoke &&
                <PokemonInfo  
                    // className={displayVis ? "popup" : ""}
                    url={selectedPoke.url} 
                />
            }
            
            { pokemonList[0] ?
                <>
                    <Gallery 
                        pokemonList={pokemonList} 
                        caught={caughtList}
                        catchHandler={toggleCaughtHandler}
                        selectPokeHandler = {selectPokeHandler}
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