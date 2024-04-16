import React, { FC, ReactNode } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

interface IProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const AuthContent: FC<IProps> = ({ title, children, className }) => (
  <div className={classNames(styles.content, className)}>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.inner}>
      {children}
    </div>
  </div>
);
