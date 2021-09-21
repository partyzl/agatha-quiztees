import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { answerQuestion, nextQuestion } from '../../actions'

const Countdown = ({ duration, interval, delay, reset }) => {

    const [number, setNumber] = useState(duration)

    const dispatch = useDispatch()

    const answered = useSelector(state => state.gameplay.answered)

    useEffect(() => {
        if (number > 0) {
            setTimeout(() => setNumber(existing => existing - 1), interval)
        } else {
            if (!answered) { dispatch(answerQuestion(null, [], [])) }
            setTimeout(() => dispatch(nextQuestion()), delay)
        }
    }, [number])

    useEffect(() => {
        console.log('firing')
        setNumber(duration)
    }, [reset])

    return (
        <div>
            <span>{number}</span>
        </div>
    )
}

export default Countdown