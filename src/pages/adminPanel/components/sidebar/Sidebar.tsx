import React, { FC, memo } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

interface IProps {
  selectedTab: string;
  setSelectedTab: (key: string) => void;
}

const tabs = ['General info', 'Menu', 'Orders'];

export const Sidebar: FC<IProps> = memo(({ selectedTab, setSelectedTab }) => {
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
              <span>{tab}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});
