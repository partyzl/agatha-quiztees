import React from 'react';
import Scorebanner from '../Scorebanner';



const Leaderboardlist = ({position, username, score}) => {
    //for loop
    return(
        data.map((i) => (
        <>
        <Scorebanner
            
            position={position}
            username={username}
            score={score}
            key={i}

        />
    </>

  )))

  }
    

export default Leaderboardlist;
