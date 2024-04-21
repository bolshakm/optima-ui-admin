import React, { FC, RefObject, useEffect, useMemo, useRef } from 'react';
import styles from './styles.module.css';
import { useAdminStore } from 'pages/adminPanel/store';
import { ICafe } from 'common/types';
import { RestaurantInfoDropdown } from '../restaurantInfoDropdown';
import { LanguageBlock } from '../languageBlock';
import { SocialBlock } from '../socialBlock';
import { TimeBlock } from '../timeBlock';
import classNames from 'classnames';
import { scrollToTop } from 'common/utils';
import { BannerBlock } from '../bannerBlock';

interface IProps {
  restaurant: ICafe;
}

export const RestaurantInfo: FC<IProps> = ({ restaurant }) => {
  const { setSelectedRestaurant, selectedRestaurant } = useAdminStore();
  const elementRef: RefObject<HTMLDivElement> | null = useRef(null);

  const toggleExpanded = () => {
    setSelectedRestaurant(restaurant);
  };

  const isExpanded = useMemo(
    () => selectedRestaurant?.id === restaurant.id,
    [selectedRestaurant?.id, restaurant.id]
  );

  useEffect(() => {
    scrollToTop();
  }, [isExpanded]);

  const navigateToBlock = (key: string) => {
    console.log(key);
  };

  if (!restaurant) return <></>;

  return (
    <div className={styles.content} ref={elementRef}>
      <RestaurantInfoDropdown
        isExpanded={isExpanded}
        setIsExpanded={toggleExpanded}
        name={restaurant.name || ''}
        navigateToBlock={navigateToBlock}
      />
      <div
        className={classNames(styles.inner, { [styles.active]: isExpanded })}
      >
        <LanguageBlock restaurant={restaurant} />
        <TimeBlock restaurant={restaurant} />

        <SocialBlock restaurant={restaurant} />
        <BannerBlock restaurant={restaurant} />
      </div>
    </div>
  );
};
