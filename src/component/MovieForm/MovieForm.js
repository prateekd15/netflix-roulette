import React, { useState } from "react";
import "./MovieForm.css";
import {
  DURATION,
  GENRE,
  MOVIE_URL,
  OVERVIEW,
  RATING,
  RELEASE_YEAR,
  RESET,
  SUBMIT,
  TITLE,
  FIELD_REQUIRED_MESSAGE,
  RELEASE_YEAR_INVALID_MESSAGE,
  URL_INVALID_MESSAGE,
  DURATION_INVALID_MESSAGE
} from "../../constants";
import { useForm } from 'react-hook-form';

const MovieForm = ({ movieInfo, onSubmit }) => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues: movieInfo,
  });

  const handleFormSubmit = (data) => {
    let genresList = data.genres;
    if (!Array.isArray(genresList)) {
      genresList = genresList.split(',');
    }

    const newData = { ...data, genres: genresList, vote_average: parseInt(data.vote_average), runtime: parseFloat(data.runtime) };
    onSubmit(newData);
  };

  const handleReset = () => {
    if (movieInfo) {
      Object.keys(movieInfo).forEach((key) => {
        setValue(key, movieInfo[key]);
      });
    }
  };

  const handleGenreInputChange = (event) => {
    const genres = event.target.value.split(',');
    setValue('genres', genres);
  }

  return (
    <div className="movie-form_container">
      <form onSubmit={handleSubmit(handleFormSubmit)} onReset={handleReset}>
        <div className="movie-form_columns">
          <label key="title" className="movie-form_input-label">
            {TITLE}
            <input
              type="text"
              name="title"
              className="movie-form_input"
              {...register("title", { required: FIELD_REQUIRED_MESSAGE })}
            />
            {errors.title && <span className="error-message">{errors.title.message}</span>}
          </label>
          <label key="release_date" className="movie-form_input-label">
            {RELEASE_YEAR}
            <input
              type="text"
              name="release_date"
              className="movie-form_input"
              {...register("release_date", {
                required: FIELD_REQUIRED_MESSAGE,
                pattern: {
                  value: /^\d{4}-\d{2}-\d{2}$/,
                  message: RELEASE_YEAR_INVALID_MESSAGE,
                },
              })}
            />
            {errors.release_date && <span className="error-message">{errors.release_date.message}</span>}
          </label>
          <label key="poster_path" className="movie-form_input-label">
            {MOVIE_URL}
            <input
              type="text"
              name="poster_path"
              className="movie-form_input"
              {...register("poster_path", {
                required: FIELD_REQUIRED_MESSAGE,
                pattern: {
                  value: /^(ftp|http|https):\/\/[^ "]+$/,
                  message: URL_INVALID_MESSAGE,
                },

              })}
            />
            {errors.poster_path && <span className="error-message">{errors.poster_path.message}</span>}
          </label>
          <label key="vote_average" className="movie-form_input-label">
            {RATING}
            <input
              type="number"
              name="vote_average"
              className="movie-form_input"
              {...register("vote_average", { required: FIELD_REQUIRED_MESSAGE })}
            />
            {errors.vote_average && <span className="error-message">{errors.vote_average.message}</span>}
          </label>
          <label key="genres" className="movie-form_input-label">
            {GENRE}
            <input
              type="text"
              name="genres"
              className="movie-form_input"
              {...register("genres", { required: FIELD_REQUIRED_MESSAGE })}
              onChange={handleGenreInputChange}
            />
            {errors.genres && <span className="error-message">{errors.genres.message}</span>}
          </label>
          <label key="runtime" className="movie-form_input-label">
            {DURATION}
            <input
              type="text"
              name="runtime"
              className="movie-form_input"
              {...register("runtime", {
                required: FIELD_REQUIRED_MESSAGE,
                pattern: {
                  value: /^(\d+\.?\d*|\.\d+)$/,
                  message: DURATION_INVALID_MESSAGE,
                },
              })}
            />
            {errors.runtime && <span className="error-message">{errors.runtime.message}</span>}
          </label>
        </div>
        <label className="movie-form_input-label movie-form_textarea">
          {OVERVIEW}
          <textarea
            className="wider-input movie-form_input"
            type="text"
            name="overview"
            {...register('overview', { required: 'FIELD_REQUIRED_MESSAGE' })}
          />
          {errors.overview && <span className="error-message">{errors.overview.message}</span>}
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
