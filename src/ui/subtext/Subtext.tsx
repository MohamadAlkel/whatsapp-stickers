import React, { memo } from 'react';
import { SubtextWrapper } from './Subtext.style';

type SubtextProps = {
  text: string;
};

const Subtext = ({ text }: SubtextProps) => {
  return <SubtextWrapper>{text}</SubtextWrapper>;
};

export default memo(Subtext);
