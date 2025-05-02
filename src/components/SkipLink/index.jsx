import { Link } from "react-router-dom";

function SkipLink(){

    function scrollTo(id){
        try{
            const target = document.getElementById(id);
            target.focus();
            target.scrollIntoView();
        }
        catch(error){
            console.log(`Error scrolling to anchor: ${error}`);
        }
    }

    return(
        <nav id="skipLinks">
            <button 
                role="link"
                className="skipLink"
                onClick={scrollTo('siteContent')}
            >
                Skip to main content
            </button>
        </nav>
    );
}

export default SkipLink