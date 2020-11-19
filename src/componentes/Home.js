import React from 'react';

import Navbar from './Navbar';

const Home = (props) => {

    if(props['guest'] === null){
        return (
            <div className="container">
                <div className="h1">Loading...</div>
            </div>
        );
    }
    return (
        <Navbar rol={props['guest']}/>
    );
}

export default Home;