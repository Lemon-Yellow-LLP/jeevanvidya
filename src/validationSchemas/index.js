import * as Yup from 'yup';

export const testimonialValidations = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  about: Yup.string().required('About is required'),
  location: Yup.string().required('Location is required'),
  message: Yup.string().required('Testimonial / Message is required').max(200),
  image: Yup.string().required('Image is required'),
  verificationCode: Yup.string().required('Verification Code is required'),
});
