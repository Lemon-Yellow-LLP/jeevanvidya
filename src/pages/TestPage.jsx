import CaptchaWithInput from '@/components/InputFields/CaptchaWithInput';
import TextInput from '@/components/InputFields/TextInput';
import UploadImage from '@/components/InputFields/UploadImage';
import React, { useCallback, useState } from 'react';
import TestCaptcha from '@/assets/testCaptcha.png';
import Dropdown from '@/components/InputFields/Dropdown';
import PhoneNumberInput from '@/components/InputFields/TextInput/PhoneNumberInput';
import OtpInputField from '@/components/InputFields/OtpInputField';
import Checkbox from '@/components/InputFields/Checkbox';
import RadioButton from '@/components/InputFields/RadioButton';

export default function TestPage() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    about: '',
    location: '',
    message: '',
    phoneNumber: '',
    phoneNumberVerified: false,
    radio: false,
    checkbox: true,
    verificationCode: '',
    dropdown: '',
  });

  const [errors, setErrors] = useState({
    name: 'Enter Name',
    email: 'Enter Name',
    about: 'Enter Name',
    location: 'Enter Name',
    message: 'Enter Name',
    phoneNumberVerified: 'Enter Name',
    phoneNumber: 'Enter Name',
    dropdown: 'Enter Name',
    image: 'Enter Name',
    verificationCode: 'Enter Name',
  });

  const handleChange = useCallback((e) => {
    let newData = values;
    newData[e.target.name] = e.target.value;
    setValues({ ...newData });
  }, []);

  const handleChangeImage = useCallback((e) => {
    const file = e.target.files[0];
    let newData = values;
    newData.image = file;
    setValues({ ...newData });
    // setSelectedFileName(file.name);
  }, []);

  const handleDropdownChange = useCallback(({ value, name }) => {
    let newData = values;
    newData[name] = value;
    setValues({ ...newData });
  }, []);

  const verifyOTP = useCallback((e) => {
    console.log(e);
  }, []);

  const handleCheckbox = useCallback((e) => {
    let newData = values;
    newData[e.target.name] = e.target.checked;
    setValues({ ...newData });
  }, []);

  const options = [
    {
      label: '1',
      value: 1,
    },
    {
      label: '2',
      value: 2,
    },
    {
      label: '3',
      value: 3,
    },
  ];

  return (
    <div className='flex justify-center w-[100%] mt-[30px]'>
      <div className='flex flex-col w-[1062px] rounded-[24px] gap-[20px] p-[30px]'>
        <div className='flex gap-[30px]'>
          <TextInput
            name='name'
            label='Name'
            error={errors.name}
            placeholder='E.g. Rakesh Jadhav'
            onChange={handleChange}
            required
            value={values.name}
            touched={true}
            disabled={true}
          />
          <TextInput
            name='email'
            label='Email Address'
            error={errors.email}
            placeholder='E.g. Rakesh@mail.com'
            onChange={handleChange}
            required
            value={values.email}
            touched={true}
            disabled={true}
          />
        </div>

        <div className='flex gap-[30px]'>
          <TextInput
            name='about'
            label='About '
            error={errors.about}
            placeholder='E.g. Your Information, Designation etc'
            onChange={handleChange}
            required
            value={values.about}
            touched={true}
            disabled={true}
          />
          <TextInput
            name='location'
            label='Location'
            error={errors.location}
            placeholder='Enter here'
            onChange={handleChange}
            required
            value={values.location}
            touched={true}
            disabled={true}
          />
        </div>

        <TextInput
          name='message'
          label='Write Testimonial / Message'
          error={errors.message}
          placeholder='Write here (200 words max)'
          onChange={handleChange}
          required
          value={values.message}
          max={200}
          touched={true}
          disabled={true}
        />

        <div className='flex gap-[30px]'>
          <UploadImage
            name='image'
            label='Image'
            error={errors.image}
            onChange={handleChangeImage}
            required
            src={values.image}
            imageName=''
          />
          <CaptchaWithInput
            name='verificationCode'
            label='Verification Code: '
            error={errors.verificationCode}
            onChange={handleChange}
            value={values.verificationCode}
            image={TestCaptcha}
            placeholder='Enter code'
            disabled={true}
          />
        </div>

        <Dropdown
          name='dropdown'
          label='Label'
          required
          error={errors.dropdown}
          options={options}
          placeholder='Placeholder'
          onChange={handleDropdownChange}
          defaultSelected={values.dropdown}
          touched={true}
          disabled={true}
        />

        <PhoneNumberInput
          name='phoneNumber'
          label='Phone Number'
          error={errors.phoneNumber}
          placeholder='Placeholder'
          onChange={handleChange}
          required
          value={values.phoneNumber}
          touched={true}
          disabled={true}
        />

        <OtpInputField
          label='Enter OTP'
          required
          verified={values.phoneNumberVerified}
          verifyOTP={verifyOTP}
          error={errors.phoneNumberVerified}
          touched={true}
          disabled={true}
        />

        <RadioButton name='radio' value={values.radio} onChange={handleCheckbox} />

        <Checkbox name='checkbox' value={values.checkbox} onChange={handleCheckbox} />
      </div>
    </div>
  );
}
