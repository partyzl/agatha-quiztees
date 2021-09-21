import React, { useState, useEffect } from "react";
import axios from "axios";
import { Leaderboardlist } from "../../components";
import "./style.css";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        setError(null);
        let { data } = await axios.get("http://localhost:3000/leaderboard/");
        // console.log({ data });
        if (!data.scores.length) {
          setError("There are no high scores");
        } else {
          const array = data.scores.map((r) => {
            //let key = r.scores.id;
            let username = r.username;
            let category = r.category;
            let score = r.score;
            // console.log(username, category, score);
            return { username, category, score };
          });
          console.log(array);
          setLeaderboard(array);
          //console.log(leaderboard);
        }
      } catch (error) {
        console.warn(error);
        setError("There are no high scores available");
      }
    };
    fetchLeaderboard();
    console.log(leaderboard);
  }, []);

  const renderEntries = (data) => {
    data.map((leaderboardEntry) => (
      <Leaderboardlist
        username={leaderboardEntry.username}
        //key={i}
        category={leaderboardEntry.category}
        score={leaderboardEntry.score}
      />
    ));
  };

  return (
    <div className="flex-container">
      <h1> LEADERBOARD </h1>

      {/* <Leaderboardlist /> */}
      {error ? <p>{error}</p> : renderEntries(leaderboard)}
      {/* <Footer /> */}
    </div>
  );
};

export default Leaderboard;
