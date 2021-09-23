import LeaderBoard from ".";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Leaderboardlist } from ".";
import { render } from 'react-dom'

describe("Renders leaderboard", () => {
   beforeEach(() => {
        render(<Leaderboardlist/>);
      });

  test("it renders a table tag", () => {
    const div = screen.getByLabelText("leaderboard-item");
    expect(div).toBeInTheDocument();
  });
});