import React, { FC } from 'react';
import styles from './styles.module.css';
import { ReactComponent as ArrowDown } from 'assets/expand_more.svg';
import classNames from 'classnames';

interface IProps {
  name: string;
  isActive: boolean;
}

export const ListItem: FC<IProps> = ({ name, isActive }) => {
  return (
    <li className={styles.item}>
      <button className={styles.listButton}>
        <div className={styles.left}>
          <span
            className={classNames(styles.dot, { [styles.active]: isActive })}
          />
          <span className={classNames(styles.text, { [styles.active]: isActive })}>
            {name}
          </span>
        </div>

        <ArrowDown />
      </button>
    </li>
  );
};
