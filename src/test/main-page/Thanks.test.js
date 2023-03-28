/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Thanks } from '../../main-page/components/Thanks';
import '@testing-library/jest-dom';

describe('<Thanks />', () => {
  test('should render Thanks component correctly by matching snapshot', () => {
    const tree = renderer.create(<Thanks />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('should render Thanks component with correct title and subtitle ', () => {
    const { getByText } = render(
      <>
        <Thanks />
      </>
    );

    expect(getByText('Thank You!')).toBeInTheDocument();
    expect(
      getByText(
        'Now you can express your emotions with the amazing stickers. Have fun!'
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        'This is a subscription service. This game is compatible with most mobile phones with color screen. Supported mobile brands include Nokia, iPhone, Sony, Samsung, Motorola, LG, HTC, Xiaomi and more. No subscription fees will be charged. Maxis: RM4 per message, maximum 7 times per month, max of RM30(excl. GST) per month. Normal mobile operator network charges apply. GPRS / 3G access needs to be enabled to download the content. Data charges are billed separately. Some phones do not support GPRS / 3G. Please seek parental or guardian approval if you are 18 years old or below. Helpdesk 03-74910666 (9am-5pm Mon-Fri). To cancel send STOP ALARM to 36099. Buz2mobile operates according to the Malaysian code of conduct for SMS services. Powered by Moblife. TV Sdn Bhd.'
      )
    ).toBeInTheDocument();
  });
});
