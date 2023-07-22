import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const App = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)

  const onIncrease = ()=>{
    dispatch({type : "increment"})
  }
  const onDecrease = ()=>{
    dispatch({type : "decrement"})
  }
  return <div>
      {counter}
      <br/>
      <button onClick={onIncrease}>+</button>
      <br/>
      <button onClick={onDecrease}>-</button>
      <hr/>
    </div>
  
}
export default App
