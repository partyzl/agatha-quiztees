import { render } from 'react-dom'
import {screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import Results from '.'

describe('Name for test suite', ()=> {
    beforeEach(() => {
        renderWithReduxProvider(<Results />) // , { initState } this might change, may also want to have it render a different init state based on the test
    })

    test('Renders results of Quiz', () =>{
        // expect().toBeInTheDocument();
        // expect().toHaveBeenCalledTimes(1);
        // expect().toBe();
        // expect().toContain();
        // expect().toEqual();
        // expect().toBeInstanceOf();
    })

    test('Renders play again and return home buttons', () =>{
        // expect().toBeInTheDocument();
        // expect().toHaveBeenCalledTimes(1);
        // expect().toBe();
        // expect().toContain();
        // expect().toEqual();
        // expect().toBeInstanceOf();
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