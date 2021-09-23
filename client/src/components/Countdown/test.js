import Countdown from '.';

describe('Countdown', ()=> {
    test('it calls a handleClick prop when time finish', () => {
        const stubHandleClick = jest.fn();
        renderWithReduxProvider(<Countdown duration={1000} endAction={stubHandleClick} />)
        setTimeout(() => {
            expect(stubHandleClick).toHaveBeenCalledTimes(1);
          }, 1005);
    })

    test('it doesn\'t calls handleClick if the time hasn\'t finished', () => {
        const stubHandleClick = jest.fn();
        renderWithReduxProvider(<Countdown duration={1000} endAction={stubHandleClick} />)
        expect(stubHandleClick).toHaveBeenCalledTimes(0);
    })
})