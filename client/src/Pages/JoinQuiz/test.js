import { render } from 'react-dom';
import { screen } from '@testing-library/react';
import JoinQuiz from '.';

describe('Name for test suite', ()=> {
    beforeEach(() => {
        render(<JoinQuiz />) // , { initState } this might change, may also want to have it render a different init state based on the test
    })

    it('render joinform', () => {
        const joinform = screen.getByRole('form');
        expect(joinform.textContent).toBe((e.target.value));
    });

    it('renders user input fields', async () => {
        const usernameInput = screen.getByLabelText('uname');
        const Btn = screen.getByRole('button');
        const roomID = screen.getByLabelText('roomId')

        expect(roomID).toBeInTheDocument();
        expect(usernameInput.length).toBe(1);
        expect(Btn).toBeInTheDocument();
    })

    test('What you want to test', () =>{
        // expect().toBeInTheDocument();
        // expect().toHaveBeenCalledTimes(1);
        // expect().toBe();
        // expect().toContain();
        // expect().toEqual();
        // expect().toBeInstanceOf();
    })
})