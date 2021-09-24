import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { answerQuestion } from "../../actions";
import "./style.css";

const QuestionCard = ({ round, options }) => {
  const answered = useSelector((state) => state.gameplay.answered);

  const [selection, setSelection] = useState(null);
  const [optionElements, setOptionElements] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    if (selection) { dispatch(answerQuestion(logAnswer())) }
  }, [selection])

  useEffect(() => {
    const renderOptions = () => {
      return options.map((choice) => (
        <button
          className={`option ${showAnswer(choice)} ${isSelected(choice)}`}
          disabled={answered}
          onClick={clickHandler}
          dangerouslySetInnerHTML={{ __html: choice }}
        />
      ));
    };
    setOptionElements(renderOptions);
    setSelection(null)
  }, [answered, round])

  function logAnswer() {
    const log = selection == round.correct_answer ? "correct" : "incorrect";
    console.log(log)
    return log;
  }

  function showAnswer(option) {
    const answeredClassName =
      option == round.correct_answer ? "correct" : "incorrect";
    const classStyling = answered ? answeredClassName : "unanswered";
    return classStyling;
  }

  function isSelected(option) {
    const classStyling = option == selection ? "selected" : "";
    return classStyling;
  }

  function clickHandler(e) {
    setSelection(e.target.innerText);
  }

  return (
    <article>
      <div className="quizContainer">
        <div
          className="question"
          dangerouslySetInnerHTML={{ __html: round.question }}
        />
        <div className="choices">
          {optionElements}
        </div>
      </div>
    </article>
  );
};

export default QuestionCard;
