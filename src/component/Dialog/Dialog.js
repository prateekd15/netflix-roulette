import React from "react";
import PropTypes from "prop-types";
import styles from "./Dialog.module.css";

const Dialog = ({ title, children, onClose }) => (
    <div className={styles.dialog_overlay}>
      <div className={styles.dialog}>
        <div className={styles.dialog_header}>
          <span className={styles.dialog_title}>{title}</span>
          <button onClick={onClose}>
            <img src="/images/close_button.png" alt="X" />
          </button>
        </div>
        <div className={styles.dialog_body}>{children}</div>
      </div>
    </div>
);

Dialog.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func,
};

export default Dialog;
