import React, { useEffect, useState } from 'react';
import Home from './Home';


const Login = (props) => {


    const [aparecer, setAparecer] = useState(true);
    const [guest, setGuest] = useState(null);


    const handler = () => {
        let usuario = document.getElementById('usuario')['value'];
        let password = document.getElementById('pwd')['value'];

        props['usuarios'].forEach(el => {
            let [matcher0, matcher1] = [el['user_usu'], el['passwd_usu']];
            if(matcher0 === usuario && matcher1 === password){
                setAparecer(false);
                setGuest(el);
            }
        });

    }
   
    // si no se han cara=gado los datos del API
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