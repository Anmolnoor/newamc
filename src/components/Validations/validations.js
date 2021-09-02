import * as yup from 'yup';

export let LoginValidator = yup.object().shape({
  email: yup.string().email().required('Email Address is Required'),
  password: yup.string().required('Password is Required').min(8),
});

export let RegisterValidator = yup.object().shape({
  name: yup.string().required('Full name is Required'),
  email: yup.string().email().required('Email Address is Required'),
  password: yup.string().required('Password is Required').min(8),
  phone_number: yup
    .number()
    .required('Phone Number is Required')
    .min(10)
    .positive()
    .integer(),
  address: yup.string().required('Address is Required'),
  repassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  gender: yup.string().required('Gender is Required'),
  dob: yup.string().required('Date of Birth is Required'),
  role_id: yup.number().required(),
  avatar: yup.object().required(),
  user_status: yup.number().required(),
});
