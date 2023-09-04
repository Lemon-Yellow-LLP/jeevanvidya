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

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const donationValidation = Yup.object({
  amount: Yup.number().required('Amount is required').min(10, 'Minimum amount should be 10'),
  phone: Yup.string()
    .required('Phone number is required')
    .length(10, 'Phone number should be of length 10')
    .matches(phoneRegExp, 'Phone number is not valid'),
  otp: Yup.string().required().length(6, 'Invalid OTP'),
});

export const personalDetailsValidation = Yup.object({
  firstName: Yup.string()
    .required('First name is required')
    .max(256, 'First name cannot be greater than 256 letters'),
  lastName: Yup.string()
    .required('Last name is required')
    .max(256, 'Last name cannot be greater than 256 letters'),
  email: Yup.string().email().required(),
  gender: Yup.string().optional(),
  JeevanvidyaFollower: Yup.string().optional(),
  indianCitizen: Yup.string().optional(),
  state: Yup.string().required(),
  district: Yup.string().required(),
  taluka: Yup.string().required(),
  address: Yup.string().optional(),
  pinCode: Yup.string().required(),
  pan: Yup.string().required(),
  comment: Yup.string().optional(),
  confirmInfo: Yup.string().required(),
  agreeToPromotional: Yup.string().optional(),
});
