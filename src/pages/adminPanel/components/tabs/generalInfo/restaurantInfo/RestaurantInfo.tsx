import React, { FC, useEffect, useMemo, useState } from 'react';
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
  const [activeBlock, setActiveBlock] = useState('');

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

  const handleUpdateActiveBlock = (key: string) => {
    if (activeBlock !== key) {
      setActiveBlock(key);
    }
  };

  if (!restaurant) return <></>;

  return (
    <div className={styles.content}>
      <RestaurantInfoDropdown
        isExpanded={isExpanded}
        setIsExpanded={toggleExpanded}
        name={restaurant.name || ''}
        activeBlock={activeBlock}
      />
      <div
        className={classNames(styles.inner, { [styles.active]: isExpanded })}
      >
        <div onClick={() => handleUpdateActiveBlock('defaultLanguage')}>
          <LanguageBlock restaurant={restaurant} />
        </div>
        <div onClick={() => handleUpdateActiveBlock('workingHours')}>
          <TimeBlock restaurant={restaurant} />
        </div>
        <div onClick={() => handleUpdateActiveBlock('socialMedia')}>
          <SocialBlock restaurant={restaurant} />
        </div>
        <div onClick={() => handleUpdateActiveBlock('generalBanner')}>
          <BannerBlock restaurant={restaurant} />
        </div>
      </div>
    </div>
  );
};
