import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import styles from "../../styles/modal.module.scss";
import DropzoneComponent from "../DragOrDrop/DragOrDrop";

const Modal = ({ setIsOpen, setAvatar, setAvatarImage }) => {
  const [preSelectAvatar, setPreSelectAvatar] = useState();

  const handleClickToggleAvatar = () => {
    setAvatar(preSelectAvatar);
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Profile Image</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <DropzoneComponent
              avatar={preSelectAvatar}
              setAvatar={setPreSelectAvatar}
              setAvatarImage={setAvatarImage}
            />
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.saveBtn}
                onClick={handleClickToggleAvatar}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
