import JoinForm from ".";
import { screen, render } from "@testing-library/react";

describe("Form layout", () => {

  beforeEach(() => {
    // renderWithReduxProvider(<Form />);
    render(<JoinForm />)
  });

  test("it renders a form", () => {
    let form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });

  test("it renders the username field", () => {
    renderWithReduxProvider(<Form />);
    const usernameTextbox = screen.getByRole("username");
    expect(usernameTextbox).toBeInTheDocument();
  });


  test("Username label exists", () => {
    let usernameInput = screen.getByLabelText("Username:");
    expect(usernameInput).toBeInTheDocument();
  });

  test("RoomID label exists", () => {
    let usernameInput = screen.getByLabelText("Username:");
    expect(usernameInput).toBeInTheDocument();
  });

  test("it displays logo", () => {
    expect(screen.getByAltText("Quizzo Logo")).toBeInTheDocument();
  });
},

describe("Form", () =>{
  
  let initState;
  
  beforeEach(()=>{
    initState = {
      loading: false,
      username: "",
      RoomID: "",
    };
  })

  test("it renders the form div", () => {
    render(<JoinForm/>, { initState })
    const formDiv = screen.getByRole("formContainer");
    expect(formDiv).toBeInTheDocument();
  });


  test('it renders a form with no users in state', () => {
    render(<JoinForm/>, { initState })
    let form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });

  test("it renders the Room ID", () => {
    render(<JoinForm/>, { initState })
    const roomID = screen.getByLabelText("roomId");
    expect(roomID).toBeInTheDocument();
  });

});