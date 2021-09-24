import { answerQuestion, nextQuestion, getQuestions, questionsRequest } from ".";
import { questionsRequest as quesReq } from ".";
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
        jest.clearAllMocks()
    });

    it("Dispatches answerQuestion", () => {
        const expectedActions = [{ type: "ANSWER_QUESTION", payload: { answers: 'correct', score: [], stats: [] } }];
        store.dispatch(answerQuestion('correct', [], []));
        const actions = store.getActions();
        expect(actions).toEqual(expectedActions);
    })

    it("Dispatches nextQuestion", () => {
        const expectedActions = [{ type: "NEXT_QUESTION" }]
        store.dispatch(nextQuestion())
        const actions = store.getActions();
        expect(actions).toEqual(expectedActions)
    })

    it("dispatches loading_questions and load_questions with getQuestions", async () => {
        quesReq.questionsRequest = jest.fn().mockImplementation((settings) => ([{}]))
        const settings = {}
        const questions = []
        const expectedActions = [
            {
                type: "LOADING_QUESTIONS",
                payload: {}
            },
            {
                type:"LOAD_QUESTIONS",
                payload: []
            }
        ]
        await getQuestions(store.dispatch, settings)
        const actions = store.getActions()
        expect(actions).toEqual(expectedActions)
    })

    it('dispatches set_error when no settings', async() => {

        const settings = {}
        quesReq.questionsRequest = jest.fn().mockImplementation((settings) => {
            throw new Error('where are your settings')
        })
        const expectedActions = {type: 'SET_ERROR', payload:'oh no! where are your settings'}
        await getQuestions(store.dispatch, settings)
        const actions = store.getActions()
        expect(actions).toEqual(expectedActions)

    })
})