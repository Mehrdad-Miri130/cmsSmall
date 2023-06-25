import { useState } from 'react';

const useModal = () => {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState();

  const hideModal = () => {
    setModal(false);
  };
  const showModal = () => {
    setModal(true);
  };

  return { modal, showModal, hideModal, modalData, setModalData };
};
export default useModal;
