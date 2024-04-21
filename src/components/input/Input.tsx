import React, { FC, useMemo, useState } from 'react';
import classNames from 'classnames';
import './styles.css';
import { InputLabel } from './InputLabel';
import { ReactComponent as Visible } from 'assets/visibility.svg';
import { ReactComponent as VisibleOff } from 'assets/visibility_off.svg';

type ImputType = 'text' | 'number' | 'password';

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
  const [isVisible, setIsVisible] = useState(false);

  const hundleIsVisible = () => {
    setIsVisible(!isVisible);
  };

  const inputType = useMemo(() => {
    if (type === 'password') {
      if (isVisible) return 'text';

      return 'password';
    }

    return type;
  }, [type, isVisible]);

  return (
    <InputLabel errorText={errorText} labelText={labelText}>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={inputType}
        className={classNames('input', { 'error': error })}
      />
      {type === 'password' && (
        <button onClick={hundleIsVisible} className='password' type='button'>
          {inputType === 'password' ? <VisibleOff /> : <Visible />}
        </button>
      )}
    </InputLabel>
  );
};
