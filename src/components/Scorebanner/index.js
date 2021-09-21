import React from "react";
import "./style.css";

// const data = [{position: 1, username: 'Ben', score: 50}, {position: 2, username: 'Lily', score: 43}];

const Scorebanner = ({ position, username, score }) => {
  return (
    <div className="banner">
      <div className="position">
        <p>{position}</p>
      </div>
      <div className="name">
        <p>{username}</p>
      </div>
      <div className="score">
        <p>{score}</p>
      </div>
    </div>
  );
};

export default Scorebanner;
