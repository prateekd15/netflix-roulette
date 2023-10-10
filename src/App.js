import { useState } from 'react';
import './App.css';
import Counter from './component/Counter/Counter';
import SearchForm from './component/SearchForm/SearchForm';
import GenreSelect from './component/GenreSelect/GenreSelect';

function App() {
  const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Science Fiction'];
  const [selectedGenre, setSelectedGenre] = useState('Action');

  const handleGenreSelect = (genre) => {
    console.log("Selecting " + genre)
    setSelectedGenre(genre);
  };

  const handleSearch = (text) => {
    console.log('searched value:', text)
  }
  const initialValue = 27;
  return (
    <>
      <Counter initialValue={initialValue}/>
      <SearchForm onSearch={handleSearch} initialQuery="Shehzaada"/>
      <GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={handleGenreSelect}/>
    </>
  );
}

export default App;
