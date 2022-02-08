import React from "react";
import { Link } from "react-router-dom";
import Ayudar from "../ayudar/ayudar";
import Contacto from "../contacto/contacto";
import Home from "../home/home";
import Inquilinos from "../inquilinos/inquilinos";
import Reciclaje from "../reciclar/reciclaje";

function NavBar(){

    return(
        <nav>

            <Link to="/" element={<Home/>}><button><img src="" alt="Home" /></button></Link>
            <Link to="/propietarios" element={<Inquilinos/>}><button><img src="" alt="Propietarios" /></button></Link>
            <Link to="/ayudar" element={<Ayudar/>}><button><img src="" alt="Ayudar" /></button></Link>
            <Link to="/reciclaje" element={<Reciclaje/>}><button><img src="" alt="Reciclar" /></button></Link>
            <Link to="/contacto" element={<Contacto/>}><button><img src="" alt="Contacto" /></button></Link>
            
        </nav>
    )
}

export default NavBar