import "../styles/modal.css";
import { useState } from "react";

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const modalToggle = () => {
    setModalOpen(!modalOpen);
  };

  // const open = () => {
  //   setModalOpen(true);
  // };
  //
  // const close = () => {
  //   setModalOpen(false);
  // };

  return (
    <>
      <div className={"modal-button"} onClick={modalToggle}>
        Open Modal
      </div>

      <div className={`modal-wrapper ${modalOpen ? "show-modal" : ""}`}>
        <div className={"modal"}>
          <h2>I am a modal</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          <div className={"modal-button"} onClick={modalToggle}>
            Close Modal
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
