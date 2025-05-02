import { useState, useEffect } from "react";
import CaughtList from "../components/CaughtList";
import Navigation from "../components/Navigation";
import BackButton from "../components/BackButton";
import SkipLink from "../components/SkipLink";

function Caught(){

    /*** States ***/
    const [caughtList, setCaughtList] = useLocalStorage('caught', []); 

    /*** Effects ***/

     //Save caught list to local storage when updated
     useEffect( () => {
        localStorage.setItem('caught', JSON.stringify(caughtList) );
        {console.log(`Caught List: ${caughtList}`)}
     }, [caughtList] );

    /*** Handlers ***/

    // Release pokemon
    function toggleCaughtHandler(pokeName){  
        setCaughtList( caughtList.filter(caughtPoke => caughtPoke.name != pokeName) ) 
    }

    /*** Functions ***/

    // Initialize state with local storage
    function useLocalStorage(key, defaultValue){
        const obj = localStorage.getItem(key);
        return( useState( obj ? JSON.parse(obj) : defaultValue));
    }

    /*** Build ***/
    
    return(

        <>
            <header>
                <SkipLink/>
                <h1> Caught Pokemon </h1>
                <Navigation />
                <BackButton />
            </header>

            <main id="siteContent">
                { 
                    caughtList[0] ?
                    < CaughtList caughtList={caughtList} catchHandler={toggleCaughtHandler} /> 
                    :
                    <p>No pokemon caught!</p>
                }
            </main>
        </>
    );
}

export default Caught;