import React, { useState, useEffect } from 'react';
import './Counter.css';

const Counter = () => {
  // hooks
  // - state
  const [count, setCount] = useState(0);

  // - side effects
  useEffect(() => {
    return () => {};
  }, [count]);

  // Functions
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className='counter-div'>
      <h2>Score: {count}</h2>
      <button className='btns btn-green' onClick={increment}>
        +
      </button>
      <button className='btns btn-white' onClick={decrement}>
        -
      </button>
    </div>
  );
};

export default Counter;
