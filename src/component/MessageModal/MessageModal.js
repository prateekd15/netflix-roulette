import { createPortal } from 'react-dom';
import styles from "./MessageModal.module.css";

function MessageModal({ message }) {
    return (
        <>
            {
                createPortal(
                    <div className={styles.message_modal_overlay}>
                        <div className={styles.message_modal_dialog}>{message}</div>
                    </div>,
                    document.body)
            }
        </>
    );
}

export default MessageModal;