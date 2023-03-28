/**
 * @jest-environment jsdom
 */

import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { PinForm } from '../../main-page/components/PinForm';
import { Provider } from 'react-redux';
import { createMockStore } from 'redux-test-utils';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

describe('<PinForm />', () => {
  const mockStore = {
    userState: {
      isFetchingVerifyPin: true,
    },
  };

  const baseProps = {
    formType: 'funny',
    fetchInfo: (_) => new Promise((_) => _),
  };

  const store = createMockStore(mockStore);

  const component = (props) =>
    render(
      <Provider store={store}>
        <PinForm {...baseProps} {...props} />
      </Provider>,
      { wrapper: MemoryRouter }
    );

  test('renders correct text for PinForm component', () => {
    component();
    const title = screen.getByText('The sticker packs is ready!');
    expect(title).toBeInTheDocument();

    const stickersText = screen.getByText('4 digit code');
    expect(stickersText).toBeInTheDocument();
  });

  test('renders the input with the correct value', () => {
    component();

    const inputs = screen.getAllByRole('textbox');

    inputs.forEach((input) => {
      fireEvent.change(input, { target: { value: '1' } });
      expect(input).toHaveValue('1');
    });
  });
});
