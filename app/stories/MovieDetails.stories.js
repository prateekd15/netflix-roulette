import React from 'react';
import MovieDetails from '../component/MovieDetails/MovieDetails';

export default {
  title: 'MovieDetails',
  component: MovieDetails,
};

const Template = (args) => <MovieDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://i.insider.com/588a3ddef3629523008b45e3?width=1000&format=jpeg&auto=webp',
  movieName: 'Beauty and the Beast',
  releaseYear: '2017',
  genres: ['Romance', 'Musical'],
  rating: '7.1',
  duration: '2h 9min',
  description: 'Disney\'s animated classic takes on a new form, with a widened mythology and an all-star cast. A young Prince, imprisoned in the form of a Beast (Dan Stevens), can be freed only by true love. What may be his only opportunity arrives when he meets Belle (Emma Watson), the only human girl to ever visit the castle since it was enchanted.'
};
