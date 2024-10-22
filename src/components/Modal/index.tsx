import "./index.scss";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;

}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, children}) => {
    if (isOpen === false) return null

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                {children} 
            </div>
        </div>
    );
}

export default Modal;