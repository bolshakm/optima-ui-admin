import React, { FC, ReactNode } from 'react';
import './styles.css';

interface IProps {
  labelText?: string;
  errorText?: string;
  children: ReactNode;
}

export const InputLabel: FC<IProps> = ({
  labelText = null,
  children = null,
  errorText = '',
}) => {
  return (
    <label className='label'>
      {labelText && <span className='labelText'>{labelText}</span>}
      {children}
      {errorText && <span className='label-error'>{errorText}</span>}
    </label>
  );
};
