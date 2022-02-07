import React from "react";
import { Link } from "react-router-dom";

function NavBar(){

    return(
        <nav>

            <Link to="/"><button><img src="" alt="Home" /></button></Link>
            <Link to=""><button><img src="" alt="Inquilinos" /></button></Link>
            <Link><button><img src="" alt="Ayudar" /></button></Link>
            <Link><button><img src="" alt="Reciclar" /></button></Link>
            <Link><button><img src="" alt="Contacto" /></button></Link>
            
        </nav>
    )
}

export default NavBar