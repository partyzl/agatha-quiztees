import React, { useState } from "react";
import { useHistory } from "react-router";

const Form = () => {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [category, setCategory] = useState("");
  const [players, setPlayers] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [question, setQuestions] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    history.push("/quiz");
  };

  return (
    <>
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
          <option value="generalKnowledge">General Knowledge</option>
          <option value="mythology">Mythology</option>
          <option value="art">Art</option>
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
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <label htmlFor="question">Question Type</label>
        <select
          value={question}
          onChange={(e) => {
            setQuestions(e.target.value);
          }}
        >
          <option value="truefalse">True or False</option>
          <option value="multiple">Multiple Choice</option>
        </select>
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
