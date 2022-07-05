import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount
} from './counterSlice'

export default function Counter() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button> 
      <p><span>{count}</span></p>
      <button onClick={() => dispatch(decrement())}>-</button>
      <p>
        <button onClick={() => {
          dispatch(incrementAsync(2)) 
        }}>async</button>
      </p>
    </>
  )
}