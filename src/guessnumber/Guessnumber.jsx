import React, { useState } from 'react';

const NumberGuessingGame = () => {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [numberOfTries, setNumberOfTries] = useState(0);
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleInputChange = (e) => {
    setGuess(e.target.value);
  };

  const handleGuess = () => {
    const parsedGuess = parseInt(guess);
    if (isNaN(parsedGuess) || parsedGuess < 1 || parsedGuess > 100) {
      setMessage('Please enter a valid number between 1 and 100.');
    } else {
      setNumberOfTries(numberOfTries + 1);
      if (parsedGuess === targetNumber) {
        setMessage(`Congratulations! You guessed the number ${targetNumber} in ${numberOfTries + 1} tries.`);
        setTargetNumber(generateRandomNumber());
        setNumberOfTries(0);
      } else if (parsedGuess < targetNumber) {
        setMessage('Try a higher number.');
      } else {
        setMessage('Try a lower number.');
      }
      setGuess('');
    }
  };

  return (
    <div>
      <h1>Number Guessing Game</h1>
      <p>Guess a number between 1 and 100:</p>
      <input type="number" min="1" max="100" value={guess} onChange={handleInputChange} />
      <button onClick={handleGuess}>Guess</button>
      <p>{message}</p>
    </div>
  );
};

export default NumberGuessingGame;
