import {useDispatch,useSelector} from "react-redux";
import {ON_ADD, ON_SUB, ON_MUL, ON_DIV} from "../modules/counter";

export function Calculator({_useDispatch = useDispatch, _useSelector = useSelector}) {
    const dispatch = _useDispatch();
    const input1 = _useSelector(state => state.input1)
    const input2 = _useSelector(state => state.input2)
    const total = _useSelector(state => state.total)



    return <>
        <div><input type={'number'} placeholder={'Some numbers'}/></div>
        <div><input type={'number'} placeholder={'Some more numbers'}/></div>
        <button onClick={() => dispatch({type: ON_ADD})} type={'button'}>+</button>
        <button onClick={() => dispatch({type: ON_SUB})} type={'button'}>-</button>
        <button onClick={() => dispatch({type: ON_MUL})} type={'button'}>*</button>
        <button onClick={() => dispatch({type: ON_DIV})} type={'button'}>/</button>
        <div>Total: {total}</div>
    </>
}