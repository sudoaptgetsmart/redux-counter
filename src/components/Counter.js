import {useDispatch, useSelector} from "react-redux";
import {ADD_COUNT} from "../modules/counter";

export function Counter() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count);

    function onAddClick() {
        dispatch({type: ADD_COUNT})
    }

    return <>
        <div>Count: {count}</div>
        <button onClick={onAddClick}>Add</button>
    </>
}