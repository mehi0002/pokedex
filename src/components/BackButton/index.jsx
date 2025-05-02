import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function BackButton(){

    const navigate = useNavigate();

    function navigateBack(){
        navigate(-1);
    }

    return(
        // <button 
        //     role="link" 
        //     aria-label="go back"
        //     className="icon"
        //     onClick={navigateBack} 
        // >
        //     <FaArrowLeft />
        // </button>
        <NavLink
            to="/"
            aria-label="go back"
            className="icon"
            preventScrollReset
        >
            <FaArrowLeft />
        </NavLink>
    );
}

export default BackButton;