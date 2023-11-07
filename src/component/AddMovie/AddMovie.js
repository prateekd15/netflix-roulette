import React, { useState } from "react";
import Dialog from "../Dialog/Dialog";
import MovieForm from "../MovieForm/MovieForm";
import "../../styles/SuccessMessage.css";
import "./AddMovie.css";
import { addSuccessMessage, addMovieButton, incrementButton } from '../../constants';

const AddMovie = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const openFormDialog = () => {
    setIsFormOpen(true);
  };

  const closeFormDialog = () => {
    setIsFormOpen(false);
  };

  const handleFormSubmit = (formData) => {
    setShowSuccessMessage(true);
    closeFormDialog();
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
  };

  return (
    <div>
      <button className="add-movie-button" onClick={openFormDialog}>
        {incrementButton + " " + addMovieButton}
      </button>
      {isFormOpen && (
        <Dialog title="Add Movie" onClose={closeFormDialog}>
          <MovieForm onSubmit={handleFormSubmit} onClose={closeFormDialog} formType="Add movie" />
        </Dialog>
      )}
      {showSuccessMessage && (
        <div className="success-overlay">
          <div className="success-dialog">{addSuccessMessage}</div>
        </div>
      )}
    </div>
  );
};

export default AddMovie;
