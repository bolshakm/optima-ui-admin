import React, { FC } from 'react';
import styles from './styles.module.css';

interface IProps {
  text: string;
  isChecked: boolean;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBox: FC<IProps> = ({
  text,
  isChecked,
  name,
  handleChange,
}) => (
  <label className={styles.label}>
    <span className={styles.icon} />
    <input
      type='checkbox'
      name={name}
      onChange={handleChange}
      className={styles.input}
      checked={isChecked}
    />
    <span className={styles.text}>{text}</span>
  </label>
);
