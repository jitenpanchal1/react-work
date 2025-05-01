import React, { useReducer } from 'react'

const init = 0

function setcount(count, action) {
  switch (action.type) {
    case "plus": return count + 1
    case "minus": return count - 1
    case "multi": return count * 2
    default: return init
  }
}

export default function App() {

  const [count, dispatch] = useReducer(setcount, init)
  return (
    <>
      <div>
        <h1>this is my count : {count}</h1>
      </div>
      <div>
        <button
          onClick={() => dispatch({ type: "plus" })}>
          increment +
        </button>
        <button
          onClick={() => { dispatch({ type: "minus" }) }}>
          decrement -
        </button>
        <button
          onClick={() => dispatch({ type: "multi" })}>
          multiple *
        </button>
      </div>
    </>
  )
}
