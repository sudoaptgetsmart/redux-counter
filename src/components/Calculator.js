import {useDispatch,useSelector} from "react-redux";
import {ON_ADD, ON_SUB, ON_MUL, ON_DIV, ON_SET_INPUT1, ON_SET_INPUT2} from "../modules/counter";

export function Calculator({_useDispatch = useDispatch, _useSelector = useSelector}) {
    const dispatch = _useDispatch();
    const input1 = _useSelector(state => state.input1)
    const input2 = _useSelector(state => state.input2)
    const total = _useSelector(state => state.total)
//TODO explain onInput1Change(event) & onInput2Change(event)
    function onInput1Change(event) {
        dispatch({type: ON_SET_INPUT1, value: event.target.value})
    }

    function onInput2Change(event) {
        dispatch({type: ON_SET_INPUT2, value: event.target.value})
    }


//TODO explain onChange={onInput1Change} value={input1}
    return <>
        <div><input onChange={onInput1Change} value={input1} type={'number'} placeholder={'Some numbers'}/></div>
        <div><input onChange={onInput2Change} value={input2} type={'number'} placeholder={'Some more numbers'}/></div>
        <button onClick={() => dispatch({type: ON_ADD})} type={'button'}>+</button>
        <button onClick={() => dispatch({type: ON_SUB})} type={'button'}>-</button>
        <button onClick={() => dispatch({type: ON_MUL})} type={'button'}>*</button>
        <button onClick={() => dispatch({type: ON_DIV})} type={'button'}>/</button>
        <div>Total: {total}</div>
    </>
}