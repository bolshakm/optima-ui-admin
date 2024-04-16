import React from 'react';
import styles from './styles.module.css';
import { AuthContent, Input, Button } from 'components';
import { useFormik } from 'formik';
import { forgotSchema } from '../../shcemas';

export const PageContent = () => {
  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: forgotSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    enableReinitialize: true,
    onSubmit: (body) => {
      console.log(body);
    },
  });

  return (
    <div className={styles.content}>
      <div className='container'>
        <AuthContent title={'Forgot your password?'} className={styles.center}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputs}>
              <div className={styles.inputWrapper}>
                <h6 className={styles.inputTitle}>
                  Enter the email where the account registered
                </h6>
                <Input
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  error={Boolean(touched.email && errors.email)}
                />
              </div>
            </div>
            <div className={styles.buttons}>
              <Button
                text={'Send password'}
                auth={true}
                green={true}
                type='submit'
              />
            </div>
          </form>
        </AuthContent>
      </div>
    </div>
  );
};
