import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions, endGame } from "../../actions";
import { Button } from "../../components";
import "./styles.css";

const Results = () => {
  const dispatch = useDispatch();
  const gameData = useSelector((state) => state.gameplay.answer);
  const settings = useSelector((state) => state.quizInfo.settings);

  useEffect(() => {
    calculateScores(gameData);
  }, []);

  function calculateScores(data) {
    return null;
  }

  async function playAgain() {
    await getQuestions(dispatch, settings);
    document.location = "/quiz";
  }

  function goHome() {
    dispatch(endGame());
    document.location = "/";
  }

  return (
    <div className="allButtonContainerResults">
      <div className="buttonCollapseResults">
        <Button onClick={playAgain} value="play again" />
        <Button onClick={goHome} value="return home" />
      </div>
    </div>
  );
};

export default Results;
