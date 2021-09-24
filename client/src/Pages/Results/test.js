import { screen, render } from "@testing-library/react";
import Results from '.'
import {Button} from '../../components/Button';

jest.mock('axios');

const initState = {
    socket: { on: jest.fn(), emit: jest.fn() },
    players: [
        { username: 'testie1', host: true, totalScore: 6 },
        { username: 'testie2', host: false, totalScore: 14 }
    ],
    currentPlayer: 'testie1',
    roomNumber: 432434342,
    results: [6, 14],
    gameSettings: {categoryName: 'test category', difficulty: 'test difficulty'}
}

describe('Name for test suite', ()=> {
    beforeEach(() => {
        render(<Results />, { initState });
    })

    test('renders headings', () => {
        const headings = screen.getAllByRole('');
        expect(headings.length).toBe(5);
        expect(headings[0].textContent).toBe('testie1');
        expect(headings[1].textContent).toBe('Your score is 6');
        expect(headings[2].textContent).toBe('Category: test category');
        expect(headings[3].textContent).toBe('Difficulty: Test difficulty');
    });

    test('renders results of Quiz', () => {
        const results = screen.getByRole('');
        expect(results.children.length).toBe(2);
    });

    test('renders play again and leaderboard buttons', () => {
        render(<Button />)
        const button = screen.getAllByRole('button');
        expect(button.length).toBe(2);
    });

    test('What you want to test', () =>{
        // expect().toBeInTheDocument();
        // expect().toHaveBeenCalledTimes(1);
        // expect().toBe();
        // expect().toContain();
        // expect().toEqual();
        // expect().toBeInstanceOf();
    })
})