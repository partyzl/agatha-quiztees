import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getQuestions } from "../../actions";
import "./styles.css";

const Form = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [category, setCategory] = useState("generalKnowledge");
  const [players, setPlayers] = useState("player1");
  const [difficulty, setDifficulty] = useState("easy");
  const [question, setQuestions] = useState("boolean");

  useEffect(
    () => console.log([username, category, players, difficulty, question]),
    [username, category, players, difficulty, question]
  );

  const submitHandler = async (event) => {
    const settings = {
      amount: 10,
      category: 9,
      difficulty: difficulty,
      type: question,
    };
    event.preventDefault();
    await getQuestions(dispatch, settings);
    history.push("/quiz");
  };

  return (
    <div className="formContainer">
      <div className="form">
        <form onSubmit={submitHandler}>
          <label htmlFor="uname">Username</label>
          <input
            type="text"
            name="uname"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label htmlFor="category">Category</label>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="1">General Knowledge</option>
            <option value="2">Mythology</option>
            <option value="3">Art</option>
            <option value="history">History</option>
          </select>
          <label htmlFor="players">Players</label>
          <select
            value={players}
            onChange={(e) => {
              setPlayers(e.target.value);
            }}
          >
            <option value="player1">1 Player</option>
            <option value="player2">2 Players</option>
            <option value="player3">3 Players</option>
            <option value="player4">4 Players</option>
          </select>

          <label htmlFor="difficulty">Difficulty</label>
          <select
            value={difficulty}
            onChange={(e) => {
              setDifficulty(e.target.value);
            }}
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
          <label htmlFor="question">Question Type</label>
          <select
            value={question}
            onChange={(e) => {
              setQuestions(e.target.value);
            }}
          >
            <option value="boolean">True or False</option>
            <option value="multiple">Multiple Choice</option>
          </select>
          <input className="submit" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Form;
