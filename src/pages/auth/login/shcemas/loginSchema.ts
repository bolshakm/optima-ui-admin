import * as yup from 'yup';

// import { regexes } from 'common/constants';

export const loginSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email format')
    // .matches(regexes.email, 'Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    // .matches(regexes.oneNumber, 'At least one number (0-9)')
    // .matches(regexes.oneLetter, 'At least one letter')
    // .test('len', 'At least 8 characters', (val) =>
    //   val ? val.length >= 8 : false
    // )
    .required('Password is required'),
});
