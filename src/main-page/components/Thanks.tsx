import React from "react";
import { FormImg, FormImgWrapper, FormImgTitle, FormImgSubtitle } from "./MainPage.style";
import ThanksImg from "../../assets/thanks.png";
import SubText from "../../ui/subtext/Subtext"

export const Thanks = ()=>{
    return (
        <>
      <FormImgWrapper>
        <FormImg src={ThanksImg}/>
        <FormImgTitle position="222px">
            Thank You!
        </FormImgTitle>
        <FormImgSubtitle position="252px">
            Now you can express your emotions with the amazing stickers. Have fun! 
        </FormImgSubtitle>
      </FormImgWrapper>
    <SubText 
        text="This is a subscription service. This game is compatible with most mobile phones with color screen. Supported mobile brands include Nokia, iPhone, Sony, Samsung, Motorola, LG, HTC, Xiaomi and more. No subscription fees will be charged. Maxis: RM4 per message, maximum 7 times per month, max of RM30(excl. GST) per month. Normal mobile operator network charges apply. GPRS / 3G access needs to be enabled to download the content. Data charges are billed separately. Some phones do not support GPRS / 3G. Please seek parental or guardian approval if you are 18 years old or below. Helpdesk 03-74910666 (9am-5pm Mon-Fri). To cancel send STOP ALARM to 36099. Buz2mobile operates according to the Malaysian code of conduct for SMS services. Powered by Moblife. TV Sdn Bhd."
    />
   </>
    )
  }