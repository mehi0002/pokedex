import PokemonCard from "../PokemonCard";
import Stats from "../Stats";

function PokemonInfo (url){
    
    /*** Build ***/
    return(
        <article>
            <PokemonCard />
            <Stats />
        </article>
    )
}

export default PokemonInfo;