import React from 'react';
import './MovieDetails.css';
import searchLogo from '../../assets/search_logo.png';
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
  onSearchSelect
}) {

  const commaSeparatedList = genres.join(', ');
  const releaseYear = release_date.split('-')[0];
  
  return (
    <div className="movie-details_outer-container">
      <div className="movie-details_title-row">
        <span className="movie-details_title">{NETFLIX_ROULETTE}</span>
        <button className='movie_details_search-button' onClick={() => onSearchSelect(null)}><img src={searchLogo} alt="Search Logo" /></button>
      </div>
      <div className="movie-details_inner">
        <img src={poster_path} alt={title} className="movie-details_poster" />
        <div className="movie-details_info-container">
          <div className="movie-details_row">
            <span className="movie-details_details-title">{title}</span>
            <div className="movie-details_rating-year-container">
              <span className="movie-details_rating-year"> {vote_average} </span>
            </div>
          </div>
          <span className="movie-details_genres">{commaSeparatedList}</span>
          <div className="movie-details_row movie-details_release-year-row">
            <span className="movie-details_duration">{releaseYear}</span>
            <span className="movie-details_release-year"> {convertToHoursAndMinutes(runtime)} </span>
          </div>
          <p className="movie-details_description">{overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
