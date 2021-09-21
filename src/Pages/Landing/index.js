import React from "react";
import { useHistory } from "react-router";
import { Header } from "../../Layout";
import { Footer } from "../../Layout";
import { Button } from "../../components";
import { Carousel } from "../../components";

const Landing = () => {
  let history = useHistory();

  const hostQuiz = () => {
    history.push("/quiz");
  };

  const joinQuiz = () => {
    history.push("/joinQuiz");
  };
  const leaderboard = () => {
    history.push("/leaderboard");
  };

  return (
    <>
      <Header />
      {/* <Carousel /> */}
      <Button value="Host Quiz" onClick={hostQuiz} />
      <Button value="Join Quiz" onClick={joinQuiz} />
      <Button value="Leaderboard" onClick={leaderboard} />
      <Footer />
    </>
  );
};

export default Landing;
