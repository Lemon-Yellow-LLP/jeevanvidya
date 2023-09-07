import HeroBanner from '@/components/HeroBanner';
import Checkbox from '@/components/InputFields/Checkbox';
import TextInput from '@/components/InputFields/TextInput';
import PhoneNumberInput from '@/components/InputFields/TextInput/PhoneNumberInput';
import RadioGroup from '@/components/RadioGroup';
import SectionTitleDescription from '@/components/SectionTitleDescription';
import Stepper from '@/components/Stepper';
import { data } from '@/data/Voluteer';
import { volunteerPersonalDetails } from '@/validationSchemas';
import { useFormik } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';

export default function Voluteer() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [progress, setProgress] = useState(25);
  const goToNextStep = useCallback(() => {
    setActiveStepIndex((prev) => prev + 1);
    setProgress(0);
  });

  const goToPrevStep = useCallback(() => {
    setActiveStepIndex((prev) => prev - 1);
    setProgress((prev) => prev - 0.25);
  });

  return (
    <div className=''>
      <HeroBanner
        bannerDesc={data.banner.description}
        bannerTitle={data.banner.title}
        bannerImg={data.banner.image}
      />

      <div className='relative py-[40px] px-[16px] lg:p-[80px] bg-background-3'>
        <SectionTitleDescription
          className='className=p-0 lg:p-0'
          title={data.section.title}
          description={data.section.description}
          image={data.section.sectionImage}
        />
        <div className='mx-auto flex p-4 lg:p-8 mt-10 lg:mt-20  flex-col items-end rounded-3xl bg-white'>
          <div className='container flex flex-col gap-6 lg:gap-14'>
            <Stepper
              steps={data.steps}
              activeStepIndex={activeStepIndex}
              goToNextStep={goToNextStep}
              progress={progress}
            />
            <div className={`${activeStepIndex == 0 ? 'block' : 'hidden'}`}>
              <PersonalDetailsStep
                data={data}
                goToNextStep={goToNextStep}
                goToPrevStep={goToPrevStep}
                setProgress={setProgress}
              />
            </div>
            <div className={`${activeStepIndex == 1 ? 'block' : 'hidden'}`}></div>
            <div className={`${activeStepIndex == 2 ? 'block' : 'hidden'}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PersonalDetailsStep({ data, goToNextStep, goToPrevStep, setProgress }) {
  const { values, errors, handleBlur, handleChange, handleSubmit, touched, setFieldValue } =
    useFormik({
      initialValues: {
        Name: '',
        email: '',
        gender: '',
        dob: '',
        phone: '',
        whatsapp_number: '',
        confirmphone: false,
      },
      validationSchema: volunteerPersonalDetails,
      validateOnMount: true,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  useEffect(() => {
    setProgress(() => {
      return (
        ((Object.keys(values).length - Object.keys(errors).length) / Object.keys(values).length) *
        100
      );
    });
  }, [errors]);
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-6 lg:gap-10'>
      <div className='mt-6'>
        <div className='flex flex-col lg:flex-row gap-2 lg:gap-8'>
          <TextInput
            name='Name'
            value={values.Name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.Name}
            touched={touched.Name}
            required={true}
            label='Name'
            placeholder='E.g. Rakesh Jadhav'
          />
          <TextInput
            name='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
            required={true}
            label='Email Address'
            placeholder='E.g. rakesh@mail.com'
          />
        </div>
        <div className='flex flex-col lg:flex-row gap-2 lg:gap-8'>
          <RadioGroup
            name='gender'
            value={values.gender}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.gender}
            touched={touched.gender}
            options={data.gender}
            label={'Select Gender: '}
          />
          <TextInput
            name='dob'
            value={values.dob}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.dob}
            touched={touched.dob}
            required={true}
            label='Date of Birth'
            placeholder='DD/MM/YYYY'
          />
        </div>
        <div className='flex flex-col lg:flex-row gap-2 lg:gap-8'>
          <PhoneNumberInput
            name={'phone'}
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            required={true}
            label='Mobile Number'
            placeholder='Enter here'
            error={errors.phone}
            touched={touched.phone}
          />
          <PhoneNumberInput
            name={'whatsapp_number'}
            value={values.whatsapp_number}
            onChange={handleChange}
            onBlur={handleBlur}
            required={true}
            label='Mobile Number'
            placeholder='Enter here'
            error={errors.whatsapp_number}
            touched={touched.whatsapp_number}
          />
        </div>
        <div>
          <Checkbox
            name='confirmphone'
            onChange={handleChange}
            required
            value={values.confirmphone}
            label={'My Whatsapp number is same as my mobile number.'}
          />
        </div>
      </div>
      <div className={`w-full flex justify-end`}>
        <button
          disabled={errors && Object.keys(errors).length}
          className='rounded-lg px-6 py-[9px] md:py-4 text-sm font-normal md:text-base md:font-semibold text-white bg-[#0074FC] cursor-pointer disabled:opacity-50 disabled:pointer-events-none'
          type='submit'
        >
          Save & Next
        </button>
      </div>
    </form>
  );
}
