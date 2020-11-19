import React, { Component } from 'react';

const Home = (props) => {


    if(props['guest'] === null){
        return (
            <div className="container">
                <div className="h1">Loading...</div>
            </div>
        );
    }
    return (
        <div className="container">
            <div className="h1">{JSON.stringify(props['guest'])}</div>
        </div>
    );
}

export default Home;