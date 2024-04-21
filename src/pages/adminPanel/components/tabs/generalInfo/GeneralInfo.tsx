import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import { useAdminStore } from 'pages/adminPanel/store';
import { AddButton } from '../../addButton';
import { ModalTemplate } from 'components';
import { CreateRestaurant, RestaurantInfo } from '.';
import { cafeService } from 'services/cafeService';

export const GeneralInfo = () => {
  const { texts, restaurantsList, setRestaurantsList } = useAdminStore();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

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
    cafeService.getMany().then(setRestaurantsList);
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const scrollToView = () => {
    buttonRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='info'>
      {isOpenModal && (
        <ModalTemplate onClose={handleToggleModal}>
          <CreateRestaurant onClose={handleToggleModal} />
        </ModalTemplate>
      )}
      <div className={styles.content} ref={buttonRef}>
        <AddButton
          text={texts['admin.add.restaurant']}
          craeteCallback={handleToggleModal}
        />
        <div className={styles.bottom}>
          {restaurantsList.map((restaurant) => (
            <RestaurantInfo
              restaurant={restaurant}
              key={restaurant.id}
              scrollToView={scrollToView}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
