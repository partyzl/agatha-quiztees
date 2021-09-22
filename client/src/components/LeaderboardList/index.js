import React from "react";

const LeaderboardList = ({ scores }) => {
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

export default LeaderboardList;
