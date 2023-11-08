import React, { useState } from "react";
import "./AddMovie.css";
import { ADD_SUCCESS_MESSAGE, ADD_MOVIE, INCREMENT_SYMBOL } from '../../constants';
import UpdateMovie from "../UpdateMovie/UpdateMovie";
import MessageModal from "../MessageModal/MessageModal";

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
        {INCREMENT_SYMBOL + " " + ADD_MOVIE}
      </button>
      {isFormOpen &&
        <UpdateMovie
          title={ADD_MOVIE}
          onClose={closeFormDialog}
          onSubmit={handleFormSubmit}
        />
      }
      {showSuccessMessage &&
        <MessageModal message={ADD_SUCCESS_MESSAGE} />
      }
    </div>
  );
};

export default AddMovie;
