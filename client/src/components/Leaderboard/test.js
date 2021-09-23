import LeaderBoard from ".";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Renders leaderboard", () => {
  test("it renders a p tag", () => {
    renderWithReduxProvider(<LeaderBoard />);
    const div = screen.getByLabelText("leaderboard-item");
    expect(div).toBeInTheDocument();
  });
});