import React from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('<App />', () => {
  it('shall render component ', async () => {
    render(<App />);

    // Verify Prescriptions table headers are rendered
    expect(await screen.findByText('ProductName')).toBeVisible();
    expect(screen.getByText('Preamble')).toBeVisible();
    expect(screen.getByText('Withdrawals')).toBeVisible();
    expect(screen.getByText('ValidityDate')).toBeVisible();
    expect(screen.getByText('isNew')).toBeVisible();

    const bravaTejpElement = screen.getByText('Brava Tejp');
    act(() => userEvent.click(bravaTejpElement));

    // Verify Prescriber header is rendered
    expect(await screen.findByText('Prescriber:')).toBeVisible();

    // Verify Prescriber data is rendered
    expect(screen.getByText('Prescriber:')).toBeVisible();
    expect(screen.getByText('Lars Läkarsson (Läkare)')).toBeVisible();
    expect(screen.getByText('Hjärtats VC')).toBeVisible();
    expect(screen.getByText('# 081234567')).toBeVisible();
  });
});
