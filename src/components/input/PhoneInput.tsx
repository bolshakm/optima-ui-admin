import React, { FC } from 'react';
import classNames from 'classnames';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './styles.css';
import { InputLabel } from './InputLabel';

interface IProps {
  value: string;
  onChange: (value: string) => void;
  labelText?: string;
  error?: boolean;
  errorText?: string;
}

export const InputPhone: FC<IProps> = ({
  value,
  onChange,
  labelText = '',
  error = false,
  errorText = '',
}) => {
  return (
    <InputLabel errorText={errorText} labelText={labelText}>
      <PhoneInput
        country='es'
        regions={['europe']}
        value={value}
        onChange={onChange}
        containerClass={classNames('input', 'phone-input-wrapper', {
          'error': error,
        })}
        inputClass='phone-input'
        buttonClass='phone-button'
        placeholder=''
      />
      {errorText && <span className='label-error'>{errorText}</span>}
    </InputLabel>
  );
};
