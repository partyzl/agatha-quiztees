import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getQuestions } from "../../actions";
import "./styles.css";

const JoinForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const submitHandler = async (event) => {
    const settings = {
      roomId: roomId,
    };
    event.preventDefault();
    await getQuestions(dispatch, settings);
    history.push("/quiz");
  };

  return (
    <div className="formContainer">
      <div className="form">
        <form onSubmit={submitHandler}>
          <label htmlFor="roomId">Room ID</label>
          <input
            type="text"
            name="roomId"
            value={roomId}
            onChange={(e) => {
              setRoomId(e.target.value);
            }}
            required
          ></input>

          <label htmlFor="uname">Username</label>
          <input
            type="text"
            name="uname"
            value={username}
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default JoinForm;
