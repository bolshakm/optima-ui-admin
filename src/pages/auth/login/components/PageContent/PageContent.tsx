import React from 'react';
import styles from './styles.module.css';
import { AuthContent, Input, Button } from 'components';
import { useLoginStore } from '../../store';
import { useFormik } from 'formik';
import { loginSchema } from '../../shcemas';
import { authService } from 'services';
import { useNavigate } from 'react-router-dom';
import { routerKeys } from 'common/constants';

export const PageContent = () => {
  const navigate = useNavigate();
  const { texts } = useLoginStore();

  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    enableReinitialize: true,
    onSubmit: (body) => {
      authService
        .login({ body })
        .then(() => {
          navigate(routerKeys.admin);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  const handleNavigateToRegisterPage = () => {
    navigate(`/${routerKeys.auth}/${routerKeys.registration}`);
  };

  return (
    <div className={styles.content}>
      <div className='container'>
        <AuthContent title={texts['login.log.in.to.your.account']}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputs}>
              <Input
                name='email'
                value={values.email}
                onChange={handleChange}
                labelText={texts['login.email']}
                error={Boolean(touched.email && errors.email)}
              />
              <Input
                name='password'
                value={values.password}
                onChange={handleChange}
                labelText={texts['login.password']}
                error={Boolean(touched.password && errors.password)}
              />
            </div>
            <div className={styles.buttons}>
              <Button
                text={texts['login.log.in.button']}
                onClick={() => {}}
                auth={true}
                green={true}
                type='submit'
              />
              <Button
                text={texts['login.forgot.a.password.button']}
                onClick={handleNavigateToRegisterPage}
                auth={true}
              />
            </div>
          </form>
        </AuthContent>
      </div>
    </div>
  );
};
