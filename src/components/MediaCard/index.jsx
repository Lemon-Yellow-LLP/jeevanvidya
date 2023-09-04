import React from 'react';
import LearnMoreImage from '@/assets/learnmore.svg';
import Button from '../Button';

const MediaCard = ({ btnTitle, cardDesc, cardTitle, cardImage, className }) => {
  return (
    <div
      className={`w-full flex flex-col items-start transform transition duration-500 rounded-xl ${className}`}
    >
      <img src={cardImage} alt='' className='rounded-xl w-full h-full' />
      <div className='p-4 flex flex-col items-start gap-2'>
        {cardTitle && (
          <h3 className='text-base lg:text-lg md:text-[22px] font-semibold text-[#122135]'>
            {cardTitle}
          </h3>
        )}
        {cardDesc && <p className='text-xs leading-normal lg:text-base md:text-base'>{cardDesc}</p>}
        {btnTitle && (
          <Button variant='outline' className='group w-[137px] md:hover:w-[158px]'>
            {btnTitle}
            <img
              src={LearnMoreImage}
              alt={btnTitle}
              className='md:opacity-0 md:group-hover:opacity-100'
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default MediaCard;
