import { useState } from "react";
import styles from "./SearchForm.module.css";
import {SEARCH} from "../../constants";
import {FIND_YOUR_MOVIE, ADD_MOVIE, INCREMENT_SYMBOL } from "../../constants";

const SearchForm = ({ initialQuery, onSearch, displayAddMovieDialog }) => {
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const search = () => {
    onSearch(searchTerm);
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
    <div className={styles.search_form_container}>
      <div className={styles.bg_image}>
        <img src="/images/searchbox.png" alt="search background image" className={styles.search_form_image} />
      </div>
      <div id="search_form_add_movie_div" className={styles.search_form_add_title}>
        <span className={styles.search_form_title}>netflixroulette</span>
        <button className={styles.add_movie_button} onClick={() => displayAddMovieDialog(true)}>
        {INCREMENT_SYMBOL + " " + ADD_MOVIE}
      </button>
      </div>
      <span className={styles.search_form_text}>{FIND_YOUR_MOVIE}</span>
      <div className={styles.search_form}>
        <input
          className={styles.search_form_input}
          type="text"
          placeholder="What do you want to watch?"
          value={searchTerm}
          onChange={handleInputValueChange}
          onKeyDown={handleKeyDown}
        />
        <button type="button" onClick={search} className={styles.search_form__button}>
          {SEARCH}
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
