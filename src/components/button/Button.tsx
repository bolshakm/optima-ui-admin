import React, { FC, ReactNode } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

type ButtonType = 'submit' | 'button';

interface IProps {
  className?: string;
  onClick?: () => void;
  text: string;
  auth?: boolean;
  green?: boolean;
  type?: ButtonType;
  frontIcon?: ReactNode;
  endIcon?: ReactNode;
}

export const Button: FC<IProps> = ({
  className = '',
  onClick = () => {},
  text,
  auth = false,
  green = false,
  type = 'button',
  frontIcon = null,
  endIcon = null,
}) => {
  return (
    <button
      className={classNames(styles.button, {
        [className]: className,
        [styles.auth]: auth,
        [styles.green]: green,
      })}
      onClick={onClick}
      type={type}
    >
      {frontIcon}
      {text}
      {endIcon}
    </button>
  );
};
