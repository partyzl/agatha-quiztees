import React from "react";
import { useHistory } from "react-router";
import { Header } from "../../Layout";
import { Footer } from "../../Layout";
import { SimpleSlider } from "../../components";
import { Button } from "../../components";
import { initSocket } from "../../socket";
import { startGame } from "../../socket/events";
import "./style.css";

const Landing = () => {
  let history = useHistory();

  const hostQuiz = () => {
    initSocket()
    //startGame({hey: 'it is me'})
    // history.push("/setup");
  };

  const joinQuiz = () => {
    history.push("/joinQuiz");
  };
  const leaderboard = () => {
    history.push("/leaderboard");
  };
  const singlePlayer = () => {
    history.push("/settings");
  };

  return (
    <>
      <Header />
      <div className="container align-items-center justify-content-center">
        <SimpleSlider />
        <div>
          <div className="buttonContainer">
            <Button value="Single Player" onClick={singlePlayer} />
          </div>
          <div className="buttonContainer">
            <Button value="Host Quiz" onClick={hostQuiz} />
          </div>
          <div className="buttonContainer">
            <Button value="Join Quiz" onClick={joinQuiz} />
          </div>
          <div className="buttonContainer">
            <Button value="Leaderboard" onClick={leaderboard} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
