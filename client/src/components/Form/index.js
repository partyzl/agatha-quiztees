import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getQuestions } from "../../actions";
import "./styles.css";

const Form = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [category, setCategory] = useState("");
  const [players, setPlayers] = useState("player1");
  const [difficulty, setDifficulty] = useState("easy");
  const [question, setQuestions] = useState("boolean");

  const submitHandler = async (event) => {
    const settings = {
      amount: 10,
      category: category,
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
            <option value={9}>General Knowledge</option>
            <option value={10}>Books</option>
            <option value={11}>Film</option>
            <option value={12}>Music</option>
            <option value={13}>Musicals & Theatres</option>
            <option value={14}>Television</option>
            <option value={15}>Video Games</option>
            <option value={16}>Board Games</option>
            <option value={17}>Science & Nature</option>
            <option value={19}>Science and Maths</option>
            <option value={20}>Mythology</option>
            <option value={22}>Geography</option>
            <option value={21}>Sports</option>
            <option value={25}>Art</option>
            <option value={23}>History</option>
            <option value={26}>Celebrities</option>
            <option value={30}>Science: Gadgets</option>
            <option value={31}>Anime & Manga</option>
            <option value={32}>Cartoons</option>
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
