import MovieTile from '../component/MovieTile/MovieTile';
import { action } from "@storybook/addon-actions";

export default {
  title: 'MovieTile',
  component: MovieTile,
};

const Template = (args) => 
    <div style={{backgroundColor: '#232323'}}><MovieTile {...args} />;</div>

export const Default = Template.bind({});
Default.args = {
  "id": 1,
  "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
  "movieName": "Avengers: Endgame",
  "releaseYear": "2019",
  "genres": ["Action", "Sci-Fi"],
  "rating": "8.4",
  "duration": "3h 2min",
  "description": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
}
