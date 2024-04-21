import React from 'react';
import styles from './styles.module.css';
import { AuthContent, Input, Button } from 'components';
import { useLoginStore } from '../../store';
import { useFormik } from 'formik';
import { loginSchema } from '../../shcemas';
import { authService } from 'services';
import { useNavigate } from 'react-router-dom';
import { routerKeys, storageKeys } from 'common/constants';
import toast, { Toaster } from 'react-hot-toast';
import { toastSettings } from 'common/data/toastSettings';
import { useLanguageStore } from 'store';

export const PageContent = () => {
  const navigate = useNavigate();
  const { texts } = useLoginStore();
  const { errorText } = useLanguageStore();


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
        .then((res) => {
          localStorage.setItem(storageKeys.token, res.token);
          navigate(routerKeys.admin);
        })
        .catch((err) => {
          console.log(err);
          toast.error(errorText);
        });
    },
  });

  const handleNavigateToForgetPage = () => {
    navigate(`/${routerKeys.auth}/${routerKeys.forgotPassword}`);
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
                type='password'
                value={values.password}
                onChange={handleChange}
                labelText={texts['login.password']}
                error={Boolean(touched.password && errors.password)}
              />
            </div>
            <div className={styles.buttons}>
              <Button
                text={texts['login.log.in.button']}
                auth={true}
                green={true}
                type='submit'
              />
              <Button
                text={texts['login.forgot.a.password.button']}
                onClick={handleNavigateToForgetPage}
                auth={true}
              />
            </div>
          </form>
        </AuthContent>
      </div>
      <Toaster toastOptions={{ ...toastSettings }} />
    </div>
  );
};
