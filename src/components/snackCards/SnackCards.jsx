import React, { useState } from 'react';
import styles from './SnackCards.module.css';
import SnackCard from '../snackCard/SnackCard';
import Modal from '../modal/Modal';
import DeleteForm from '../form/DeleteForm';

const SnacksCards = ({ snacks }) => {
  const [snackId, setSnackId] = useState('');
  const [statusDeleteModal, setStatusDeleteModal] = useState(false);
  const handleOpenDeleteModal = (event) => {
    console.dir(event.target);
    setStatusDeleteModal(!statusDeleteModal);
    setSnackId(event.target.id);
  };

  return (
    <div className={styles.container}>
      {snacks.map((snack) => {
        return (
          <>
            <SnackCard snack={snack} deleteClick={handleOpenDeleteModal} />
            <Modal isOpen={statusDeleteModal} onClose={handleOpenDeleteModal}>
              <DeleteForm id={snackId} closeModal={handleOpenDeleteModal} />
            </Modal>
          </>
        );
      })}
    </div>
  );
};

export default SnacksCards;
