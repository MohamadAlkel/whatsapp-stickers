import styled from 'styled-components';

type FormImgTitleProps = {
  position: string;
};

type FormImgSubtitleProps = {
  position: string;
};

export const FormImg = styled.img`
  width: 320px;
  display: block;
  margin: auto;
  height: 380px;
`;

export const FormImgWrapper = styled.div`
  width: 320px;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: center;

  .button-link {
    width: 267px;
    position: absolute;
  }
`;

export const FormImgTitle = styled.p<FormImgTitleProps>`
  font-size: 18px;
  position: absolute;
  top: ${(props) => props.position};

  span {
    font-weight: bold;
  }

  .green {
    color: var(--app-background-color);
  }
`;

export const FormImgSubtitle = styled.p<FormImgSubtitleProps>`
  font-size: 12px;
  position: absolute;
  width: 246px;
  text-align: center;
  top: ${(props) => props.position};

  span {
    font-weight: bold;
    font-size: 12px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 10px;
  position: absolute;
  top: 338px;
`;
