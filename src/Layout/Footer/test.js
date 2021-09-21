import { screen } from "@testing-library/react";
import Footer from ".";

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test("it shows the copyright logo and agatha-quiztees name", () => {
    const content = screen.queryByText(/© 2021 Agatha-Quiztees Inc /i);
    expect(content).toBeInTheDocument();
  });
});
