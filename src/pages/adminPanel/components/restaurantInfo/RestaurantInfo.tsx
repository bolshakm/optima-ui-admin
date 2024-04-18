import React, { FC, useState } from 'react';
import styles from './styles.module.css';
import { useAdminStore } from 'pages/adminPanel/store';
import { ICafeDto } from 'common/types';
import { RestaurantInfoDropdown } from '../restaurantInfoDropdown';

interface IProps {
  restaurant: ICafeDto;
}

export const RestaurantInfo: FC<IProps> = ({ restaurant }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { setRestaurantName } = useAdminStore();

  const toggleExpanded = () => {
    if (isExpanded) {
      setIsExpanded(false);
      setRestaurantName('');
    } else {
      setIsExpanded(false);
      setRestaurantName(restaurant.name);
    }
    setIsExpanded(!isExpanded);
  };

  const navigateToBlock = (key: string) => {
    console.log(key);
  };

  return (
    <div className={styles.content}>
      <RestaurantInfoDropdown
        isExpanded={isExpanded}
        setIsExpanded={toggleExpanded}
        name={restaurant.name}
        navigateToBlock={navigateToBlock}
      />
      <div className={styles.inner}></div>
    </div>
  );
};
