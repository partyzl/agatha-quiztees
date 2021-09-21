// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
// will need something here to import questions - like a Question component
// will need something here to import an action like fetchQuestions from actions
import { questionsRequest, localScores, } from '../../actions';


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
    
    //Should filter set of questions by category selected and across length of question array, and dispatch questions by category ID and levels
    useEffect(() => {
        const filteredQuestObj = categoryData.filter( x => x.category == quizData[0]);
        const categoryId = filteredQuestObj[0].id;
        let variable = [{ name:'anonymous', score:0 }];
        if(quizData[1].length > 0) {
            variable = quizData[1].map( x => ({ name:x, score:0 }))
        } 
        
        else dispatch(quizSettings(quizData[0], ['anonymous'] , quizData[2]));
        dispatch(localScores(variable));
        dispatch(fetchQuestions(categoryId, level));
        setToggle(true);
    }, [])
    
    //Should set state in line 14 to false if this is a persons first time
    useEffect(()=>{
        if (isFirstRun) {
            setIsFirstRun(false);
            return;
          }
        else {
            setToggle(true);
        }
    },[toggle])
    
    // Should change question upon answer submission, and increase score based on correct answer
    const changeQuestion = (answer) => {
        if (questions[actualQuestion].correct_answer == answer) {
            let index = scores.findIndex( x => quizData[1][actualUser] === x.name)
            scores[index].score++
            dispatch(localScores(scores))
        } 
        
        if((actualQuestion+1)>=10){
            history.push('/scores/local'); //stores score locally
        } else {
            setNextUser();
            setActualQuestion(prev => prev+1)
            setToggle(true)
        }
    }
    
    return (
        <div>
            <div className='quizContainer'> 
            { toggle && <h3 className='showUser'>{quizData[1][actualUser]}</h3>}
            { toggle && <Question key={actualQuestion} question={questions[actualQuestion]} selected={changeQuestion} /> }
        </div>
    );
  }

export default Quiz;
