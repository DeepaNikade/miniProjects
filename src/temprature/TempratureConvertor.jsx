import React, { useState } from 'react';

const TemperatureConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [unit, setUnit] = useState('celsius'); // Default unit is Celsius

  const convertTemperature = () => {
    if (unit === 'celsius') {
      const fahrenheit = (parseFloat(inputValue) * 9) / 5 + 32;
      setOutputValue(`${fahrenheit.toFixed(2)} °F`);
    } else {
      const celsius = ((parseFloat(inputValue) - 32) * 5) / 9;
      setOutputValue(`${celsius.toFixed(2)} °C`);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  return (
    <div>
      <label>
        Temperature:
        <input type="number" value={inputValue} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Unit:
        <select value={unit} onChange={handleUnitChange}>
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
        </select>
      </label>
      <br />
      <button onClick={convertTemperature}>Convert</button>
      <p>Converted Temperature: {outputValue}</p>
    </div>
  );
};

export default TemperatureConverter;
