import React from 'react';
import { render } from '@testing-library/react';
import MovieTile from './MovieTile';

const sampleMovie = {
  imageUrl: 'sample-image.jpg',
  movieName: 'Sample Movie',
  releaseYear: '2022',
  genres: ['Action', 'Adventure', 'Sci-Fi'],
};

function setUp(sampleMovie) {
    return render( <MovieTile {...sampleMovie}/> );
}

describe('MovieTile', () => {
    it('Should render MovieTile component with the correct data', () => {
        const { getByAltText, getByText } = setUp(sampleMovie)
      
        expect(getByAltText(sampleMovie.movieName));
        expect(getByText(sampleMovie.movieName));
        expect(getByText(sampleMovie.releaseYear));
        expect(getByText(sampleMovie.genres.join(', ')));
      });
      
      it('Should display genres as a comma-separated list', () => {
        const { getByText } = setUp(sampleMovie);
        const genres = getByText(sampleMovie.genres.join(', '));
      
        expect(genres);
      });     
});
