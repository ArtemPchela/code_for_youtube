import { ModalProps } from "../types/types.ts";

const Modal = ({ item, isOpen, onClose }: ModalProps) => {
  if (!isOpen || item === null) {
    return null;
  }

  const { name, email } = item;

  return (
    <div className={`modal-wrapper ${isOpen ? "show-modal" : ""}`}>
      <div className={"modal"}>
        <h2>{name}</h2>
        <p>{email}</p>
        <div className={"modal-btn"} onClick={onClose}>
          Close modal
        </div>
      </div>
    </div>
  );
};

export default Modal;
