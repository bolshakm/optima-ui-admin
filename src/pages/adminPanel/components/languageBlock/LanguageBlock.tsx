import React, { FC, useMemo, useState } from 'react';
import styles from './styles.module.css';
import { useAdminStore } from 'pages/adminPanel/store';
import { InfoBlock } from '../infoBlock';
import { ICafeDto } from 'common/types';
import { ReactComponent as Trash } from 'assets/trash.svg';
import { ReactComponent as Pen } from 'assets/pen.svg';

import { cafeService } from 'services/cafeService';
import classNames from 'classnames';
import { FormikErrors, FormikTouched } from 'formik';

interface IProps {
  restaurantId?: number;
  values: ICafeDto;
  onChange: (e: React.ChangeEvent<any>) => void;
  touched: FormikTouched<ICafeDto>;
  errors: FormikErrors<ICafeDto>;
}

export const LanguageBlock: FC<IProps> = ({
  restaurantId,
  values,
  touched,
  errors,
  onChange,
}) => {
  const { texts, setRestaurant, removeRestaurantFromList } = useAdminStore();
  const [editMode, setEditMode] = useState(false);

  const handleRemove = () => {
    if (restaurantId) {
      cafeService
        .remove({ id: restaurantId })
        .then(() => removeRestaurantFromList(restaurantId));
    } else {
      setRestaurant(null);
    }
  };

  const handleToggleMode = () => {
    setEditMode(!editMode);
  };

  const isNameError = useMemo(
    () => Boolean(touched.name && errors.name),
    [touched.name, errors.name]
  );

  return (
    <div className={styles.block}>
      <div className={styles.header}>
        <div className={styles.left}>
          {editMode ? (
            <input
              name='name'
              value={values.name}
              onChange={onChange}
              className={classNames(styles.input)}
              autoFocus
            />
          ) : (
            <span>{values.name}</span>
          )}
          <button
            className={classNames(styles.pen, { [styles.error]: isNameError })}
            onClick={handleToggleMode}
          >
            <Pen />
          </button>
        </div>
        <button className={styles.button} onClick={handleRemove}>
          <Trash />
        </button>
      </div>
      <InfoBlock title='' className={styles.language}>
        <h6 className={styles.title}>{texts['admin.default.language']}</h6>
        <div className={styles.wrapper}>
          <select
            value={values.defLang}
            onChange={onChange}
            className={classNames('input', styles.select, {
              'error': Boolean(touched.defLang && errors.defLang),
            })}
          >
            <option value='en'>EN</option>
            <option value='ua'>UA</option>
            <option value='es'>ES</option>
          </select>
        </div>
      </InfoBlock>
    </div>
  );
};
