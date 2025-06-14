import CaughtStatus from "../CaughtStatus";
import { FaChevronDown } from "react-icons/fa";
import './CaughtList.css';

function CaughtList({caughtList, catchHandler}){

    return(
        <>               
            { caughtList[0] ?
                <ul>
                    {/* {console.log(`Caught List: ${caughtList}`)} */}
                    { 
                        caughtList.map( (caughtPoke, index) =>                            
                            
                            // console.log(`List item: ${JSON.stringify(caughtPoke)}`);
                            // const poke = pokeList.find(poke => poke.name == caughtPoke);
                            
                            <li key={index}> 
                                <p>{caughtPoke.name}</p>
                                <img className="sprite" src={caughtPoke.sprite} alt={`Sprite of ${caughtPoke.name}`}/>
                                <CaughtStatus name={caughtPoke.name} caught={true} toggleHandler={catchHandler} /> 
                            </li>
                        )
                    }
                </ul>
            :
                <p>no pokemon caught!</p>
            }
        </>
    );
}
export default CaughtList;