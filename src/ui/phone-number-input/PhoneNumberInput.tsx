import React from 'react';
import {
  PhoneNumberInputWrapper,
  PhoneIconWrapper,
} from './PhoneNumberInput.style';
import phoneIcons from '../../assets/icons/phone-icon.png';

const PhoneNumberInput = ({ onChange, value }) => {
  return (
    <PhoneNumberInputWrapper>
      <PhoneIconWrapper src={phoneIcons} />
      <input type="tel" value={value} onChange={onChange} />
    </PhoneNumberInputWrapper>
  );
};

export default PhoneNumberInput;
