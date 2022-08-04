import React from 'react'

function Counter() {
  const initialCounterState = 0;
  const [counter, setCounter] = React.useState(initialCounterState);
  
  return (
    <>
        <h1>This is a counter app</h1>
        <div className='counter-value'>{counter}</div>
        <button 
            className='increment-btn'
            onClick={() => setCounter(prevCount => prevCount + 1)}
            >Increment</button>{" "}
        <button 
            className='decrement-btn'
            onClick={() => setCounter(prevCount => prevCount - 1)}
            >Decrement</button>{" "}
        <button 
            className='reset-btn'
            onClick={() => setCounter(initialCounterState)}
            >Reset</button>
    </>
  )
}

export default Counter