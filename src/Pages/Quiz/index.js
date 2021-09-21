import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { QuestionCard } from '../../components';
import { getQuestions } from '../../actions';

const Quiz = () => {
    //temporary
    // const dispatch = useDispatch()
    // getQuestions(dispatch)

    // const currentIndex = useSelector(state => state.gameplay.currentIndex)
    // const question = useSelector(state => state.quizInfo.questions[currentIndex])
    // const questions = useSelector(state => state.quizInfo.questions)

    // const [currentQuestion, setCurrentQuestion] = useState()

    // console.log(question)
    // useEffect(() => {
    //     console.log('hey i am happening')
    //     setCurrentQuestion(question)
    // }, [questions])


    const question =
    {
        category: "Entertainment: Video Games",
        type: "multiple",
        difficulty: "easy",
        question: "What year was the game Team Fortress 2 released?",
        correct_answer: "2007",
        incorrect_answers: [
            "2009",
            "2005",
            "2010"
        ]
    }


    return (
        <div>
            <QuestionCard round={question} />
        </div >
    );
}

export default Quiz;
