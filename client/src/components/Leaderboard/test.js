import LeaderBoard from ".";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Leaderboardlist } from ".";

describe("Renders leaderboard", () => {
   beforeEach(() => {
        renderWithReduxProvider(<Leaderboardlist/>);
      });

  test("it renders a table tag", () => {
    renderWithReduxProvider(<Leaderboardlist />);
    const div = screen.getByLabelText("leaderboard-item");
    expect(div).toBeInTheDocument();
  });
});