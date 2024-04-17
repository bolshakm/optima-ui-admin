import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useAdminStore } from 'pages/adminPanel/store';
import { AddButton } from '../addButton';
import { ModalTemplate } from 'components';
import { CreateRestaurant } from '../createRestaureant';

export const GeneralInfo = () => {
  const { texts } = useAdminStore();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleToggleModal = () => {
    if (isOpenModal) {
      setIsOpenModal(false);
      document.body.style.overflow = '';
    } else {
      setIsOpenModal(true);
      document.body.style.overflow = 'hidden';
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className='info'>
      {isOpenModal && (
        <ModalTemplate onClose={handleToggleModal}>
          <CreateRestaurant onClose={handleToggleModal}/>
        </ModalTemplate>
      )}
      <div className={styles.content}>
        <AddButton
          text={texts['admin.add.restaurant']}
          craeteCallback={handleToggleModal}
        />
        <div className={styles.bottom}>
          <></>
        </div>
      </div>
    </div>
  );
};
