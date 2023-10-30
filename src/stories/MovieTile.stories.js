import MovieTile from '../component/MovieTile/MovieTile';

export default {
  title: 'MovieTile',
  component: MovieTile,
};

const Template = (args) => 
    <div style={{backgroundColor: '#232323'}}><MovieTile {...args} />;</div>

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://i.insider.com/588a3ddef3629523008b45e3?width=1000&format=jpeg&auto=webp',
  movieName: 'Beauty and the Beast',
  releaseYear: '2017',
  genres: ['Romance', 'Musical'],
};
