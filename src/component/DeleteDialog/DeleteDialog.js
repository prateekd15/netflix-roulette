import React, { useState } from "react";
import "./DeleteDialog.css";

const DeleteDialog = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const { show, onClose, onConfirm, title } = props;

  if (!show) {
    return null;
  }

  return (
    <div className="delete-dialog_overlay-container">
    <div className="delete-dialog_dialog-overlay">
      <div className="delete-dialog_dialog-content">
        <h2 className="delete-dialog_dialog-header">Delete movie</h2>
        <p className="delete-dialog_dialog-message">Are you sure you want to delete this movie?</p>
        <div className="delete-dialog_button-container">
          <button className="delete-dialog_delete_button"
            onClick={() => {
              onConfirm();
              setShowSuccessMessage(true);
            }}
          >
            Confirm
          </button>
        </div>
      </div>
      {showSuccessMessage && (
        <div className="success-overlay">
          <div className="success-dialog">Movie Deleted successfully!</div>
        </div>
      )}
    </div>
    </div>
  );
};

export default DeleteDialog;
