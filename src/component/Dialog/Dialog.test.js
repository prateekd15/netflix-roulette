import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dialog from './Dialog';

describe('Dialog Component', () => {
  let component;
  const onCloseMock = jest.fn();

  const setUp = (props) => {
    const { container, getByText } = render(<Dialog {...props} />);
    return { container, getByText };
  };

  beforeEach(() => {
    component = setUp({ title: 'Test Dialog', onClose: onCloseMock });
  });

  it('renders the dialog correctly', () => {
    const { getByText } = component;
    expect(getByText('Test Dialog')).toBeTruthy();
  });

  it('calls the onClose function when the close button is clicked', () => {
    const { container } = component;
    const closeButton = container.querySelector('button');
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
