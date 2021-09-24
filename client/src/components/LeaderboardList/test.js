import { screen, render } from "@testing-library/react";
import { Leaderboardlist } from ".";

describe("Renders leaderboard", () => {
   beforeEach(() => {
        render(<Leaderboardlist/>);
      });

  test("it renders a table tag", () => {
    const div = screen.getByLabelText("leaderboard-item");
    expect(div).toBeInTheDocument();
  });
});