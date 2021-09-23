import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { answerQuestion, nextQuestion } from "../../actions";
import "./style.css";

const Countdown = ({ duration, interval, delay, reset }) => {
  const [number, setNumber] = useState(duration);

  const dispatch = useDispatch();

  const answered = useSelector((state) => state.gameplay.answered);

  useEffect(() => {
    if (number > 0) {
      setTimeout(() => setNumber((existing) => existing - 1), interval);
    } else {
      if (!answered) {
        dispatch(answerQuestion("", [], []));
      }
      setTimeout(() => dispatch(nextQuestion()), delay);
    }
  }, [number]);

  useEffect(() => {
    setNumber(duration);
  }, [reset]);

  return (
    <div>
      <span>{number}</span>
    </div>
  );
};

export default Countdown;

// import React, { useState, useEffect } from 'react';
// import './style.css'

// function Timebar({duration, endAction}) {
//     var style = {
//         '--duration': Math.floor(Number(duration)/1000)
//     };

//     useEffect(()=>{
//         const timer = setTimeout(() => {
//             endAction('Timeout called!');
//           }, duration);
//           return () => clearTimeout(timer);
//     },[])
//     return (

//         <div className='timebar' style={style}>
//             <div></div>
//         </div>
//     )

// }
// export default Timebar;
