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
    e.preventDefault();
    if (props.onSubmit) {
      props.onSubmit(formData);
    }
  };

  return (
    <div className="movie-form_container">
      <Dialog
        title={props.modalTitle || addMovieButton}
        onClose={props.onClose}
        portalNode={props.portalNode}
      >
        <form onSubmit={handleSubmit}>
          <div className="movie-form_columns">
            {[
              { label: titleLabel, name: "movieName" },
              { label: releaseYearLabel, name: "releaseYear" },
              { label: movieUrlLabel, name: "imageUrl" },
              { label: ratingLabel, name: "rating" },
              { label: genreLabel, name: "genres" },
              { label: durationLabel, name: "duration" }
            ].map(({ label, name }) => (
              <label key={name} className="movie-form_input-label">
                {label}
                <input
                  type="text"
                  name={name}
                  className="movie-form_input"
                  value={formData[name]}
                  onChange={handleInputChange}
                />
              </label>
            ))}
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
            <button className="movie-form_reset-button" type="reset">
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
