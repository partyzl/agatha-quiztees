import { MemoryRouter } from 'react';
import { screen } from '@testing-library/react';
import WaitingRoom from '.';

const getInitState = (host, error) => (
    {
       gameSettings: {category: 10, difficulty: 'test difficulty'},
       socket: { on: jest.fn(), emit: jest.fn() },
       players: [
           { username: 'testie 1', host: host, totalScore: 6 }
       ],
       currentPlayer: 'testie 1',
       roomNumber: 0451,
       gameSettings: {categoryName: 'test category', difficulty: 'test difficulty'},
       error: error
   }
)

describe('WaitingRoomPage', () => {

    beforeAll(() => {
        render(<WaitingRoom />, { wrapper: MemoryRouter })
    })

    it('renders the heading and start button', () => {
        const initState = getInitState(true, null)
        const heading = screen.getByText('Waiting Room');
        const button = screen.getByRole('button');
        expect(heading).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });

    it('renders error message if error is not null', () => {
        const initState = getInitState(true, 'test error message');
        const alert = screen.getByRole('alert');
        expect(alert.textContent).toBe('test error message');
    });
})