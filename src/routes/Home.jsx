import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Gallery from '../components/Gallery';
import PokemonInfo  from '../components/PokemonInfo';
import CaughtList from '../components/CaughtList';

function Home (){

    let navigate = useNavigate();

    /*** States ***/
    const [pokemonList, setpokemonList] = useState([]);
    const [url, setURL] = useState('https://pokeapi.co/api/v2/pokemon');
    const [pokemon, setPokemon] = useState([]);
    const [caughtList, setCaughtList] = useLocalStorage('caught', []);
    const [selectedPoke, setSelectedPoke] = useState('');

    /*** Effects ***/

    // Fetch first 20 pokemon on load
    useEffect(() => { 
        // fetchPokeList(); 
        fetchPokemon();
        
    }, [] );

    //Save caught list to local storage when updated
    useEffect( () => {
       localStorage.setItem('caught', JSON.stringify(caughtList) );
       {console.log(`Caught List: ${caughtList}`)}
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

        // await Promise.allSettled(promiseList)
        // .then(responses => Promise.allSettled( responses.map(response => response.value.json())))
        // .then(data => setPokemon([...pokemon, ...data]))
        // .catch(error => console.log(`Error fetching pokemon info: ${error}`));

        await Promise.allSettled(promiseList)
        .then(responses => Promise.allSettled( responses.map(response => response.value.json())))
        .then(data => data.map(poke => pokeList.push(poke.value)))
        .catch(error => console.log(`Error fetching pokemon info: ${error}`));

        setPokemon([...pokemon, ...pokeList])
    }

    function navigateBack(){
        navigate(-1);
    }
    
    /*** Handlers ***/

    // Toggles the caught status and updates the pokemon state
    function toggleCaughtHandler(pokeName){  
        const selected = pokemon.find(poke => poke.name == pokeName);
        const caught = caughtList.filter(poke => poke.name == pokeName);

        caught[0] ?
        setCaughtList( caughtList.filter(caughtPoke => caughtPoke.name != pokeName) ) :
        setCaughtList( [...caughtList, {name:selected.name, sprite:selected['sprites']['front_default']}] );
    }

    function selectPokeHandler(selected){
        const newPoke = pokemon.find(poke => poke.name == selected);
        setSelectedPoke({...newPoke});

        // navigate('#pokeInfo');
    }

    /*** Build ***/
    return (
        <main id="siteContent" className="container-fluid">
            <h1>Pokedex</h1>
            
            {/* {console.log(`Pokemon List: ${JSON.stringify(pokemonList)}`)} */}
            {/* {console.log(`Pokemon: ${JSON.stringify(pokemon)}`)} */}
            {/* {console.log(`Selected Pokemon: ${JSON.stringify(selectedPoke)}`)}  */}
            
            { selectedPoke &&
                <aside id="pokeInfo" className="card tablet" >
                        <PokemonInfo  
                            poke = {selectedPoke}
                        />
                    {/* <button role="link" className="skipLink" onClick={navigateBack} >Back</button> */}
                </aside>
            }

            { pokemon[0] ?
                <>
                    <CaughtList caughtList={caughtList} catchHandler={toggleCaughtHandler} />
                    <Gallery 
                        pokemonList={pokemon} 
                        caught={caughtList}
                        catchHandler={toggleCaughtHandler}
                        selectPokeHandler = {selectPokeHandler}
                    /> 
                    {/* <button onClick={fetchPokeList}>Load More</button> */}
                    <button onClick={fetchPokemon}>Load More</button>

                </>
                :
                <p>loading...</p>
            }
        </main>
      );
}

export default Home;