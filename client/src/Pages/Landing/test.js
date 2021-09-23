import { screen } from '@testing-library/react';
import Landing from '.';
import { Button } from '../../components';
import { MemoryRouter } from 'react';
import { render } from 'react-dom'

describe('Landing', () => {

    beforeAll(() => {
        render(<Landing />, { wrapper: MemoryRouter })
        render(<Button />);
    })

    test('shows page header', () => {
        expect(screen.getByRole('heading').textContent).toContain('');
    })

    test('renders page buttons', () => {
        const Button = screen.queryByRole('button')
        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(screen.getAllByRole('button').length).toBe(4);
    });

    it('renders the button to start a new game', () => {
        const Button = screen.getByRole('link', { name: /Start/ });
        userEvent.click(Button);
        expect(Button.textContent).toContain('Solo Quiz');
    });

    it('renders the button to join an existing game', () => {
        const Button = screen.getByRole('link', { name: /Join/ });
        userEvent.click(Button);
        expect(Button.textContent).toContain('Join Quiz');
    });

    it('renders the button to host a new game', () => {
        const Button = screen.getByRole('link', { name: /Host/ });
        userEvent.click(Button);
        expect(Button.textContent).toContain('Host Quiz');
    });

    it('renders the button to check all the existing scores', () => {
        const Button = screen.getByRole('link', { name: /Leaderboard/ });
        userEvent.click(Button);
        expect(Button.textContent).toContain(' Leaderboards');
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