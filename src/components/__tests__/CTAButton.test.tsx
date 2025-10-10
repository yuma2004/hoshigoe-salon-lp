import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CTAButton from '../CTAButton';
import { CTA_LABELS } from '../../constants/cta';

const mockNavigate = jest.fn();

jest.mock('../../router/RouterProvider', () => {
  const actual = jest.requireActual('../../router/RouterProvider');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('CTAButton', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('navigates to reserve route on click', async () => {
    render(<CTAButton label={CTA_LABELS.primary} />);

    await userEvent.click(screen.getByRole('button', { name: CTA_LABELS.primary }));

    expect(mockNavigate).toHaveBeenCalledWith('/reserve');
  });

  it('respects disabled state', async () => {
    render(<CTAButton label="Disabled CTA" disabled />);

    await userEvent.click(screen.getByRole('button', { name: 'Disabled CTA' }));

    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
