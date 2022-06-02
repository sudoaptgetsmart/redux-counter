import reducer, {ADD_COUNT} from "./counter";

test(
    'should init to correct state',
    () => {
        const state = reducer()
        expect(state).toStrictEqual({
            count: 0,
            input1: '',
            input2: '',
            total: ''
        })
    }
)

test(
    'should add 1 to count when ADD_COUNT action is dispatched',
    () => {
        const initState = reducer();
        const state = reducer(initState, {type: ADD_COUNT})
        expect(state).toStrictEqual({
            ...initState,
            count: 1
        })
    }
)