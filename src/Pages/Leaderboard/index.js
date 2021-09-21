import React from 'react';
// import Header from "../../Layout/Header";
// import Footer from "../../Layout/Footer";
import {Scorebanner } from '../../components';
import "./style.css";


const Leaderboard = () => {
    return (
        <div class='flex-container'>
            <h1> LEADERBOARD </h1>
            <Scorebanner position='1' username='Beth' score='60' />
            <Scorebanner position='2' username='George' score='57' />
            <Scorebanner position='3' username='matt' score='51' />
            <Scorebanner position='4' username='Maeve' score='49' />
            <Scorebanner position='5' username='Lily' score='40' />
            
            {/* <Leaderboardlist /> */}
            
            {/* <Footer /> */}
        </div>
    );
}

export default Leaderboard;
