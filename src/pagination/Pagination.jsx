import React, { useState } from 'react';

const Stack = () => {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const MAX_SIZE = 5;

  const push = () => {
    if (stack.length >= MAX_SIZE) {
      alert('Stack is full!');
      return;
    }
    setStack([...stack, inputValue]);
    setInputValue('');
  };

  const pop = () => {
    if (stack.length === 0) {
      alert('Stack is empty!');
      return;
    }
    const newStack = [...stack];
    newStack.pop();
    setStack(newStack);
  };

  const peek = () => {
    if (stack.length === 0) {
      alert('Stack is empty!');
      return;
    }
    alert(`Top element of the stack: ${stack[stack.length - 1]}`);
  };

  const isFull = () => stack.length >= MAX_SIZE;

  const isEmpty = () => stack.length === 0;

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={push} disabled={isFull()}>Push</button>
      <button onClick={pop} disabled={isEmpty()}>Pop</button>
      <button onClick={peek} disabled={isEmpty()}>Peek</button>
      <button  onClick={() => alert(isFull() ? 'Stack is full' : 'Stack is not full')}>isFull</button>
      <button  onClick={() => alert(isEmpty() ? 'Stack is empty' : 'Stack is not empty')}>isEmpty</button>
      <p>Stack: {stack.join(', ')}</p>
    </div>
  );
};

export default Stack;
