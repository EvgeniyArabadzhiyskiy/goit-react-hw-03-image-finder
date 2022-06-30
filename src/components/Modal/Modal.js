import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, url }) => {
  return createPortal(
    <div className="Overlay">
      <div className="Modal">
        <img src={url}  alt='cat'/>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
