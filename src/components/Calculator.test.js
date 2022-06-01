import {screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test(
    'should show a button with "+"',
    () => {
        const button = screen.getByText("+");
        expect(button.tagName).toBe('BUTTON')
    }
)

test(
    'should show a button with "-"',
    () => {
        const button = screen.getByText("-");
        expect(button.tagName).toBe('BUTTON')
    }
)

test(
    'should show a button with"*"',
    () => {
        const button = screen.getByText("*");
        expect(button.tagName).toBe('BUTTON')
    }
)

test(
    'should show a button with "/"',
    () => {
        const button = screen.getByText("/");
        expect(button.tagName).toBe('BUTTON')
    }
)