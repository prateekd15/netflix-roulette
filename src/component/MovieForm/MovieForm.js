import React, { useState } from "react";
import Dialog from "../Dialog/Dialog";
import "./MovieForm.css";
import { 
  addMovieButton, 
  titleLabel, 
  releaseYearLabel, 
  genreLabel, 
  ratingLabel, 
  durationLabel, 
  movieUrlLabel, 
  overviewLabel, 
  resetButton, 
  submitButton 
} from "../../constants";

const MovieForm = (props) => {
  const initialMovieInfo = props.initialMovieInfo || {
    movieName: "",
    releaseYear: "",
    imageUrl: "",
    rating: "",
    genres: "",
    duration: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialMovieInfo);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (props.onSubmit) {
      props.onSubmit(formData);
    }
  };

  return (
    <div className="movie-form_container">
      <Dialog
        title={props.modalTitle ? props.modalTitle : `${addMovieButton}`}
        onClose={props.onClose}
        portalNode={props.portalNode}
      >
        <form onSubmit={handleSubmit}>
          <div className="movie-form_columns">
            <label className="movie-form_input-label">
              {titleLabel}
              <input
                type="text"
                name="movieName"
                className="movie-form_input"
                value={formData.movieName}
                onChange={handleInputChange}
              />
            </label>
            <label className="movie-form_input-label">
              {releaseYearLabel}
              <input
                type="text"
                name="releaseYear"
                className="movie-form_input"
                value={formData.releaseYear}
                onChange={handleInputChange}
              />
            </label>
            <label className="movie-form_input-label">
              {movieUrlLabel}
              <input
                type="text"
                name="imageUrl"
                className="movie-form_input"
                value={formData.imageUrl}
                onChange={handleInputChange}
              />
            </label>
            <label className="movie-form_input-label">
              {ratingLabel}
              <input
                type="text"
                name="rating"
                className="movie-form_input"
                value={formData.rating}
                onChange={handleInputChange}
              />
            </label>
            <label className="movie-form_input-label">
              {genreLabel}
              <input
                type="text"
                name="genres"
                className="movie-form_input"
                value={formData.genres}
                onChange={handleInputChange}
              />
            </label>
            <label className="movie-form_input-label">
              {durationLabel}
              <input
                type="text"
                name="duration"
                className="movie-form_input"
                value={formData.duration}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <label className="movie-form_input-label movie-form_textarea">
            {overviewLabel}
            <textarea
              className="wider-input movie-form_input"
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </label>
          <div className="movie-form_button-group">
            <button className="movie-form_reset-button " type="reset">
              {resetButton}
            </button>
            <button className="movie-form_submit-button" type="submit">
              {submitButton}
            </button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default MovieForm;
