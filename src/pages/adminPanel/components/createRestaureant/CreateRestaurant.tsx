import React, { FC, useState } from 'react';
import styles from './styles.module.css';
import { Button } from 'components/button';
import { useAdminStore } from 'pages/adminPanel/store';
import classNames from 'classnames';

interface IProps {
  onClose: () => void;
}

export const CreateRestaurant: FC<IProps> = ({ onClose }) => {
  const { texts, setRestourantName } = useAdminStore();
  const [name, setName] = useState('');

  const onSubmit = () => {
    setRestourantName(name);
    onClose();
  };

  return (
    <div className={styles.content}>
      <h3 className={styles.title}>{texts['admin.restaurant.name']}</h3>
      <input
        value={name}
        onChange={({ target }) => setName(target.value)}
        className={classNames('input', styles.input)}
        placeholder={texts['admin.restaurant.name']}
      />
      <div className={styles.buttons}>
        <Button onClick={onClose} text={texts['admin.cancel.button']} />
        <Button
          onClick={onSubmit}
          text={texts['admin.create.button']}
          green={true}
        />
      </div>
    </div>
  );
};
