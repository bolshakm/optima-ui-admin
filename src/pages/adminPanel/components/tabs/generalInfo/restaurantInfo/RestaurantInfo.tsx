import React, { FC, useState } from 'react';
import styles from './styles.module.css';
import { useAdminStore } from 'pages/adminPanel/store';
import { ICafe } from 'common/types';
import { RestaurantInfoDropdown } from '../restaurantInfoDropdown';
import { InfoBlock } from '../infoBlock';
import { LanguageBlock } from '../languageBlock';
import { SocialBlock } from '../socialBlock';
import { TimeBlock } from '../timeBlock';

interface IProps {
  restaurant: ICafe;
}

export const RestaurantInfo: FC<IProps> = ({ restaurant }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { setRestaurantName } = useAdminStore();
  const { texts } = useAdminStore();

  const toggleExpanded = () => {
    if (isExpanded) {
      setIsExpanded(false);
      setRestaurantName('');
    } else {
      setIsExpanded(false);
      setRestaurantName(restaurant.name || '');
    }
    setIsExpanded(!isExpanded);
  };

  const navigateToBlock = (key: string) => {
    console.log(key);
  };

  if (!restaurant) return;

  return (
    <div className={styles.content}>
      <RestaurantInfoDropdown
        isExpanded={isExpanded}
        setIsExpanded={toggleExpanded}
        name={restaurant.name || ''}
        navigateToBlock={navigateToBlock}
      />
      {isExpanded && (
        <div className={styles.inner}>
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
      )}
    </div>
  );
};
