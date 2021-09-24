// // jest-dom adds custom jest matchers for asserting on DOM nodes.
// // allows you to do things like:
// // expect(element).toHaveTextContent(/react/i)
// // learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { createStore, applyMiddleware } from 'redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import axios from 'axios';
import mainReducer from '../reducers/index';
import questionsReducer from "../reducers/questionsReducer";

jest.mock('axios')
axios.get.mockResolvedValue({ data: { message: [] }})

const TestProviders = ({ initState }) => {
    initState ||= {
        categories: [], 
        settings: [], 
        questions: [],
        scores: [], 
        loading: false,
        currentPlayer: '',
        error: null
    }

    let testReducer = () => questionsReducer(initState, { type: "@@INIT" });
    const testStore = createStore(() => mainReducer(initState, { type: '@@INIT' }), applyMiddleware(thunk))

    return ({ children }) => (
        <Provider store={testStore}>
            <MemoryRouter>
                { children }
            </MemoryRouter>
        </Provider>
    )
}

const renderWithReduxProvider = (ui, options = {}) => {
    let TestWrapper = TestProviders(options);
    render(ui, { wrapper: TestWrapper, ...options });
  };
  

global.renderWithReduxProvider = renderWithReduxProvider;
global.React = React;
global.render = render;
global.userEvent = userEvent;
