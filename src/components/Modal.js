import ReactDOM from "react-dom";

import { StyledModal, StyledBackdrop } from "./styles/Modal.styled";

const portalElement = document.getElementById("modal-root");

const Modal = ({ onCloseModal, children }) => {
  return (
    <>
      {ReactDOM.createPortal(<StyledBackdrop onClick={onCloseModal} />, portalElement)}
      {ReactDOM.createPortal(<StyledModal>
        {children}
      </StyledModal>, portalElement)}
    </>
  )
};


export default Modal;