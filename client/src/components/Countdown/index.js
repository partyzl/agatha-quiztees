import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { answerQuestion, nextQuestion } from "../../actions";
import "./style.css";

const Countdown = ({ timer }) => {


  const dispatch = useDispatch();
  const answered = useSelector((state) => state.gameplay.answered);

  useEffect(() => {
    if (timer == 0 && !answered) {
      dispatch(answerQuestion("incorrect", [], []));
      dispatch(nextQuestion());
    } else if (timer == 0) {
      dispatch(nextQuestion());
    }
  }, [timer]);

  return (
    <div>
      <span>{timer}</span>
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
