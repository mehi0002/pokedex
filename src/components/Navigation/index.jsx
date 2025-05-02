import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

function Navigation (){

    /*** States ***/
    const [navOpen, setNavOpen] = useState(false);

    /*** Functions ***/
    function toggleNav(){
        navOpen ? setNavOpen(false) : setNavOpen(true);
    }

    /*** Build ***/

    return(
        <div id="site-nav">
            <button 
                aria-label="Open navigation menu" 
                onClick={toggleNav}
            >
                <RxHamburgerMenu aria-hidden={true}/>
            </button>

            <nav className={navOpen ? "" : "hidden"}>
                <ul>
                    <li>
                        <NavLink 
                            to="/" 
                            className={(isActive) => isActive && "active"}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/caught" 
                            className={(isActive) => isActive && "active"}
                        >
                            Caught Pokemon
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default Navigation;