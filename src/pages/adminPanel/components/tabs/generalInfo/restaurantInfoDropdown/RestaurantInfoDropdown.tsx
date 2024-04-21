import React, { FC } from 'react';
import styles from './styles.module.css';
import { useAdminStore } from 'pages/adminPanel/store';
import { ReactComponent as ArrowDown } from 'assets/expand_more.svg';
import { ListItem } from './ListItem';
import classNames from 'classnames';

interface IProps {
  name: string;
  isExpanded: boolean;
  activeBlock: string;
  setIsExpanded: () => void;
}

export const RestaurantInfoDropdown: FC<IProps> = ({
  name,
  isExpanded,
  setIsExpanded,
  activeBlock,
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
          isActive={activeBlock === 'defaultLanguage'}
        />
        <ListItem
          name={texts['admin.working.hours']}
          isActive={activeBlock === 'workingHours'}
        />
        <ListItem
          name={texts['admin.social.media']}
          isActive={activeBlock === 'socialMedia'}
        />
        <ListItem
          name={texts['admin.general.banner']}
          isActive={activeBlock === 'generalBanner'}
        />
      </ul>
    </div>
  );
};
