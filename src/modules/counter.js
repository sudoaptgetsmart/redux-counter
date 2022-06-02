export const ADD_COUNT = 'counter/ADD_COUNT';
export const ON_ADD = 'counter/ON_ADD';
export const ON_SUB = 'counter/ON_SUB';
export const ON_MUL = 'counter/ON_MUL';
export const ON_DIV = 'counter/ON_DIV';
export const ON_SET_INPUT1 = 'counter/ON_SET_INPUT1';
export const ON_SET_INPUT2 = 'counter/ON_SET_INPUT2';

const initState = {
    count: 0,
    input1: '',
    input2: '',
    total: ''
}

export default function reducer(state = initState, action) {
    switch (action?.type) {
        case ADD_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
// The parseFloat() function parses an argument (converting it to a string first if needed)
// and returns a floating point number.
        case ON_ADD:
            return {
                ...state,
                total: parseFloat(state.input1) + parseFloat(state.input2)
            }
        case ON_SUB:
            return {
                ...state,
                total: parseFloat(state.input1) - parseFloat(state.input2)
            }
        case ON_MUL:
            return {
                ...state,
                total: parseFloat(state.input1) * parseFloat(state.input2)
            }
        case ON_DIV:
            return {
                ...state,
                total: parseFloat(state.input1) / parseFloat(state.input2)
            }
//TODO explain ON_SET_INPUT1/2
        case ON_SET_INPUT1:
            const num1 = Number.parseFloat(action.value)
            return {
                ...state,
                input1: action.value
            }

        case ON_SET_INPUT2:
            return {
                ...state,
                input2: action.value
            }

        default:
            return {
                ...state
            }
    }
}