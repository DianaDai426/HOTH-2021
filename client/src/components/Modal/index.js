import React from "react";
import "./Modal.scss";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-container">
        {children}
          <a href="javascript:;" className="modal-close btn"  onClick={handleClose}>
            close
          </a>          

      </div>
    </div>
  );
};

export default Modal;