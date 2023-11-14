import { createPortal } from 'react-dom';
import "./MessageModal.css";

function MessageModal({ message }) {
    return (
        <>
            {
                createPortal(
                    <div className="message-modal_overlay">
                        <div className="message-modal_dialog">{message}</div>
                    </div>,
                    document.body)
            }
        </>
    );
}

export default MessageModal;