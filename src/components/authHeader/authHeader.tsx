import React, { FC, ReactNode } from 'react';
import styles from './styles.module.css';
import { LanguageDropdown } from 'components/languageDropdown';

interface IProps {
  children?: ReactNode;
}

export const AuthHeader: FC<IProps> = ({ children }) => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <LanguageDropdown />
        <div className={styles.part}>{children}</div>
      </div>
    </div>
  );
};
