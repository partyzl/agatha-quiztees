import Countdown from '.';
import { render } from 'react-dom'

describe('Countdown', ()=> {
    beforeEach(() => {
        render(<Countdown duration={1000} endAction={stubHandleClick}/>);
    })

    test('it calls a handleClick prop when time finish', () => {
        const stubHandleClick = jest.fn();
        setTimeout(() => {
            expect(stubHandleClick).toHaveBeenCalledTimes(1);
          }, 1005);
    })

    test('it doesn\'t calls handleClick if the time hasn\'t finished', () => {
        const stubHandleClick = jest.fn();
        expect(stubHandleClick).toHaveBeenCalledTimes(0);
    })
})