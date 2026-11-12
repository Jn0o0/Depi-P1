import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement ,reset } from '../redux/counterSlice'

export default function Counter() {
    const count = useSelector(
        (state) => state.counter.count
    )
    const dispatch = useDispatch()

  return (
    <div>
      <p>Count: {count}</p>
      <button className="text-amber-400"onClick={() => dispatch(increment())}>Increment </button>
      <button className="text-amber-800"onClick={() => dispatch(decrement())}>Decrement </button>
      <button className="text-amber-950"onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}
