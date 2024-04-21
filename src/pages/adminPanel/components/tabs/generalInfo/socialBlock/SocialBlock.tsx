import React, { FC } from 'react';
import styles from './styles.module.css';
import { ICafe } from 'common/types';
import classNames from 'classnames';
import { useFormik } from 'formik';
import { InfoBlock } from '../infoBlock';
import { useAdminStore } from 'pages/adminPanel/store';
import { createSchema } from 'pages/adminPanel/shcemas';
import { cafeService } from 'services/cafeService';

interface IProps {
  restaurant: ICafe;
}

export const SocialBlock: FC<IProps> = ({ restaurant }) => {
  const { texts, updateRestaurant } = useAdminStore();

  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      facebook: restaurant.facebook || '',
      instagram: restaurant.instagram || '',
      tripAdvisor: restaurant.tripAdvisor || '',
    },
    validationSchema: createSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    enableReinitialize: true,
    onSubmit: (body) => {
      cafeService.update({ body: {...body, id: restaurant.id } }).then(updateRestaurant);
    },
  });

  return (
    <InfoBlock title={texts['admin.social.media']} handleSubmit={handleSubmit}>
      <div className={styles.block}>
        <label className={styles.label}>
          <span className={styles.text}>Instagram</span>
          <input
            name='instagram'
            value={values.instagram}
            onChange={handleChange}
            className={classNames('input', styles.input, {
              'error': Boolean(touched.instagram && errors.instagram),
            })}
          />
        </label>
        <label className={styles.label}>
          <span className={styles.text}>Facebook</span>
          <input
            name='facebook'
            value={values.facebook}
            onChange={handleChange}
            className={classNames('input', styles.input, {
              'error': Boolean(touched.facebook && errors.facebook),
            })}
          />
        </label>
        <label className={styles.label}>
          <span className={styles.text}>TripAdvisor</span>
          <input
            name='tripAdvisor'
            value={values.tripAdvisor}
            onChange={handleChange}
            className={classNames('input', styles.input, {
              'error': Boolean(touched.tripAdvisor && errors.tripAdvisor),
            })}
          />
        </label>
      </div>
    </InfoBlock>
  );
};
