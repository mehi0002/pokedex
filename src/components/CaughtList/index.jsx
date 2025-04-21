import ListItem from "../ListItem";

function CaughtList(caughtList, catchHandler){

    return(
        <article id="caughtList">
            <header>Caught Pokemon</header>
            <main>
                <ul>
                    { 
                        caughtList.map( (pokeName, index) => 
                            <li key={index}> <ListItem name={pokeName} caught="true" catchHandler={catchHandler}/> </li>
                        )
                    }
                </ul>
            </main>
        </article>
    );
}
export default CaughtList;