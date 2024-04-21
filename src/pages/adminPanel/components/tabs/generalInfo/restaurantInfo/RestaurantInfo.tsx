import React, { FC, RefObject, useEffect, useMemo, useRef } from 'react';
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
  scrollToView: () => void;
}

export const RestaurantInfo: FC<IProps> = ({ restaurant, scrollToView }) => {
  const { setSelectedRestaurant, selectedRestaurant } = useAdminStore();
  const { texts } = useAdminStore();
  const elementRef: RefObject<HTMLDivElement> | null = useRef(null);

  const toggleExpanded = () => {
    setSelectedRestaurant(restaurant);
  };

  const isExpanded = useMemo(
    () => selectedRestaurant?.id === restaurant.id,
    [selectedRestaurant?.id, restaurant.id]
  );

  useEffect(() => {
    if (isExpanded && elementRef) {
      elementRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
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
        <LanguageBlock restaurant={restaurant} scrollToView={scrollToView} />
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
