import React from "react";

const Leaderboardlist = ({ scores }) => {
  //for loop for position

  return (
    <>
      <div className="leaderboard-item">
        <table>
          <tr>
            <td>{scores.username}</td>
            <td>{scores.category}</td>
            <td>{scores.score}</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Leaderboardlist;
