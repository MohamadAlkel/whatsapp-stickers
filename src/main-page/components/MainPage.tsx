import React, { FC, ReactElement } from 'react';
import SubText from '../../ui/subtext/Subtext';
import ReviewCard from '../../ui/review-card/ReviewCard';
import BarImages from '../../ui/bar-images/BarImages';
import { FunnyRomanceForm } from './FunnyRomanceForm';
import { WelcomeForm } from './WelcomeForm';
import { PinForm } from './PinForm';
import { Thanks } from './Thanks';
import { MainPageProps } from '../helper/typeHelper';

const MainPage: FC<MainPageProps> = ({
  showHome,
  showFun,
  showRomance,
  showPin,
  showThanks,
}: MainPageProps): ReactElement<void> => {
  if (showThanks) return <Thanks />;

  return (
    <>
      {showHome && <WelcomeForm />}
      {showFun && <FunnyRomanceForm formType="funny" />}
      {showRomance && <FunnyRomanceForm formType="romance" />}
      {showPin && <PinForm />}

      <BarImages />
      <ReviewCard
        comment="Its good! There are many cool stickers!"
        username="- Fikri Aziz"
      />
      <SubText text="This is a subscription service. This game is compatible with most mobile phones with color screen. Supported mobile brands include Nokia, iPhone, Sony, Samsung, Motorola, LG, HTC, Xiaomi and more. No subscription fees will be charged. Maxis: RM4 per message, maximum 7 times per month, max of RM30(excl. GST) per month. Normal mobile operator network charges apply. GPRS / 3G access needs to be enabled to download the content. Data charges are billed separately. Some phones do not support GPRS / 3G. Please seek parental or guardian approval if you are 18 years old or below. Helpdesk 03-74910666 (9am-5pm Mon-Fri). To cancel send STOP ALARM to 36099. Buz2mobile operates according to the Malaysian code of conduct for SMS services. Powered by Moblife. TV Sdn Bhd." />
    </>
  );
};

export default MainPage;
