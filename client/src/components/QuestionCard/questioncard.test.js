import QuestionCard from '.';
import { render } from '@testing-library/react'
import 'react-redux'

const mockDispatch = jest.fn()

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch

}))



describe('Question', ()=> {
    const testQuestion={
        category: "Entertainment: Musicals & Theatres",
        type: "multiple",
        difficulty: "hard",
        question: "Which Shakespeare play features the stage direction &quot;Enter a messenger, with two heads and a hand&quot;?",
        correct_answer: "Titus Andronicus",
        incorrect_answers: [
        "Othello",
        "Macbeth",
        "King Lear"
        ]
    }
    
    beforeEach(() => {
        render(<QuestionCard round={testQuestion} options={["Titus Andronicus", "Othello", "Macbeth", "King Lear"]} />)
    })
    
    test('Checks that it renders a div with a question class', () => {       
        let question = document.querySelector('.question');
        expect(question).toBeDefined();
    })
})