import { useState } from 'react';
import './App.css';
import Counter from './component/Counter/Counter';
import SearchForm from './component/SearchForm/SearchForm';
import GenreSelect from './component/GenreSelect/GenreSelect';
import MovieTile from './component/MovieTile/MovieTile';
import MovieDetails from './component/MovieDetails/MovieDetails';
import movies from './temp/Movies.json';
import SortControl from './component/SortControl/SortControl';
import { RELEASE_YEAR, TITLE } from './constants';
import MovieListPage from "./component/MovieListPage/MovieListPage";

function App() {
  const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Science Fiction'];
  
  const [selectedGenre, setSelectedGenre] = useState('Action');
  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  const sortFilters = [RELEASE_YEAR, TITLE];
  
  const [selectedFilter, setSelectedFilter] = useState(sortFilters[0]);
  const handleChangeSortFilter = (filter) => {
    setSelectedFilter(filter);
  };

  const handleSearch = (text) => {
    alert('Searching for: ' + text);
  }

  const [movieDetailsIndex, setMovieDetailsIndex] = useState(1);
  const handleMovieSelectIndex = (index) => {
    setMovieDetailsIndex(--index);
  }
  
  return (
    <MovieListPage />
  );
}

export default App;
