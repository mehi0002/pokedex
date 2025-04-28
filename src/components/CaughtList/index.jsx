import ListItem from "../ListItem";

function CaughtList({caughtList, catchHandler}){

    return(
        <article id="caughtList">
            <header><h2>Caught Pokemon</h2></header>
            <main>
                { caughtList[0] ?
                    <ul>
                        {console.log(`Caught List: ${caughtList}`)}
                        { 
                            caughtList.map( (poke, index) => {                            
                                console.log(`List item: ${JSON.stringify(poke)}`);
                                <li key={index}> <ListItem url={poke.url} caught={true} catchHandler={catchHandler}/> </li>
                            })
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