import React from 'react';
import errorImg from '@/assets/pagenotfoundImg.png';
import LearnMoreImage from '@/assets/learnmore.svg';
import Button from '@/components/Button';

const ErrorPage = () => {
  return (
    <section className='pt-[140px] md:pt-[144px] flex justify-center items-center'>
      <div className='max-w-[329px] lg:max-w-[527px] flex flex-col items-center text-center gap-[41px]'>
        <div className='flex flex-col items-center gap-2 lg:gap-4'>
          <img src={errorImg} alt='Error' className='w-28 h-auto md:w-[256px] lg:h-full' />
          <h1 className='text-lg lg:text-[32px] font-semibold'>Oops! Page Not Found</h1>
          <p className='text-sm lg:text-lg'>
            This page doesn’t exist or was removed. We suggest you go back to homepage
          </p>
        </div>
        <Button variant='filled' to='/' className='group w-[147px] md:w-[163px] md:hover:w-[183px]'>
          Back to Home
          <img
            src={LearnMoreImage}

            alt='learn More'
            className='hidden text-center lg:block md:opacity-0 md:group-hover:opacity-100'
          />
        </Button>
      </div>
    </section>
  );
};

export default ErrorPage;
