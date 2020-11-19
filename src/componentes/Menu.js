import React, { useEffect, useState } from 'react';

const Menu = (props) => {

    const [display, setDisplay] = useState(null);


    useEffect(
        () =>{
            if(props['rol'] === 0){
                setDisplay(0);
            }
        }, []
    );

    if(display === null){
        return (
           <>
           </>
        );
    }

    if(display === 0) {
        return (
            <li className="nav-item dropdown disable">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                MENÚ</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <span class="navbar-text"><b>Seguridad</b></span>
                    <a className="dropdown-item" >Ver usuarios</a>
                    <a className="dropdown-item" >Crear usuarios</a>
                    <a className="dropdown-item" >Asignar Rol</a>
                    <a className="dropdown-item" >Cambiar Contrasena</a>
                    <div className="dropdown-divider"></div>
                    <span class="navbar-text"><b>Administración</b></span>
                    <a className="dropdown-item" >Consecutivos</a>
                    <a className="dropdown-item" >Paises</a>
                    <a className="dropdown-item" >Aerolíneas</a>
                    <a className="dropdown-item" >Puertas</a>
                    <div className="dropdown-divider"></div>
                    <span class="navbar-text"><b>Consultas</b></span>
                    <a className="dropdown-item" >Bitácora</a>
                    <a className="dropdown-item" >Errores</a>
                    <a className="dropdown-item" >Descargas</a>
                    <a className="dropdown-item" >Aerolíneas</a>
                    <a className="dropdown-item" >Puertas</a>
                
                </div>
            </li>
        );
    }


    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown</a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" >{JSON.stringify(props)}</a>
                <a className="dropdown-item" >Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" >Something else here</a>
            </div>
        </li>
    );
}

export default Menu;