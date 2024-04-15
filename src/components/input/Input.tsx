import React, { FC } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

type ImputType = 'text' | 'number';

interface IProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  requared?: boolean;
  labelText?: string;
  error?: boolean;
  type?: ImputType;
}

export const Input: FC<IProps> = ({
  name,
  value,
  onChange,
  labelText = null,
  error = false,
  type = 'text',
}) => {
  return (
    <label className={styles.label}>
      {labelText && <span className={styles.labelText}>{labelText}</span>}
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        className={classNames(styles.input, { [styles.error]: error })}
      />
    </label>
  );
};
