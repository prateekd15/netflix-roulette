import React, { useState } from "react";
import "./DeleteDialog.css";
import { deleteDialogHeader, deleteDialogText, deleteMovieMessage, confirmMessage } from "../../constants";

const DeleteDialog = ({show, onConfirm}) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  if (!show) {
    return null;
  }

  return (
    <div className="delete-dialog_overlay-container">
    <div className="delete-dialog_dialog-overlay">
      <div className="delete-dialog_dialog-content">
        <h2 className="delete-dialog_dialog-header">{deleteDialogHeader}</h2>
        <p className="delete-dialog_dialog-message">{deleteDialogText}</p>
        <div className="delete-dialog_button-container">
          <button className="delete-dialog_delete_button"
            onClick={() => {
              onConfirm();
              setShowSuccessMessage(true);
            }}
          >
            {confirmMessage}
          </button>
        </div>
      </div>
      {showSuccessMessage && (
        <div className="success-overlay">
          <div className="success-dialog">{deleteMovieMessage}</div>
        </div>
      )}
    </div>
    </div>
  );
};

export default DeleteDialog;
