import { screen, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import Setup from '.'

describe('Quiz Setup', ()=> {
    const mockResponse = {
        data: {
            trivia_categories: [
                { id: 9, name: 'General Knowledge' },
                { id: 10, name: 'Science and Nature' }
            ]
        }
    };

    beforeEach(() => {
        render(<Setup />) // , { initState } this might change, may also want to have it render a different init state based on the test
        beforeEach(() => jest.resetAllMocks());
    })

    test('renders user input fields', async () => {
        axios.get.mockResolvedValue(mockResponse);
        const usernameInput = screen.getByRole('text');
        const Btn = screen.getByRole('button');
        const form = screen.getByRole('game-setup')
        const generalCategory = await screen.findByRole('option', { name: 'General Knowledge' });
        
        const category = screen.getAllByRole('combobox')[0];
        const difficulty = screen.getAllByRole('combobox')[1]; // no combobox but stole this from testing library need to change to get by value
        userEvent.type(usernameInput, 'testUser');
        userEvent.selectOptions(category, '9');
        userEvent.selectOptions(difficulty, 'easy');

        const easyOption = screen.getByRole('option', { name: 'Easy' });

        expect(usernameInput.value).toBe('testUser');
        expect(generalCategory.selected).toBe(true);
        expect(easyOption.selected).toBe(true);
        expect(form).toBeInTheDocument();
        expect(usernameInput.length).toBe(2);
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
});