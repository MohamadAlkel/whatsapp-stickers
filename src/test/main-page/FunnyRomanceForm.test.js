/**
 * @jest-environment jsdom
 */

import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { FunnyRomanceForm } from '../../main-page/components/FunnyRomanceForm';
import { Provider } from 'react-redux';
import { createMockStore } from 'redux-test-utils';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

describe('<FunnyRomanceForm />', () => {
  const mockStore = {
    userState: {
      isFetching: true,
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
        <FunnyRomanceForm {...baseProps} {...props} />
      </Provider>,
      { wrapper: MemoryRouter }
    );

  test('renders correct text for FunnyRomanceForm component for fun route', () => {
    component();
    const title = screen.getByText('You’ve got good sense of humour');
    expect(title).toBeInTheDocument();

    const stickersText = screen.getByText(
      'Enter your number to get all the sticker packs.'
    );
    expect(stickersText).toBeInTheDocument();
  });

  test('renders correct text for FunnyRomanceForm component for romance route', () => {
    component({ formType: 'romance' });
    const title = screen.getByText('You’re so romantics');
    expect(title).toBeInTheDocument();

    const stickersText = screen.getByText(
      'Enter your number to get all the sticker packs.'
    );
    expect(stickersText).toBeInTheDocument();
  });

  test('renders the input with the correct value', () => {
    component();
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: '+1234567890' } });

    expect(input).toHaveValue('+1234567890');

    const button = screen.getByRole('button');

    fireEvent.click(button);

    const title = screen.getByText("It's not valid Malaysian number");
    expect(title).toBeInTheDocument();
  });
});
