import React, { useState } from 'react';

const EventHandlingComponent: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <p>Click Count: {clickCount}</p>
      <button onClick={handleButtonClick}>Click me</button>
      <input  role="textbox" type="text" value={inputValue} onChange={handleInputChange} />
      <p>Input Value: {inputValue}</p>
    </div>
  );
};

export default EventHandlingComponent;
