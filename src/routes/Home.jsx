import { useState, useEffect} from 'react';
// import { ScrollRestoration } from 'react-router-dom';
import Gallery from '../components/Gallery';
import PokemonInfo  from '../components/PokemonInfo';
import CaughtList from '../components/CaughtList';

function Home (){

    /*** States ***/
    const [pokemonList, setpokemonList] = useState([]);
    const [url, setURL] = useState('https://pokeapi.co/api/v2/pokemon');
    const [pokemon, setPokemon] = useState([]);
    const [caughtList, setCaughtList] = useLocalStorage('caught', []);
    const [selectedPoke, setSelectedPoke] = useState('');

    /*** Effects ***/

    // Fetch first 20 pokemon on load
    useEffect(() => { 
        fetchPokemon();
        
    }, [] );

    //Save caught list to local storage when updated
    useEffect( () => {
       localStorage.setItem('caught', JSON.stringify(caughtList) );
    }, [caughtList] );

    /*** Functions ***/

    // Initialize state with local storage
    function useLocalStorage(key, defaultValue){
        const obj = localStorage.getItem(key);
        return( useState( obj ? JSON.parse(obj) : defaultValue));
      }

    // Fetch the next set of pokemon and their info from the PokeAPI
    async function fetchPokemon(){
        const listResults = [];
        const pokeURLs = [];
        const pokeList = []

        // Get the list of pokemon names and urls
        await fetch(url)
        .then(response => response.json())
        .then(json => {
            listResults.push(...json.results);
            setpokemonList([...pokemonList, ...json.results]);
            setURL(json.next);
        })
        .catch(error => console.log(`error getting pokemon names and urls: ${error}`));

        listResults.map(poke => pokeURLs.push(poke.url))

        // Get the info for each pokemon
        const promiseList = pokeURLs.map(pokeURL => fetch(pokeURL));

        await Promise.allSettled(promiseList)
        .then(responses => Promise.allSettled( responses.map(response => response.value.json())))
        .then(data => data.map(poke => pokeList.push(poke.value)))
        .catch(error => console.log(`Error fetching pokemon info: ${error}`));

        // Add to the current list
        setPokemon([...pokemon, ...pokeList])
    }
    
    /*** Handlers ***/

    // Toggles the caught status and updates the pokemon state
    function toggleCaughtHandler(pokeName){  
        const selected = pokemon.find(poke => poke.name == pokeName);
        const caught = caughtList.find(poke => poke.name == pokeName);
        const tempList = [...caughtList];

        // If already caught, remove from caught list
        if(caught)
            setCaughtList( caughtList.filter(caughtPoke => caughtPoke.name != pokeName) ) 
        
        // If not yet caught, add the pokemon name & sprite url to the caught list
        else {
            tempList.push( {name:selected.name, sprite:selected['sprites']['front_default']} );
            tempList.sort( (a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) 
                    return-1;
                else if (nameA > nameB)
                    return 1;
                else
                    return 0;
            })

            setCaughtList( [...tempList] );
        }
    }

    //Display pokemon when card is clicked
    function selectPokeHandler(selected){
        const newPoke = pokemon.find(poke => poke.name == selected);
        setSelectedPoke({...newPoke});
    }

    /*** Build ***/
    return (
        <>
            <div id="homeContent">

                <div id="sidebar">
                    {/* Pokemon info display */}
                    { selectedPoke &&
                        <aside id="pokeInfo" className="card" >
                                <PokemonInfo  
                                    poke = {selectedPoke}
                                />
                            {/* <button role="link" className="skipLink" onClick={navigateBack} >Back</button> */}
                        </aside>
                    }

                    {/* Caught List */}
                    { pokemon[0] ?
                            <aside id="caughtList">
                                <details id="caughtList">
                                    <summary><h2>Caught List</h2></summary>
                                    <CaughtList caughtList={caughtList} catchHandler={toggleCaughtHandler} />
                                </details>
                            </aside>
                        :
                        <p>loading...</p>
                    }
                </div>

                {/* Main Gallery */}
                { pokemon[0] ?
                    <main id="mainContent">
                        {/* Pokemon List */}
                        <Gallery 
                            pokemonList={pokemon} 
                            caught={caughtList}
                            catchHandler={toggleCaughtHandler}
                            selectPokeHandler = {selectPokeHandler}
                        /> 
                        <button id="loadMore" onClick={fetchPokemon}>Load More</button>
                    </main>
                    :
                    <p>loading...</p>
                }
            </div>
        </>

      );
}

export default Home;