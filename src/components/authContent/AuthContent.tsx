import React, { FC, ReactNode } from 'react';
import styles from './styles.module.css';

interface IProps {
  title: string;
  children: ReactNode;
}

export const AuthContent: FC<IProps> = ({ title, children }) => (
  <div className={styles.content}>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.inner}>
      {children}
    </div>
  </div>
);
