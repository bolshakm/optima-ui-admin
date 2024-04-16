import * as yup from 'yup';


export const forgotSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email format')
    // .matches(regexes.email, 'Invalid email format')
    .required('Email is required')
});
