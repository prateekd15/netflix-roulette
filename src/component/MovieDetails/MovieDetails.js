import React from 'react';
import './MovieDetails.css';
import searchLogo from '../../assets/search_logo.png';
import { applicationTitle } from '../../constants';

function MovieDetails({
  genres,
  imageUrl,
  movieName,
  rating,
  releaseYear,
  duration,
  description,
}) {
  const commaSeparatedList = genres.join(', ');

  return (
    <div className="movie-details_outer-container">
      <div className="movie-details_title-row">
        <span className="movie-details_title">{applicationTitle}</span>
        <img src={searchLogo} alt="Search Logo" />
      </div>
      <div className="movie-details_inner">
        <img src={imageUrl} alt={movieName} className="movie-details_poster" />
        <div className="movie-details_info-container">
          <div className="movie-details_row">
            <span className="movie-details_details-title">{movieName}</span>
            <div className="movie-details_rating-year-container">
              <span className="movie-details_rating-year"> {rating} </span>
            </div>
          </div>
          <span className="movie-details_genres">{commaSeparatedList}</span>
          <div className="movie-details_row movie-details_release-year-row">
            <span className="movie-details_duration">{releaseYear}</span>
            <span className="movie-details_release-year"> {duration} </span>
          </div>
          <p className="movie-details_description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
