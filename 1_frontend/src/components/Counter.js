import React, { useState, useEffect, useRef } from 'react';
import './Counter.css';

const Counter = () => {
  // hooks
  // - state
  const [count, setCount] = useState(0);

  // - side effects
  useEffect(() => {
    return () => {};
  }, []);

  // Functions
  let counted = useRef(false);

  const increment = () => {
    if (!counted.current) {
      setCount(count + 1);

      counted.current = true;
    }

    return;
  };

  const decrement = () => {
    if (!counted.current) {
      setCount(count - 1);

      counted.current = true;
    }

    return;
  };

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
