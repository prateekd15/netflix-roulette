import React from 'react';
import { render, fireEvent, waitFor, createPortal } from '@testing-library/react';
import MenuButton from './MenuButton';

describe('MenuButton Component', () => {
  let component;
  const movieName = 'Test Movie';

  const setUp = () => {
    const { container, getByText } = render(<MenuButton movieName={movieName} />);
    return { container, getByText };
  };

  beforeEach(() => {
    component = setUp();
  });

  it('renders the menu button correctly', () => {
    const { getByText } = component;
    expect(getByText('Edit')).toBeTruthy();
    expect(getByText('Delete')).toBeTruthy();
  });
});
