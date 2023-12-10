import React from "react";
import styles from "./MovieForm.module.css";
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
    <div className={styles.movie_form_container}>
      <form onSubmit={handleSubmit(handleFormSubmit)} onReset={handleReset}>
        <div className={styles.movie_form_columns}>
          <label key="title" className={styles.movie_form_input_label}>
            {TITLE}
            <input
              type="text"
              name="title"
              className={styles.movie_form_input}
              {...register("title", { required: FIELD_REQUIRED_MESSAGE })}
            />
            {errors.title && <span className={styles.error_message}>{errors.title.message}</span>}
          </label>
          <label key="release_date" className={styles.movie_form_input_label}>
            {RELEASE_YEAR}
            <input
              type="text"
              name="release_date"
              className={styles.movie_form_input}
              {...register("release_date", {
                required: FIELD_REQUIRED_MESSAGE,
                pattern: {
                  value: /^\d{4}_\d{2}_\d{2}$/,
                  message: RELEASE_YEAR_INVALID_MESSAGE,
                },
              })}
            />
            {errors.release_date && <span className={styles.error_message}>{errors.release_date.message}</span>}
          </label>
          <label key="poster_path" className={styles.movie_form_input_label}>
            {MOVIE_URL}
            <input
              type="text"
              name="poster_path"
              className={styles.movie_form_input}
              {...register("poster_path", {
                required: FIELD_REQUIRED_MESSAGE,
                pattern: {
                  value: /^(ftp|http|https):\/\/[^ "]+$/,
                  message: URL_INVALID_MESSAGE,
                },

              })}
            />
            {errors.poster_path && <span className={styles.error_message}>{errors.poster_path.message}</span>}
          </label>
          <label key="vote_average" className={styles.movie_form_input_label}>
            {RATING}
            <input
              type="number"
              name="vote_average"
              className={styles.movie_form_input}
              {...register("vote_average", { required: FIELD_REQUIRED_MESSAGE })}
            />
            {errors.vote_average && <span className={styles.error_message}>{errors.vote_average.message}</span>}
          </label>
          <label key="genres" className={styles.movie_form_input_label}>
            {GENRE}
            <input
              type="text"
              name="genres"
              className={styles.movie_form_input}
              {...register("genres", { required: FIELD_REQUIRED_MESSAGE })}
              onChange={handleGenreInputChange}
            />
            {errors.genres && <span className={styles.error_message}>{errors.genres.message}</span>}
          </label>
          <label key="runtime" className={styles.movie_form_input_label}>
            {DURATION}
            <input
              type="text"
              name="runtime"
              className={styles.movie_form_input}
              {...register("runtime", {
                required: FIELD_REQUIRED_MESSAGE,
                pattern: {
                  value: /^(\d+\.?\d*|\.\d+)$/,
                  message: DURATION_INVALID_MESSAGE,
                },
              })}
            />
            {errors.runtime && <span className={styles.error_message}>{errors.runtime.message}</span>}
          </label>
        </div>
        <label className={[styles.movie_form_input_label, styles.movie_form_textare]}>
          {OVERVIEW}
          <textarea
            className={[styles.wider_input, styles.movie_form_input]}
            type="text"
            name="overview"
            {...register('overview', { required: 'FIELD_REQUIRED_MESSAGE' })}
          />
          {errors.overview && <span className={styles.error_message}>{errors.overview.message}</span>}
        </label>
        <div className={styles.movie_form_button_group}>
          <button className={styles.movie_form_reset_button} type="reset">
            {RESET}
          </button>
          <button className={styles.movie_form_submit_button} type="submit">
            {SUBMIT}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieForm;
