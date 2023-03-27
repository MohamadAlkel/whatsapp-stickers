import React, { useState } from 'react';
import {
  FormImg,
  FormImgWrapper,
  FormImgTitle,
  FormImgSubtitle,
  ErrorMessage,
} from './MainPage.style';
import Button from '../../ui/button/Button';
import pinForm from '../../assets/pin-form.png';
import { connect, ConnectedComponent } from 'react-redux';
import PinInput from '../../ui/pin-input/PinInput';
import { verifyPin } from '../redux/action';
import { useNavigate } from 'react-router-dom';
import { PinFormStateProps } from '../helper/typeHelper';

const mapStateToProps = (state): PinFormStateProps => ({
  userId: state?.userState?.userId,
  isFetchingVerifyPin: state?.userState?.isFetchingVerifyPin,
});

const mapDispatchToProps = {
  verifyPin,
};

export const PinForm: ConnectedComponent<any, any> = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ isFetchingVerifyPin, verifyPin, userId }) => {
  const [errorMsg, setErrorMsg] = useState('');
  const [pin, setPin] = useState([]);
  const navigate = useNavigate();

  const onPinChange = (newStatus) => {
    setPin(newStatus);
  };

  const onClickConfirm = () => {
    if (isFetchingVerifyPin) return;

    // call /verify-pin/ API to verify pin number
    verifyPin(pin.join(''), userId)
      .then((data) => {
        if (data.value.success) {
          setErrorMsg('');
          navigate('/thanks');
        } else {
          setErrorMsg('invalid pin number, please try again');
        }
      })
      .catch(() => {
        setErrorMsg(
          'Oops! something went wrong, refresh the page, or try later.'
        );
      });
  };

  return (
    <FormImgWrapper>
      <FormImg src={pinForm} />
      <FormImgTitle position="148px">The sticker packs is ready!</FormImgTitle>
      <FormImgSubtitle position="179px">
        We’ve sent you a <span>4 digit code </span>
        <br />
        please enter it below to confirm subscription!
      </FormImgSubtitle>
      <PinInput onPinChange={onPinChange} />
      <Button
        onClick={onClickConfirm}
        position="284px"
        isDisabled={true}
        text="Confirm"
        moveTo="thanks"
      />
      {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
    </FormImgWrapper>
  );
});
