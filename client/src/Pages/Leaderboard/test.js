import { render } from 'react-dom'
import Leaderboard from ".";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from 'axios';

jest.mock('axios');

describe("Renders leaderboard", () => {
    beforeEach(() => {
    const mockRes = { data: [
        { username: 'testie 1', score: 12 },
        { username: 'testie 2', score: 34 }
    ]};
    axios.get.mockResolvedValue(mockRes);
    render(<Leaderboard />);

    test("it renders a leaderboard div", () => {
    const div = screen.getByRole("leaderboard");
    const rows = screen.getAllByRole('row');
    expect(div).toBeInTheDocument(); 
    expect(results).toBeInTheDocument();
    expect(rows.length).toBe(3);
    });

    // test('renders headings', () => {
    //     const headings = screen.getAllByRole('');
    //     expect(headings.length).toBe(5);
    //     expect(headings[0].textContent).toBe('testPlayer1');
    //     expect(headings[1].textContent).toBe('Your score is 6');
    //     expect(headings[2].textContent).toBe('Category: test category');
    //     expect(headings[3].textContent).toBe('Difficulty: Test difficulty');
    // });

    // test('renders users scores', () => {
    //     const results = screen.getByRole('');
    //     expect(results.children.length).toBe(2);
    // });

    // test('renders links', () => {
    //     const links = screen.getAllByRole('');
    //     expect(links.length).toBe(3);
    // });
});