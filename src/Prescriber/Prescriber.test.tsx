import React from 'react';
import { render, screen } from '@testing-library/react';
import Prescriber from './Prescriber';

const mockPrescriber = {
  name: 'Sebastian MrDoctorsson',
  profession: 'Doctor',
  workplace: 'The hospital',
  phoneNumber: 2345678910,
};

describe('<Prescriber />', () => {
  it('shall render component ', async () => {
    render(
      <Prescriber prescriber={mockPrescriber} setPrescriber={jest.fn()} />
    );
    // Verify header is rendered
    expect(await screen.findByText('Prescriber:')).toBeVisible();

    // verify mock data is  displayed
    expect(screen.getByText('Sebastian MrDoctorsson (Doctor)')).toBeVisible();
    expect(screen.getByText('The hospital')).toBeVisible();
    expect(screen.getByText('# 2345678910')).toBeVisible();
  });
});
