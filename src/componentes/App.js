import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';


import Login from './Login';


const App = () => {

    const [usuarios, setUsuarios] = useState(null);

    useEffect(()=>{
        const uri = 'http://192.168.0.111:5000/api/usuarios';
        axios.get(uri)
            .then(res => {
                setUsuarios(res.data);
            })
            .catch(error => console.error)

    }, []);


    return (
       <Login usuarios={usuarios} />
    );
}

export default App;