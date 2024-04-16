import React, { FC } from 'react';
import classNames from 'classnames';
import './styles.css';

type ImputType = 'text' | 'number';

interface IProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  requared?: boolean;
  labelText?: string;
  error?: boolean;
  type?: ImputType;
  errorText?: string;
}

export const Input: FC<IProps> = ({
  name,
  value,
  onChange,
  labelText = null,
  error = false,
  type = 'text',
  errorText = '',
}) => {
  return (
    <label className='label'>
      {labelText && <span className='labelText'>{labelText}</span>}
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        className={classNames('input', { 'error': error })}
      />
      {errorText && <span className='label-error'>{errorText}</span>}
    </label>
  );
};
