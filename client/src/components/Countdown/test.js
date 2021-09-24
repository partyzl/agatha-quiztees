import Countdown from '.';
import { render } from "@testing-library/react";'

describe('Countdown', ()=> {
    const stubHandleClick = jest.fn();
    beforeEach(() => {
        render(<Countdown duration={1000} endAction={stubHandleClick}/>);
    })

    test('it calls a handleClick prop when time finish', () => {
        
        setTimeout(() => {
            expect(stubHandleClick).toHaveBeenCalledTimes(1);
          }, 1005);
    })

    test('it doesn\'t calls handleClick if the time hasn\'t finished', () => {
        const stubHandleClick = jest.fn();
        expect(stubHandleClick).toHaveBeenCalledTimes(0);
    })
})