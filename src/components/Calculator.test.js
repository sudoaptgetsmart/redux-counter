import {screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Calculator} from "./Calculator";
import {ON_ADD, ON_MUL, ON_SUB, ON_DIV} from "../modules/counter";

test(
    'should show a button with "+" that dispatches ON_ADD when clicked',
    () => {

        const dispatch = jest.fn()
        render(<Calculator _useDispatch={() => dispatch} _useSelector={() => {
        }}/>)

        const button = screen.getByText('+');
        expect(button.tagName).toBe('BUTTON')

        userEvent.click(button);
        expect(dispatch).toHaveBeenCalledWith({type: ON_ADD})
    }
)

test(
    'should show a button with "-" and dispatches ON_SUB when clicked',
    () => {
        const dispatch = jest.fn()
        render(<Calculator _useDispatch={() => dispatch} _useSelector={() => {
        }}/>)

        const button = screen.getByRole('button', {name: "-"});
        expect(button.tagName).toBe('BUTTON')

        userEvent.click(button);
        expect(dispatch).toHaveBeenCalledWith({type: ON_SUB})
    }
)

test(
    'should show a button with "*" and dispatches ON_MUL when clicked',
    () => {
        const dispatch = jest.fn()
        render(<Calculator _useDispatch={() => dispatch} _useSelector={() => {
        }}/>)

        const button = screen.getByText("*");
        expect(button.tagName).toBe('BUTTON')

        userEvent.click(button);
        expect(dispatch).toHaveBeenCalledWith({type: ON_MUL})
    }
)

test(
    'should show a button with "/" and dispatches ON_DIV when clicked',
    () => {
        const dispatch = jest.fn()
        render(<Calculator _useDispatch={() => dispatch} _useSelector={() => {
        }}/>)

        const button = screen.getByText("/");
        expect(button.tagName).toBe('BUTTON')

        userEvent.click(button);
        expect(dispatch).toHaveBeenCalledWith({type: ON_DIV})
    }
)