import React from "react";
import { useHistory } from "react-router";
import { Header } from "../../Layout";
import { Footer } from "../../Layout";
import { JoinForm } from "../../components";
import { Button } from "../../components";
import "./styles.css";
import { Landing, WaitingRoom } from "../../Pages";

const JoinQuiz = () => {
  return (
    <>
      <Header />
      <JoinForm />
      <div className="buttonContainer">
        <div className="buttonLeft">
          <Button
            className="joinQuiz"
            value="Join Quiz"
            onClick={WaitingRoom}
          />
        </div>
        <div className="buttonRight">
          <Button className="backButton" value="Back" onClick={Landing} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JoinQuiz;
