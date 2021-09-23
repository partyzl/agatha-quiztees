import React from "react";
import { useHistory } from "react-router";
import { Header } from "../../Layout";
import { Footer } from "../../Layout";
import { JoinForm } from "../../components";
import { Button } from "../../components";
import "./styles.css";
import { Landing, WaitingRoom } from "..";

const JoinQuiz = () => {
  let history = useHistory();
  const WaitingRoom = () => {
    history.push("/waitingRoom");
  };
  return (
    <>
      <Header />
      <JoinForm />
      <div className="buttonLeft">
        <Button className="joinQuiz" value="Join Quiz" onClick={WaitingRoom} />
      </div>
      <div className="buttonRight">
        <Button className="backButton" value="Back" onClick={Landing} />
      </div>
      <Footer />
    </>
  );
};

export default JoinQuiz;
