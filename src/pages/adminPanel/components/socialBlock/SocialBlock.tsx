import React, { FC } from 'react';
import styles from './styles.module.css';
import { ICafeDto } from 'common/types';
import classNames from 'classnames';
import { FormikErrors, FormikTouched } from 'formik';

interface IProps {
  values: ICafeDto;
  onChange: (e: React.ChangeEvent<any>) => void;
  touched: FormikTouched<ICafeDto>;
  errors: FormikErrors<ICafeDto>;
}

export const SocialBlock: FC<IProps> = ({
  values,
  touched,
  errors,
  onChange,
}) => {

  return (
    <div className={styles.block}>
      <label className={styles.label}>
        <span className={styles.text}>Instagram</span>
        <input
          name='instagram'
          value={values.instagram}
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
          className={classNames('input', styles.input, {
            'error': Boolean(touched.tripAdvisor && errors.tripAdvisor),
          })}
        />
      </label>
    </div>
  );
};
