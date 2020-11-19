import React, { useEffect, useState } from 'react';
import axios from 'axios';

// componentes a usar
import Login from './Login';

// no props
const App = () => {
    //states
    const [usuarios, setUsuarios] = useState(null);

    // esta funcion ejecuta la logica una sola vez
    useEffect(()=>{
        const uri = 'http://192.168.0.111:5000/api/usuarios';
        axios.get(uri)
            .then(async res => await setUsuarios(res.data))
            .catch(error => console.error)

    }, []);

    //loop

    //retorno el login con la data que debe comparar
    return (
       <Login usuarios={usuarios} />
    );

    //endloop
}

export default App;