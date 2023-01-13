import t from "prop-types";
import ReactModal from "react-modal";
import Button from "../Button";

const Modal = ({ children, actionButton, isOpen, closeModal }) => {
  return (
    <ReactModal
      className="modal"
      overlayClassName="modal__overlay"
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      <div className="modal__body">{children}</div>
      <div className="modal__footer">
        <Button onClick={closeModal} theme="secondary" title="Close" />
        {actionButton}
      </div>
    </ReactModal>
  );
};

Modal.propTypes = {
  children: t.node,
  actionButton: t.element,
  isOpen: t.bool,
  closeModal: t.func,
};

export default Modal;
