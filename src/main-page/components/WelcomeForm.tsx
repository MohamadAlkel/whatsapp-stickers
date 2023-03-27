
import React from "react";
import { FormImg, FormImgWrapper, FormImgTitle, FormImgSubtitle } from "./MainPage.style";
import Button from "../../ui/button/Button";
import welcomeForm from "../../assets/welcome-form.png";

export const WelcomeForm = ()=>{
    return (
       <FormImgWrapper>
        <FormImg src={welcomeForm}/>
        <FormImgTitle position="157px">
          Express your self with <br/>
          <span>
            New <span className="green"> WhatsApp Stickers</span>
          </span> 
        </FormImgTitle>
        <FormImgSubtitle position="207px">
          Choose your sticker type:
        </FormImgSubtitle>
        <Button position="228px" text="Funny" moveTo="fun"/>
        <Button position="284px" text="Romance" moveTo="romance"/>
      </FormImgWrapper>
    )
}
