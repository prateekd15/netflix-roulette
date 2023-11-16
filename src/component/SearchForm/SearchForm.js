import { useState } from "react";
import "./SearchForm.css";
import searchImage from "../../assets/searchbox.png";
import AddMovie from "../AddMovie/AddMovie";
import {SEARCH} from "../../constants";
import {FIND_YOUR_MOVIE} from "../../constants";

const SearchForm = ({ initialQuery, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(initialQuery);

  const search = () => {
    onSearch(searchTerm);
    setSearchTerm("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

  const handleInputValueChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-form_container">
      <div className="bg-image">
        <img src={searchImage} alt="search background image" className="search-form_image" />
      </div>
      <div id="search-form_add-movie_div" className="search-form_add-title">
        <span className='search-form_title'>netflixroulette</span>
        <AddMovie />
      </div>
      <span className="search-form_text">{FIND_YOUR_MOVIE}</span>
      <div className="search-form">
        <input
          className="search-form-input"
          type="text"
          placeholder="What do you want to watch?"
          value={searchTerm}
          onChange={handleInputValueChange}
          onKeyDown={handleKeyDown}
        />
        <button type="button" onClick={search} className="search-form__button">
          {SEARCH}
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
