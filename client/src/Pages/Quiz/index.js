import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getQuestions } from "../../actions";
import { Countdown, QuestionCard } from "../../components";
import { Header, Footer } from "../../Layout";
import "./styles.css";

const Quiz = () => {
  const currentIndex = useSelector((state) => state.gameplay.currentIndex);
  const questions = useSelector((state) => state.quizInfo.questions);

  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentIndex]
  );
  const [reset, setReset] = useState(false);

  let options = randomiser([
    currentQuestion.correct_answer,
    ...currentQuestion.incorrect_answers,
  ]);

  useEffect(() => {
    if (currentIndex == questions.length) {
      console.log("going to results");
      document.location = "/results";
    } else {
      setCurrentQuestion(questions[currentIndex]);
    }
    return () => setReset((existing) => (existing ? false : true));
  }, [currentIndex]);

  useEffect(() => {
    options = randomiser([
      currentQuestion.correct_answer,
      ...currentQuestion.incorrect_answers,
    ]);
  }, [currentQuestion]);

  function randomiser(options) {
    console.log("mixing");
    const randomised = options.sort(() => Math.random() - 0.5);
    return randomised;
  }

  return (
    <div>
      <div className="overlay">
        <div className="quizContainer">
          <Countdown
            className="countdown"
            duration={10}
            interval={1000}
            delay={3000}
            reset={reset}
          />
          <QuestionCard round={currentQuestion} options={options} />
          <span>Question: {currentIndex}</span>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
