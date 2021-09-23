import { render } from 'react-dom'
import Leaderboard from ".";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from 'axios';

jest.mock('axios');

describe("Renders leaderboard", () => {
    beforeEach(() => {
    render(<Leaderboard />);

    test("it renders a leaderboard div", () => {
    const div = screen.getByRole("leaderboard");
    const rows = screen.getAllByRole('row');
    expect(div).toBeInTheDocument(); 
    expect(results).toBeInTheDocument();
    expect(rows.length).toBe(3);
    });

});