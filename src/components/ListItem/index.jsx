import CaughtStatus from '../CaughtStatus';
import './ListItem.css';

// Dispays the pokemon name, image, and caught status
function ListItem({url, caught, catchHandler}){

    /*** States ***/
      const [poke, setPoke] = useState({});               // Single pokemon
    
      /*** Effects ***/
      
      // fetch pokemon from Poke API
      useEffect( () => {                        
        fetch(url)
        .then( response => response.json())
        .then(json => setPoke(json) )
      }, []);
    

    /**** Build *****/
    return(
        <>
            <p>{poke.name}</p>
            <img src={poke['sprites']['other']['official-artwork']['front_default']} aria-hidden='true'/>
            <CaughtStatus name={poke.name} caught={caught} toggleHandler={catchHandler}/>
        </>
    );
}

export default ListItem;