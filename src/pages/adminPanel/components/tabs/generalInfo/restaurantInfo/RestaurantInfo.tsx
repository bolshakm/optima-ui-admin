import React, { FC, useMemo } from 'react';
import styles from './styles.module.css';
import { useAdminStore } from 'pages/adminPanel/store';
import { ICafe } from 'common/types';
import { RestaurantInfoDropdown } from '../restaurantInfoDropdown';
import { InfoBlock } from '../infoBlock';
import { LanguageBlock } from '../languageBlock';
import { SocialBlock } from '../socialBlock';
import { TimeBlock } from '../timeBlock';
import classNames from 'classnames';

interface IProps {
  restaurant: ICafe;
}

export const RestaurantInfo: FC<IProps> = ({ restaurant }) => {
  const { setSelectedRestaurant, selectedRestaurant } = useAdminStore();
  const { texts } = useAdminStore();

  const toggleExpanded = () => {
    setSelectedRestaurant(restaurant);
  };

  const isExpanded = useMemo(
    () => selectedRestaurant?.id === restaurant.id,
    [selectedRestaurant?.id, restaurant.id]
  );

  const navigateToBlock = (key: string) => {
    console.log(key);
  };

  if (!restaurant) return <></>;

  return (
    <div className={styles.content}>
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
        <InfoBlock
          title={texts['admin.general.banner']}
          handleSubmit={() => {}}
        >
          <></>
        </InfoBlock>
      </div>
    </div>
  );
};
