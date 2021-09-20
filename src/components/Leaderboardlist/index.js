import React from 'react';
import "./style.css";

const Leaderboardlist = (data) => {
  data.map((position,username, score, i) => (
    <>
      <Scorebanner>
        
        position={position}
        username={username}
        score={score}
        key={i}

      </Scorebanner>
    </>
  ))

  }
    

export default Leaderboardlist;
