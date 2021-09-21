import React from 'react';
import "./style.css";

// const data = [{position: 1, username: 'Ben', score: 50}, {position: 2, username: 'Lily', score: 43}];

const Scorebanner = ({position, username, score}) => {
    return (

        <div class='banner'>
            <div class='position'>
                <p>{position}</p> 
            </div>
            <div class='name'>
                <p>{username}</p>
            </div>
            <div class='score'>
                <p>{score}</p>
            </div>
        </div>

    );
}

export default Scorebanner;
