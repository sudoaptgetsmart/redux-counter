export const ADD_COUNT = 'counter/ADD_COUNT';

const initState = {
    count: 0
}

export default function reducer(state = initState, action) {
    switch (action?.type) {
        case ADD_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return {
                ...state
            }
    }
}