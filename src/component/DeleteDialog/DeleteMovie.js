import React, { useState } from "react";
import "./DeleteMovie.css";
import { DELETE_MOVIE, DELETE_CONFIRM_MESSAGE, CONFIRM, DELETE_MOVIE_MESSAGE } from "../../constants";
import Dialog from "../Dialog/Dialog";
import { createPortal } from 'react-dom';

const DeleteMovie = ({ onConfirm, onClose }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    setShowSuccessMessage(true);
  };

  return (
    <>{createPortal(
      <Dialog title={DELETE_MOVIE} onClose={onClose}>
        <div>
          <p className="delete-dialog_dialog-message">{DELETE_CONFIRM_MESSAGE}</p>
          <div className="delete-dialog_button-container">
            <button className="delete-dialog_delete_button" onClick={handleConfirm}>
              {CONFIRM}
            </button>
          </div>
        </div>
        {showSuccessMessage && (
          <div className="success-overlay">
            <div className="success-dialog">{DELETE_MOVIE_MESSAGE}</div>
          </div>
        )}
      </Dialog>,
      document.body
    )}
    </>

  );
};

export default DeleteMovie;
