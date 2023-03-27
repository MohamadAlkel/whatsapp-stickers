import React, { useState } from 'react';
import { PinInputWrapper } from './PinInput.style';

const PinInput = ({ onPinChange }) => {
  const [pin, setPin] = useState(['', '', '', '']);
  const inputRefs = [];

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    if (index === 3 && value.length > 1) return;
    setPin((prevPin) => {
      const newPin = [...prevPin];
      newPin[index] = value;
      onPinChange(newPin);
      return newPin;
    });

    if (index < 3 && value) {
      inputRefs[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !pin[index]) {
      inputRefs[index - 1].focus();
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData('text/plain');
    const pastedPin = pastedData.split('').slice(0, 4);
    setPin(pastedPin.concat(Array(4 - pastedPin.length).fill('')));
    onPinChange(pastedPin);
    inputRefs[0].focus();
  };

  return (
    <PinInputWrapper onPaste={handlePaste}>
      {pin.map((value, index) => (
        <input
          key={index}
          type="text"
          value={value}
          onChange={(e) => handleInputChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          ref={(ref) => (inputRefs[index] = ref)}
        />
      ))}
    </PinInputWrapper>
  );
};

export default PinInput;
