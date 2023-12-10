import React, { useState } from "react";
import styles from "./DeleteMovie.module.css";
import { DELETE_MOVIE, DELETE_CONFIRM_MESSAGE, CONFIRM, DELETE_MOVIE_MESSAGE } from "../../constants";
import Dialog from "../Dialog/Dialog";
import { createPortal } from 'react-dom';

const DeleteMovie = ({ onConfirm, onClose }) => {

  const handleConfirm = () => {
    onConfirm();
  };

  return (
    <>{createPortal(
      <Dialog title={DELETE_MOVIE} onClose={onClose}>
        <div>
          <p className={styles.delete_dialog_dialog_message}>{DELETE_CONFIRM_MESSAGE}</p>
          <div className={styles.delete_dialog_button_container}>
            <button className={styles.delete_dialog_delete_button} onClick={handleConfirm}>
              {CONFIRM}
            </button>
          </div>
        </div>
      </Dialog>,
      document.body
    )}
    </>

  );
};

export default DeleteMovie;
