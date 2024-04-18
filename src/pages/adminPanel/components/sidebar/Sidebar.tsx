import React, { FC, memo } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import { useAdminStore } from 'pages/adminPanel/store';

interface IProps {
  selectedTab: string;
  setSelectedTab: (key: string) => void;
}

const tabs = ['admin.general.info.button', 'admin.manu.button', 'admin.orders.button'];

export const Sidebar: FC<IProps> = memo(({ selectedTab, setSelectedTab }) => {
  const { texts } = useAdminStore();

  return (
    <div className={styles.sidebar}>
      <ul className={styles.tabs}>
        {tabs.map((tab) => (
          <li key={tab} className={styles.tab}>
            <button
              className={classNames(styles.button, {
                [styles.selected]: selectedTab === tab,
              })}
              onClick={() => setSelectedTab(tab)}
            >
              <span>{texts[tab]}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});
