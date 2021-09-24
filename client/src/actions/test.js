import { answerQuestion } from ".";
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
  })
},