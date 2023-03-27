import React, { useState } from 'react';
import {
  FormImg,
  FormImgWrapper,
  FormImgTitle,
  FormImgSubtitle,
  ErrorMessage,
} from './MainPage.style';
import Button from '../../ui/button/Button';
import funForm from '../../assets/fun-form.png';
import romanceForm from '../../assets/romance-form.png';
import { connect, ConnectedComponent } from 'react-redux';
import PhoneNumberInput from '../../ui/phone-number-input/PhoneNumberInput';
import { MalaysianPhoneValid, generateUserId } from '../helper/utils';
import { triggerPin, updateUserId } from '../redux/action';
import { useNavigate } from 'react-router-dom';
import { FunnyRomanceFormProps } from '../helper/typeHelper';

const mapStateToProps = (state): FunnyRomanceFormProps => ({
  isFetchingTriggerPin: state?.userState?.isFetchingTriggerPin,
});

const mapDispatchToProps = {
  triggerPin,
  updateUserId,
};

export const FunnyRomanceForm: ConnectedComponent<any, any> = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ triggerPin, isFetchingTriggerPin, updateUserId, formType }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const isValidNumber = MalaysianPhoneValid(phoneNumber);
  const navigate = useNavigate();
  const isFunny = formType === 'funny';

  const PhoneNumberOnChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const onClickSubscribe = () => {
    const userId = generateUserId();
    if (isValidNumber) {
      // To prevent multiple api calls
      if (isFetchingTriggerPin) return;

      // call /trigger-pin/ API to generate pin number
      triggerPin(phoneNumber, userId)
        .then((data) => {
          if (data.value.success) {
            setErrorMsg('');
            updateUserId(userId);
            navigate('/pin');
          } else {
            setErrorMsg('invalid phone number, please try another number');
          }
        })
        .catch(() => {
          setErrorMsg(
            'Oops! something went wrong, refresh the page, or try later.'
          );
        });
    } else {
      setErrorMsg("It's not valid Malaysian number");
    }
  };

  return (
    <FormImgWrapper>
      <FormImg src={isFunny ? funForm : romanceForm} />
      <FormImgTitle position="183px">
        {isFunny ? 'You’ve got good sense of humour' : 'You’re so romantics'}
      </FormImgTitle>
      <FormImgSubtitle position="207px">
        Enter your number to get all the sticker packs.
      </FormImgSubtitle>
      <PhoneNumberInput value={phoneNumber} onChange={PhoneNumberOnChange} />
      <Button
        onClick={onClickSubscribe}
        position="284px"
        isDisabled={true}
        text="Submit to Subscribe"
        moveTo="pin"
      />
      {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
    </FormImgWrapper>
  );
});
