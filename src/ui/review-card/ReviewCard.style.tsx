import styled from "styled-components";

export const ReviewCardWrapper = styled.p`
    margin: auto;
    width: 299px;
    height: 84px;

    background: var(--secondary-color);
    box-shadow: 0px 3px 6px #00000029;
    display: flex;
    gap: 12px;
    padding: 17px 9px 20px 16px;
    box-sizing: border-box;
`;


export const CardPhoto = styled.img`
    width: 47px;
    height: 47px;
    border-radius: 50%;
    border: 4px solid var(--white);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    object-fit: cover;
    object-position: center center;
`;

export const Star = styled.span`
    display: inline-block;
    width: 10px;
    height:10px;
    margin: auto 4px;
    position: relative;
    top: -4px;

    &::before {
        content: "★";
        color: #FDEF86;
        font-size: 11px;
    }
`;

export const Comment = styled.p`
    font-size: 12px;
    color: var(--white);
`;

export const Username = styled.p`
    font-size: 12px;
    line-height: 10px;
    font-weight: bold;
    color: var(--white);
`;