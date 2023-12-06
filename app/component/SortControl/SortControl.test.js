import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SortControl from './SortControl';

function setUp(mockSortFilters, selectedFilter, onSelect) {
    return render(<SortControl sortFilters={mockSortFilters} selectedFilter={selectedFilter} onSelect={onSelect} />)
}

describe('SortControl Component', () => {
  const mockSortFilters = ['A-Z', 'Z-A', 'Rating'];

  it('Should render the component with provided sort filters', () => {
    const { getByText } = setUp(mockSortFilters, 'A-Z', () => {});

    expect(getByText('SORT BY'));
    expect(getByText('A-Z'));
    expect(getByText('Z-A'));
    expect(getByText('Rating'));
  });
});
