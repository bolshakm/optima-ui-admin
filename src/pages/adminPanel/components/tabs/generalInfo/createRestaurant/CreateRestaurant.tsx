import React, { FC, useState } from 'react';
import styles from './styles.module.css';
import { Button } from 'components/button';
import { useAdminStore } from 'pages/adminPanel/store';
import classNames from 'classnames';
import { cafeService } from 'services/cafeService';
import toast, { Toaster } from 'react-hot-toast';
import { toastSettings } from 'common/data/toastSettings';
import { useLanguageStore } from 'store';

interface IProps {
  onClose: () => void;
}

export const CreateRestaurant: FC<IProps> = ({ onClose }) => {
  const { texts, addRestaurantToList } = useAdminStore();
  const { errorText } = useLanguageStore();
  const [name, setName] = useState('');
  const [error, setError] = useState(false);

  const onSubmit = () => {
    if (!name || !name.trim().length) {
      setError(true);
      return;
    }

    cafeService
      .create({ body: { name } })
      .then(addRestaurantToList)
      .catch((err) => {
        console.log(err);
        toast.error(errorText);
      });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);

    if (error) {
      setError(false);
    }
  };

  return (
    <div className={styles.content}>
      <Toaster toastOptions={{ ...toastSettings }} />;
      <h3 className={styles.title}>{texts['admin.restaurant.name']}</h3>
      <input
        value={name}
        onChange={handleChange}
        className={classNames('input', styles.input, { 'error': error })}
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
