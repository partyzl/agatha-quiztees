import Form from ".";
import { screen, render } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import {store} from '../../store'

import 'react-redux';

const mockDispatch = () => jest.fn()

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch
}))


describe("Form layout", () => {

  beforeEach(() => {
   
    render(<Form />)
  });

  test("it renders a form", () => {
    let form = screen.getByRole("form");
    expect(form).toBeDefined();
  });

  test("Placeholder text exists", () => {
    let placeHolderInput = screen.getByPlaceholderText("Enter Username");
    expect(placeHolderInput).toBeDefined();
  });

  test("Username label exists", () => {
    let usernameInput = screen.getByLabelText("Username");
    expect(usernameInput).toBeDefined();
  });

  test("Difficult Label exists", () => {
    let difficultyInput = screen.getByLabelText("Category");
    expect(difficultyInput).toBeDefined();
  });

  test("Category Label exists", () => {
    let categoryInput = screen.getByLabelText("Difficulty");
    expect(categoryInput).toBeDefined();
  });
  test("Selected option for category", () => {
    let selectElement = screen.getByDisplayValue("General Knowledge");
    expect(selectElement).toBeDefined();
  });
  test("Selected option for difficulty", () => {
    let selectElement = screen.getByLabelText("Difficulty");
    expect(selectElement).toBeDefined();
  });
 
  test("it displays the 'New Game'button", () => {
    expect(screen.getByRole("button", {name: "new game"})).toBeDefined();
  });
  
});

describe("Form", () =>{
  
  let initState;
  
  beforeEach(()=>{
    initState = {
      loading: false,
      questionIndex: 0,
      username: "",
      category: "",
      difficulty: "",
      result: [{ question: "", correctAnswer: "", incorrectAnswers: [] }],
      score: 0,
      userNum: 0,
    };
  })

  test('it renders a form with no users in state', () => {
    render(<Form />, { initState });
    let form = screen.getByRole('form');
    expect(form).toBeDefined();
  });

  test('it renders a form with a question Index of 0 in state', () => {
    render(<Form />, { initState });
    let form = screen.getByRole('form');
    expect(form).toBeDefined();
  });

  test('it renders a form with no ites in the results array in state', () => {
    render(<Form />, { initState });
    let form = screen.getByRole('form');
    expect(form).toBeDefined();
  });

  test('it renders a form with a value of 0 in state', () => {
    render(<Form />, { initState });
    let form = screen.getByRole('form');
    expect(form).toBeDefined();
  });

  
  test("it renders the form div", () => {
    render(<Form />);
    const formDiv = screen.getByRole("formContainer");
    expect(formDiv).toBeDefined();
  });

  test("it renders the username field", () => {
    render(<Form />);
    const usernameTextbox = screen.getByRole("username");
    expect(usernameTextbox).toBeDefined();
  });

  test("it renders the category drop down menu", () => {
    render(<Form />);
    const categoryDropDown = screen.getByRole("categoryDropDown");
    expect(categoryDropDown).toBeDefined();
  });

  test("it renders the difficulty drop down menu", () => {
    render(<Form />);
    const diffDropDown = screen.getByRole("diffDropDown");
    expect(diffDropDown).toBeDefined();
  });

})