import React, { useState } from "react";
import "./DeleteDialog.css";

const DeleteDialog = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const { show, onClose, onConfirm, title } = props;

  if (!show) {
    return null;
  }

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <h2>Delete movie - {title}</h2>
        <p>Are you sure you want to delete this movie?</p>
        <div className="button-container">
          <button
            onClick={() => {
              onConfirm();
              setShowSuccessMessage(true);
            }}
          >
            Confirm
          </button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
      {showSuccessMessage && (
        <div className="success-overlay">
          <div className="success-dialog">Movie Deleted successfully!</div>
        </div>
      )}
    </div>
  );
};

export default DeleteDialog;
