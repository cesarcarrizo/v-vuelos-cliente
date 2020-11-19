import React, { useEffect, useState } from 'react';
import Home from './Home';

/*
    props:
        usuarios: usuarios ya registrados en la bd para comparar con los que el usuario ingresa
*/
const Login = (props) => {

    //states
    const [aparecer, setAparecer] = useState(true);//bandera que indica el flujo del renderizado si hay un match con lo que el usuario ingresa
    const [guest, setGuest] = useState(null);//indica el usuario logueado de caso contrario es null


    const handler = () => {
        let usuario = document.getElementById('usuario')['value'];//se toma el att value que es lo que el usuario ingresa
        let password = document.getElementById('pwd')['value'];// igual aca

        //iteramos sobre nuestros usuarios registrados
        props['usuarios'].forEach(el => {
            // por cada uno se va aecaluando
            let [matcher0, matcher1] = [el['user_usu'], el['passwd_usu']];

            // si hace match en ambos casos se procede a actualizar los estadds
            if(matcher0 === usuario && matcher1 === password){
                setAparecer(false);//'desasparace' el componente
                setGuest(el);// el guest pasa a ser este mismo usuarios (el)
            }
        });

    }
   
    // si no se han cargado los datos del API
    if(props['usuarios'] === null){
        return (
            <div className="container">
                <div className="h1">Loading...</div>
            </div>
        );
    }

    //en caso de que entre un usuarios con los credenciales correctos
    if(!aparecer){
        return (
            <Home guest={guest}/>
        );
    }

    return (
        <>
            <div className="container">
                <div className="h1">V-Vuelos</div>
                <br />
                <div className="h3">Login</div>
                <hr />
                <input id="usuario" type="text" className="form-control" placeholder="Usuario" required />
                <input id="pwd" type="password" className="form-control" placeholder="Password..." required />
                <br />
                <button className="btn btn-secondary" onClick={handler} >Ingresar</button>
            </div>
        </>
    );

}

export default Login;