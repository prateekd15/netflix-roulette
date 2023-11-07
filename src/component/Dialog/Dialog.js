import React from "react";
import PropTypes from "prop-types";
import FocusTrap from "focus-trap-react";
import "./Dialog.css";
import closeButton from '../../assets/close_button.png';

function Dialog({ title, children, onClose }) {
  return (
    <FocusTrap>
      <div className="dialog-overlay">
        <div className="dialog">
          <div className="dialog-header">
            <span className="dialog_title">{title}</span>
            <button onClick={onClose}>
              <img src={closeButton} alt="X"/>
            </button>
          </div>
          <div className="dialog-body">{children}</div>
        </div>
      </div>
    </FocusTrap>
  );
}

Dialog.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func,
};

export default Dialog;