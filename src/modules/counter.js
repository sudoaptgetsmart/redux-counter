export const ADD_COUNT = 'counter/ADD_COUNT';
export const ON_ADD = 'counter/ON_ADD';
export const ON_SUB = 'counter/ON_SUB';
export const ON_MUL = 'counter/ON_MUL';
export const ON_DIV = 'counter/ON_DIV'

const initState = {
    count: 0,
    input1: null,
    input2: null,
    total: ''
}

export default function reducer(state = initState, action) {
    switch (action?.type) {
        case ADD_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case ON_ADD:
            return {
                ...state,
                total: state.input1 + state.input2
            }
        case ON_SUB:
            return {
                ...state,
                total: state.input1 - state.input2
            }
        case ON_MUL:
            return {
                ...state,
                total: state.input1 * state.input2
            }
        case ON_DIV:
            return {
                ...state,
                total: state.input1 / state.input2
            }

        default:
            return {
                ...state
            }
    }
}