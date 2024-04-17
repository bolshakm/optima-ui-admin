import React, { FC, useState } from 'react';
import styles from './styles.module.css';
import { Button } from 'components/button';
import { useAdminStore } from 'pages/adminPanel/store';
import classNames from 'classnames';

interface IProps {
  selectedTab: string;
  setSelectedTab: (key: string) => void;
  name: string;
}

export const RestaurantInfoDropdown: FC<IProps> = ({ selectedTab, setSelectedTab, name }) => {
  const { texts } = useAdminStore();


  return (
    <div className={styles.content}>
    </div>
  );
};
