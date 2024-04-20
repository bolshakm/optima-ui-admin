import React, { FC } from 'react';
import styles from './styles.module.css';
import { useAdminStore } from 'pages/adminPanel/store';
import { ReactComponent as ArrowDown } from 'assets/expand_more.svg';
import { ListItem } from './ListItem';
import classNames from 'classnames';

interface IProps {
  name: string;
  navigateToBlock: (key: string) => void;
  isExpanded: boolean;
  setIsExpanded: () => void;
}

export const RestaurantInfoDropdown: FC<IProps> = ({
  name,
  navigateToBlock,
  isExpanded,
  setIsExpanded,
}) => {
  const { texts } = useAdminStore();

  return (
    <div className={styles.dropdown}>
      <button
        className={classNames(styles.button, { [styles.active]: isExpanded })}
        onClick={setIsExpanded}
      >
        {name}
        <ArrowDown />
      </button>
      <ul
        className={classNames(styles.list, { [styles.active]: isExpanded })}
      >
        <ListItem
          name={texts['admin.default.language']}
          navigateToBlock={() => navigateToBlock('defaultLanguage')}
          isActive={true}
        />
        <ListItem
          name={texts['admin.working.hours']}
          navigateToBlock={() => navigateToBlock('workingHours')}
          isActive={false}
        />
        <ListItem
          name={texts['admin.social.media']}
          navigateToBlock={() => navigateToBlock('socialMedia')}
          isActive={false}
        />
        <ListItem
          name={texts['admin.general.banner']}
          navigateToBlock={() => navigateToBlock('generalBanner')}
          isActive={false}
        />
      </ul>
    </div>
  );
};
