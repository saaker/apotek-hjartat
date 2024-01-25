import React from 'react';
import { render, screen } from '@testing-library/react';
import Prescriptions from './Prescriptions';

describe('<Prescriptions />', () => {
  it('shall render component ', async () => {
    render(<Prescriptions handlePrescriptionClick={() => {}} />);
    // Verify table headers are rendered
    expect(await screen.findByText('ProductName')).toBeVisible();
    expect(screen.getByText('Preamble')).toBeVisible();
    expect(screen.getByText('Withdrawals')).toBeVisible();
    expect(screen.getByText('ValidityDate')).toBeVisible();
    expect(screen.getByText('isNew')).toBeVisible();

    // verify actual data is displayed
    expect(screen.getByText('Pelgraz')).toBeVisible();
    expect(
      screen.getByText(
        'Pegfilgrastim, Injektionsvätska, lösning i förfylld spruta, 6 mg',
        { exact: false }
      )
    ).toBeVisible();
    expect(screen.getAllByText('19/20')[0]).toBeVisible();
    expect(screen.getAllByText('2022-05-03')[0]).toBeVisible();
  });
});
