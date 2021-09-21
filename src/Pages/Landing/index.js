import React from "react";
import { useHistory } from "react-router";
import { Header } from "../../Layout";
import { Footer } from "../../Layout";
// import { SimpleSlider } from "../../components";
import { Button } from "../../components";
import "./style.css";

const Landing = () => {
  let history = useHistory();

  const hostQuiz = () => {
    history.push("/settings");
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
        {/* <SimpleSlider /> */}
          <div class="col-4">
            <Button value="Single Player" onClick={singlePlayer} />
            <Button value="Host Quiz" onClick={hostQuiz} />
            <Button value="Join Quiz" onClick={joinQuiz} />
            <Button value="Leaderboard" onClick={leaderboard} />
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
