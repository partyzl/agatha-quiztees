import { screen, render } from "@testing-library/react";
import { Quiz } from '.';

describe('Name for test suite', ()=> {
    beforeEach(() => {
        render(<Quiz />) // , { initState } this might change, may also want to have it render a different init state based on the test
    })

    test('QuestionCard renders on page', () =>{
        // expect().toBeInTheDocument();
        // expect().toHaveBeenCalledTimes(1);
        // expect().toBe();
        // expect().toContain();
        // expect().toEqual();
        // expect().toBeInstanceOf();
    })

    test('Countdown timer renders on page', () =>{
        // expect().toBeInTheDocument();
        // expect().toHaveBeenCalledTimes(1);
        // expect().toBe();
        // expect().toContain();
        // expect().toEqual();
        // expect().toBeInstanceOf();
    })

    test('Tells the user their question or asks them to wait for their turn', () => {
        expect(screen.getByRole('span')).toBeInTheDocument();
        // then check value of heading
    })

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