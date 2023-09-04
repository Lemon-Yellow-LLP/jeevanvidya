import * as Yup from 'yup';

export const testimonialValidations = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  about: Yup.string().required('About is required'),
  location: Yup.string().required('Location is required'),
  message: Yup.string().required('Testimonial / Message is required').max(200),
  file: Yup.string().required('File is required'),
  verificationCode: Yup.string().required('Verification Code is required'),
});

export const contactUsValidations = Yup.object({
  name: Yup.string().required('Please enter correct name. Name should not contain numbers.'),
  email: Yup.string().required('Please enter valid email address'),
  message: Yup.string().required('Message is required').max(200),
});
