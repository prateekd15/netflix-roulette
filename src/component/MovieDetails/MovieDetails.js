import React from 'react';
import styles from './MovieDetails.module.css';
import { NETFLIX_ROULETTE } from '../../constants';
import { convertToHoursAndMinutes } from '../../utils/Utils'

function MovieDetails({
  genres,
  poster_path,
  title,
  vote_average,
  release_date,
  runtime,
  overview,
  onSearchSelect,
  setParamsInURL
}) {

  const commaSeparatedList = genres ? genres.join(', ') : null;
  const releaseYear = release_date ? release_date.split('-')[0] : '';

  return (
    <div className={styles.movie_details_outer_container}>
      <div className={styles.movie_details_title_row}>
        <span className={styles.movie_details_title}>{NETFLIX_ROULETTE}</span>
        <button className={styles.movie_details_search_button}  onClick={() => onSearchSelect(null)}><img src="/images/search_logo.png" alt="Search Logo" /></button>
      </div>
      <div className={styles.movie_details_inner}>
        <img src={poster_path} alt={title} className={styles.movie_details_poster} />
        <div className={styles.movie_details_info_container}>
          <div className={styles.movie_details_row}>
            <span className={styles.movie_details_details_title}>{title}</span>
            <div className={styles.movie_details_rating_year_container}>
              <span className={styles.movie_details_rating_year}> {vote_average} </span>
            </div>
          </div>
          <span className={styles.movie_details_genres}>{commaSeparatedList}</span>
          <div className={[styles.movie_details_row, styles.movie_details_release_year_row]}>
            <span className={styles.movie_details_duration}>{releaseYear}</span>
            <span className={styles.movie_details_release_year}> {convertToHoursAndMinutes(runtime)} </span>
          </div>
          <p className={styles.movie_details_description}>{overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
