/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { WelcomeForm } from '../../main-page/components/WelcomeForm';
import { MemoryRouter } from 'react-router-dom';

describe('WelcomeForm', () => {
  beforeEach(() => {
    render(<WelcomeForm />, { wrapper: MemoryRouter });
  });

  test('renders correct text for WelcomeForm component', () => {
    const title = screen.getByText('Express your self with');
    expect(title).toBeInTheDocument();

    const stickersText = screen.getByText('WhatsApp Stickers');
    expect(stickersText).toBeInTheDocument();
  });

  test('renders correct buttons for WelcomeForm component', () => {
    const links = screen.getAllByRole('link');
    const items = [
      { name: 'Funny', url: '/fun' },
      { name: 'Romance', url: '/romance' },
    ];
    links.forEach((link, index) => {
      expect(link).toHaveAttribute('href', items[index].url);
      expect(link).toHaveTextContent(items[index].name);
    });
  });
});
