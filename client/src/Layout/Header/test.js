import { screen } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
    test('it renders an H1', () => {
        render(<Header />);
        const  = screen.querySelector('header');
        expect(header).toBeInTheDocument();
    })
})