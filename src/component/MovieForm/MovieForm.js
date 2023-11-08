import React, { useState } from "react";
import "./MovieForm.css";
import {
  COLUMN_CONFIG,
  OVERVIEW,
  RESET,
  SUBMIT
} from "../../constants";

const MovieForm = ({movieInfo, onSubmit }) => {
 
  const [formData, setFormData] = useState(movieInfo);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const handleReset = () => {
    setFormData(movieInfo);
  };

  return (
    <div className="movie-form_container">
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div className="movie-form_columns">
            {COLUMN_CONFIG.map(({ label, name }) => (
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
            {OVERVIEW}
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
              {RESET}
            </button>
            <button className="movie-form_submit-button" type="submit">
              {SUBMIT}
            </button>
          </div>
        </form>
    </div>
  );
};

export default MovieForm;
