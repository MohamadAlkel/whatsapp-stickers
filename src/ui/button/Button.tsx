
import React from "react";
import {ButtonWrapper, BlurFirst, BlurSecond} from "./Button.style"
import { Link } from "react-router-dom";

const Button = ({text, position, moveTo, isDisabled = false, onClick= () => null })=>{
    return (
        <Link to={isDisabled ? '#' :`/${moveTo}`}  className="button-link">
            <ButtonWrapper onClick={onClick} position={position}>
                <BlurFirst/>
                <BlurSecond/>
                {text}
            </ButtonWrapper>
        </Link>
    )
}

export default Button;