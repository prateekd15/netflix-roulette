import React from 'react';
import { render } from '@testing-library/react';
import MovieDetails from './MovieDetails';

function setUp(props) {
    return render(<MovieDetails {...props}/>)
}
describe('MovieDetails Component', () => {
  const mockProps = {
    movieName: 'Test Movie',
    genres: ['Action', 'Drama'],
    imageUrl: 'test.jpg',
    rating: 7.5,
    releaseYear: 2023,
    duration: '2h 30m',
    description: 'A test movie description.',
  };

  it('Should render the component with provided props', () => {
    const { getByText, getByAltText } = setUp(mockProps);

    expect(getByText('Test Movie'));
    expect(getByText('Action, Drama'));
    expect(getByAltText('Search Logo'));
  });

  it('Should display the movie description', () => {
    const { getByText } = setUp(mockProps);
    expect(getByText('A test movie description.'));
  });
});
