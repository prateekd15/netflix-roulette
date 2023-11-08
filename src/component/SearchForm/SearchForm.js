import { useState } from "react";
import "./SearchForm.css";
import searchImage from "../../assets/searchbox.png";
import AddMovie from "../AddMovie/AddMovie";
import {SEARCH} from "../../constants";

const SearchForm = ({ initialQuery, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(initialQuery);

  const search = () => {
    onSearch(searchTerm);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(searchTerm);
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
      <div id="search-form_add-movie_div" className="search-form_add-movie">
        <AddMovie />
      </div>
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
