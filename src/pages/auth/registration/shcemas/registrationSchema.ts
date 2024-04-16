import * as yup from 'yup';

// import { regexes } from 'common/constants';

export const registrationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    // .matches(regexes.email, 'Invalid email format')
    .required('Email is required'),
  phoneNumber: yup
    .string()
    .test('len', 'Phone number to short', (val) =>
      val ? val.length >= 11 : false
    )
    .required('Phone number is required'),
  password: yup
    .string()
    // .matches(regexes.oneNumber, 'At least one number (0-9)')
    // .matches(regexes.oneLetter, 'At least one letter')
    // .test('len', 'At least 8 characters', (val) =>
    //   val ? val.length >= 8 : false
    // )
    .required('Password is required'),
  confirmationPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Password is required'),
});
