import React from 'react';
import styles from './styles.module.css';
import { AuthContent, Input, Button } from 'components';
import { useRegistrationStore } from '../../store';
import { useFormik } from 'formik';
import { registrationSchema } from '../../shcemas';
import { authService } from 'services';
import { useNavigate } from 'react-router-dom';
import { routerKeys, storageKeys } from 'common/constants';
import { InputPhone } from 'components/input/PhoneInput';

export const PageContent = () => {
  const navigate = useNavigate();
  const { texts } = useRegistrationStore();

  const { values, touched, errors, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmationPassword: '',
      },
      validationSchema: registrationSchema,
      validateOnBlur: true,
      validateOnChange: true,
      validateOnMount: true,
      enableReinitialize: true,
      onSubmit: (body) => {
        authService
          .register({ body })
          .then((res) => {
            localStorage.setItem(storageKeys.token, res.token);
            navigate(routerKeys.admin);
          })
          .catch((err) => {
            console.log(err);
          });
      },
    });

  const handleUpdatePhoneNumber = (value: string) => {
    setFieldValue('phoneNumber', value, true);
  };

  return (
    <div className={styles.content}>
      <div className='container'>
        <AuthContent title={texts['registration.create.an.account']}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputs}>
              <Input
                name='firstName'
                value={values.firstName}
                onChange={handleChange}
                labelText={texts['registration.first.name']}
                error={Boolean(touched.firstName && errors.firstName)}
              />
              <Input
                name='lastName'
                value={values.lastName}
                onChange={handleChange}
                labelText={texts['registration.last.name']}
                error={Boolean(touched.lastName && errors.lastName)}
              />
              <InputPhone
                value={values.phoneNumber}
                onChange={handleUpdatePhoneNumber}
                labelText={texts['registration.phone.number']}
                error={Boolean(touched.phoneNumber && errors.phoneNumber)}
              />
              <Input
                name='email'
                value={values.email}
                onChange={handleChange}
                labelText={texts['registration.email']}
                error={Boolean(touched.email && errors.email)}
              />
              <Input
                name='password'
                value={values.password}
                onChange={handleChange}
                labelText={texts['registration.password']}
                error={Boolean(touched.password && errors.password)}
              />
              <Input
                name='confirmationPassword'
                value={values.confirmationPassword}
                onChange={handleChange}
                labelText={texts['registration.confirm.password']}
                error={Boolean(
                  touched.confirmationPassword && errors.confirmationPassword
                )}
              />
            </div>
            <div className={styles.buttons}>
              <Button
                text={texts['registration.create.an.account.button']}
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
