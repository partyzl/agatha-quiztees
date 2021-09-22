import React from "react";

const Leaderboardlist = ({ scores }) => {
  //for loop
  return (
    <>
      <div className="leaderboard-item">
        <p>{scores.username}</p>
        <p>{scores.category}</p>
        <p>{scores.score}</p>
      </div>
    </>
  );
};

export default Leaderboardlist;
