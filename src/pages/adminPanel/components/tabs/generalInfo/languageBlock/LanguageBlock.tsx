import React, { FC, useMemo, useState } from 'react';
import styles from './styles.module.css';
import { useAdminStore } from 'pages/adminPanel/store';
import { InfoBlock } from '../infoBlock';
import { ICafe } from 'common/types';
import { ReactComponent as Trash } from 'assets/trash.svg';
import { ReactComponent as Pen } from 'assets/pen.svg';
import { cafeService } from 'services/cafeService';
import classNames from 'classnames';
import { useFormik } from 'formik';
import { createSchema } from 'pages/adminPanel/shcemas';
import { scrollToTop } from 'common/utils';

interface IProps {
  restaurant: ICafe;
}

export const LanguageBlock: FC<IProps> = ({ restaurant }) => {
  const { texts, updateRestaurant, removeRestaurantFromList } = useAdminStore();
  const [editMode, setEditMode] = useState(false);

  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: restaurant.name || '',
      defLang: restaurant.defLang || '',
    },
    validationSchema: createSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    enableReinitialize: true,
    onSubmit: (body) => {
      cafeService
        .update({ body: { ...body, id: restaurant.id } })
        .then(updateRestaurant);
    },
  });

  const handleRemove = () => {
    cafeService.remove({ id: restaurant.id }).then(() => {
      removeRestaurantFromList(restaurant.id);
      scrollToTop();
    });
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
              onChange={handleChange}
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
      <InfoBlock
        title=''
        className={styles.language}
        handleSubmit={handleSubmit}
      >
        <h6 className={styles.title}>{texts['admin.default.language']}</h6>
        <div className={styles.wrapper}>
          <select
            value={values.defLang}
            name='defLang'
            onChange={handleChange}
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
