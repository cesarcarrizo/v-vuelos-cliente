import React, {useEffect, useState} from 'react';
import Menu from './Menu';

const Navbar = (props) => {



    if(props.guest === null){
        return (
            <div className="container">
                <div className="h1">Loading...</div>
            </div>
        );
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">V-Vuelos</a>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {/* <li>{JSON.stringify(props)}</li> */}
                    <Menu rol={props.rol['rol_usu']}/>
                    <li className="nav-item">
                        <a className="nav-link disabled" tabindex="-1" aria-disabled="true">Bienvenido: {props.rol['nombre_comp_usu']}</a>
                    </li>

                </ul>
            
            </div>
        </nav>
    );
}

export default Navbar;