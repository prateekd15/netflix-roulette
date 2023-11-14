import React, { useState } from "react";
import Dialog from "../Dialog/Dialog";
import MovieForm from "../MovieForm/MovieForm";
import { EDIT_MOVIE_MESSAGE, EDIT_MOVIE } from "../../constants";
import MessageModal from "../MessageModal/MessageModal";
import { createPortal } from 'react-dom';

function EditMovie({initialMovieInfo, onClose, onSubmit, title}) {
    const movieInfo = initialMovieInfo || {
    movieName: "",
    releaseYear: "",
    imageUrl: "",
    vote_average: "",
    genres: "",
    runtime: "",
    overview: "",
  };
  console.log("Logging UpdateMovie props ", movieInfo);
  console.log("Logging UpdateMovie props ", initialMovieInfo);
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

export default EditMovie;
