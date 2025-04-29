import CaughtStatus from "../CaughtStatus";

function CaughtList({caughtList, catchHandler}){

    return(
        <article id="caughtList">
            <header><h2>Caught Pokemon</h2></header>
            <main>
                { caughtList[0] ?
                    <ul>
                        {/* {console.log(`Caught List: ${caughtList}`)} */}
                        { 
                            caughtList.map( (caughtPoke, index) =>                            
                                
                                // console.log(`List item: ${JSON.stringify(caughtPoke)}`);
                                // const poke = pokeList.find(poke => poke.name == caughtPoke);
                                
                                <li key={index}> 
                                    <p>{caughtPoke.name}</p>
                                    <img src={caughtPoke.sprite} alt={`Sprite of ${caughtPoke.name}`}/>
                                    <CaughtStatus name={caughtPoke.name} caught={true} toggleHandler={catchHandler} /> 
                                </li>
                            )
                        }
                    </ul>
                :
                    <p>no pokemon caught!</p>
                }
            </main>
        </article>
    );
}
export default CaughtList;