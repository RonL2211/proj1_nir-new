// src/App.js
import React, { useState } from 'react';
import Counter from './Counter';
import './App.css';

function App() {
  const [counter] = useState(new Counter());
  const [inputValue, setInputValue] = useState('');
  const [displayNumbers, setDisplayNumbers] = useState([]);

  const handleStart = () => {
    counter.initialize(inputValue);
    setInputValue(counter.count);
  };

  const handleIncrement = () => {
    counter.increment();
    setInputValue(counter.count);
  };

  const handleGo = () => {
    const numbers = counter.go();
    setDisplayNumbers(numbers);
  };

  return (
    <div className="App">
      <h1>Counter Application</h1>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter initial value"
      />
      <div className="buttons">
        <button onClick={handleStart}>Start</button>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleGo}>Go</button>
      </div>
      {displayNumbers.length > 0 && (
        <p>{displayNumbers.join(', ')}</p>
      )}
    </div>
  );
}

export default App;