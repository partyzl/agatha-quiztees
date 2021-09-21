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
        if (selection){ dispatch(answerQuestion(''))}
        const renderOptions = () => {
            return options.map(choice => <button className={`option ${showAnswer(choice)} ${isSelected(choice)}`} disabled={answered} onClick={clickHandler}>{choice}</button>)
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
        const classStyling = option == selection? 'selected' : '';
        return classStyling
    }

    function clickHandler(e) {
        setSelection(e.target.innerText)
    }

    return (
        <article>
            <div className='question'>
                <p>{round.question}</p>
            </div>
            <div className='choices'>
                {optionElements}
            </div>
        </article>
    )
}

export default QuestionCard;








//simons code



// import React, { useState, useEffect } from 'react';
// import Timebar from '../Timebar';
// import './style.css'

// function Question({ question, selected }) {
//     const [options, setOptions] = useState([]);
//     const [input, setInput] = useState('');
//     const [isFirstRun, setIsFirstRun] = useState(true);

//     useEffect(() => {
//         const newOptions = randomizer([question.correct_answer, ...question.incorrect_answers]);
//         setOptions(newOptions);
//         showOptions()
//     }, [])

//     useEffect(() => {
//         if (isFirstRun) {
//             setIsFirstRun(false);
//             return;
//         }
//         else { selected(input) }
//     }, [input])

//     function randomizer(array) {
//         const randomizedArray = [];
//         const copyArray = array;
//         while (copyArray.length > 1) {
//             randomizedArray.push(copyArray.splice(Math.floor(Math.random() * copyArray.length), 1)[0])
//         }
//         randomizedArray.push(copyArray.pop())
//         return randomizedArray;
//     }

//     function showOptions() {
//         return options.map((option, i) => {
//             return (<label key={i}> {renderHTML(option, 'p')}
//                 <input type='radio' name='option' value={option} onChange={(e) => setInput(e.target.value)} />
//             </label>
//             )
//         });
//     }

//     return (

//         <div className='question'>
//             {renderHTML(question.question, 'h3')}
//             <div className='options'>
//                 {options && showOptions()}
//             </div>
//             <Timebar duration='10000' endAction={(e) => setInput(e)} />
//         </div>
//     );

// }

// export default Question;