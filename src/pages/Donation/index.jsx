import HeroBanner from '@/components/HeroBanner';
import SectionTitleDescription from '@/components/SectionTitleDescription';
import { data } from '@/data/Donation';
import React, { useCallback, useEffect, useState } from 'react';
import Courses from '../Courses';
import DesktopStepper from '@/components/DesktopStepper';
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

export default function Donation() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [progress, setProgress] = useState(0.25);

  const goToNextStep = useCallback(() => {
    setActiveStepIndex((prev) => prev + 1);
    setProgress((prev) => prev + 0.25);
  });

  useEffect(() => {
    function handleWindowResize() {
      setInnerWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

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
            {innerWidth < 768 ? (
              <Stepper steps={data.steps} activeStep={activeStepIndex} progress={progress} />
            ) : (
              <DesktopStepper steps={data.steps} activeStep={activeStepIndex} />
            )}

            {activeStepIndex == 0 && <DonationStep data={data} />}
            {activeStepIndex == 1 && <PersonalDetailsStep data={data} />}
            {activeStepIndex == 2 && <SuccessStep data={data} />}
            <div className={`ml-auto ${activeStepIndex == data.steps.length - 1 ? 'hidden' : ''}`}>
              <button
                className='rounded-lg px-6 py-[9px] md:py-4 text-sm font-normal md:text-base md:font-semibold text-white bg-[#F09444] cursor-pointer'
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
        value={amount}
        onChange={handleAmount}
        label='Donation amount'
        placeholder='Enter amount'
        icon={<span className='mr-4'>₹</span>}
      />
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

      <PhoneNumberInput label='Mobile' placeholder='Enter here'>
        <button className='min-w-max'>
          <span className='text-right lg:text-base lg:font-semibold lg:leading-6 text-sm not-italic font-semibold leading-5 uppercase text-primary-2'>
            Send OTP
          </span>
        </button>
      </PhoneNumberInput>

      <OtpInputField label='Enter OTP' required error={errors.otp} />

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
        <Dropdown label='States' required={true} options={data.states} placeholder={'Enter here'} />
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
