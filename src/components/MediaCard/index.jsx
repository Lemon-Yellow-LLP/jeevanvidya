import React from 'react';
import LearnMoreImage from '@/assets/learnmore.svg';

const MediaCard = ({ btnTitle, cardDesc, cardTitle, cardImage }) => {
  return (
    <div className='w-full flex flex-col items-start transform transition duration-500 hover:bg-white hover:shadow-lg rounded-xl'>
      <img src={cardImage} alt='' className='rounded-xl w-full' />
      <div className='p-4 flex flex-col items-start gap-2'>
        {cardTitle && (
          <h3 className='text-lg md:text-[22px] font-semibold text-[#122135]'>{cardTitle}</h3>
        )}
        {cardDesc && <p className='text-sm md:text-base'>{cardDesc}</p>}
        {btnTitle && (
          <a
            href=''
            className='group w-[147px] flex items-center rounded-lg px-6 py-2 md:py-4 whitespace-nowrap bg-white text-[#F09444] border-2 border-[#F09444] cursor-pointer outline-none overflow-hidden transition-all duration-500 md:hover:w-[160px]'
          >
            <span className='text-sm font-normal md:text-base md:font-semibold'>{btnTitle}</span>
            <img
              src={LearnMoreImage}
              className='ml-2 md:opacity-0 md:group-hover:opacity-100'
              alt=''
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default MediaCard;
