import axios from "axios";
import { getQuestions, getScores, answerQuestion, nextQuestion, endGame, setError, loadQuestions, loadingQuestions, loadScores, loadingScores } from ".";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock("axios");

describe("Question Actions", () => {
  const initState = {};

  const store = mockStore(initState);

  beforeEach(() => {
    store.clearActions();
  });

  it("Dispatches updateDifficulty", () => {
    const expectedActions = [{ type: "ADD_DIFFICULTY" }];
    store.dispatch(updateDifficulty());
    const actions = store.getActions();
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("Dispatches answerQuestion", () => {
    const expectedActions = [{ type: "ANSWER_QUESTION" }];
    store.dispatch(answerQuestion());
    const actions = store.getActions();
    expect(store.getActions()).toEqual(expectedActions);
  });

//   it("Dispatches resetState", () => {
//     const expectedActions = [{ type: "RESET", payload: [0, " ", 0] }];
//     store.dispatch(resetState());
//     const actions = store.getActions();
//     expect(store.getActions()).toEqual(expectedActions);
//   });
// });

// Breaks at string replaceAll function
// describe("async action tests", () =>{

//   let store;
//   let stringAll;

//   beforeEach(()=>{
//     // stringAll = jest.fn();
//     stringAll = jest.fn();
//     store = mockStore({});
//     store.clearActions();
//   })

//   it("loads data from trivia api", () =>{

//     const result = {results:
//                             [
//                               {
//                                 question: "this is a question",
//                                 correctAnswer: "yes",
//                                 incorrectAnswers: [ "no", "1", "2" ]
                                
//                               }
//                             ]
//                     }
//     const expectedActions = [{ type: "LOAD_QUIZ", payload: result }]

//     axios.get.mockImplementationOnce(()=> Promise.resolve({data: result}));

//     return store.dispatch(loadQuiz(9, "easy"))
//                 .then(() => {
//                   expect(store.getActions()).toEqual(expectedActions)
//                 })
//   })
// })