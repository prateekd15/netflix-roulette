import React from "react";
import Dialog from "../Dialog/Dialog";
import MovieForm from "../MovieForm/MovieForm";
import { createPortal } from 'react-dom';

function UpdateMovie({initialMovieInfo, onClose, onSubmit, title}) {
    const movieInfo = initialMovieInfo || {
    title: "",
    release_date: "",
    poster_path: "",
    vote_average: 0,
    genres: [],
    runtime: "",
    overview: "",
  };
  return (
    <>{createPortal(
      <Dialog title={title} onClose={onClose}>
        <MovieForm movieInfo={movieInfo} onSubmit={onSubmit} onClose={onClose} />
      </Dialog>,
      document.body
    )}
    </>
  );
}

export default UpdateMovie;
