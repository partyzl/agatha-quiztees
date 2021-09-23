import React from 'react';
// import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { store } from '../store'
import { render } from 'react-dom'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import App from '../App.js'

describe('App', ()=> {
    beforeEach(() => {
        renderWithReduxProvider(<App />) // , { initState } this might change, may also want to have it render a different init state based on the test
    })

        test('it renders a clickable heading to refresh content', () => {
            renderWithReduxProvider(<App />)
            const heading = screen.getByRole('heading', { name: 'refresh'} )
            userEvent.click(heading)
            expect(axios.get).toHaveBeenCalled()
        })
    
        test('it renders error if error exists', () => {
            const initState = { loading: true, doggos: [], error: new Error('Bad Things') }
            renderWithReduxProvider(<App />, { initState })
            const error = screen.getByRole('alert')
            expect(error).toBeInTheDocument()
            expect(error.textContent).toBe('Bad Things')
        })
    })

    test('What you want to test', () =>{
        // expect().toBeInTheDocument();
        // expect().toHaveBeenCalledTimes(1);
        // expect().toBe();
        // expect().toContain();
        // expect().toEqual();
        // expect().toBeInstanceOf();
    })
})

// test('renders learn react link', () => {
//   const { getByText } = render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );

//   expect(getByText(/learn/i)).toBeInTheDocument();
// });
