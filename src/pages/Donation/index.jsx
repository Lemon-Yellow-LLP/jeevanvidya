import HeroBanner from '@/components/HeroBanner';
import SectionTitleDescription from '@/components/SectionTitleDescription';
import { data } from '@/data/Donation';
import React, { useCallback, useEffect, useState } from 'react';
import Courses from '../Courses';
import Stepper from '@/components/Stepper';
import { cn } from '@/lib/utils';
import TextInputWithIcon from '@/components/InputFields/TextInputWithIcon';
import PhoneNumberInput from '@/components/InputFields/TextInput/PhoneNumberInput';
import OtpInputField from '@/components/InputFields/OtpInputField';
import numWords from 'num-words';
import TextInput from '@/components/InputFields/TextInput';
import RadioButton from '@/components/InputFields/RadioButton';
import Button from '@/components/Button';
import Loader from '@/components/Loader';
import { useFormik } from 'formik';
import { donationValidation } from '@/validationSchemas';
import { useNavigate } from 'react-router-dom';
import Dropdown from '@/components/InputFields/Dropdown';
import Checkbox from '@/components/InputFields/Checkbox';

export default function Donation() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const goToNextStep = useCallback(() => {
    setActiveStepIndex((prev) => prev + 1);
    setProgress((prev) => prev + 0.25);
  });

  return (
    <div>
      <HeroBanner
        imageClassName='h-auto lg:h-[450px]'
        bannerTitle={data.banner.title}
        bannerDesc={data.banner.description}
        bannerImg={data.banner.image}
      />

      <div className='relative py-[40px] px-[16px] lg:p-[80px] bg-background-3'>
        <SectionTitleDescription
          className='p-0 lg:p-0'
          title={data.section.title}
          description={data.section.description}
          image={data.section.sectionImage}
        />
        {/* <Loader show={true} /> */}
        <div className='mx-auto flex p-4 lg:p-8 mt-10 lg:mt-20  flex-col items-end rounded-3xl bg-white'>
          <div className='container flex flex-col gap-6 lg:gap-14'>
            <Stepper steps={data.steps} activeStep={activeStepIndex} />
            {activeStepIndex == 0 && <DonationStep data={data} />}
            {activeStepIndex == 1 && <PersonalDetailsStep data={data} />}
            {activeStepIndex == 2 && <SuccessStep data={data} />}
            <div className={`ml-auto ${activeStepIndex == data.steps.length - 1 ? 'hidden' : ''}`}>
              <button
                className='rounded-lg px-6 py-[9px] md:py-4 text-sm font-normal md:text-base md:font-semibold text-white bg-[#0074FC] cursor-pointer'
                onClick={goToNextStep}
              >
                Save & Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DonationStep({ data }) {
  const [amount, setAmount] = useState('');
  const [amountInWords, setAmountInWords] = useState('-');
  const { values, errors, handleBlur, handleChange, handleSubmit, touched, setValues } = useFormik({
    initialValues: {
      amount: '',
      phone: '',
      otp: '',
    },
    validationSchema: donationValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    setAmountInWords(numWords(amount));
  }, [amount]);

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className='mt-6 mx-auto max-w-xl space-y-6'>
      <div className='grid grid-cols-3 gap-4 lg:gap-6'>
        {data.amounts.map((_amount, i) => (
          <div
            key={i}
            className={cn(
              'py-2 px-4 md:px-6 lg:w-40 md:py-[14px] border-[#0084cb7a] border-[1.5px] rounded-[64px] transition-all duration-300 text-center my-auto cursor-pointer bg-accent-white ',
              { 'bg-[#0084cb28] text-foreground-1': amount === _amount },
            )}
            onClick={() => setAmount(_amount)}
          >
            <span className='whitespace-nowrap not-italic font-medium text-foreground-2 text-sm lg:text-base leading-5'>
              {new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
                minimumFractionDigits: 0,
              }).format(_amount)}
            </span>
          </div>
        ))}
      </div>

      <TextInputWithIcon
        required={true}
        value={amount}
        onChange={handleAmount}
        label='Donation amount'
        placeholder='Enter amount'
      >
        <span className='mr-4'>₹</span>
      </TextInputWithIcon>
      {/* Amount Card */}
      <div className='p-6 flex flex-col gap-2 items-center bg-primary-1 border border-primary-2 rounded-3xl'>
        <h4 className='text-base not-italic font-normal leading-7 text-foreground-2'>
          Your Contribution Amount:
        </h4>
        <p className='text-lg lg:text-2xl leading-7 sm:leading-normal not-italic font-semibold text-primary-2'>
          {amount ? `Rupees ${amountInWords} only` : '-'}
        </p>
        <p>
          Your Contribution of{' '}
          <span className='text-2xl not-italic font-semibold text-foreground-2'>
            ₹{amount ? amount : '_'}
          </span>{' '}
          is greatly appreciated.{' '}
        </p>
      </div>

      <PhoneNumberInput required={true} label='Mobile' placeholder='Enter here'>
        <button className='min-w-max'>
          <span className='text-right lg:text-base lg:font-semibold lg:leading-6 text-sm not-italic font-semibold leading-5 uppercase text-primary-2'>
            Send OTP
          </span>
        </button>
      </PhoneNumberInput>

      <OtpInputField required={true} label='Enter OTP' error={errors.otp} />

      <p className='text-center text-xs not-italic font-normal lg:text-sm lg:leading-5 text-foreground-2'>
        Donations made to Jeevanvidya Mission are 50% tax exempt in India, under section 80-G, of
        Income Tax Act, 1961. Jeevanvidya Mission is also registered under India’s Foreign
        Contribution Regulation Act, 1976.
      </p>
    </form>
  );
}

function PersonalDetailsStep() {
  const [amount, setAmount] = useState(null);
  const [amountInWords, setAmountInWords] = useState('-');

  const { values, errors, handleBlur, handleChange, handleSubmit, touched, setValues } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      JeevanvidyaFollower: '',
      indianCitizen: '',
      state: '',
      district: '',
      taluka: '',
      address: '',
      pinCode: '',
      pan: '',
      comment: '',
      confirmInfo: '',
      agreeToPromotional: '',
    },
    validationSchema: donationValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    setAmountInWords(numWords(amount));
  }, [amount]);

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  return (
    <div className='mt-6 space-y-4'>
      <div className='flex flex-col md:flex-row gap-0 md:gap-8'>
        <TextInput required={true} label='First Name' placeholder='Eg. Rakesh' />
        <TextInput required={true} label='Last Name' placeholder='Eg. Jhadav' />
      </div>
      <div className='flex  flex-col md:flex-row gap-0 md:gap-8'>
        <TextInput required={true} label='Email' placeholder='Eg. rakesh@mail.com' />
        <TextInput required={true} label='Last Name' placeholder='Eg. Jhadav' />
      </div>
      <div className='flex  flex-col md:flex-row gap-0 md:gap-8'>
        <Dropdown
          className='flex-1'
          label='States'
          required={true}
          options={data.states}
          placeholder={'Enter here'}
        />
        <Dropdown
          className='flex-1'
          label='States'
          required={true}
          options={data.districts}
          placeholder={'Enter here'}
        />
      </div>
      <div className='flex  flex-col md:flex-row gap-0 md:gap-8'>
        <Dropdown
          className='flex-1'
          label='Taluka'
          required={true}
          options={data.talukas}
          placeholder={'Enter here'}
        />
        <TextInput className='flex-1' required={true} label='Last Name' placeholder='Eg. Jhadav' />
      </div>
      <div className='flex  flex-col md:flex-row gap-0 md:gap-8'>
        <Dropdown
          className='flex-1'
          label='Taluka'
          required={true}
          options={data.talukas}
          placeholder={'Enter here'}
        />
        <TextInput className='flex-1' required={true} label='Address' placeholder='Enter here' />
      </div>
      <div className='flex  flex-col md:flex-row gap-0 md:gap-8'>
        <TextInput
          type='number'
          className='flex-1'
          required={true}
          label='Pin / Zip Code'
          placeholder='Enter here'
        />

        <TextInputWithIcon
          childPosition='right'
          type='number'
          className='flex-1'
          required={true}
          label='PAN Number'
          placeholder='Enter here'
        >
          <div className='relative flex flex-col items-center group'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z'
                fill='#122135'
                fillOpacity='0.8'
              />
            </svg>
            <div
              id='tooltipContent'
              className='absolute right-[-44px] sm:right-0 bottom-0 flex-col items-center hidden mb-6 group-hover:flex bg-foreground-1 rounded-lg p-4  justify-center w-[314px] gap-2 transition ease-linear '
            >
              <p className='text-xs not-italic font-normal text-white'>
                Donations to Jeevanvidya Mission are 50% tax exempt in India (under section 80-G, of
                Income Tax Act,1961).However, to avail this benefit, your address as well as PAN No.
                shared with us has to be complete and accurate.
              </p>
            </div>
          </div>
        </TextInputWithIcon>
      </div>
      <div className='flex  flex-col md:flex-row gap-0 md:gap-8'>
        <TextInput className='flex-1' required={true} label='Comment' placeholder='Write here' />
      </div>
      <div className='flex  flex-col items-start gap-4 lg:gap-8 '>
        <Checkbox label={'I confirm my information related to Pan No. and Address is correct.'} />
        <Checkbox
          label={
            'I Agree to receive the invitation to events & courses, updates on course & events, the newsletter by email,SMS & voice calls.'
          }
        />
      </div>
    </div>
  );
}

function SuccessStep({ data }) {
  return (
    <div className='mt-6 mx-auto max-w-3xl'>
      <div className='flex justify-center items-center mb-6 md:mb-8'>
        <svg
          width='80'
          height='80'
          viewBox='0 0 80 80'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle opacity='0.3' cx='40' cy='39.9998' r='40' fill='#00B43D' />
          <circle cx='40.4259' cy='39.9997' r='33.1915' fill='#00B43D' />
          <path
            d='M36.3126 46.5193L55.2202 27.6158L58.1284 30.524L36.3147 52.3378L23.2256 39.2487L26.1338 36.3405L36.3147 46.5213L36.3126 46.5193Z'
            fill='white'
          />
        </svg>
      </div>
      <h1 className='text-center text-lg lg:text-3xl not-italic font-semibold leading-7'>
        Thank you for your contribution!
      </h1>
      <h2 className='text-center text-base lg:text-xl not-italic font-semibold text-foreground-2 py-4'>
        Transaction successful. Your Transaction ID is {data?.transactionID ?? 83473263255}.
      </h2>
      <h3 className='lg:text-lg  text-center text-sm not-italic font-normal leading-5 text-foreground-2 '>
        Thank you for your generous support. Your contributions are tax deductible as allowed by
        law. We will mail your e-receipt shortly.
      </h3>
      <h4 className='text-center text-xs lg:text-lg not-italic font-normal text-foreground-2 py-8 lg:py-12'>
        If you have any questions, please contact{' '}
        <a
          className='text-xs lg:text-lg not-italic font-normal text-primary-2'
          href={`mailto:${data.email}`}
        >
          {data.email}
        </a>{' '}
        and include in your email the Transaction Id mentioned above
      </h4>
      <div className='flex justify-center items-center'>
        <Button to='/' variant='filled' className='max-w-max'>
          Back to Home
        </Button>
      </div>
    </div>
  );
}
