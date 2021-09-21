import React from 'react';


const Leaderboardlist = (data) => {
  data.map((position,username, score, i) => (
    <>
      <Scorebanner>
        
        position={position}
        username={username}
        score={score}
        key={i}

        {/* change key to position? */}

      </Scorebanner>
    </>
  ))

  }
    

export default Leaderboardlist;
