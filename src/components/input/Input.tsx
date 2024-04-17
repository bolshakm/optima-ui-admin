import React, { FC } from 'react';
import classNames from 'classnames';
import './styles.css';
import { InputLabel } from './InputLabel';

type ImputType = 'text' | 'number';

interface IProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  labelText?: string;
  error?: boolean;
  type?: ImputType;
  errorText?: string;
}

export const Input: FC<IProps> = ({
  name,
  value,
  onChange,
  labelText = '',
  error = false,
  type = 'text',
  errorText = '',
}) => {
  return (
    <InputLabel errorText={errorText} labelText={labelText}>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        className={classNames('input', { 'error': error })}
      />
    </InputLabel>
  );
};
