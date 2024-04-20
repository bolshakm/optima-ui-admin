import React, { FC } from 'react';
import styles from './styles.module.css';
import { ICafe } from 'common/types';
import { useFormik } from 'formik';
import { createTimeOptions } from 'common/utils';
import { useAdminStore } from 'pages/adminPanel/store';
import { InfoBlock } from '../infoBlock';
import { createSchema } from 'pages/adminPanel/shcemas';
import { cafeService } from 'services/cafeService';

interface IProps {
  restaurant: ICafe;
}

export const TimeBlock: FC<IProps> = ({ restaurant }) => {
  const options = createTimeOptions();
  const { texts } = useAdminStore();

  const { values, touched, errors, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        workingHours: restaurant.workingHours,
      },
      validationSchema: createSchema,
      validateOnBlur: true,
      validateOnChange: true,
      validateOnMount: true,
      enableReinitialize: true,
      onSubmit: (body) => {
        cafeService.update({ id: restaurant.id, body }).then(() => {});
      },
    });

  console.log(options, values, touched, errors, setFieldValue, handleChange);

  return (
    <InfoBlock title={texts['admin.working.hours']} handleSubmit={handleSubmit}>
      <div className={styles.block}>
        <div className={styles.row}>
          <div className={styles.day}></div>
          <div className={styles.periods}></div>
          <button className={styles.button}></button>
        </div>
      </div>
    </InfoBlock>
  );
};
