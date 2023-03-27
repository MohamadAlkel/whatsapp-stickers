import React, { memo } from 'react';
import { BarImagesWrapper } from './BarImages.style';
import funImages from '../../assets/fun-image.png';

const BarImages = () => {
  return <BarImagesWrapper src={funImages} alt="funny images" />;
};

export default memo(BarImages);
