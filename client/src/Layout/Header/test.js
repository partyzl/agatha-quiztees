import Header from '.';
import { screen, render } from "@testing-library/react";

describe('header', () => {
	beforeEach(() => {
		render(<Header />);
	});
	test('Our H1 is present', () => {
		let strapline = screen.getByLabelText('quiz-title');
		expect(strapline).toBeInTheDocument();
	});
});