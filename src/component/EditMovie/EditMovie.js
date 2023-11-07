import React, { useState } from "react";
import Dialog from "../Dialog";
import MovieForm from "../MovieForm";
import "../movie.css";
import "../SuccessMessage/successMessage.css";
import { editMovieMessage } from "../../constants";

function EditMovie() {
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
    <div className="movie-container">
      <button className="add-movie-button" onClick={openFormDialog}>
        Edit Movie
      </button>
      {isFormOpen && (
        <Dialog title="Edit Movie" onClose={closeFormDialog}>
          <MovieForm onSubmit={handleFormSubmit} onClose={closeFormDialog} />
        </Dialog>
      )}
      {showSuccessMessage && (
        <div className="success-overlay">
          <div className="success-dialog">{editMovieMessage}</div>
        </div>
      )}
    </div>
  );
}

export default EditMovie;