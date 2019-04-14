import React, { useReducer } from 'react'

// const [state, dispatch] = useReducer(reducer, initialArg, init)

// Example 1. No initial state

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }

    default:
      throw new Error()
  }
}

function Counter() {
  const initialState = { count: 0 }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <h3>Count: {state.count}</h3>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}> - </button>
    </>
  )
}

export { Counter }
