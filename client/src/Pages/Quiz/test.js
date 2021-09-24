import { screen, render } from "@testing-library/react";
import { Quiz } from '.';

const initState = {
    questions: [
        {
            question: 'question 1',
            correct_answer: 'answer 1',
            incorrect_answers: ['answer 2', 'answer 3', 'answer 4']
        },
        {
            question: 'question 2',
            correct_answer: 'answer 2',
            incorrect_answers: ['answer 1', 'answer 3', 'answer 4']
        }
    ],
    players: [{ totalScore: 1 }],
    gameSettings: { categoryName: 'test category', difficulty: 'easy' }
};

describe('Name for test suite', ()=> {
    beforeEach(() => {
        render(<Quiz />, { initState }) // , { initState } this might change, may also want to have it render a different init state based on the test
    })
    
    test('displays the category and difficulty', () => {
            const category = screen.getByRole();
            const difficulty = screen.getByRole();
            expect(category.textContent).toContain('test category');
            expect(difficulty.textContent).toContain('Easy')
        });
    });

    test('Moves to next question on submit', () =>{
        // expect().toBeInTheDocument();
        // expect().toHaveBeenCalledTimes(1);
        // expect().toBe();
        // expect().toContain();
        // expect().toEqual();
        // expect().toBeInstanceOf();
    })

    test('Increments score counter on correct answer', () =>{
        // expect().toBeInTheDocument();
        // expect().toHaveBeenCalledTimes(1);
        // expect().toBe();
        // expect().toContain();
        // expect().toEqual();
        // expect().toBeInstanceOf();
    })

    test('Does not increase score on incorrect answer', () =>{
        // expect().toBeInTheDocument();
        // expect().toHaveBeenCalledTimes(1);
        // expect().toBe();
        // expect().toContain();
        // expect().toEqual();
        // expect().toBeInstanceOf();
    })

})