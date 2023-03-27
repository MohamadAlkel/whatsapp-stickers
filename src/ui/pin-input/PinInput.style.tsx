import styled from 'styled-components';

export const PinInputWrapper = styled.div`
  position: absolute;
  width: 267px;
  display: flex;
  justify-content: center;
  top: 225px;
  gap: 8px;

  input {
    width: 45px;
    height: 45px;
    box-sizing: border-box;

    background: var(--white);
    border: 1px solid #707070;
    border-radius: 8px;
    text-align: center;
  }
`;
