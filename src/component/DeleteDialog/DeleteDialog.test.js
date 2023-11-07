import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import DeleteDialog from './DeleteDialog';

describe('DeleteDialog Component', () => {
  let component;

  const setUp = (props) => {
    const { container, getByText } = render(<DeleteDialog {...props} />);
    return { container, getByText };
  };

  beforeEach(() => {
    component = setUp({ show: true, onConfirm: jest.fn() });
  });

  it('renders the delete dialog correctly', () => {
    const { getByText } = component;
    expect(getByText('Delete movie')).toBeTruthy();
    expect(getByText('Are you sure you want to delete this movie?')).toBeTruthy();
    expect(getByText('Confirm')).toBeTruthy();
  });

  it('shows the success message after confirming the deletion', async () => {
    const { getByText } = component;
    const confirmButton = getByText('Confirm');
    fireEvent.click(confirmButton);

    await waitFor(() => {
      const successMessage = getByText('Movie Deleted successfully!');
      expect(successMessage).toBeTruthy();
    });
  });

  it('does not render when show prop is false', () => {
    const { container } = setUp({ show: false, onConfirm: jest.fn() });
    const dialog = container.querySelector('.delete-dialog_overlay-container');
    expect(dialog).toBeNull();
  });

});
