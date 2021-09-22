import React, { useState, useEffect } from "react";
import { Header } from "../../Layout";
import { Footer } from "../../Layout";
import axios from "axios";
import { LeaderboardList } from "../../components";
import "./style.css";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [error, setError] = useState(null);

  useEffect(async () => {
    const { data } = await axios.get("http://localhost:3000/leaderboard/");
    setLeaderboard(data.scores);
  }, []);

  const scoreLine = leaderboard.map((item, i) => (
    <div className="scores-container" key={i}>
      <LeaderboardList scores={item} />
    </div>
  ));
  return (
    <>
      <Header />
      <div className="flex-container">
        <h1> LEADERBOARD </h1>

        {/* <Leaderboardlist /> */}
        {error ? <p>{error}</p> : scoreLine}
        {/* <Footer /> */}
      </div>
      <Footer />
    </>
  );
};

export default Leaderboard;
