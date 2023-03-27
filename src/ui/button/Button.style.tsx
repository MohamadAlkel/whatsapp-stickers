import styled from "styled-components";

type ButtonWrapperProps = {
    position: string;
}

  
export const ButtonWrapper = styled.button<ButtonWrapperProps>`
    cursor: pointer;
    box-shadow: 0px 3px 6px #00000029;
    border: 4px solid var(--white);
    width: 267px;
    height: 46px;
    box-sizing: border-box;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent linear-gradient(180deg, #FAAF42 0%, #FAAD41 13%, #F9A741 21%, #F79D40 27%, #F68E3F 33%, #F47C3D 39%, #F1633A 44%, #F05339 46%) 0% 0% no-repeat padding-box;
    text-shadow: 0px 3px 6px #b40606c9;
    color: var(--white);
    font-weight: bold;
    font-size: 22px;
    position: absolute;
    top: 228px;
    top: ${(props) => props.position };
`;

export const BlurFirst = styled.div`
    width: 256px;
    height: 34px;
    border-radius: 100px;
    position: absolute;
    background: transparent linear-gradient(166deg, #FFFFFF 0%, #FFFFFF00 25%) 0% 0% no-repeat padding-box;
`;

export const BlurSecond = styled.div`
    width: 256px;
    height: 34px;
    border-radius: 100px;
    position: absolute;
    background: transparent linear-gradient(347deg,#FFFFFF 0%,#FFFFFF00 24%) 0% 0% no-repeat padding-box;
`;