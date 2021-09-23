import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { answerQuestion } from '../../actions'
import './style.css'


const QuestionCard = ({ round }) => {

    const answered = useSelector(state => state.gameplay.answered)

    const [selection, setSelection] = useState(null)
    const [optionElements, setOptionElements] = useState()

    const dispatch = useDispatch()
    const options = randomiser([round.correct_answer, ...round.incorrect_answers])

    useEffect(() => {
        if (selection) { dispatch(answerQuestion(logAnswer())) }
        const renderOptions = () => {
            return options.map(choice => (
                <button className={`option ${showAnswer(choice)} ${isSelected(choice)}`}
                    disabled={answered} onClick={clickHandler} dangerouslySetInnerHTML={{ __html: choice }} />)
            )
        }
        setOptionElements(renderOptions)
        return () => setSelection(null)
    }, [selection, answered, round])

    function showAnswer(option) {
        const answeredClassName = option == round.correct_answer ? 'correct' : 'incorrect';
        const classStyling = answered ? answeredClassName : 'unanswered';
        return classStyling
    }

    function randomiser(options) {
        const randomised = options.sort(() => Math.random() - 0.5)
        return randomised
    }

    function isSelected(option) {
        const classStyling = option == selection ? 'selected' : '';
        return classStyling
    }

    function logAnswer(){
        const log = selection == round.correct_answer ? 'correct' : 'incorrect';
        return log;
    }

    function clickHandler(e) {
        setSelection(e.target.innerText)
    }

    return (
        <article>
            <div className='question' dangerouslySetInnerHTML={{ __html: round.question }} />
            <div className='choices'>
                {optionElements}
            </div>
        </article>
    )
}

export default QuestionCard;