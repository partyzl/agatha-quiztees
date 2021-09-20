import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
// will need something here to import questions
// will need something here to import an action like fetchQuestions from actions

const Quiz = () => {
    const dispatch = useDispatch();

    const [ actualUser, setActualUser ] = useState(0);
    const [ actualQuestion, setActualQuestion ] = useState(0);
    const [ isFirstRun, setIsFirstRun ] = useState(true);

    const [ toggle, setToggle ] = useState(false)
    const { level } = useParams();
    const history = useHistory();
    const quizData = useSelector(state => state.settings);
    const categoryData = useSelector(state => state.categories);
    const questions = useSelector(state=> state.questions);
    const scores = useSelector(state=> state.scores);
    
    }
    
    return (
        <div>
            
        </div>
    );


export default Quiz;
