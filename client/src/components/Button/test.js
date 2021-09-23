import { screen } from '@testing-library/react';

import Button from '.';

describe('Button', () => {
    beforeEach(() => {
        render(<Button />);
    })

    test('renders a button', () => {
        const btn = screen.getByRole('button')
        expect(btn.textContent).toContain('');
    })
})