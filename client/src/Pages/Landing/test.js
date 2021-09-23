import { screen } from '@testing-library/react';
import Landing from '.';
import { Button } from '../../components';

describe('Landing', () => {
    test('it shows page header', () => {
        render(<Landing/>)
        expect(screen.getByRole('heading').textContent).toContain('');
    })

    test("renders page buttons", () => {
        renderWithReduxProvider(<Button />);
        const buttons = screen.queryByRole('button')
        expect(buttons).toBeInTheDocument();
    });

    test('buttons redirect to correct pages', () => {
        renderWithReduxProvider(<Button />);
        expect().toHaveBeenCalledTimes(1);
        expect()
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