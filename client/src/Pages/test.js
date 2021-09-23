import { MemoryRouter } from 'react';
import { screen } from '@testing-library/react';
import WaitingRoom from '.';

describe('WaitingRoomPage', () => {

    beforeAll(() => {
        render(<WaitingRoom />, { wrapper: MemoryRouter })
    })

    test('Includes a list of users in that room', () => {
        expect(screen.getByRole('list')).toBeInTheDocument();
    })

})