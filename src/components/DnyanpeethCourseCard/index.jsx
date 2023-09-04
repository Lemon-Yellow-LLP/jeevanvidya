import React from 'react';
import Button from '../Button';

const DnyanpeethCourseCard = ({ image, title, desc, duration, ageGroup }) => {
  return (
    <div className='w-full p-4 rounded-xl border-[1px] border-dark-white'>
      <img src={image} alt='' className='rounded-xl h-[152px]' />
      <h2 className='text-primary-black font-semibold mt-4'>{title}</h2>
      <p className='text-primary-black text-sm font-normal mt-3 opacity-80'>{desc}</p>
      <p className='text-primary-black flex gap-10 mt-2'>
        <span className='opacity-80'>Duration:</span>
        <span className='font-semibold'>{duration}</span>
      </p>
      <p className='text-primary-black flex gap-6 mt-2'>
        <span className='opacity-80'>Age Group:</span>
        <span className='font-semibold'>{ageGroup}</span>
      </p>
      <Button register={true} variant='outline' className='flex justify-center mt-4'>
        Register Now
      </Button>
    </div>
  );
};

export default DnyanpeethCourseCard;
