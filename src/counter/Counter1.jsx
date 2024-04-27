import React, { useState } from 'react';

const Counter1 = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    // Increment count by the value entered in the input field
    setCount(prev => prev + parseInt(inputValue));
  };

  const handleLess = () => {
    setCount(prev => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleAdd}>+</button>
      <p>count: {count}</p>
      <button onClick={handleLess}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter1;
