import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'; // Создайте файл стилей Modal.css

const Modal = ({ isOpen, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = isOpen && (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );

  return isBrowser ? ReactDOM.createPortal(modalContent, document.body) : null;
};

export default Modal;
