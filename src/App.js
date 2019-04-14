import React, { useState, useReducer } from 'react'

function evaluateReducer(state, action) {
  switch (action.operator) {
    case 'ADD':
      return parseFloat(action.leftSide) + parseFloat(action.rightSide)

    case 'MULTIPLY':
      return parseFloat(action.leftSide) * parseFloat(action.rightSide)

    case 'DIVIDE':
      return parseFloat(action.leftSide) / parseFloat(action.rightSide)

    case 'SUBTRACT':
      return parseFloat(action.leftSide) - parseFloat(action.rightSide)
  }
}

export default function App() {
  const [operator, setOperator] = useState('')
  const [leftSide, setLeftSide] = useState('')
  const [rightSide, setRightSide] = useState('')

  let initialState = 0

  const [evaluate, dispatchEvaluate] = useReducer(evaluateReducer, initialState)

  const handleValue = value => {
    if (!operator) {
      setLeftSide(leftSide.concat(value))
    }

    if (operator) {
      setRightSide(rightSide.concat(value))
    }
  }

  const handleOperator = operator => {
    if (!leftSide) {
      console.log('no left side')
      return
    }

    if (leftSide && !rightSide) {
      setOperator(operator)
    }

    if (leftSide && rightSide) {
      dispatchEvaluate({ leftSide, operator, rightSide })
      clear()
    }
  }

  const clear = () => {
    setLeftSide('')
    setRightSide('')
    setOperator('')
    //todo reset initial state
  }

  return (
    <div>
      <h5>Left Side: {leftSide} </h5>
      <h5>Operator: {operator}</h5>
      <h5>Right Side: {rightSide}</h5>
      <h5>Evaluate: {evaluate}</h5>

      <input placeholder={0} id="display" />
      <div>
        <button id="clear" onClick={clear}>
          AC
        </button>

        <button id="divide" onClick={() => handleOperator('DIVIDE')}>
          ÷
        </button>
      </div>
      <div>
        <button id="seven" onClick={() => handleValue('7')}>
          7
        </button>
        <button id="eight" onClick={() => handleValue('8')}>
          8
        </button>
        <button id="nine" onClick={() => handleValue('9')}>
          9
        </button>
        <button id="multiply" onClick={() => handleOperator('MULTIPLY')}>
          ×
        </button>
      </div>
      <div>
        <button id="four" onClick={() => handleValue('4')}>
          4
        </button>
        <button id="five" onClick={() => handleValue('5')}>
          5
        </button>
        <button id="six" onClick={() => handleValue('6')}>
          6
        </button>

        <button id="subtract" onClick={() => handleOperator('SUBTRACT')}>
          −
        </button>
      </div>
      <div>
        <button id="one" onClick={() => handleValue('1')}>
          1
        </button>
        <button id="two" onClick={() => handleValue('2')}>
          2
        </button>
        <button id="three" onClick={() => handleValue('3')}>
          3
        </button>
        <button id="add" onClick={() => handleOperator('ADD')}>
          +
        </button>
      </div>
      <div>
        <button id="0" onClick={() => handleValue('0')}>
          0
        </button>
        <button id="decimal" onClick={() => handleValue('.')}>
          .
        </button>
        <button
          id="equals"
          onClick={() => {
            dispatchEvaluate({ leftSide, operator, rightSide })
            clear()
          }}
        >
          {' '}
          =
        </button>
      </div>
    </div>
  )
}
