import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MovieForm from './MovieForm';
import Dialog from '../Dialog/Dialog';

describe('MovieForm Component', () => {
  let component;
  const mockOnSubmit = jest.fn();
  const mockOnClose = jest.fn();
  const portalNode = document.createElement('div');

  const setUp = () => {
    const { container, getByText } = render(
      <MovieForm
        onSubmit={mockOnSubmit}
        onClose={mockOnClose}
        portalNode={portalNode}
      />
    );
    return { container, getByText };
  };

  beforeEach(() => {
    component = setUp();
  });

  it('renders the MovieForm correctly', () => {
    const { getByText } = component;
    expect(getByText('Add Movie')).toBeTruthy(); // Assuming default title is "Add Movie"
    expect(getByText('Title')).toBeTruthy();
    expect(getByText('Release Year')).toBeTruthy();
    expect(getByText('Movie URL')).toBeTruthy();
    expect(getByText('Rating')).toBeTruthy();
    expect(getByText('Genre')).toBeTruthy();
    expect(getByText('Duration')).toBeTruthy();
    expect(getByText('Overview')).toBeTruthy();
    expect(getByText('Reset')).toBeTruthy();
    expect(getByText('Submit')).toBeTruthy();
  });

  it('submits the form when "Submit" is clicked', () => {
    const { getByText } = component;
    const SUBMIT = getByText('Submit');
    fireEvent.click(SUBMIT);

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });

  it('handles input changes correctly', () => {
    const { container } = component;
    const titleInput = container.querySelector('input[name="movieName"]');
    fireEvent.change(titleInput, { target: { value: 'Test Movie' } });

    expect(titleInput.value).toBe('Test Movie');
  });
});
