import React from "react";

const Leaderboardlist = ({ category, username, score }) => {
  //for loop
  return (
    <>
      <div className="leaderboard-item">
        <p>
          hi + {username}
          {category}
          {score}
        </p>
      </div>
    </>
  );
};

export default Leaderboardlist;
